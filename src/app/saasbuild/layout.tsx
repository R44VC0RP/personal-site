import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "SaaS Showcase Image Builder",
  description: "Create and download a polished social image that showcases your SaaS projects.",
  alternates: { canonical: "/saasbuild" },
  openGraph: {
    title: "SaaS Showcase Image Builder by Ryan Vogel",
    description: "Create a shareable social image for your SaaS portfolio.",
    url: `${SITE_URL}/saasbuild`,
    type: "website",
  },
};

export default function SaasBuildLayout({ children }: { children: React.ReactNode }) {
  return children;
}
