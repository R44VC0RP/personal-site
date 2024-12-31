"use client";

import { useState } from "react";
import { DarkChromeInput } from "@/components/chrome-input";
import { DarkChromeButton } from "@/components/chrome-button";
import { DarkChromeCard } from "@/components/chrome-card";
import { toast } from "sonner";

export default function RiskyFridays() {
  const [username, setUsername] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCheckPushes = () => {
    console.log("Button clicked!");
    console.log("Username:", username);
    
    if (!username) {
      toast.error("Please enter a GitHub username");
      return;
    }

    toast.success("Checking pushes for:" + username);
    toast.error("Not implemented yet, how did you get here?");
  };

  return (
    <section className="risky-fridays">
      <h2 className="text-xl font-bold">Risky Fridays</h2>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full py-4">
          <DarkChromeCard className="text-center">
            <h3 className="text-2xl font-bold text-red-400">34%</h3>
            <p className="text-neutral-300">of developers push to prod on Fridays</p>
          </DarkChromeCard>
          
          <DarkChromeCard className="text-center">
            <h3 className="text-2xl font-bold text-yellow-400">78%</h3>
            <p className="text-neutral-300">of Friday deployments need hotfixes</p>
          </DarkChromeCard>
          
          <DarkChromeCard className="text-center">
            <h3 className="text-2xl font-bold text-green-400">2.5x</h3>
            <p className="text-neutral-300">more incidents occur on Friday deploys</p>
          </DarkChromeCard>
        </div>

        <div className="text-center py-8 max-w-2xl">
          <h3 className="text-2xl font-bold mb-3">Check Your Friday Risk Score</h3>
          <p className="text-neutral-300 mb-6">
            Curious about your own Friday deployment habits? Enter your GitHub username 
            below to analyze your repository push patterns and get your personal risk score.
          </p>
        </div>

        <form className="flex flex-col items-center w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <DarkChromeInput
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="mb-4 w-full"
          />
          <DarkChromeButton 
            type="button" 
            className="px-8"
            onClick={handleCheckPushes}
          >
            Check Pushes
          </DarkChromeButton>
        </form>
      </div>
    </section>
  );
}
