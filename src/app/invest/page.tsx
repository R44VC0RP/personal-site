"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SocialIcon } from 'react-social-icons'
import { GlassMorphicCard } from "@/components/GlassMorphicCard";
import { Crown, Medal } from "lucide-react";
import { createInvestment, getTopInvestors } from "@/actions/investments";
import { Investment } from "@prisma/client";
export default function Invest() {
    const [username, setUsername] = useState("");
    const [amount, setAmount] = useState("");
    const [topInvestors, setTopInvestors] = useState<Investment[]>([]);

    const fetchTopInvestors = async () => {
        const topInvestors = await getTopInvestors();
        setTopInvestors(topInvestors);
    };

    useEffect(() => {
        fetchTopInvestors();
    }, []);

    const handleSubmit = async () => {
        if (!username || !amount) {
            toast.error("Please fill in all fields");
            return;
        }

        if (isNaN(Number(amount)) || Number(amount) <= 0) {
            toast.error("Please enter a valid amount");
            return;
        }

        toast.success("Investment request submitted!");
        const investment = await createInvestment(username, Number(amount));
        if (investment.success) {
            toast.success("Investment successful!");
            fetchTopInvestors();
            setUsername("");
            setAmount("");
        } else {
            toast.error(investment.error);
        }
    };

    return (
        <section className="min-h-screen">
            <div className="flex flex-col items-center max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 text-center text-white">Invest in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">@ryandavogel</span></h1>

                <div className="w-full max-w-2xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-center text-white">Top Investors</h2>
                    <div className="space-y-3">
                        {topInvestors.map((investor, index) => (
                            <div key={investor.username} 
                                className="flex items-center justify-between p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        {index === 0 ? (
                                            <Crown className="absolute -top-3 -left-1 text-yellow-500" />
                                        ) : index === 1 ? (
                                            <Medal className="absolute -top-3 -left-1 text-gray-400" />
                                        ) : index === 2 ? (
                                            <Medal className="absolute -top-3 -left-1 text-amber-600" />
                                        ) : null}
                                        {investor.username ? (
                                            <img 
                                                src={`https://unavatar.io/${investor.username}`} 
                                                alt={investor.username} 
                                                className="w-10 h-10 rounded-full"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold">
                                                {investor.username[0].toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-white font-medium">@{investor.username}</span>
                                </div>
                                <span className="text-green-400 font-bold">
                                    ${investor.amount.toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center max-w-2xl mb-8">
                    <p className="text-neutral-300">
                        Lock in early and fuel innovative, cool, and simple projects that maximize growth,
                        boost efficiency, and deliver high-impact results.
                    </p>
                </div>

                <form className="flex flex-col w-full max-w-md gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <SocialIcon url="https://x.com" />
                        <Input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your X username"
                            className="flex-1"
                        />
                    </div>
                    <Input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Investment amount"
                        className="px-4 py-3"
                    />

                    <Button
                        onClick={handleSubmit}
                        className="w-full mt-2"
                    >
                        Get in early
                    </Button>
                </form>
            </div>
        </section>
    );
}
