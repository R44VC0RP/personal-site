import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const blogDirectory = path.join(root, "content", "blog");
const archivePath = path.join(root, ".x-cache", "x-posts.json");
const errors = [];
const warnings = [];

const fail = (file, message) => errors.push(`${file}: ${message}`);
const warn = (file, message) => warnings.push(`${file}: ${message}`);
const isString = (value) => typeof value === "string" && value.trim().length > 0;
const words = (value) => value.trim().split(/\s+/).filter(Boolean).length;

if (!fs.existsSync(archivePath)) {
  console.error("Missing .x-cache/x-posts.json. Run npm run x:import before validating source-backed posts.");
  process.exit(1);
}

const archive = JSON.parse(fs.readFileSync(archivePath, "utf8"));
const archivedPosts = new Map(archive.posts.map((post) => [post.id, post]));
const files = fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".md")).sort();
const structuredPosts = [];

for (const file of files) {
  const source = fs.readFileSync(path.join(blogDirectory, file), "utf8");
  let parsed;
  try {
    parsed = matter(source);
  } catch (error) {
    fail(file, `frontmatter does not parse (${error.message})`);
    continue;
  }

  const { data, content } = parsed;
  if (!Array.isArray(data.sourcePosts) || data.sourcePosts.length === 0) continue;
  structuredPosts.push({ file, data, content });

  for (const field of ["title", "date", "excerpt", "lede", "eyebrow", "readTime"]) {
    if (!isString(data[field])) fail(file, `missing ${field}`);
  }
  if (isString(data.excerpt) && (data.excerpt.length < 140 || data.excerpt.length > 160)) {
    fail(file, `excerpt is ${data.excerpt.length} characters; expected 140–160`);
  }
  if (!Array.isArray(data.tags) || data.tags.length < 2 || data.tags.some((tag) => !isString(tag))) {
    fail(file, "tags must contain at least two non-empty strings");
  }
  if (Array.isArray(data.tags) && new Set(data.tags.map((tag) => String(tag).toLowerCase())).size !== data.tags.length) {
    fail(file, "tags contain duplicates");
  }
  if (!Array.isArray(data.media)) fail(file, "media must be an array (use [] when empty)");
  if (Array.isArray(data.media) && data.media.length > 3) fail(file, "media contains more than three items");

  const wordCount = words(content.replace(/^#{1,6}\s+.+$/gm, ""));
  if (wordCount < 500 || wordCount > 1200) fail(file, `body is ${wordCount} words; expected 500–1200`);
  const headingCount = (content.match(/^##\s+.+$/gm) || []).length;
  if (headingCount < 2 || headingCount > 4) fail(file, `has ${headingCount} H2 headings; expected 2–4`);
  if (/before this ships|(?:the )?(?:finished|full) article would (?:explain|cover|include)|ryan(?:'s|’s) notes|draft article|source post proves|archived posts|retrofit a finished product story/i.test(content)) {
    fail(file, "contains internal drafting or preview language");
  }

  const allowedMediaUrls = new Set();
  for (const sourcePost of data.sourcePosts) {
    if (!sourcePost || !isString(sourcePost.id)) {
      fail(file, "source post is missing an id");
      continue;
    }
    const archived = archivedPosts.get(sourcePost.id);
    if (!archived) {
      fail(file, `source post ${sourcePost.id} is absent from the archive`);
      continue;
    }
    if (sourcePost.url !== archived.url) fail(file, `source post ${sourcePost.id} has the wrong URL`);
    if (sourcePost.text !== archived.text) fail(file, `source post ${sourcePost.id} text is not exact`);
    const metrics = archived.public_metrics || {};
    if (sourcePost.likes !== metrics.like_count) fail(file, `source post ${sourcePost.id} like count does not match`);
    if (sourcePost.bookmarks !== metrics.bookmark_count) fail(file, `source post ${sourcePost.id} bookmark count does not match`);
    if (sourcePost.impressions !== metrics.impression_count) fail(file, `source post ${sourcePost.id} impression count does not match`);

    const serialized = JSON.stringify(archived.media || []);
    for (const match of serialized.matchAll(/https:\/\/[^"\\]+/g)) {
      allowedMediaUrls.add(match[0].replaceAll("\\u0026", "&"));
    }
  }

  for (const item of data.media || []) {
    if (!item || !["image", "video"].includes(item.type)) fail(file, "media item has an invalid type");
    for (const field of ["url", "alt"]) {
      if (!isString(item?.[field])) fail(file, `media item is missing ${field}`);
    }
    if (item?.type === "video" && !isString(item.poster)) fail(file, "video media is missing a poster");
    if (item?.type === "video" && typeof item.url === "string") {
      const dimensions = item.url.match(/\/(\d+)x(\d+)\//);
      if (dimensions && Math.min(Number(dimensions[1]), Number(dimensions[2])) > 720) {
        fail(file, `video exceeds the 720p delivery ceiling: ${item.url}`);
      }
    }
    for (const mediaUrl of [item?.url, item?.poster].filter(Boolean)) {
      if (mediaUrl.startsWith("/")) {
        if (!fs.existsSync(path.join(root, "public", mediaUrl))) fail(file, `local media does not exist: ${mediaUrl}`);
      } else if (!allowedMediaUrls.has(mediaUrl)) {
        fail(file, `media URL is not present in its archived source posts: ${mediaUrl}`);
      }
    }
  }
}

for (const field of ["title", "excerpt", "lede"]) {
  const seen = new Map();
  for (const post of structuredPosts) {
    const value = String(post.data[field] || "").trim().toLowerCase();
    if (!value) continue;
    if (seen.has(value)) fail(post.file, `${field} duplicates ${seen.get(value)}`);
    else seen.set(value, post.file);
  }
}

const paragraphs = new Map();
for (const post of structuredPosts) {
  for (const paragraph of post.content.split(/\n\s*\n/).map((value) => value.trim()).filter((value) => value.length >= 120 && !value.startsWith("#"))) {
    const normalized = paragraph.toLowerCase().replace(/\s+/g, " ");
    if (paragraphs.has(normalized)) fail(post.file, `repeats a long paragraph from ${paragraphs.get(normalized)}`);
    else paragraphs.set(normalized, post.file);
  }
}

if (structuredPosts.length !== 28) {
  warn("content/blog", `found ${structuredPosts.length} source-backed posts; the current curated release expects 28`);
}

for (const message of warnings) console.warn(`WARN ${message}`);
if (errors.length > 0) {
  for (const message of errors) console.error(`ERROR ${message}`);
  console.error(`\nBlog validation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Validated ${structuredPosts.length} source-backed articles across ${files.length} total blog posts.`);
if (warnings.length > 0) console.log(`${warnings.length} warning(s) reported above.`);
