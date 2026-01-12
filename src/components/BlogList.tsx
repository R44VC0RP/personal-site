import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

type BlogListProps = {
  posts: BlogPost[];
};

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-zinc-400">No blog posts yet. Check back soon!</p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group block"
        >
          <div className="mb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-bold text-lg group-hover:underline">
                {post.title}
              </h3>
              <span className="text-lg">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
          <p className="text-zinc-400 mb-4">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
