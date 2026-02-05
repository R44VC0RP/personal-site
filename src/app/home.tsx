import { YouTubeEmbed } from "@next/third-parties/google";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import TweetVideo from "@/components/TweetVideo";
import MyStory from "@/components/MyStory";

type CareerItem = {
  company: React.ReactNode;
  title: React.ReactNode;
  icon_url: React.ReactNode;
  date: React.ReactNode;
  description: React.ReactNode;
  active?: boolean;
  id?: string;
};

const openCodeItem: CareerItem = {
  company: "OpenCode",
  date: "December 2025 - Present",
  icon_url: "/images/opencode-logo-light.png",
  description: "Contributing to the open source AI coding agent used by over 400,000 developers monthly. OpenCode helps developers write and run code directly from the terminal with a native TUI, LSP support, multi-session capabilities, and integration with 75+ LLM providers. Working on features, documentation, and community engagement for this privacy-first development tool.",
  title: "Developer Staff",
  active: true,
  id: "opencode",
};

const carerItems: CareerItem[] = [
  openCodeItem,
  {
    company: "Databricks",
    date: "May 2025 - December 2025",
    icon_url: "/images/databricks.png",
    description: "Created technical content, tutorials, and demos focused on conventions and video production to educate developers on Databricks' data and AI platform. Engaged with the developer community through workshops, conferences, and social media. Gathered feedback to improve product features and documentation. Collaborated with engineering teams to ensure developer needs were addressed in product development.",
    title: "Member of Technical Staff",
    active: false,
    id: "databricks",
  },
  {
    company: "Neon Postgres",
    date: "April 2025 - May 2025",
    icon_url: "/images/neon.png",
    description: "Advocated for Neon's serverless Postgres database by creating technical content, tutorials, and demos to educate developers. Engaged with the developer community through workshops, conferences, and social media. Gathered feedback to improve product features and documentation. Collaborated with engineering teams to ensure developer needs were addressed in product development.",
    title: "Developer Advocate",
    id: "neon-postgres",
  },
  {
    company: "City of Neptune Beach",
    date: "June 2023 - April 2025",
    icon_url: "/images/neptune-beach.png",
    description: "Managed critical infrastructure including camera and security access control systems. Administered Windows Active Directory and domain services. Handled news publication and media management. Oversaw multi-million dollar departmental budget and acted as interim CIO. Maintained live streaming capabilities for public meetings and managed standard IT ticketing system for city-wide technical support.",
    title: "Systems Administrator",
    id: "neptune-beach",
  },
  {
    company: "Best Buy | Geek Squad",
    date: "May 2022 - June 2023",
    icon_url: "/images/geek-squad.png",
    description: "Performed advanced diagnostics and repairs on a wide range of consumer electronics including computers, smartphones, and tablets. Managed complex technical issues, provided expert customer service, and maintained repair documentation while meeting quality and efficiency standards in a fast-paced retail environment.",
    title: "Advanced Repair Agent II",
    id: "geek-squad",
  },
  {
    company: "Sensible Recycling",
    date: "May 2021 - August 2021",
    icon_url: "/images/reuse-it.png",
    description: "Specialized in electronics recycling, performing diagnostics and refurbishment of laptops, smartphones, and computers. Developed skills in hardware repair, data recovery, and operating system restoration while maintaining environmental sustainability standards.",
    title: "Software Engineer & Technician",
    id: "sensible-recycling",
  }

];

type ProjectItem = {
  name: React.ReactNode;
  description: React.ReactNode;
  date: React.ReactNode;
  image_url: string;
  url: string;
  active?: boolean;
  id?: string;
};

