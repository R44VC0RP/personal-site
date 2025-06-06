import { YouTubeEmbed } from "@next/third-parties/google";
import { GitHub, Twitter } from "./icons";
import { Metadata } from "next";
import Image from "next/image";
import { HoverCard } from "@radix-ui/react-hover-card";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HardDriveDownload } from "lucide-react";
import Home from "./home";
import ChromeCard, { DarkChromeCard } from "@/components/chrome-card";
import { DarkChromeButton } from "@/components/chrome-button";
import GlassMorphicCard from "@/components/GlassMorphicCard";

export const metadata: Metadata = {
  title: "Ryan Vogel",
  description: "Portfolio website for Ryan Vogel, Software Engineer",
};

type FunActions = {
  title: string;
  description: string;
  url: string;
};

const funActions: FunActions[] = [
  {
    title: "Invest",
    description: "Invest in Ryan Vogel, and get nothing.",
    url: "/invest",
  },
  {
    title: "Risky Fridays",
    description: "How often do you push to prod on Fridays?",
    url: "/riskyfridays",
  },
  {
    title: "SaaS Showcase",
    description: "Enhance you social sharing identity",
    url: "/saasbuild",
  },
];

export default function Page() {
  return (
    <>
      {/* <h2 className="text-xl font-bold ">My Tools</h2>
      <div className="flex flex-row justify-center w-full py-4">

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full">
          {funActions.map((action, index) => (
            <a href={action.url} target={action.url.includes("https") ? "_blank" : "_self"} key={index} className="w-full">
              <GlassMorphicCard
                key={index}
                className="w-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95"
              >
                <h3 className="font-bold text-lg">{action.title}</h3>
                <p className="text-neutral-300">{action.description}</p>
              </GlassMorphicCard>
            </a>
          ))}
        </section>
      </div> */}
      <Home />
    </>
  );
}
