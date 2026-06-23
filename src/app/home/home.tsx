import React from "react";
import HomeHero from "@/components/MyComponent/home-hero";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import HorizontalScale from "@/components/MyComponent/horizontal-scale";
import VerticalScale from "@/components/MyComponent/vertical-scale";
import Experience from "@/components/MyComponent/experience";

const inter = Inter({
    subsets: ["latin"],
    weight: ["600"],
});

export const metadata: Metadata = {
    title: "Yash Kumar Halder | Portfolio",
    description:
        "Welcome to my portfolio! I am a Frontend Developer skilled in React, JavaScript, and MERN Stack. Explore my projects, skills, and DSA journey.",
    openGraph: {
        title: "Yash Kumar Halder | Portfolio",
        description:
            "Welcome to my portfolio! Explore projects, skills, and more of Yash Kumar Halder, Frontend Developer.",
        url: "https://your-domain.com",
        siteName: "Yash Kumar Halder",
        images: ["/og-image.jpg"], // Replace with your real Open Graph image
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yash Kumar Halder | Portfolio",
        description:
            "Welcome to my portfolio! Explore projects, skills, and more of Yash Kumar Halder, Frontend Developer.",
        images: ["/og-image.jpg"], // Replace with your real Twitter preview image
    },
};

const HomePage = () => {
    return (
        <div
            id="home"
            className={`${inter.className} w-full min-h-[95vh] overflow-hidden relative`}
        >
            <div className="relative h-full">
                {/* <HorizontalScale /> */}
                <div className="max-w-[1275px] min-h-full mx-auto flex items-stretch justify-center relative">
                    {/* <VerticalScale /> */}
                    <HomeHero />
                    {/* <VerticalScale /> */}
                </div>
                    <Experience />
                {/* <HorizontalScale className="bottom-0" /> */}
            </div>
        </div>
    );
};

export default HomePage;
