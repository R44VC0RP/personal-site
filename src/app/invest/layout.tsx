import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Invest in Ryan Vogel",
  description: "A playful leaderboard where visitors can make fictional investments in Ryan Vogel.",
  alternates: { canonical: "/invest" },
  openGraph: {
    title: "Invest in Ryan Vogel",
    description: "Make a fictional investment in Ryan Vogel and join the leaderboard.",
    url: `${SITE_URL}/invest`,
    type: "website",
  },
};

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
