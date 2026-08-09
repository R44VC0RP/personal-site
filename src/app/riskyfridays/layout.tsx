import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Risky Fridays",
  description: "Analyze a GitHub profile to see how often its repositories ship code on Fridays and calculate a Friday deployment risk score.",
  alternates: { canonical: "/riskyfridays" },
  openGraph: {
    title: "Risky Fridays by Ryan Vogel",
    description: "Calculate a GitHub profile's Friday deployment risk score.",
    url: `${SITE_URL}/riskyfridays`,
    type: "website",
  },
};

export default function RiskyFridaysLayout({ children }: { children: React.ReactNode }) {
  return children;
}
