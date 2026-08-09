import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Preserve the human editorial order from the 250-post archive review. The
// release shares one publication date, so alphabetical sorting would bury the
// strongest cornerstone pieces below smaller experiments.
const curatedOrder = new Map([
  ['building-hark-interactive-agent-workflows', 1],
  ['mapping-wifi-dead-zones-apple-roomplan', 2],
  ['teslanav-storage-web-managed-dashcam-usb', 3],
  ['synchronizing-livestream-questions-client-latency', 4],
  ['coding-agent-bare-metal-hackintosh-jetkvm', 5],
  ['repo-local-stack-overflow-agent-memory', 6],
  ['clipboard-images-opencode-ssh-tmux', 7],
  ['iphone-hotspot-ipv6-mdns-device-server', 8],
  ['multiplayer-terminal-game-platform', 9],
  ['rebuilding-agency-website-with-ai', 10],
  ['automatic-daily-work-journal-screen-recordings', 11],
  ['imap-smtp-inbound-email-platform', 12],
  ['opencode-aircraft-warning-plugin', 13],
  ['teslanav-api-shutdown-map-costs', 14],
  ['discord-ai-radio-station', 15],
  ['macos-ndi-controller-obs-workflow', 16],
  ['one-opencode-server-terminal-clients', 17],
  ['reverse-engineering-rendering-app-cli', 18],
  ['imessage-linux-terminal-itui', 19],
  ['fix-opencode-pasted-lines', 20],
  ['gangprompting-shared-agent-sessions', 21],
  ['ai-anchoring-software-design', 22],
  ['personal-website-tell-a-story', 23],
  ['jfk-tsa-dashboard-graphql', 24],
  ['misleading-x-link-previews-phishing', 25],
  ['internal-creator-app-500-images', 26],
  ['sift-clean-up-x-following', 27],
  ['cloudflare-access-private-internal-apps', 28],
]);

export type BlogMedia = {
  type: 'image' | 'video';
  url: string;
  poster?: string;
  alt: string;
  caption?: string;
};

export type SourcePost = {
  id: string;
  url: string;
  published: string;
  text: string;
  likes?: number;
  bookmarks?: number;
  impressions?: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  lede?: string;
  eyebrow?: string;
  readTime?: string;
  tags: string[];
  media: BlogMedia[];
  sourcePosts: SourcePost[];
  content?: string;
};

function normalizePostData(slug: string, data: Record<string, unknown>): Omit<BlogPost, 'content'> {
  return {
    slug,
    title: typeof data.title === 'string' ? data.title : slug,
    date: typeof data.date === 'string' ? data.date : '',
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    lede: typeof data.lede === 'string' ? data.lede : undefined,
    eyebrow: typeof data.eyebrow === 'string' ? data.eyebrow : undefined,
    readTime: typeof data.readTime === 'string' ? data.readTime : undefined,
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === 'string')
      : [],
    media: Array.isArray(data.media)
      ? data.media.filter((item): item is BlogMedia => (
          typeof item === 'object' &&
          item !== null &&
          ('type' in item) &&
          (item.type === 'image' || item.type === 'video') &&
          ('url' in item) &&
          typeof item.url === 'string' &&
          ('alt' in item) &&
          typeof item.alt === 'string'
        ))
      : [],
    sourcePosts: Array.isArray(data.sourcePosts)
      ? data.sourcePosts.filter((item): item is SourcePost => (
          typeof item === 'object' &&
          item !== null &&
          ('id' in item) &&
          typeof item.id === 'string' &&
          ('url' in item) &&
          typeof item.url === 'string' &&
          ('published' in item) &&
          typeof item.published === 'string' &&
          ('text' in item) &&
          typeof item.text === 'string'
        ))
      : [],
  };
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return normalizePostData(slug, data);
    });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => {
    if (a.date === b.date) {
      const aRank = curatedOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
      const bRank = curatedOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
      if (aRank !== bRank) return aRank - bRank;
      return a.title.localeCompare(b.title);
    }
    return a.date < b.date ? 1 : -1;
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return { ...normalizePostData(slug, data), content: contentHtml };
  } catch {
    return null;
  }
}
