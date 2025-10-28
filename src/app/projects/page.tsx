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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Projects | Yash Kumar Halder Portfolio",
  description:
    "Explore the projects of Yash Kumar Halder, showcasing skills in React, JavaScript, and the MERN Stack.",
  openGraph: {
    title: "Projects | Yash Kumar Halder Portfolio",
    description:
      "Explore the projects of Yash Kumar Halder, showcasing skills in React, JavaScript, and the MERN Stack.",
    url: "/projects",
    siteName: "Yash Kumar Halder",
    images: ["/projects-og-image.jpg"], // Create a unique OG image for Projects page
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Yash Kumar Halder Portfolio",
    description:
      "Explore the projects of Yash Kumar Halder, showcasing skills in React, JavaScript, and the MERN Stack.",
    images: ["/projects-og-image.jpg"],
  },
  verification: {
    google: "duOrr4J6kHE_V0QxCUoQG-d9m098nQ9kIl2wrwaod-c",
  },
};

  

const Projects = () => {
  return (
    <section id="projects" className="py-10 sm:py-[5vmin] min-h-[72vh] h-fit px-4 md:px-[10vmin] ">
      <h1
        className={`${merienda.className} text-center text-[12vmin] md:text-[6vmin] text-gradient-red-purple font-semibold `}
      >
        Projects
      </h1>
      <div className="md:px-[6vmin] ">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] min-h-[400px] gap-6  justify-center px-2 md:px-6 lg:px-8 xl:px-8">
          <ProjectCard image={Vibe} github="https://github.com/Yash-kumar-Halder/VIBE-Frontend" title="Vibe - A social media platform" live="https://vibemedia.vercel.app/" layer="#ffffff05" text="#ffffff" />
          <ProjectCard image={AttendanceSytem} github="https://github.com/Yash-kumar-Halder/Attendance-System" title="Attendance System" live="https://attendance-system-virid.vercel.app/" layer="#00000060" text="#ffffff" />
          <ProjectCard image={OldPortfolio} github="https://github.com/Yashkumardev/Portfolio" title="Old Portfolio (React)" live="https://yashworks.vercel.app/" layer="#00000060" text="#ffffff" />
          </div>
      </div>
    </section>
  );
};

export default Projects;
