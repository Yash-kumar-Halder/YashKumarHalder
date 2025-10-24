import React from "react";
import HomeHero from "@/components/MyComponent/home-hero";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
	subsets: ["latin"],
	weight: ["600"],
});

export const metadata: Metadata = {
    title: "Yash Kumar Halder | Portfolio",
    description: "Welcome to my portfolio! I am a Frontend Developer skilled in React, JavaScript, and MERN Stack. Explore my projects, skills, and DSA journey.",
    openGraph: {
      title: "Yash Kumar Halder | Portfolio",
      description: "Welcome to my portfolio! Explore projects, skills, and more of Yash Kumar Halder, Frontend Developer.",
      url: "https://your-domain.com",
      siteName: "Yash Kumar Halder",
      images: ["/og-image.jpg"], // Replace with your real Open Graph image
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Yash Kumar Halder | Portfolio",
      description: "Welcome to my portfolio! Explore projects, skills, and more of Yash Kumar Halder, Frontend Developer.",
      images: ["/og-image.jpg"], // Replace with your real Twitter preview image
    },
  };

const HomePage = () => {
	return (
		<div
        id="home"
			className={`${inter.className} w-full min-h-screen px-8 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] overflow-hidden relative`}
		>
			<HomeHero />
		</div>
	);
};

export default HomePage;
