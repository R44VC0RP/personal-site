"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GlassMorphicCard from "@/components/GlassMorphicCard";
import { Upload, Download, Eye } from "lucide-react";
import * as htmlToImage from 'html-to-image';
import { toast } from "sonner";

interface Project {
    image: string | null;
    name: string;
    description: string;
}

type ThemeType = {
    name: string;
    gradient: string;
};

const themes: ThemeType[] = [
    {
        name: "Purple Dream",
        gradient: "from-purple-400/20 via-pink-400/20 to-blue-400/20"
    },
    {
        name: "Ocean Breeze",
        gradient: "from-cyan-400/20 via-teal-400/20 to-blue-400/20"
    },
    {
        name: "Sunset Vibes",
        gradient: "from-orange-400/20 via-red-400/20 to-yellow-400/20"
    }
];

export default function SaaSShowcase() {
    const [quantity, setQuantity] = useState<number>(6);
    const [username, setUsername] = useState<string>("");
    const [projectType, setProjectType] = useState<string>("SaaS");
    const [projects, setProjects] = useState<Project[]>(Array(6).fill({ image: null, name: "", description: "" }));
    const [selectedTheme, setSelectedTheme] = useState<number>(0);
    const showcaseRef = useRef<HTMLDivElement>(null);

    const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const newProjects = [...projects];
                newProjects[index] = {
                    ...newProjects[index],
                    image: event.target?.result as string
                };
                setProjects(newProjects);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(10, Math.max(1, Number(e.target.value)));
        setQuantity(value);
        setProjects(prev => {
            const newProjects = Array(value).fill({ image: null, name: "", description: "" });
            // Preserve existing project data when changing quantity
            for (let i = 0; i < Math.min(value, prev.length); i++) {
                newProjects[i] = prev[i];
            }
            return newProjects;
        });
    };

    const handleDownload = async () => {
        if (!showcaseRef.current) return;

        try {
            const dataUrl = await htmlToImage.toPng(showcaseRef.current, {
                quality: 1.0,
                backgroundColor: '#000',
            });

            const link = document.createElement('a');
            link.download = `${projectType.toLowerCase()}-showcase-${username || 'projects'}.png`;
            link.href = dataUrl;
            link.click();

            toast.success("Showcase image downloaded successfully!");
        } catch (error) {
            toast.error("Failed to generate image");
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-center">Project Showcase Generator</h1>
            <p className="text-center text-neutral-300 mb-8">Share your projects with the world by filling out the form below and click on each of the projects to upload your images. Then just download the image and share it with the world!</p>

            <div className="space-y-4">
                <Input
                    type="text"
                    placeholder="What are you building? (e.g., SaaS, Apps, Games)"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Your Twitter/X username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={handleQuantityChange}
                    placeholder="Number of projects (1-10)"
                />
                <div className="flex gap-4">
                    {themes.map((theme, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTheme(index)}
                            className={`flex-1 p-4 rounded-lg bg-gradient-to-r ${theme.gradient} 
                                ${selectedTheme === index ? 'ring-2 ring-white' : 'opacity-70'} 
                                transition-all duration-200 hover:opacity-100`}
                        >
                            {theme.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    ref={showcaseRef}
                    className={`min-w-[1500px] min-h-[500px] bg-gradient-to-r ${themes[selectedTheme].gradient} p-8 rounded-xl mx-auto overflow-hidden`}
                >
                    <div className="flex flex-col h-full justify-center">
                        <h2 className="text-2xl font-bold text-center mb-4">
                            Building {quantity} {projectType} in 2025 🎯
                        </h2>
                        {username && (
                            <p className="text-center text-neutral-300 mb-8">(with @{username})</p>
                        )}

                        <div className="flex justify-center gap-6 items-center">
                            {projects.map((project, index) => (
                                <div key={index} className="relative w-[200px]">
                                    <GlassMorphicCard className="aspect-square flex items-center justify-center">
                                        {project.image ? (
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={project.image}
                                                    alt={`Project ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                                <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-sm text-white">
                                                    #{index + 1}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center gap-2">
                                                <Eye className="w-8 h-8 text-white/60" />
                                                <span className="text-white/60">#{index + 1}</span>
                                            </div>
                                        )}
                                    </GlassMorphicCard>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(index, e)}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Button onClick={handleDownload} className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Showcase
                </Button>
            </div>
        </div>
    );
}
