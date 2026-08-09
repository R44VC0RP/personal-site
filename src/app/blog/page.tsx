import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "First-hand notes from Ryan Vogel about software engineering, developer tools, and building products.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Writing by Ryan Vogel",
    description: "First-hand notes about software engineering, developer tools, and building products.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const [latestPost, ...olderPosts] = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-12">Blog</h1>
      
      {/* Featured/Recent Post */}
      {latestPost && <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">Latest Post</h2>
        <Link href={`/blog/${latestPost.slug}`} className="block hover:bg-neutral-900 p-4 rounded-lg transition-colors">
          <h3 className="text-2xl font-bold mb-3">{latestPost.title}</h3>
          <p className="text-neutral-300 mb-2">{latestPost.excerpt}</p>
          <time dateTime={latestPost.date} className="text-sm text-neutral-400">{new Date(latestPost.date).toLocaleDateString()}</time>
        </Link>
      </div>}

      {/* All Posts */}
      <h2 className="text-xl font-bold mb-6">More Posts</h2>
      <div className="space-y-8">
        {olderPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block hover:bg-neutral-900 p-4 rounded-lg transition-colors">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-neutral-300 mb-2">{post.excerpt}</p>
            <time dateTime={post.date} className="text-sm text-neutral-400">{new Date(post.date).toLocaleDateString()}</time>
          </Link>
        ))}
      </div>
    </div>
  );
}
