"use client";

import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import GlassMorphicCard from "@/components/GlassMorphicCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getRiskLevel, getTopRiskyUsers } from "@/actions/riskyfridays";
import { Loader, AlertTriangle, CheckCircle, Clock, Share2 } from "lucide-react";
import { GitHubStats } from "@/actions/riskyfridays";
import * as htmlToImage from 'html-to-image';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { prisma } from "@/lib/prisma";
import { RiskyFriday } from "@prisma/client";

export default function RiskyFridays() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GitHubStats | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [topRiskyUsers, setTopRiskyUsers] = useState<RiskyFriday[]>([]);
  const [amountOfRiskyFridays, setAmountOfRiskyFridays] = useState(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    if (!username) {
      toast.error("Please enter a GitHub username");
      return;
    }

    setLoading(true);
    setResults(null);

    try {
      const stats = await getRiskLevel(username);
      setResults(stats);
      await fetchTopRiskyUsers();

      if (stats.riskLevel > 75) {
        toast.error("High risk! You love living dangerously! 😱");
      } else if (stats.riskLevel > 50) {
        toast.warning("Moderate risk - maybe reconsider those Friday deploys? 😅");
      } else {
        toast.success("Low risk - you're playing it safe! 👏");
      }
    } catch (error) {
      toast.error("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getRiskCategory = (riskLevel: number) => {
    if (riskLevel > 75) return { text: "High Risk", color: "text-red-400" };
    if (riskLevel > 50) return { text: "Moderate Risk", color: "text-yellow-400" };
    return { text: "Low Risk", color: "text-green-400" };
  };

  const handleShare = async () => {
    if (!statsRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(statsRef.current, {
        quality: 1.0,
        backgroundColor: '#000',
        style: {
          padding: '20px',
          borderRadius: '12px',
        }
      });

      // Create a temporary link element
      const link = document.createElement('a');
      link.download = `risky-fridays-${username}.png`;
      link.href = dataUrl;
      link.click();

      toast.success("Stats image downloaded! Share it on Twitter/X with #RiskyFridays");
    } catch (error) {
      toast.error("Failed to generate image");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopRiskyUsers();
  }, []);

  const fetchTopRiskyUsers = async () => {
    try {
      const { users, amountOfRiskyFridays } = await getTopRiskyUsers();
      setTopRiskyUsers(users);
      setAmountOfRiskyFridays(amountOfRiskyFridays);
    } catch (error) {
      console.error('Failed to fetch top risky users:', error);
    }
  };

  return (
    <section className="risky-fridays">
      <h2 className="text-xl font-bold">Risky Fridays</h2>
      <div className="flex flex-col items-center">

        <div className="w-full max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Most Risky Developers</h2>
          <div className="space-y-3">
            {topRiskyUsers.map((user, index) => (
              <div key={user.username}
                className="flex items-center justify-between p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {index === 0 ? (
                      <AlertTriangle className="absolute -top-3 -left-1 text-red-500" />
                    ) : index === 1 ? (
                      <AlertTriangle className="absolute -top-3 -left-1 text-yellow-400" />
                    ) : index === 2 ? (
                      <AlertTriangle className="absolute -top-3 -left-1 text-orange-400" />
                    ) : null}
                    <img
                      src={`https://github.com/${user.username}.png`}
                      alt={user.username}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <span className="text-white font-medium">@{user.username}</span>
                </div>
                <span className={`font-bold ${getRiskCategory(user.riskLevel).color}`}>
                  {user.riskLevel.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {!results && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full py-4">
            <GlassMorphicCard className="text-center">
              <h3 className="text-2xl font-bold text-red-400">{amountOfRiskyFridays}</h3>
              <p className="text-neutral-300">of developers push to prod on Fridays</p>
            </GlassMorphicCard>

            <GlassMorphicCard className="text-center">
              <h3 className="text-2xl font-bold text-yellow-400">78%</h3>
              <p className="text-neutral-300">of Friday deployments need hotfixes</p>
            </GlassMorphicCard>

            <GlassMorphicCard className="text-center">
              <h3 className="text-2xl font-bold text-green-400">2.5x</h3>
              <p className="text-neutral-300">more incidents occur on Friday deploys</p>
            </GlassMorphicCard>
          </div>
        )}

        {results && (
          <>
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl my-8">
              <GlassMorphicCard className="text-center sm:col-span-2 lg:col-span-1" highlight>
                <h3 className="text-3xl font-bold mb-2">
                  <span className={getRiskCategory(results.riskLevel).color}>
                    {results.riskLevel.toFixed(1)}%
                  </span>
                </h3>
                <p className="text-neutral-300">Risk Score</p>
                <p className={`text-sm mt-2 ${getRiskCategory(results.riskLevel).color}`}>
                  {getRiskCategory(results.riskLevel).text}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-neutral-400">
                    Based on analysis of {results.totalCommits} commits
                  </p>
                </div>
              </GlassMorphicCard>

              <GlassMorphicCard className="text-center">
                <h3 className="text-xl font-bold text-neutral-200 mb-4">Commit Patterns</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">
                      {results.fridayPercentage.toFixed(1)}%
                    </p>
                    <p className="text-sm text-neutral-300">
                      of your commits are on Fridays
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">
                      {results.lateNightPercentage.toFixed(1)}%
                    </p>
                    <p className="text-sm text-neutral-300">
                      are late night commits
                    </p>
                  </div>
                </div>
              </GlassMorphicCard>

              <GlassMorphicCard className="text-center">
                <h3 className="text-xl font-bold text-neutral-200 mb-4">Risk Breakdown</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Risky Commits:</span>
                    <span className="text-red-400 font-bold">{results.riskyCommits}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Repos Analyzed:</span>
                    <span className="text-blue-400 font-bold">{results.analyzedRepos}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Total Commits:</span>
                    <span className="text-green-400 font-bold">{results.totalCommits}</span>
                  </div>
                </div>
              </GlassMorphicCard>

              <GlassMorphicCard className="sm:col-span-2 lg:col-span-3">
                <h3 className="text-xl font-bold text-neutral-200 mb-4">Weekly Commit Pattern</h3>
                <div className="w-full h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={results.commitsByDay}>
                      <XAxis
                        dataKey="day"
                        stroke="#94a3b8"
                        fontSize={12}
                      />
                      <YAxis
                        stroke="#94a3b8"
                        fontSize={12}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1a1a1a',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          padding: '8px'
                        }}
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      />
                      <Legend
                        wrapperStyle={{
                          paddingTop: '16px'
                        }}
                      />
                      <Bar
                        dataKey="commits"
                        name="Regular Hours"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="riskyCommits"
                        name="After Hours"
                        fill="#ef4444"
                        radius={[4, 4, 0, 0]}
                        stackId="a"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </GlassMorphicCard>

              <div className="absolute bottom-4 right-4 text-sm text-neutral-500">
                theryanvogel.com/riskyfridays
              </div>
            </div>

            <Button
              onClick={handleShare}
              className="mt-4 flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share Results
            </Button>
          </>
        )}

        <div className="text-center py-8 max-w-2xl">
          <h3 className="text-2xl font-bold mb-3">Check Your Friday Risk Score</h3>
          <p className="text-neutral-300 mb-6">
            Curious about your own Friday deployment habits? Enter your GitHub username
            below to analyze your repository push patterns and get your personal risk score.
          </p>
        </div>

        <form
          className="flex flex-col items-center w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="mb-4 w-full"
            disabled={loading}
          />
          <Button
            type="submit"
            className="px-8 flex items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="animate-spin" />
                Analyzing...
              </>
            ) : (
              'Check Risk Level'
            )}
          </Button>
        </form>


      </div>
    </section>
  );
}