const projectItems: ProjectItem[] = [
  {
    name: "Inbound",
    description:
      "Programmable email infrastructure for developers. Send, receive, reply, and thread within real mailboxes. Built for developers who need to handle transactional emails, support inboxes, and AI agents. Configure your domain's MX records and start routing emails to webhooks instantly.",
    url: "https://inbound.new",
    date: "December 2024 - Present",
    image_url: "/images/inbound.png",
    active: true,
    id: "inbound",
  },
  {
    name: "Mandarin 3D Prints",
    description:
      "Offering the most affordable online custom 3D printing service, Mandarin 3D Prints outperforms competitors by 50% in pricing. Achieved $50k in gross sales within the first year. Developed a custom slicing infrastructure to ensure fast, reliable service for instant quotes and seamless order fulfillment. Established key collaborations with Vercel, Mintlify, and React Miami.",
    url: "https://mandarin3d.com",
    date: "October 2023 - Present",
    image_url: "/images/m3d-logo.png",
    id: "mandarin-3d-prints",
  },
  {
    name: "TagTap - Customized Networking Badges",
    description:
      "TagTap offers customized NFC tags with your social profile that you can easily share at conventions and networking events. Create personalized digital business cards that allow instant connection with a simple tap.",
    url: "https://tagtap.com",
    date: "December 2024 - Present",
    image_url: "/images/tagtap.png",
    id: "tagtap",
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

const featuredTweetIds = [
  "1883264567985504575",
  "1920811957986214208",
  "1930122145650356566",
  "1987505818678493485",
  "1914694062122107386",
];


export default function Home() {
  return (
    <div>
      <MyStory />
      <section className="text-left w-full flex gap-4 flex-col">
          <h2 className="text-xl font-bold">Career</h2>
          {carerItems.map((item, index) => (
            <div key={index} id={item.id}>
              <div className="mb-2">
                <div className="min-w-full flex-row justify-between hidden sm:flex">
                  <div className="flex flew-row items-center">
                    <span className="w-7 h-7 inline-flex items-center justify-center mr-2 bg-white p-1 rounded">
                      <img 
                        src={item.icon_url as string} 
                        alt={item.company as string} 
                        className="object-contain w-full h-full" 
                      />
                    </span>
                    <HoverCard>
                      <HoverCardTrigger>
                        <h3 className="font-bold text-lg">{item.company}</h3>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-row w-full">
                          <span className="w-7 h-7 inline-flex items-center justify-center mr-2 bg-white p-1 rounded">
                            <img 
                              src={item.icon_url as string} 
                              alt={item.company as string} 
                              className="object-contain w-full h-full" 
                            />
                          </span>
                          <div className="flex flex-col">
                            <h3 className="font-bold text-lg">{item.company}</h3>
                            <span>{item.date}</span>
                            <span>{item.description}</span>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <span className="mx-2 font-bold text-lg">-</span>
                    <span className="font-bold text-lg">{item.title}</span>
                    {item.active && (
                      <Star className="ml-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-lg">{item.date}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:hidden justify-start">
                  <div className="flex flew-row justify-start items-center">
                    <span className="w-6 h-6 inline-flex items-center justify-center mr-2 bg-white p-1 rounded">
                      <img 
                        src={item.icon_url as string} 
                        alt={item.company as string} 
                        className="object-contain w-full h-full" 
                      />
                    </span>
                    <h3 className="font-bold text-lg">{item.company}</h3>
                    <span className="mx-2 font-bold text-lg">-</span>
                    <span className="font-bold text-lg">{item.title}</span>
                    {item.active && (
                      <Star className="ml-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-lg">{item.date}</span>
                  </div>
                </div>
              </div>
              {item.description && (
                <p className="text-zinc-400 mb-4">{item.description}</p>
              )}
            </div>
          ))}
        </section>
        <section className="text-left w-full flex gap-4 flex-col mt-4 py-4 border-t-2 border-zinc-800 rounded-e-md">
          <h2 className="text-xl font-bold">Businesses and Projects</h2>
          {projectItems.map((item, index) => (
            <div key={index} id={item.id} className="py-4">
              <div className="min-w-full flex flex-row justify-between items-center mb-2">
                <div className="flex flew-row items-center">
                  <a href={item.url} target="_blank" className="flex flex-row items-center">
                    <Image 
                      src={item.image_url} 
                      alt={item.name as string} 
                      width={30} 
                      height={30} 
                      className={`mr-2 rounded-md ${
                        item.name !== "Mandarin 3D Prints" ? "bg-white p-1" : ""
                      }`} 
                    />
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
                  {item.active && (
                    <Star className="ml-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                  )}
                </div>
                <div>
                  <span>{item.date}</span>
                </div>
              </div>
              <span className="text-zinc-400">{item.description}</span>
            </div>
          ))}
        </section>
        <section className="text-left w-full flex gap-4 flex-col mt-4 py-4 border-t-2 border-zinc-800 rounded-e-md">
          <h2 className="text-xl font-bold">Featured Videos</h2>
          <div className="flex flex-col gap-6">
            {featuredTweetIds.map((tweetId) => (
              <TweetVideo key={tweetId} tweetId={tweetId} />
            ))}
          </div>
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
                <div className="w-[300px] md:w-[600px]">
                  <YouTubeEmbed videoid={item.videoid} />
                </div>
              </div>
            </div>
          ))}
        </section>
    </div>
  );
}
