import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";
import { HardDriveDownload } from "lucide-react";
import { GitHub } from "./icons";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ryanvogel",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="dark antialiased">
      <head>
        {process.env.NODE_ENV === "development" && (
          <>
            <Script
              src="//unpkg.com/react-grab/dist/index.global.js"
              strategy="beforeInteractive"
            />
            <Script
              src="//unpkg.com/@react-grab/opencode/dist/client.global.js"
              strategy="lazyOnload"
            />
          </>
        )}
        <Script
          id="datafa-script"
          defer
          data-website-id="677960ba98cabf7c02a98635"
          data-domain="ryan.ceo"
          src="https://datafa.st/js/script.js">
        </Script>
      </head>
      <body className={`${GeistSans.className} ${GeistSans.variable} ${GeistMono.variable}`}>
        <main className="flex text-white min-h-screen flex-col items-center min-w-full p-4 bg-gradient-to-br from-[#8458B3] via-[#D0BDF4] to-[#A0D2EB] relative isolate">
          <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950">
            <div className="absolute inset-0 bg-[url('/images/noise-light.png')] bg-[length:100px_100px] opacity-[0.35]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25)_0%,transparent_70%)]" />
            {/* <CircuitBoard /> */}
          </div>
          <div className="max-w-3xl w-full ">
            <header className="py-6 sm:py-12">
              <div className="flex flex-row justify-between gap-4">
                <Link href="/" aria-label="Ryan Vogel home">
                  <div className="flex flex-row items-center">
                    <img src="https://unavatar.io/x/ryanvogel" alt="Ryan Vogel" width={48} height={48} className="mr-3 rounded-sm outline outline-1 -outline-offset-1 outline-white/10" />
                    <div className="flex flex-col">
                      <h1 className="font-bold text-2xl p-0 m-0">Ryan Vogel</h1>
                      <span className="text-neutral-200 p-0 m-0 text-base">Founder, Software Engineer & Integration Specialist</span>
                    </div>
                  </div>
                </Link>
                <div className="flex gap-1 sm:gap-2 items-center" aria-label="Ryan Vogel profiles and resume">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-lg fill-current transition-[background-color,transform] duration-150 hover:bg-white/10 active:scale-[0.96]"
                    aria-label="Ryan Vogel on GitHub"
                  >
                    <GitHub />
                  </a>
                  <a
                    href={SOCIAL_LINKS.x}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-lg fill-current transition-[background-color,transform] duration-150 hover:bg-white/10 active:scale-[0.96]"
                    aria-label="Ryan Vogel on X"
                  >
                    <Image src="/images/x-logo.png" alt="X Logo" width={24} height={24} />
                  </a>
                  <a className="flex size-11 items-center justify-center rounded-lg fill-current transition-[background-color,transform] duration-150 hover:bg-white/10 active:scale-[0.96]" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Ryan Vogel's resume">
                    <HardDriveDownload height={24} width={24} />
                  </a>
                </div>
              </div>
              <nav aria-label="Primary" className="mt-5 flex flex-wrap gap-1 border-t border-white/10 pt-3">
                {[
                  ["About", "/"],
                  ["Writing", "/blog"],
                  ["OpenCode projects", "/opencode"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-zinc-300 transition-[color,background-color,transform] duration-150 hover:bg-white/10 hover:text-white active:scale-[0.96]"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </header>
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
