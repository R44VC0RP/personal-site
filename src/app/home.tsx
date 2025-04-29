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
    company: "Neon Postgres",
    date: "April 2025 - Present",
    icon_url: "/images/neon.png",
    description: "Advocated for Neon's serverless Postgres database by creating technical content, tutorials, and demos to educate developers. Engaged with the developer community through workshops, conferences, and social media. Gathered feedback to improve product features and documentation. Collaborated with engineering teams to ensure developer needs were addressed in product development.",
    title: "Developer Advocate",
  },
  {
    company: "City of Neptune Beach",
    date: "June 2023 - April 2025",
    icon_url: "/images/neptune-beach.png",
    description: "Managed critical infrastructure including camera and security access control systems. Administered Windows Active Directory and domain services. Handled news publication and media management. Oversaw multi-million dollar departmental budget and acted as interim CIO. Maintained live streaming capabilities for public meetings and managed standard IT ticketing system for city-wide technical support.",
    title: "Systems Administrator",
  },
  {
    company: "Best Buy | Geek Squad",
    date: "May 2022 - June 2023",
    icon_url: "/images/geek-squad.png",
    description: "Performed advanced diagnostics and repairs on a wide range of consumer electronics including computers, smartphones, and tablets. Managed complex technical issues, provided expert customer service, and maintained repair documentation while meeting quality and efficiency standards in a fast-paced retail environment.",
    title: "Advanced Repair Agent II",
  },
  {
    company: "Sensible Recycling",
    date: "May 2021 - August 2021",
    icon_url: "/images/reuse-it.png",
    description: "Specialized in electronics recycling, performing diagnostics and refurbishment of laptops, smartphones, and computers. Developed skills in hardware repair, data recovery, and operating system restoration while maintaining environmental sustainability standards.",
    title: "Software Engineer & Technician",
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
      "Offering the most affordable online custom 3D printing service, Mandarin 3D Prints outperforms competitors by 50% in pricing. Achieved $50k in gross sales within the first year. Developed a custom slicing infrastructure to ensure fast, reliable service for instant quotes and seamless order fulfillment. Established key collaborations with Vercel, Mintlify, and React Miami.",
    url: "https://mandarin3d.com",
    date: "October 2023 - Present",
    image_url: "/images/m3d-round.png",
  },
  {
    name: "TagTap - Customized Networking Badges",
    description:
      "TagTap offers customized NFC tags with your social profile that you can easily share at conventions and networking events. Create personalized digital business cards that allow instant connection with a simple tap.",
    url: "https://tagtap.com",
    date: "December 2024 - Present",
    image_url: "/images/tagtap.png",
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
              <div className="mb-2">
                <div className="min-w-full flex-row justify-between hidden sm:flex">
                  <div className="flex flew-row items-center">
                    <img src={item.icon_url as string} alt={item.company as string} className="h-5 inline-block mr-2" />
                    <HoverCard>
                      <HoverCardTrigger>
                        <h3 className="font-bold">{item.company}</h3>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-row w-full">
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
              {item.description && (
                <p className="text-zinc-400 mb-4">{item.description}</p>
              )}
            </div>
          ))}
        </section>
        <section className="text-left w-full flex gap-4 flex-col mt-4 py-4 border-t-2 border-zinc-800 rounded-e-md">
          <h2 className="text-xl font-bold">Businesses and Projects</h2>
          {projectItems.map((item, index) => (
            <div key={index} className="py-4">
              <div className="min-w-full flex flex-row justify-between items-center mb-2">
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
              <span className="text-zinc-400">{item.description}</span>
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
