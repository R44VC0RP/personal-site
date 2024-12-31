import { YouTubeEmbed } from "@next/third-parties/google";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import Image from "next/image";
import React from "react";

type CareerItem = {
  company: React.ReactNode;
  title: React.ReactNode;
  icon_url: React.ReactNode;
  date: React.ReactNode;
  description: React.ReactNode;
};

const carerItems: CareerItem[] = [
  {
    company: "City of Neptune Beach",
    date: "June 2023 - Present",
    icon_url: "/images/neptune-beach.png",
    description: "",
    title: "Systems Administrator",
  },
  {
    company: "Best Buy | Geek Squad",
    date: "May 2022 - June 2023",
    icon_url: "/images/geek-squad.png",
    description: "",
    title: "Advanced Repair Agent II",
  },
  {
    company: "Sensible Recycling",
    date: "May 2021 - August 2021",
    icon_url: "/images/reuse-it.png",
    description: "",
    title: "Software Engineer Intern",
  }

];

type ProjectItem = {
  name: React.ReactNode;
  description: React.ReactNode;
  date: React.ReactNode;
  image_url: string;
  url: string;
};

const projectItems: ProjectItem[] = [
  {
    name: "Mandarin 3D Prints",
    description:
      "Offering the most affordable online custom 3D printing service, Mandarin 3D Prints outperforms competitors by 50% in pricing. Achieved $25k in gross sales within the first year. Developed a custom slicing infrastructure to ensure fast, reliable service for instant quotes and seamless order fulfillment.",
    url: "https://mandarin3d.com",
    date: "October 2023",
    image_url: "/images/m3d-round.png",
  },
  {
    name: "AppliedTrack",
    description:
      "AppliedTrack is a job search management platform that helps candidates land interviews faster. Features include ATS-optimized resume generation, personalized cover letters, application tracking, and AI-powered job matching insights. Built with Next.js, TypeScript, and AI integration.",
    url: "https://appliedtrack.com",
    date: "Decemeber 2024",
    image_url: "/images/appliedtrack.png",
  },
  {
    name: "MailMeLater",
    description:
      "MailMeLater is a bot on X.com that allows you to schedule emails to be sent at a later time to remind you of important posts. It's built with Next.js, TypeScript, and MySQL.",
    url: "https://mailmelater.com",
    date: "Decemeber 2024",
    image_url: "/images/mailmelater.png",
  },
];

type Misc = {
  name: string;
  description: string;
  date: string;
  url: string;
  videoid: string;
};

const misc: Misc[] = [
  {
    name: "Blender Animation and 3D Design Showcase",
    description:
      "A collection of animations and 3D designs I created using Blender.",
    videoid: "_NYVuyPI6CY",
    url: "https://www.youtube.com/watch?v=NYVuyPI6CY",
    date: "2021",
  }
];


export default function Home() {
  return (
    <div>
      <section className="text-left w-full flex gap-4 flex-col">
          <h2 className="text-xl font-bold">Career</h2>
          {carerItems.map((item, index) => (
            <div key={index}>
              <div>
                <div className="min-w-full flex-row justify-between hidden sm:flex">
                  
                  <div className="flex flew-row items-center">
                    <img src={item.icon_url as string} alt={item.company as string} className="h-5 inline-block mr-2" />
                    
                    <HoverCard>
                      <HoverCardTrigger>
                        <h3 className="font-bold">{item.company}</h3>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-row">
                          <img src={item.icon_url as string} alt={item.company as string} className="h-5 inline-block mr-2" />
                          <div className="flex flex-col">
                            <h3 className="font-bold">{item.company}</h3>
                            <span>{item.date}</span>
                            <span>{item.description}</span>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <span className="mx-2 font-bold">-</span>
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <div>
                    <span>{item.date}</span>
                  </div>
                </div>
                <span>{item.description}</span>
                <div className="flex flex-col sm:hidden justify-start">
                  <div className="flex flew-row justify-start">
                    <h3 className="font-bold">{item.company}</h3>
                    <span className="mx-2 font-bold">-</span>
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <div>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="text-left w-full flex gap-4 flex-col mt-4 py-4 border-t-2 border-zinc-800 rounded-e-md">
          <h2 className="text-xl font-bold">Active Projects & Businesses</h2>
          {projectItems.map((item, index) => (
            <div key={index} className="py-4">
              <div className="min-w-full flex flex-row justify-between">
                <div className="flex flew-row">
                  <a href={item.url} target="_blank" className="flex flex-row items-center">
                    <Image src={item.image_url} alt={item.name as string} width={30} height={30} className="mr-2 rounded-md" />
                    <h2
                      className="font-bold
                    hover:text-neutral-300
                    hover:underline
                    text-xl
                    "
                    >
                      {item.name}
                    </h2>
                  </a>
                </div>
                <div>
                  <span>{item.date}</span>
                </div>
              </div>
              <span>{item.description}</span>
            </div>
          ))}
        </section>
        <section className="text-left w-full flex gap-4 flex-col mt-4 py-4 border-t-2 border-zinc-800 rounded-e-md">
          <h2 className="text-xl font-bold">Past Projects</h2>
          {misc.map((item, index) => (
            <div key={index} className="pb-8 border-b-2 border-zinc-900 items-center">
              <div className="min-w-full flex flex-row justify-between">
                <div className="flex flew-row">
                  <h3 className="font-bold">{item.name}</h3>
                </div>
                <div>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="flex flex-col items-center my-4">
                <YouTubeEmbed videoid={item.videoid} width={600} />
              </div>
            </div>
          ))}
        </section>
    </div>
  );
}
