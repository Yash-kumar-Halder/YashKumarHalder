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
    imageUrl: "/css.png",
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Skills & Tech | Yash Kumar Halder Portfolio",
  description:
    "Discover the technical skills and technologies mastered by Yash Kumar Halder, including React, JavaScript, Node.js, MongoDB, and the MERN Stack.",
  openGraph: {
    title: "Skills & Tech | Yash Kumar Halder Portfolio",
    description:
      "Discover the technical skills and technologies mastered by Yash Kumar Halder, including React, JavaScript, Node.js, MongoDB, and the MERN Stack.",
    url: "/skills",
    siteName: "Yash Kumar Halder",
    images: ["/skills-og-image.jpg"], // Use a unique OG image for Skills page
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Tech | Yash Kumar Halder Portfolio",
    description:
      "Discover the technical skills and technologies mastered by Yash Kumar Halder, including React, JavaScript, Node.js, MongoDB, and the MERN Stack.",
    images: ["/skills-og-image.jpg"],
  },
  verification: {
    google: "duOrr4J6kHE_V0QxCUoQG-d9m098nQ9kIl2wrwaod-c",
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
          className={`${permanent_marker.className} text-gradient-teal-green text-[4vmin] sm:text-[5vmin] ml-3 md:text-[5vmin] text-muted-foreground`}
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
          className={`${permanent_marker.className} text-gradient-teal-green text-[4vmin] sm:text-[5vmin] md:text-[5vmin] text-muted-foreground ml-3`}
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
