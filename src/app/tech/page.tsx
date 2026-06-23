import React from "react";
import { Merienda, Permanent_Marker } from "next/font/google";
import { Metadata } from "next";
import {
    IconBrandCss3,
    IconBrandDocker,
    IconBrandGit,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandRadixUi,
    IconBrandReactNative,
    IconBrandTailwind,
    IconBrandVercel,
    IconBrandVscode,
} from "@tabler/icons-react";
import { RiGithubFill, RiJavaFill, RiNodejsFill } from "react-icons/ri";
import Image from "next/image";
import ShadCnIcon from "../../../public/shadCn.png";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
        <section id="tech-stack" className="py-5">
            <h1 className="px-5 text-2xl border-y text-neutral-100 py-2">
                Tech Stack
            </h1>
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] border-b">
                    <div className="md:border-r border-dashed px-5">
                        <h4 className="pt-2 md:py-3 text-muted-foreground">
                            Languages
                        </h4>
                    </div>
                    <div className="flex flex-wrap gap-3 px-5 py-3">
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={17}
                                height={17}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
                                <path d="M9 12h4" />
                                <path d="M11 12v6" />
                                <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2" />
                            </svg>
                            <span className="text-xs text-neutral-200 font-light">
                                TypeScript
                            </span>
                        </div>

                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandJavascript stroke={1.5} size={20} />
                            <span className="text-xs text-neutral-200 font-light">
                                JavaScript
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <RiJavaFill size={18} />
                            <span className="text-xs text-neutral-200 font-light">
                                Java
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] border-b">
                    <div className="md:border-r border-dashed px-5">
                        <h4 className="pt-2 md:py-3 text-muted-foreground">Frontend</h4>
                    </div>
                    <div className="flex flex-wrap space-x-3 gap-y-2 px-5 py-3">
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandHtml5 stroke={1.5} size={20} />
                            <span className="text-xs text-neutral-200 font-light">
                                HTML
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandCss3 stroke={1.5} size={20} />
                            <span className="text-xs text-neutral-200 font-light">
                                CSS
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandReactNative stroke={1.5} size={20} />
                            <span className="text-xs text-neutral-200 font-light">
                                React
                            </span>
                        </div>

                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandNextjs stroke={1.5} size={20} />
                            <span className="text-xs text-neutral-200 font-light">
                                Next.js
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandTailwind stroke={1.5} size={20} />
                            <span className="text-xs text-neutral-200 font-light">
                                Tailwind
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <Image
                                src={ShadCnIcon}
                                alt="shadCn icon"
                                width={15}
                                height={15}
                            />
                            <span className="text-xs text-neutral-200 font-light">
                                ShadCn
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandRadixUi stroke={1.5} size={20} />
                            <span className="text-xs text-neutral-200 font-light">
                                Radix UI
                            </span>
                        </div>
                        <div className="flex gap-1.5 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-300">
                            <svg width="12" height="16" viewBox="0 0 17 24">
                                <path
                                    fill="currentColor"
                                    d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z"
                                ></path>
                            </svg>
                            <span className="text-xs text-neutral-200 font-light">
                                Base UI
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            {/* <IconBrandHtml5 stroke={1.5} size={20} /> */}
                            <span className="text-xs text-neutral-200 font-light">
                                MotionI
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] border-b">
                    <div className="md:border-r border-dashed px-5">
                        <h4 className="pt-2 md:py-3 text-muted-foreground">Backend</h4>
                    </div>
                    <div className="flex flex-wrap gap-3 px-5 py-3">
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <RiNodejsFill size={18} />
                            <span className="text-xs text-neutral-200 font-light">
                                Node.js
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] border-b">
                    <div className="md:border-r border-dashed px-5">
                        <h4 className="pt-2 md:py-3 text-muted-foreground">Database</h4>
                    </div>
                    <div className="flex flex-wrap gap-3 px-5 py-3">
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandMongodb
                                stroke={1.5}
                                size={18}
                                fill="#888"
                            />
                            <span className="text-xs text-neutral-200 font-light">
                                MongoDB
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            {/* <PostgreSQ stroke={1.5} size={18} fill="#888" /> */}
                            <span className="text-xs text-neutral-200 font-light">
                                PostgreSQL
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] border-b">
                    <div className="md:border-r border-dashed px-5">
                        <h4 className="pt-2 md:py-3 text-muted-foreground">
                            Tools & Technology
                        </h4>
                    </div>
                    <div className="flex flex-wrap gap-3 px-5 py-3">
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandVscode
                                stroke={1.5}
                                size={18}
                                fill="#aaa"
                            />
                            <span className="text-xs text-neutral-200 font-light">
                                VS Code
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            {/* <a  stroke={1.5} size={18}/> */}
                            <span className="text-xs text-neutral-200 font-light">
                                Postman
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandGit size={18} stroke={1.5} />
                            <span className="text-xs text-neutral-200 font-light">
                                Git
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <RiGithubFill size={18} fill="#ccc" />
                            <span className="text-xs text-neutral-200 font-light">
                                Github
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandVercel
                                stroke={1.5}
                                size={18}
                                fill="#bbb"
                            />
                            <span className="text-xs text-neutral-200 font-light">
                                Vercel
                            </span>
                        </div>
                        <div className="flex gap-1 items-center border bg-neutral-700/40 px-2 py-1 rounded-sm text-neutral-200">
                            <IconBrandDocker
                                stroke={1.5}
                                size={18}
                                fill="#bbb"
                            />
                            <span className="text-xs text-neutral-200 font-light">
                                Docker
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
