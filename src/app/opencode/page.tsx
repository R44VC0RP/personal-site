import { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Terminal, GitBranch, Search, Sparkles } from "lucide-react";
import GlassMorphicCard from "@/components/GlassMorphicCard";

export const metadata: Metadata = {
  title: "OpenCode Projects | Ryan Vogel",
  description: "Projects and tools I've built for the OpenCode ecosystem - AI-powered developer tools",
};

type OpenCodeProject = {
  name: string;
  description: string;
  command?: string;
  githubUrl?: string;
  features: string[];
  icon: React.ReactNode;
};

const projects: OpenCodeProject[] = [
  {
    name: "OCMT (OpenCommit)",
    description: "AI-powered git commit message, changelog & documentation generator using OpenCode. Generates conventional commit messages from your staged changes with a beautiful interactive CLI.",
    command: "npm install -g ocmt",
    githubUrl: "https://github.com/R44VC0RP/ocmt",
    features: [
      "AI-powered commit messages using OpenCode",
      "Changelog generation from commit history",
      "Interactive CLI with confirmation prompts",
      "Customizable commit rules via .oc/config.md",
      "Multiple aliases: oc, ocmt, opencommit",
    ],
    icon: <GitBranch className="w-8 h-8" />,
  },
  {
    name: "OpenSession",
    description: "Explore your OpenCode sessions and conversations in an easy searchable web interface. Browse through your coding history, search conversations, and revisit your AI-assisted development sessions.",
    command: "bunx opensession",
    features: [
      "Browse all OpenCode sessions",
      "Searchable conversation history",
      "Clean web interface",
      "Zero configuration required",
      "Instant access with bunx",
    ],
    icon: <Search className="w-8 h-8" />,
  },
];

export default function OpenCodePage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="w-12 h-12 flex items-center justify-center bg-zinc-800 p-2 rounded-lg">
            <Image
              src="/images/opencode-logo-light.png"
              alt="OpenCode"
              width={48}
              height={48}
              className="object-contain w-full h-full"
            />
          </span>
          <div>
            <h1 className="text-2xl font-bold">OpenCode Projects</h1>
            <p className="text-zinc-400">Tools and projects I've built for the OpenCode ecosystem</p>
          </div>
        </div>
        
        <p className="text-zinc-300 mt-2">
          <a 
            href="https://opencode.ai" 
            target="_blank" 
            className="text-purple-400 hover:text-purple-300 hover:underline"
          >
            OpenCode
          </a>{" "}
          is an open-source AI coding agent used by over 400,000 developers monthly. 
          It helps developers write and run code directly from the terminal with native TUI support, 
          LSP integration, and multi-session capabilities. Here are the tools I've built to enhance the OpenCode experience.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <GlassMorphicCard key={index} className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    {project.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{project.name}</h2>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-sm text-zinc-400 hover:text-purple-400 flex items-center gap-1"
                      >
                        View on GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-zinc-300">{project.description}</p>

              {project.command && (
                <div className="flex items-center gap-2 bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <code className="text-sm text-green-400 font-mono">{project.command}</code>
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-zinc-400 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="text-sm text-zinc-300 flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassMorphicCard>
        ))}
      </div>

      <div className="border-t border-zinc-800 pt-6">
        <h2 className="text-lg font-bold mb-4">Quick Start</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
            <h3 className="font-semibold mb-2 text-purple-400">Generate Commit Messages</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-zinc-400"># Install globally</p>
              <p className="text-green-400">npm install -g ocmt</p>
              <p className="text-zinc-400"># Stage changes and run</p>
              <p className="text-green-400">oc</p>
            </div>
          </div>
          <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
            <h3 className="font-semibold mb-2 text-purple-400">Browse Sessions</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-zinc-400"># Run directly with bunx</p>
              <p className="text-green-400">bunx opensession</p>
              <p className="text-zinc-400"># Opens web interface</p>
              <p className="text-green-400">localhost:3000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-zinc-500 text-sm pt-4">
        Built with OpenCode by{" "}
        <a href="/" className="text-purple-400 hover:underline">
          Ryan Vogel
        </a>
      </div>
    </section>
  );
}
