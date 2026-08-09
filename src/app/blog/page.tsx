import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "First-hand notes from Ryan Vogel about software engineering, developer tools, experiments, and building products.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing by Ryan Vogel",
    description: "First-hand notes about software engineering, developer tools, experiments, and building products.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Writing by Ryan Vogel",
    description: "First-hand notes about software engineering, developer tools, experiments, and building products.",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ryan Vogel",
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };

  return (
    <div className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData).replace(/</g, "\\u003c") }}
      />
      <header className="max-w-2xl pb-14 pt-4 sm:pb-16 sm:pt-8">
        <p className="mb-5 text-sm font-medium tracking-normal text-violet-300">Writing</p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl">
          Notes from things I actually built.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed tracking-normal text-zinc-300">
          Developer tools, strange prototypes, infrastructure, and the details that only show up after the idea meets the real world.
        </p>
      </header>

      <section aria-labelledby="all-writing-heading">
        <h2 id="all-writing-heading" className="sr-only">All writing</h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group grid gap-4 py-8 transition-opacity duration-150 hover:opacity-80 active:opacity-60 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:gap-6"
            >
              <div className="text-sm leading-relaxed tracking-normal text-zinc-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.readTime && <p className="mt-1">{post.readTime}</p>}
              </div>
              <div className="min-w-0">
                {post.eyebrow && <p className="mb-2 text-sm font-medium tracking-normal text-violet-300">{post.eyebrow}</p>}
                <h3 className="text-balance text-2xl font-semibold leading-tight text-white">{post.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed tracking-normal text-zinc-400">{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <p className="mt-4 text-xs leading-relaxed tracking-normal text-zinc-600">{post.tags.join(" · ")}</p>
                )}
              </div>
              <ArrowUpRight aria-hidden="true" className="hidden size-4 text-zinc-600 transition-colors duration-150 group-hover:text-white sm:block" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
