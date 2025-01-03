import { DarkChromeCard } from "@/components/chrome-card";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// In a real app, this would be dynamic based on the actual post
export const metadata: Metadata = {
  title: "Blog Post | Ryan Vogel",
  description: "A blog post by Ryan Vogel",
};

// This would typically come from your database/CMS
const getBlogPost = (slug: string) => {
  const posts = {
    "getting-started-with-nextjs": {
      title: "Getting Started with Next.js",
      date: "2024-03-20",
      content: `
        This is where your blog post content would go. You can include:
        
        - Markdown content
        - Code snippets
        - Images
        - And more!
        
        In a real application, this would likely be stored in a database or CMS
        and possibly written in MDX format.
      `,
    },
  };

  return posts[slug as keyof typeof posts];
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Link 
        href="/blog" 
        className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2" /> Back to Blog
      </Link>

      <DarkChromeCard className="max-w-4xl mx-auto">
        <article>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-neutral-400 mb-8">
            {new Date(post.date).toLocaleDateString()}
          </p>
          
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </DarkChromeCard>
    </>
  );
} 