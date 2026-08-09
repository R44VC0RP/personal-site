import fs from "node:fs/promises";
import path from "node:path";

const INPUT_PATH = path.join(process.cwd(), ".x-cache", "x-posts.json");
const OUTPUT_PATH = path.join(process.cwd(), ".x-cache", "x-candidate-pool.json");
const DEFAULT_POOL_SIZE = 250;
const requestedPoolSize = Number.parseInt(process.argv[2] ?? `${DEFAULT_POOL_SIZE}`, 10);
const poolSize = Number.isFinite(requestedPoolSize)
  ? Math.min(Math.max(requestedPoolSize, 25), 500)
  : DEFAULT_POOL_SIZE;

const archive = JSON.parse(await fs.readFile(INPUT_PATH, "utf8"));

function isRetweet(post) {
  return post.text.startsWith("RT @") ||
    post.referenced_tweets?.some((reference) => reference.type === "retweeted");
}

function isLowSignal(post) {
  const visibleText = post.text
    .replace(/https:\/\/t\.co\/\w+/g, "")
    .replace(/^@[\w]+(?:\s+@[\w]+)*\s*/, "")
    .trim();
  const wordCount = visibleText.split(/\s+/).filter(Boolean).length;
  const metrics = post.public_metrics ?? {};
  const engagement =
    (metrics.like_count ?? 0) +
    (metrics.retweet_count ?? 0) * 2 +
    (metrics.quote_count ?? 0) * 2 +
    (metrics.reply_count ?? 0);

  return wordCount < 8 && engagement < 35 && post.media.length === 0;
}

function scorePost(post) {
  const metrics = post.public_metrics ?? {};
  const textLength = post.text.replace(/https:\/\/t\.co\/\w+/g, "").trim().length;
  const engagementScore =
    Math.log1p(metrics.like_count ?? 0) * 5 +
    Math.log1p(metrics.retweet_count ?? 0) * 8 +
    Math.log1p(metrics.quote_count ?? 0) * 7 +
    Math.log1p(metrics.reply_count ?? 0) * 4 +
    Math.log1p(metrics.bookmark_count ?? 0) * 5;
  const substanceScore = Math.min(textLength / 35, 8);
  const mediaScore = post.media.some((item) => item.type === "video")
    ? 4
    : post.media.length > 0
      ? 2
      : 0;
  const originalPostScore = post.referenced_tweets?.some(
    (reference) => reference.type === "replied_to",
  )
    ? -2
    : 2;

  return Number(
    (engagementScore + substanceScore + mediaScore + originalPostScore).toFixed(2),
  );
}

const candidates = archive.posts
  .filter((post) => !isRetweet(post))
  .filter((post) => !isLowSignal(post))
  .map((post) => ({ ...post, heuristic_score: scorePost(post) }))
  .sort((a, b) => b.heuristic_score - a.heuristic_score)
  .slice(0, poolSize);

await fs.writeFile(
  OUTPUT_PATH,
  `${JSON.stringify(
    {
      generated_at: new Date().toISOString(),
      source_post_count: archive.posts.length,
      candidate_count: candidates.length,
      candidates,
    },
    null,
    2,
  )}\n`,
);

console.log(
  `Ranked ${archive.posts.length} posts and saved ${candidates.length} candidates to ${path.relative(process.cwd(), OUTPUT_PATH)}`,
);
