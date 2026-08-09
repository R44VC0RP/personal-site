import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/blog",
    "/opencode",
    "/resend-mcp",
    "/riskyfridays",
    "/saasbuild",
    "/invest",
  ];

  const staticPages = pages.map((path) => ({
    url: absoluteUrl(path),
  }));

  const posts = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date ? new Date(post.date) : undefined,
  }));

  return [...staticPages, ...posts];
}
