import { HugeiconsIcon } from "@hugeicons/react";
import { CellsIcon, SourceCodeSquareIcon } from "@hugeicons/core-free-icons";
import { Merienda, Permanent_Marker, Cabin_Sketch } from "next/font/google";
import Image from "next/image";
import React from "react";

const merienda = Merienda({
	subsets: ["latin"],
});
const sabin_sketch = Cabin_Sketch({
	subsets: ["latin"],
	weight: "400",
});
const permanent_marker = Permanent_Marker({
	subsets: ["latin"],
	weight: "400",
});

const AboutMe = () => {
	return (
		<div className="w-full min-h-screen">
			<h1
				className={`${merienda.className} text-gradient-red-purple text-center font-bold text-[6vmin] `}
			>
				ABOUT ME
			</h1>
			<div>
				<div className="w-[70%] mt-10 mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_2fr] items-center gap-4">
					<div className="bg-gray-600/20 h-full p-6 rounded-lg border border-transparent hover:border-muted">
						<Image
							src="/img-3.jpg"
							width={500}
							height={500}
							alt="image"
							className="w-full h-64 rounded-2xl object-cover"
						/>
					</div>
					<div className="w-full h-full px-8 py-2 md:pb-2 flex flex-col items-start justify-start bg-gray-600/20 rounded-md border border-transparent hover:border-muted">
						<h2
							className={`${sabin_sketch.className} flex items-center gap-2 text-[6vmin] `}
						>
							<HugeiconsIcon icon={SourceCodeSquareIcon} className="w-[6vmin] h-[6vmin] " />
							SELF-SUMMARY
						</h2>
						<div className="w-full h-full">
							<h3 className="text-[2.4vmin] font-bold text-muted-foreground ">
								YASH KUMAR HALDER
							</h3>
							<p className="text-xs  pb-4  mt-2 md:mt-0 md:text-sm text-gray-400 ">
								I'm a passionate Frontend Developer with a
								strong foundation in HTML, CSS, JavaScript, and
								React. Currently exploring backend technologies
								like Node.js and MongoDB to become a full-stack
								developer. I love building clean, user-friendly
								web applications and constantly strive to
								improve my skills through projects and daily
								learning. Let's build something amazing
								together.
							</p>
						</div>
					</div>
				</div>
				<div className="w-[70%] mt-10 mx-auto grid grid-cols-1 md:grid-cols-[2fr_1.3fr] items-center gap-4">
					<div className="w-full h-full px-8 py-2 pb-5 flex flex-col items-start justify-start bg-gray-600/20 rounded-md border border-transparent hover:border-muted">
						<h2
							className={`${sabin_sketch.className} text-[6vmin] flex items-center gap-2 `}
						>
							<HugeiconsIcon
								icon={CellsIcon}
								className="w-[6vmin] h-[6vmin] "
							/>
							INTERNSHIP
						</h2>
						<div className="w-full h-full">
							<h3 className="text-[2.4vmin] font-bold text-muted-foreground ">
								A FULL STACK WEB DEVELOPMENT INTERNSHIP
							</h3>
							<p className="text-xs pb-4  mt-2 md:mt-0 md:text-sm text-gray-400 ">
								I'm a dedicated Full Stack Web Developer with a
								strong grasp of HTML, CSS, JavaScript, React,
								and backend technologies. In January 2025, I
								completed a one-month Full Stack Web Development
								internship with PHP at Databits Technologia,
								where I gained practical experience in building
								dynamic and responsive web applications. I'm
								passionate about writing clean, efficient code
								and continuously improving my skills to deliver
								impactful digital solutions.
							</p>
						</div>
					</div>
					<div className="h-full rounded-md border border-transparent hover:border-muted bg-gray-600/20">Hello</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
