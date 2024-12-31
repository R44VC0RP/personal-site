"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RiskyFridays() {
  const [username, setUsername] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <section className="risky-fridays">
      <h2 className="text-xl font-bold">Risky Fridays</h2>
      <form className="flex flex-col items-center">
        <Input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="mb-4"
        />
        <Button type="button" variant="default">
          Check Pushes
        </Button>
      </form>
    </section>
  );
}
