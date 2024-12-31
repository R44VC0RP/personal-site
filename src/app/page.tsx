import { YouTubeEmbed } from "@next/third-parties/google";
import { GitHub, Twitter } from "./icons";
import { Metadata } from "next";
import Image from "next/image";
import { HoverCard } from "@radix-ui/react-hover-card";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HardDriveDownload } from "lucide-react";
import Home from "./home";

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
    title: "Risky Fridays",
    description: "How often do you push to prod on Fridays?",
    url: "/riskyfridays",
  },
  {
    title: "QuickPic",
    description: "Quickly mutate images and other media",
    url: "https://quickpic.t3.gg",
  },
  {
    title: "Coolors",
    description: "Generate color palettes for your projects",
    url: "https://coolors.co",
  },
];

export default function Page() {
  return (
    <main className="flex text-white min-h-screen flex-col items-center min-w-full p-4 bg-gradient-to-r from-[#8458B3] via-[#D0BDF4] to-[#A0D2EB] relative isolate">
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950/90">
        <div className="absolute h-full w-full bg-[url('/images/noise-light.png')] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100" />
      </div>
      <div className="max-w-3xl w-full ">
        <section className="py-4 sm:py-10 flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <Image src="/images/rlogo.png" alt="Ryan Vogel" width={30} height={30} className="mr-2" />
            <div className="flex flex-col">
              <h1 className="font-bold text-xl p-0 m-0 ">Ryan Vogel</h1>
              <span className="text-neutral-200 p-0 m-0">Founder, Software Engineer & Integration Specialist</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/R44VC0RP"
              target="_blank"
              className="fill-current hover:fill-neutral-300"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            <a
              href="https://x.com/ryandavogel"
              target="_blank"
              className="fill-current hover:fill-neutral-300"
              aria-label="Twitter"
            >
              <Image src="/images/x-logo.png" alt="X Logo" width={24} height={24} />
            </a>
            <a className="fill-current hover:fill-neutral-300 inline-block" href="/resume.pdf" target="_blank">
              <HardDriveDownload height={24} width={24} />
            </a>
          </div>
        </section>
        <h2 className="text-xl font-bold ">My Tools</h2>
        <div className="flex flex-row justify-center w-full py-4">

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full">

            {funActions.map((action, index) => (
              <a href={action.url} target="_blank" key={index}>
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-md text-center w-full max-w-sm
                transition-all duration-300 ease-out
                hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10
                active:scale-95 active:bg-white/15 cursor-pointer"
                >
                  <h3 className="font-bold text-lg">{action.title}</h3>
                  <p className="text-neutral-300">{action.description}</p>
                </div>
              </a>
            ))}
          </section>
        </div>
        <Home />
      </div>
    </main>
  );
}
