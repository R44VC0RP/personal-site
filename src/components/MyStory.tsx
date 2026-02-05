"use client";

import StoryBadge from "./StoryBadge";

// Badge color preview - DELETE THIS SECTION AFTER CHOOSING
function BadgeColorPreview() {
  const sampleBadge = { name: "Databricks", logo: "/images/databricks.png" };
  return (
    <div className="mb-8 p-4 border border-zinc-700 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Pick a badge style (gradient inset border):</h3>
      <div className="flex flex-wrap gap-3 items-center">
        {/* 1. Zinc */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 bg-zinc-900 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"
          style={{ background: 'linear-gradient(145deg, rgb(39,39,42) 0%, rgb(24,24,27) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>1. Zinc</span>
        </span>
        {/* 2. Blue */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(37,99,235) 0%, rgb(29,78,216) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>2. Blue</span>
        </span>
        {/* 3. Indigo */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(99,102,241) 0%, rgb(79,70,229) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>3. Indigo</span>
        </span>
        {/* 4. Violet */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(139,92,246) 0%, rgb(124,58,237) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>4. Violet</span>
        </span>
        {/* 5. Purple */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(168,85,247) 0%, rgb(147,51,234) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>5. Purple</span>
        </span>
        {/* 6. Teal */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(20,184,166) 0%, rgb(13,148,136) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>6. Teal</span>
        </span>
        {/* 7. Cyan */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(6,182,212) 0%, rgb(8,145,178) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>7. Cyan</span>
        </span>
        {/* 8. Emerald */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>8. Emerald</span>
        </span>
        {/* 9. Orange */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(249,115,22) 0%, rgb(234,88,12) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>9. Orange</span>
        </span>
        {/* 10. Rose */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(145deg, rgb(244,63,94) 0%, rgb(225,29,72) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>10. Rose</span>
        </span>
        {/* 11. Blue→Violet Gradient */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(135deg, rgb(59,130,246) 0%, rgb(139,92,246) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>11. Blue→Violet</span>
        </span>
        {/* 12. Teal→Cyan Gradient */}
        <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
          style={{ background: 'linear-gradient(135deg, rgb(20,184,166) 0%, rgb(6,182,212) 100%)' }}>
          <img src={sampleBadge.logo} alt="" className="w-4 h-4 rounded-sm bg-white p-0.5" />
          <span>12. Teal→Cyan</span>
        </span>
      </div>
    </div>
  );
}

// Company badges with logos - these link to sections on the page
const companies = {
  mandarin3d: {
    name: "Mandarin 3D",
    logo: "/images/m3d-logo.png",
    href: "#mandarin-3d-prints",
    noLogoBg: true,
  },
  sensibleRecycling: {
    name: "Sensible Recycling",
    logo: "/images/reuse-it.png",
    href: "#sensible-recycling",
  },
  geekSquad: {
    name: "Geek Squad",
    logo: "/images/geek-squad.png",
    href: "#geek-squad",
  },
  neptuneBeach: {
    name: "City of Neptune Beach",
    logo: "/images/neptune-beach.png",
    href: "#neptune-beach",
  },
  neon: {
    name: "Neon Postgres",
    logo: "/images/neon.png",
    href: "#neon-postgres",
  },
  databricks: {
    name: "Databricks",
    logo: "/images/databricks.png",
    href: "#databricks",
  },
  opencode: {
    name: "OpenCode",
    logo: "/images/opencode-logo-light.png",
    href: "#opencode",
  },
  inbound: {
    name: "Inbound",
    logo: "/images/inbound.png",
    href: "#inbound",
  },
};

// External links
const external = {
  scratch: {
    name: "Scratch from MIT",
    logo: "/images/scratch-logo.png",
    href: "https://scratch.mit.edu",
    external: true,
    noLogoBg: true,
  },
  nextjsConf: {
    name: "Next.js Conf 2025",
    logo: "/images/youtube-logo.png",
    href: "https://www.youtube.com/watch?v=F8c6tgJ1Qqs&list=PLBnKlKpPeagkc4H_987rIiRt3Mkb9HrMp&index=9",
    external: true,
    noLogoBg: true,
  },
  tinyLittleTechShop: {
    name: "Tiny Little Tech Shop",
  },
  ryanVogel: {
    name: "Ryan Vogel",
  },
};

export default function MyStory() {
  return (
    <section className="text-left w-full flex gap-4 flex-col mb-4 pb-4 border-b-2 border-zinc-800">
      {/* <BadgeColorPreview /> */}
      <h2 className="text-xl font-bold">My Story</h2>
      <div className="text-zinc-300 leading-relaxed space-y-4">
        <p>
          Hi! My name is <StoryBadge {...external.ryanVogel} /> and I am a developer, founder & content creator.
        </p>

        <p>
          My journey started back in 2015 when I first started coding (at the age of 10). My parents got me coding with{" "}
          <StoryBadge {...external.scratch} /> and QBasic. Fast forward to 2021, I got my first ever tech job at{" "}
          <StoryBadge {...external.tinyLittleTechShop} />, where I was put in charge of a cornerside tech repair shop and told to essentially run it all by myself.
        </p>

        <p>
          One day the owner walked in with an Ender 3 3D printer and told me to make a revenue stream out of it, so I developed a simple software built in PHP & HTML that would allow people to upload 3D models and get instant quotes for 3D printing.
        </p>

        <p>
          A couple months later the owner refused to pay me for 4 weeks, so I gave him an ultimatum: either he could back-pay me OR he could give me exclusive IP and rights over the 3D printing section of the company and the printers we had. This is what founded{" "}
          <StoryBadge {...companies.mandarin3d} />. Over the course of the next year I scaled it up to $70k in sales.
        </p>

        <p>
          As I was running <StoryBadge {...companies.mandarin3d} />, I also worked for{" "}
          <StoryBadge {...companies.sensibleRecycling} />, a tech debt & recycling center where I also ran the storefront as well as minimal operations. When I felt I wanted an upgrade from tech recycling, I joined{" "}
          <StoryBadge {...companies.geekSquad} /> as an <span className="font-bold underline">Advanced Repair Agent</span>.
        </p>

        <p>
          Around a year after that, I got a mysterious call from someone who told me they got my number from someone in my small group and asked me if I was looking for work. I replied I was, and they asked me a couple plain Windows AD & Server Management questions. After I answered those, I was told to show up to an address (not a company) at 8AM on Monday.
        </p>

        <p>
          It turned out to be <StoryBadge {...companies.neptuneBeach} /> where I went through a couple of levels. I started out as a{" "}
          <span className="font-bold underline">Contract IT Worker</span>, then became{" "}
          <span className="font-bold underline">Interim CIO</span> for the city, and finally settled as a{" "}
          <span className="font-bold underline">Systems Administrator & Network Engineer</span> before leaving.
        </p>

        <p>
          I joined <StoryBadge {...companies.neon} /> as a{" "}
          <span className="font-bold underline">Developer Advocate</span> (DevRel) in April of 2025, and unknown to me until my first day, we were being acquired by{" "}
          <StoryBadge {...companies.databricks} />. So then a couple months after joining{" "}
          <StoryBadge {...companies.neon} />, I joined <StoryBadge {...companies.databricks} /> as an{" "}
          <span className="font-bold underline">L3 Developer Advocate</span>.
        </p>

        <p>
          During this time I also founded <StoryBadge {...companies.inbound} />, my open-source email infrastructure company that (at the time) was the only simple to use platform that would let you receive emails in simple to manage webhooks and reply in email threads programmatically. It has grown to over 1000+ users and is still growing to this day.
        </p>

        <p>
          I had a great time going to conventions and networking, as well as giving my first ever talk at{" "}
          <StoryBadge {...external.nextjsConf} />, which went pretty well. In January of 2026, I joined{" "}
          <StoryBadge {...companies.opencode} />, an agentic coding tool that allows developers to use AI to become more effective. Next up is.....
        </p>
      </div>
    </section>
  );
}
