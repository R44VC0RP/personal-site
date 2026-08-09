import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Remote Resend MCP Server",
  description: "Use Ryan Vogel's remote Resend MCP server to send email and manage Resend contacts and audiences from an AI coding tool.",
  alternates: { canonical: "/resend-mcp" },
  openGraph: {
    title: "Remote Resend MCP Server by Ryan Vogel",
    description: "Send email and manage Resend contacts and audiences from an AI coding tool.",
    url: `${SITE_URL}/resend-mcp`,
    type: "website",
  },
};

export default function ResendMcpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
