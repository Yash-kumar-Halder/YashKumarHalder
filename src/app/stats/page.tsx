import GithubStatsCard from "@/components/MyComponent/github-stats-card";
import LeetCodeStatsCard from "@/components/MyComponent/leetcode-stats-card";
import { Merienda } from "next/font/google";
import Image from "next/image";
import React from "react";

const merienda = Merienda({
  subsets: ["latin"],
});


// app/components/LeetCodeStats.tsx

const Stats = () => {

  return (
    <div className="min-h-screen flex flex-col items-center">
  <h1 className={`${merienda.className} text-gradient-red-purple text-center text-[12vmin] md:text-[6vmin]`}>
    Stats
  </h1>

  <div className="mt-4 md:mt-[4vmin] px-[8%] grid grid-cols-1 lg:grid-cols-1  gap-5 place-items-center">
    <LeetCodeStatsCard />
    <GithubStatsCard />
  </div>
</div>

  );
};

export default Stats;
