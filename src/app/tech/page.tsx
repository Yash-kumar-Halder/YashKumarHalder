import React from "react";
import { Merienda, Permanent_Marker } from "next/font/google";
import TechCard from "@/components/MyComponent/tech-card";
import { Metadata } from "next";

const merienda = Merienda({
  subsets: ["latin"],
});
const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const languages = [
  {
    imageUrl: "/html.png",
    title: "HTML",
    description: "Hypertext Markup Language",
  },
  {
    imageUrl: "/CSS.png",
    title: "CSS",
    description: "Cascading Style Sheets",
  },
  {
    imageUrl: "/js.jpeg",
    title: "JavaScript",
    description: "Programming language for web development",
  },
  {
    imageUrl: "/react.png",
    title: "React JS",
    description: "JavaScript library for building UIs",
  },
  {
    imageUrl: "/nodejs.png",
    title: "Node.js",
    description: "JavaScript runtime for backend development",
  },
  {
    imageUrl: "/mongodb.svg",
    title: "MongoDB",
    description: "NoSQL document database",
  },
  {
    imageUrl: "/java.png",
    title: "Java",
    description: "Object-oriented programming language",
  },
  {
    imageUrl: "/python.png",
    title: "Python",
    description: "High-level general-purpose programming language",
  },
  {
    imageUrl: "/c.png",
    title: "C Language",
    description: "Low-level procedural programming language",
  },
];

const tools = [
  {
    imageUrl: "/vs-code.png",
    title: "VS Code",
    description: "Code editor by Microsoft",
  },
  {
    imageUrl: "/git.png",
    title: "Git",
    description: "Version control system",
  },
  {
    imageUrl: "/postman-img.png",
    title: "Postman",
    description: "API testing tool",
  },
  {
    imageUrl: "/tailwind.png",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
  },
  {
    imageUrl: "/threejs.png",
    title: "Three.js",
    description: "3D JavaScript library",
  },
];

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000/"), // ⚡ ensures OG & Twitter images resolve
    title: "Tech Stack | Yash Kumar Halder",
    description:
      "Discover the tech stack and skills of Yash Kumar Halder — frontend and full-stack developer skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    openGraph: {
      title: "Tech Stack | Yash Kumar Halder",
      description:
        "Explore the programming languages, frameworks, and tools mastered by Yash Kumar Halder including JavaScript, React, Node.js, MongoDB, HTML, CSS, and more.",
      url: "/tech", // relative path; will resolve against metadataBase
      siteName: "Yash Kumar Halder",
      images: ["/og-image-tech.jpg"], // resolves to https://your-domain.com/og-image-tech.jpg
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tech Stack | Yash Kumar Halder",
      description:
        "Frontend and full-stack developer skills of Yash Kumar Halder — showcasing languages, frameworks, and tools used in projects.",
      images: ["/og-image-tech.jpg"], // resolves to https://your-domain.com/og-image-tech.jpg
    },
  };
  

const TechStack = () => {
  return (
    <section id="tech" className="w-full min-h-screen px-[10%] pb-24">
      <h1
        className={`${merienda.className} text-gradient-red-purple text-center font-bold text-[6vmin] `}
      >
        TECH STACK
      </h1>
      <div className="mt-12">
        <h2
          className={`${permanent_marker.className} text-gradient-teal-green text-[8vmin] ml-3 md:text-[5vmin] text-muted-foreground`}
        >
          Languages I Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {languages.map((lang) => (
            <TechCard {...lang} key={lang.title} />
          ))}
        </div>
      </div>
      <div className="mt-14">
        <h2
          className={`${permanent_marker.className} text-gradient-teal-green text-[5vmin] text-muted-foreground`}
        >
          Essential Tools I Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {tools.map((tool) => (
            <TechCard {...tool} key={tool.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
