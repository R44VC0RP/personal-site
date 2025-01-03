import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Ryan Vogel",
  description: "Personal blog of Ryan Vogel, Software Engineer",
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

// In a real app, this would come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description: "A comprehensive guide to building with Next.js 14",
    date: "2024-03-20",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    description: "Learn how to write better TypeScript code",
    date: "2024-03-15",
  },
  // Add more blog posts here
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-12">Blog</h1>
      
      {/* Featured/Recent Post */}
      <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">Latest Post</h2>
        <Link href={`/blog/${blogPosts[0].slug}`} className="block hover:bg-neutral-900 p-4 rounded-lg transition-colors">
          <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
          <p className="text-neutral-300 mb-2">{blogPosts[0].description}</p>
          <p className="text-sm text-neutral-400">{new Date(blogPosts[0].date).toLocaleDateString()}</p>
        </Link>
      </div>

      {/* All Posts */}
      <h2 className="text-xl font-bold mb-6">All Posts</h2>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block hover:bg-neutral-900 p-4 rounded-lg transition-colors">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-neutral-300 mb-2">{post.description}</p>
            <p className="text-sm text-neutral-400">{new Date(post.date).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}