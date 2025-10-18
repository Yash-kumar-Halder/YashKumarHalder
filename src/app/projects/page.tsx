import ProjectCard from "@/components/MyComponent/project-card";
import { Merienda } from "next/font/google";
import React from "react";

const merienda = Merienda({
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <section id="projects" className="py-10 sm:py-[5vmin] min-h-screen px-4 md:px-[10vmin] ">
      <h1
        className={`${merienda.className} text-center text-[12vmin] md:text-[6vmin] text-gradient-red-purple font-semibold `}
      >
        Projects
      </h1>
      <div className="md:px-[6vmin] ">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] min-h-[400px] gap-6  justify-center">
          <ProjectCard image="https://i.pinimg.com/736x/0e/2d/9e/0e2d9ef546920cb45cd226e369301e03.jpg" github="github.com" title="Project vibe" live="http://yashkumarhalder.vercel.app" layer="#00000020" />
          <ProjectCard image="https://i.pinimg.com/1200x/5f/6c/3a/5f6c3afb791cd46082eaec9fdc892acb.jpg" github="github.com" title="Project vibe" live="http://yashkumarhalder.vercel.app" layer="#ffffff30" />
          </div>
      </div>
    </section>
  );
};

export default Projects;
