"use client";
import React from "react";
import HomeHero from "@/components/MyComponent/home-hero";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: "600",
});

const HomePage = () => {
	return (
		<div
			className={`${inter.className} w-full min-h-screen px-8 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] overflow-hidden relative`}
		>
			<HomeHero />
		</div>
	);
};

export default HomePage;
