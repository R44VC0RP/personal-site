"use client"

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ResendMCPPage() {
    const [copied, setCopied] = useState(false);

    const configJson = `{
  "mcpServers": {
    "resend-mcp-remote": {
      "url": "https://resend.exon.dev/mcp",
      "headers": {
        "resend-api-key": "resend-api-key"
      }
    }
  }
}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(configJson);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (
        <div>
            <section className="text-left w-full flex gap-4 flex-col">
                <h1 className="text-3xl font-bold mb-6">Remote Resend MCP</h1>
                
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-6">Available Tools</h2>
                    <div className="space-y-4">
                        <div className="relative border-l-4 border-green-400 pl-4 py-2 transition-all duration-300 hover:rounded-lg">
                            <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-green-400/20 to-transparent opacity-100 -z-10 rounded-r-md"></div>
                            <h3 className="font-bold text-green-400 text-lg mb-1">send-email</h3>
                            <p className="text-zinc-400">Send emails using Resend's API with customizable content and recipients.</p>
                        </div>
                        <div className="relative border-l-4 border-blue-400 pl-4 py-2 transition-all duration-300 hover:rounded-lg">
                            <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-blue-400/20 to-transparent opacity-100 -z-10 rounded-r-md"></div>
                            <h3 className="font-bold text-blue-400 text-lg mb-1">create-contact</h3>
                            <p className="text-zinc-400">Create and manage contacts in your Resend audiences.</p>
                        </div>
                        <div className="relative border-l-4 border-purple-400 pl-4 py-2 transition-all duration-300 hover:rounded-lg">
                            <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-purple-400/20 to-transparent opacity-100 -z-10 rounded-r-md"></div>
                            <h3 className="font-bold text-purple-400 text-lg mb-1">list-audiences</h3>
                            <p className="text-zinc-400">Retrieve and manage your Resend audience lists.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Add to Cursor</h2>
                    <p className="text-zinc-400 mb-4">
                        Click the button below to easily add the Resend MCP server to your Cursor IDE:
                    </p>
                    <a href="https://cursor.com/install-mcp?name=resend-mcp-remote&config=eyJ1cmwiOiJodHRwczovL3Jlc2VuZC5leG9uLmRldi9tY3AiLCJoZWFkZXJzIjp7InJlc2VuZC1hcGkta2V5IjoicmVzZW5kLWFwaS1rZXkifX0%3D">
                        <img
                            src="https://cursor.com/deeplink/mcp-install-dark.svg"
                            alt="Add resend-mcp-remote MCP server to Cursor"
                            height="32"
                        />
                    </a>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Manual Configuration</h2>
                    <p className="text-zinc-400 mb-4">
                        Alternatively, you can manually add the following configuration to your MCP settings:
                    </p>
                    <div className="relative">
                        <pre className="bg-zinc-900 p-4 rounded-md overflow-x-auto text-sm">
                            <code className="text-blue-400 geist-mono">{configJson}</code>
                        </pre>
                        <button
                            onClick={handleCopy}
                            className="absolute top-2 right-2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors duration-200 text-zinc-300 hover:text-white"
                            title={copied ? "Copied!" : "Copy to clipboard"}
                        >
                            {copied ? (
                                <Check size={16} className="text-green-400" />
                            ) : (
                                <Copy size={16} />
                            )}
                        </button>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">GitHub Repository</h2>
                    <p className="text-zinc-400 mb-4">
                        View the source code and documentation on GitHub:
                    </p>
                    <a
                        href="https://github.com/R44VC0RP/resend-mcp-remote"
                        target="_blank"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 hover:underline"
                    >
                        https://github.com/R44VC0RP/resend-mcp-remote
                    </a>
                </div>

                <div className="py-4 border-t-2 border-zinc-800">
                    <h2 className="text-xl font-bold mb-4">About</h2>
                    <p className="text-zinc-400">
                        The Remote Resend MCP server provides a convenient way to integrate Resend email services
                        directly into your Cursor IDE workflow. This MCP (Model Context Protocol) server allows
                        you to send emails and manage contacts through Resend's API without leaving your development environment.
                    </p>
                </div>
            </section>
        </div>
    );
}
