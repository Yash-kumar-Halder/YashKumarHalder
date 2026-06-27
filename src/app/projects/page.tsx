"use client";
import { Merienda } from "next/font/google";
import Vibe from "../../../public/vibe.png";
import AttendanceSytem from "../../../public/attendance-system.png";
import OldPortfolio from "../../../public/old-portfolio.png";
import { Metadata } from "next";
import HorizontalScale from "@/components/MyComponent/horizontal-scale";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const merienda = Merienda({
    subsets: ["latin"],
});

// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// export const metadata: Metadata = {
//     metadataBase: new URL(siteUrl),
//     title: "Projects | Yash Kumar Halder Portfolio",
//     description:
//         "Explore the projects of Yash Kumar Halder, showcasing skills in React, JavaScript, and the MERN Stack.",
//     openGraph: {
//         title: "Projects | Yash Kumar Halder Portfolio",
//         description:
//             "Explore the projects of Yash Kumar Halder, showcasing skills in React, JavaScript, and the MERN Stack.",
//         url: "/projects",
//         siteName: "Yash Kumar Halder",
//         images: ["/projects-og-image.jpg"], // Create a unique OG image for Projects page
//         locale: "en_US",
//         type: "website",
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "Projects | Yash Kumar Halder Portfolio",
//         description:
//             "Explore the projects of Yash Kumar Halder, showcasing skills in React, JavaScript, and the MERN Stack.",
//         images: ["/projects-og-image.jpg"],
//     },
//     verification: {
//         google: "duOrr4J6kHE_V0QxCUoQG-d9m098nQ9kIl2wrwaod-c",
//     },
// };

const Projects = () => {
    return (
        <section id="projects" className="px-5">
            <div className="max-w-5xl mx-auto border-x">
                <HorizontalScale className="relative" />
                <h1 className="px-5 text-2xl text-neutral-600 font-bold dark:text-neutral-300 mb-3 border-y">
                    Projects
                </h1>
                <div className="px-5">
                    <ProjectCard
                        title="Hospital Management System"
                        githubUrl="https://github.com/Yash-Kumar-Halder/hospital-management"
                        liveUrl="https://hospital-demo.vercel.app"
                        description="A full-stack hospital management system that enables patient registration, appointment scheduling, doctor management, and secure record handling through an intuitive dashboard."
                        techStack={[
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "MongoDB",
                            "Express",
                            "Node.js",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    techStack: string[];
}

function ProjectCard({
    title,
    description,
    githubUrl,
    liveUrl,
    techStack,
}: ProjectCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            layout
            className="border border-dashed border-neutral-700 rounded-md px-2 sm:px-3.5 md:px-5 py-3 bg-background/40 backdrop-blur-sm"
        >
            <div className="flex items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center space-x-2">
                    <h2
                        onClick={() => setOpen((prev) => !prev)}
                        className="text-sm sm:text-lg font-medium select-none cursor-pointer"
                    >
                        {title}
                    </h2>

                    <div className="flex items-center gap-2">
                        {githubUrl && (
                            <Link
                                href={githubUrl}
                                target="_blank"
                                className="dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                            >
                                <RiGithubFill size={18} />
                            </Link>
                        )}

                        {liveUrl && (
                            <Link
                                href={liveUrl}
                                target="_blank"
                                className="dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                            >
                                <ExternalLink size={16} />
                            </Link>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="cursor-pointer"
                >
                    <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                        }}
                    >
                        <ChevronDown size={18} />
                    </motion.div>
                </button>
            </div>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            exit={{ y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="pt-4"
                        >
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {techStack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="font-normal rounded-sm px-3 dark:text-neutral-400"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Projects;
