"use client";

import Image from "next/image";

type StoryBadgeProps = {
  name: string;
  logo?: string;
  href?: string;
  external?: boolean;
  noLogoBg?: boolean;
};

export default function StoryBadge({ name, logo, href, external, noLogoBg }: StoryBadgeProps) {
  const content = (
    <span 
      className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 rounded-md text-base font-medium text-white cursor-pointer transition-all shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]"
      style={{ background: 'linear-gradient(145deg, rgb(50,50,55) 0%, rgb(39,39,42) 100%)' }}
    >
      {logo && (
        <span className={`w-4 h-4 flex items-center justify-center rounded-sm overflow-hidden ${noLogoBg ? "" : "bg-white p-0.5"}`}>
          <Image
            src={logo}
            alt={name}
            width={16}
            height={16}
            className="object-contain w-full h-full rounded-sm"
          />
        </span>
      )}
      <span>{name}</span>
    </span>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">
          {content}
        </a>
      );
    }
    return (
      <a href={href} className="no-underline">
        {content}
      </a>
    );
  }

  return content;
}
