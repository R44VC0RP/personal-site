import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Bookmark, Eye, Heart } from "lucide-react";

import { getAllPosts, getPostBySlug, type BlogPost } from "@/lib/blog";
import { absoluteUrl, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function formatCount(value?: number) {
  if (value === undefined) return null;
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function getSocialImage(post: BlogPost) {
  const media = post.media.find((item) => item.type === "image" || item.poster);
  const path = media?.type === "image" ? media.url : media?.poster;
  return path ? (path.startsWith("http") ? path : absoluteUrl(path)) : absoluteUrl("/images/ryan-vogel-avatar.jpg");
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const socialImage = getSocialImage(post);

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [SITE_URL],
      tags: post.tags,
      images: [{ url: socialImage, alt: post.media[0]?.alt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@ryanvogel",
      title: post.title,
      description: post.excerpt,
      images: [socialImage],
    },
  };
}

function ArticleMedia({ post }: { post: BlogPost }) {
  if (post.media.length === 0) return null;

  return (
    <div className="mb-14 space-y-8 sm:mb-16">
      {post.media.map((item, index) => (
        <figure key={`${item.url}-${index}`}>
          <div className="overflow-hidden rounded-3xl bg-white/[0.04] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {item.type === "video" ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={item.poster}
                className="max-h-[720px] w-full rounded-2xl bg-black object-contain outline outline-1 -outline-offset-1 outline-white/10"
                aria-label={item.alt}
              >
                <source src={item.url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.url}
                alt={item.alt}
                width={1200}
                height={900}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-auto max-h-[760px] w-full rounded-2xl bg-black object-contain outline outline-1 -outline-offset-1 outline-white/10"
              />
            )}
          </div>
          {item.caption && (
            <figcaption className="px-2 pt-3 text-sm leading-relaxed tracking-normal text-zinc-500">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function SourcePosts({ posts }: { posts: BlogPost["sourcePosts"] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 max-w-xl border-t border-white/10 pt-10" aria-labelledby="source-posts-heading">
      <p id="source-posts-heading" className="mb-5 text-sm font-medium tracking-normal text-violet-300">
        {posts.length === 1 ? "The original post" : "The original posts"}
      </p>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {posts.map((source) => (
          <a
            key={source.id}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-6 transition-opacity duration-150 hover:opacity-80 active:opacity-60"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src="/images/ryan-vogel-avatar.jpg"
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-white/10"
                />
                <div className="min-w-0 tracking-normal">
                  <p className="text-sm font-medium text-white">Ryan Vogel</p>
                  <p className="truncate text-xs text-zinc-500">@ryanvogel · {source.published}</p>
                </div>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-zinc-600 transition-colors duration-150 group-hover:text-white" />
            </div>

            <p className="mt-4 text-base leading-relaxed tracking-normal text-zinc-300">{source.text}</p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs tabular-nums tracking-normal text-zinc-500">
              {formatCount(source.likes) && (
                <span className="inline-flex items-center gap-1.5"><Heart aria-hidden="true" className="size-3.5" />{formatCount(source.likes)}</span>
              )}
              {formatCount(source.bookmarks) && (
                <span className="inline-flex items-center gap-1.5"><Bookmark aria-hidden="true" className="size-3.5" />{formatCount(source.bookmarks)}</span>
              )}
              {formatCount(source.impressions) && (
                <span className="inline-flex items-center gap-1.5"><Eye aria-hidden="true" className="size-3.5" />{formatCount(source.impressions)} views</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const socialImage = getSocialImage(post);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [socialImage],
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: canonical,
    url: canonical,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [SOCIAL_LINKS.x],
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
    },
    ...(post.sourcePosts.length > 0
      ? {
          citation: post.sourcePosts.map((source) => source.url),
          isBasedOn: post.sourcePosts.map((source) => source.url),
        }
      : {}),
  };

  return (
    <article className="w-full pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c") }}
      />

      <div className="mb-12 flex items-center justify-between gap-4">
        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center gap-2 text-sm tracking-normal text-zinc-400 transition-[color,transform] duration-150 hover:text-white active:scale-[0.96]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Writing
        </Link>
        {post.sourcePosts[0] && (
          <a
            href={post.sourcePosts[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm tracking-normal text-zinc-500 transition-[color,transform] duration-150 hover:text-white active:scale-[0.96]"
          >
            Source post
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        )}
      </div>

      <header className="mb-12 max-w-2xl">
        {post.eyebrow && <p className="mb-5 text-sm font-medium tracking-normal text-violet-300">{post.eyebrow}</p>}
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed tracking-normal text-zinc-300">
          {post.lede || post.excerpt}
        </p>
        <p className="mt-5 text-sm tracking-normal text-zinc-500">
          By Ryan Vogel <span aria-hidden="true" className="mx-1">·</span>{" "}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.readTime && <><span aria-hidden="true" className="mx-1">·</span> {post.readTime}</>}
        </p>
      </header>

      <ArticleMedia post={post} />

      <div
        className="prose prose-invert prose-zinc max-w-xl tracking-normal prose-p:text-base prose-p:leading-[1.75] prose-p:text-zinc-300 prose-headings:scroll-mt-24 prose-headings:text-balance prose-headings:text-white prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-2xl prose-h2:leading-tight prose-h3:mb-3 prose-h3:mt-9 prose-h3:text-xl prose-a:text-violet-300 prose-a:underline prose-a:decoration-violet-400/40 prose-a:underline-offset-4 hover:prose-a:decoration-violet-300 prose-strong:font-semibold prose-strong:text-zinc-100 prose-li:my-1 prose-li:text-zinc-300 prose-code:text-violet-300 prose-pre:border prose-pre:border-white/10 prose-pre:bg-black/40"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />

      <SourcePosts posts={post.sourcePosts} />

      <footer className="mt-16 border-y border-white/10 py-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="max-w-md tracking-normal">
            <p className="text-lg font-semibold text-white">Follow what I’m building next.</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-500">More experiments, developer tools, and notes in progress.</p>
          </div>
          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold tracking-normal text-zinc-950 transition-[background-color,transform] duration-150 hover:bg-zinc-200 active:scale-[0.96]"
          >
            Follow me on X
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </footer>
    </article>
  );
}
