import fs from "node:fs/promises";
import path from "node:path";

const API_ORIGIN = "https://api.x.com";
const PAGE_SIZE = 100;
const DEFAULT_LIMIT = 3_200;
const OUTPUT_PATH = path.join(process.cwd(), ".x-cache", "x-posts.json");

const bearerToken = process.env.X_BEARER_TOKEN;
const username = process.env.X_USERNAME ?? "ryanvogel";
const fullRefresh = process.argv.includes("--full");
const requestedLimit = Number.parseInt(
  process.argv.slice(2).find((argument) => !argument.startsWith("--")) ?? `${DEFAULT_LIMIT}`,
  10,
);
const limit = Number.isFinite(requestedLimit)
  ? Math.min(Math.max(requestedLimit, 5), DEFAULT_LIMIT)
  : DEFAULT_LIMIT;

if (!bearerToken) {
  throw new Error("Missing X_BEARER_TOKEN. Add it to .env.local before importing.");
}

async function xRequest(pathname, params = {}) {
  const url = new URL(pathname, API_ORIGIN);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${bearerToken}` },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`X API ${response.status} ${response.statusText}: ${body}`);
  }

  return response.json();
}

async function loadExistingArchive() {
  try {
    return JSON.parse(await fs.readFile(OUTPUT_PATH, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
}

function normalizePost(post, mediaByKey) {
  const media = (post.attachments?.media_keys ?? [])
    .map((mediaKey) => mediaByKey.get(mediaKey))
    .filter(Boolean);

  return {
    id: post.id,
    url: `https://x.com/${username}/status/${post.id}`,
    text: post.text,
    created_at: post.created_at,
    conversation_id: post.conversation_id,
    lang: post.lang,
    possibly_sensitive: post.possibly_sensitive,
    public_metrics: post.public_metrics ?? {},
    entities: post.entities ?? {},
    referenced_tweets: post.referenced_tweets ?? [],
    media,
  };
}

const existing = await loadExistingArchive();
const sinceId = fullRefresh ? undefined : existing?.posts?.[0]?.id;
const userResponse = await xRequest(`/2/users/by/username/${username}`, {
  "user.fields": "created_at,description,id,name,profile_image_url,public_metrics,username",
});

if (!userResponse.data?.id) {
  throw new Error(`Could not resolve X user @${username}.`);
}

const user = userResponse.data;
const importedPosts = [];
let nextToken;

while (importedPosts.length < limit) {
  const remaining = limit - importedPosts.length;
  const response = await xRequest(`/2/users/${user.id}/tweets`, {
    max_results: Math.max(5, Math.min(PAGE_SIZE, remaining)),
    pagination_token: nextToken,
    since_id: sinceId,
    "tweet.fields": [
      "attachments",
      "author_id",
      "conversation_id",
      "created_at",
      "entities",
      "lang",
      "possibly_sensitive",
      "public_metrics",
      "referenced_tweets",
      "reply_settings",
      "text",
    ].join(","),
    expansions: "attachments.media_keys",
    "media.fields": [
      "alt_text",
      "duration_ms",
      "height",
      "media_key",
      "preview_image_url",
      "public_metrics",
      "type",
      "url",
      "variants",
      "width",
    ].join(","),
  });

  const mediaByKey = new Map(
    (response.includes?.media ?? []).map((media) => [media.media_key, media]),
  );

  importedPosts.push(
    ...(response.data ?? [])
      .slice(0, remaining)
      .map((post) => normalizePost(post, mediaByKey)),
  );

  nextToken = response.meta?.next_token;
  process.stdout.write(`\rFetched ${importedPosts.length} posts`);

  if (!nextToken || !response.data?.length) break;
}

const postsById = new Map(
  [...(existing?.posts ?? []), ...importedPosts].map((post) => [post.id, post]),
);
const posts = [...postsById.values()].sort((a, b) =>
  b.created_at.localeCompare(a.created_at),
);

await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await fs.writeFile(
  OUTPUT_PATH,
  `${JSON.stringify(
    {
      fetched_at: new Date().toISOString(),
      user,
      posts,
    },
    null,
    2,
  )}\n`,
);

process.stdout.write(
  `\nSaved ${posts.length} unique posts (${importedPosts.length} new posts fetched) to ${path.relative(process.cwd(), OUTPUT_PATH)}\n`,
);
