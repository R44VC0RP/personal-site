import fs from "node:fs/promises";
import path from "node:path";

const ARCHIVE_PATH = path.join(process.cwd(), ".x-cache", "x-posts.json");
const OUTPUT_ROOT = path.join(process.cwd(), "public", "media", "x");
const MAX_FILE_BYTES = 100 * 1024 * 1024;
const postIds = process.argv.slice(2).filter((argument) => !argument.startsWith("--"));

if (postIds.length === 0) {
  throw new Error("Pass at least one post ID: npm run x:media -- 1234567890");
}

const archive = JSON.parse(await fs.readFile(ARCHIVE_PATH, "utf8"));
const postsById = new Map(archive.posts.map((post) => [post.id, post]));

function getMediaSource(media) {
  if (media.type === "photo" && media.url) return media.url;

  const videoVariants = (media.variants ?? [])
    .filter((variant) => variant.content_type === "video/mp4" && variant.url)
    .sort((a, b) => (b.bit_rate ?? 0) - (a.bit_rate ?? 0));

  return videoVariants[0]?.url ?? media.url ?? media.preview_image_url;
}

function extensionFor(url, contentType) {
  const pathnameExtension = path.extname(new URL(url).pathname).toLowerCase();
  if (/^\.(?:avif|gif|jpe?g|mp4|png|webp)$/.test(pathnameExtension)) {
    return pathnameExtension === ".jpeg" ? ".jpg" : pathnameExtension;
  }

  const extensionsByContentType = {
    "image/avif": ".avif",
    "image/gif": ".gif",
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "video/mp4": ".mp4",
  };

  return extensionsByContentType[contentType] ?? ".bin";
}

async function downloadMedia(url, destinationWithoutExtension) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Media download failed (${response.status}) for ${url}`);
  }

  const reportedSize = Number.parseInt(response.headers.get("content-length") ?? "0", 10);
  if (reportedSize > MAX_FILE_BYTES) {
    throw new Error(`Media exceeds 100 MB limit: ${url}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.byteLength > MAX_FILE_BYTES) {
    throw new Error(`Media exceeds 100 MB limit after download: ${url}`);
  }

  const extension = extensionFor(url, response.headers.get("content-type"));
  const destination = `${destinationWithoutExtension}${extension}`;
  await fs.writeFile(destination, bytes);
  return destination;
}

const manifest = [];
await fs.mkdir(OUTPUT_ROOT, { recursive: true });

for (const postId of postIds) {
  const post = postsById.get(postId);
  if (!post) {
    console.warn(`Skipping unknown post ID ${postId}`);
    continue;
  }

  const downloadedMedia = [];
  for (const [index, media] of post.media.entries()) {
    const sourceUrl = getMediaSource(media);
    if (!sourceUrl) continue;

    const destination = await downloadMedia(
      sourceUrl,
      path.join(OUTPUT_ROOT, `${postId}-${index + 1}`),
    );
    downloadedMedia.push({
      type: media.type,
      path: `/${path.relative(path.join(process.cwd(), "public"), destination)}`,
      source_url: sourceUrl,
      alt_text: media.alt_text ?? null,
      width: media.width ?? null,
      height: media.height ?? null,
    });
    console.log(`Downloaded ${path.relative(process.cwd(), destination)}`);
  }

  manifest.push({
    post_id: postId,
    post_url: post.url,
    media: downloadedMedia,
  });
}

const manifestPath = path.join(OUTPUT_ROOT, "manifest.json");
let previousManifest = [];
try {
  previousManifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

const mergedManifest = new Map(
  [...previousManifest, ...manifest].map((entry) => [entry.post_id, entry]),
);
await fs.writeFile(
  manifestPath,
  `${JSON.stringify([...mergedManifest.values()], null, 2)}\n`,
);

console.log(`Updated ${path.relative(process.cwd(), manifestPath)}`);
