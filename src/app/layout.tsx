import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/apfel-grotezk"; // Defaults to weight 400
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";
import { HardDriveDownload } from "lucide-react";
import { GitHub } from "./icons";
import Image from "next/image";
import LightChromeButton, { DarkChromeButton } from "@/components/chrome-button";
import LightChromeCard from "@/components/chrome-card";
import { Toaster } from "@/components/ui/sonner";
import CircuitBoard from "@/components/CircuitBoard";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Vogel",
  description: "Ryan Vogel's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark antialiased">
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
          data-domain="theryanvogel.com"
          src="https://datafa.st/js/script.js">
        </Script>
      </head>
      <body className={`${inter.className} ${GeistSans.variable} ${GeistMono.variable}`}>
        <main className="flex text-white min-h-screen flex-col items-center min-w-full p-4 bg-gradient-to-br from-[#8458B3] via-[#D0BDF4] to-[#A0D2EB] relative isolate">
          <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950">
            <div className="absolute inset-0 bg-[url('/images/noise-light.png')] bg-[length:100px_100px] opacity-[0.35]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25)_0%,transparent_70%)]" />
            {/* <CircuitBoard /> */}
          </div>
          <div className="max-w-3xl w-full ">
            <section className="py-6 sm:py-12 flex flex-row justify-between">
              <a href="/">
                <div className="flex flex-row items-center">
                  <img src="https://unavatar.io/x/ryanvogel" alt="Ryan Vogel" width={48} height={48} className="mr-3 rounded-sm" />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-2xl p-0 m-0">Ryan Vogel</h1>
                    <span className="text-neutral-200 p-0 m-0 text-base">Founder, Software Engineer & Integration Specialist</span>
                  </div>
                </div>
              </a>
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
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
