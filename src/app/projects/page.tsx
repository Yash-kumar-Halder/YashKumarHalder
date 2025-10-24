import ProjectCard from "@/components/MyComponent/project-card";
import { Merienda } from "next/font/google";
import React from "react";
import Vibe from "../../../public/vibe.png"
import AttendanceSytem from "../../../public/attendance-system.png"
import OldPortfolio from "../../../public/old-portfolio.png"
import { Metadata } from "next";

const merienda = Merienda({
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000/"), // ⚡ ensures OG & Twitter images resolve
    title: "Projects | Yash Kumar Halder",
    description:
      "Explore projects by Yash Kumar Halder — frontend developer skilled in React, JavaScript, and the MERN Stack. Discover web apps, UI designs, and innovative solutions.",
    openGraph: {
      title: "Projects | Yash Kumar Halder",
      description:
        "Showcasing the best projects by Yash Kumar Halder — including MERN stack web apps, interactive UIs, and modern frontend designs.",
      url: "/projects", // relative path; resolves against metadataBase
      siteName: "Yash Kumar Halder",
      images: ["/og-image.jpg"], // resolves to https://your-domain.com/og-image.jpg
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects | Yash Kumar Halder",
      description:
        "Explore React and MERN stack projects by Yash Kumar Halder — modern, responsive, and performance-focused web applications.",
      images: ["/og-image.jpg"], // resolves to https://your-domain.com/og-image.jpg
    },
  };
  

const Projects = () => {
  return (
    <section id="projects" className="py-10 sm:py-[5vmin] min-h-[60vh] h-fit px-4 md:px-[10vmin] ">
      <h1
        className={`${merienda.className} text-center text-[12vmin] md:text-[6vmin] text-gradient-red-purple font-semibold `}
      >
        Projects
      </h1>
      <div className="md:px-[6vmin] ">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] min-h-[400px] gap-6  justify-center">
          <ProjectCard image={Vibe} github="https://github.com/Yash-kumar-Halder/VIBE-Frontend" title="Vibe - A social media platform" live="https://vibe-eosin-mu.vercel.app/" layer="#ffffff05" text="#ffffff" />
          <ProjectCard image={AttendanceSytem} github="https://github.com/Yash-kumar-Halder/Attendance-System" title="Attendance System" live="https://attendance-system-virid.vercel.app/" layer="#00000060" text="#ffffff" />
          <ProjectCard image={OldPortfolio} github="https://github.com/Yash-kumar-Halder/Portfolio" title="Old Portfolio (React)" live="https://yashkumarhalder.vercel.app/" layer="#00000060" text="#ffffff" />
          </div>
      </div>
    </section>
  );
};

export default Projects;
