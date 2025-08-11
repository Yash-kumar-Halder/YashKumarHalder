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
    <div className="min-h-screen">
      <h1
        className={`${merienda.className} text-gradient-red-purple text-center text-[12vmin] md:text-[6vmin] `}
      >
        Stats
      </h1>
      <div className=" mt-4 md:mt-[4vmin]  px-[8%] justify-center grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <LeetCodeStatsCard />
        <GithubStatsCard />
      </div>
    </div>
  );
};

export default Stats;
