import { Merienda, Cabin_Sketch, Amarante } from "next/font/google";
import Image from "next/image";
import React from "react";
import {
	Boxes,
	CircleArrowRight,
	Github,
	GraduationCap,
	Linkedin,
	School,
	Slack,
	SquareChartGantt,
} from "lucide-react";

const merienda = Merienda({
	subsets: ["latin"],
});
const cabin_sketch = Cabin_Sketch({
	subsets: ["latin"],
	weight: "400",
});
const amarante = Amarante({
	subsets: ["latin"],
	weight: "400",
});

const AboutMe = () => {
	return (
		<div id="about" className="w-full min-h-screen">
			<h1
				className={`${merienda.className} text-gradient-red-purple text-center font-bold text-[6vmin] `}
			>
				ABOUT ME
			</h1>
			<div>
				<div className="w-[90%] md:w-[80%] mt-10 mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_2fr] items-center gap-4">
					<div className="bg-gray-600/20 h-full p-0 rounded-md border border-transparent hover:border-gray-950/50 dark:hover:border-muted hover:scale-[1.02] transition-all duration-200 ">
						<Image
							src="/img-3.jpg"
							width={500}
							height={500}
							alt="image"
							className="w-full h-64 rounded-md object-cover"
						/>
					</div>
					<div className="w-full h-full px-8 py-2 md:pb-2 flex flex-col items-start justify-start bg-gray-600/20 rounded-md border border-transparent hover:border-gray-950/50 dark:hover:border-muted hover:scale-[1.02] transition-all duration-200 ">
						<h2
							className={`${cabin_sketch.className} flex items-center gap-2 text-[6vmin] text-emerald-700`}
						>
							<Boxes className="w-[6vmin] h-[6vmin] " />
							SELF-SUMMARY
						</h2>
						<div className="w-full h-full">
							<h3 className="text-[3.5vmin] md:text-[2.4vmin] font-bold text-gray-950/70 dark:text-gray-50/70">
								YASH KUMAR HALDER
							</h3>
							<span className="text-xs inline-block leading-[18px] pb-4  mt-2 md:mt-0 md:text-sm text-gray-600 font-medium dark:text-gray-400 ">
								{`I am a passionate Frontend Developer with a
								strong foundation in HTML, CSS, JavaScript, and
								React. Currently exploring backend technologies
								like Node.js and MongoDB to become a full-stack
								developer. I love building clean, user-friendly
								web applications and constantly strive to
								improve my skills through projects and daily
								learning. Let's build something amazing
								together.`}
							</span>
						</div>
					</div>
				</div>
				<div className="w-[90%] md:w-[80%] mt-4 mx-auto grid grid-cols-1 md:grid-cols-[2fr_1.5fr] items-center gap-4">
					<div className="w-full h-full px-8 py-2 pb-5 flex flex-col items-start justify-start bg-gray-600/20 rounded-md border border-transparent hover:border-gray-950/50 dark:hover:border-muted hover:scale-[1.02] transition-all duration-200 ">
						<h2
							className={`${cabin_sketch.className} text-[6vmin] flex items-center gap-2 text-orange-700`}
						>
							<SquareChartGantt className="w-[6vmin] h-[6vmin] " />
							INTERNSHIP
						</h2>
						<div className="w-full h-full">
							<h3 className="text-[3.5vmin] md:text-[2.4vmin] font-bold text-gray-950/70 dark:text-gray-50/70">
								A FULL STACK WEB DEVELOPMENT INTERNSHIP
							</h3>
							<p className="text-xs pb-4 mt-2 md:mt-0 md:text-sm text-gray-600 font-medium dark:text-gray-400 ">
								I am a dedicated Full Stack Web Developer with a
								strong grasp of HTML, CSS, JavaScript, React,
								and backend technologies. In January 2025, I
								completed a one-month Full Stack Web Development
								internship with PHP at Databits Technologia,
								where I gained practical experience in building
								dynamic and responsive web applications. I am
								passionate about writing clean, efficient code
								and continuously improving my skills to deliver
								impactful digital solutions.
							</p>
						</div>
					</div>
					<div className="h-full px-8 py-2 rounded-md border border-transparent hover:border-gray-950/50 dark:hover:border-muted bg-gray-600/20 hover:scale-[1.02] transition-all duration-200 text-purple-800">
						<div className="flex items-center gap-2">
							<GraduationCap className="w-[7vmin] h-[7vmin] md:w-[3vmin] md:h-[3vmin] " />
							<h2
								className={`${cabin_sketch.className} text-[6vmin] flex items-center gap-2 `}
							>
								DIPLOMA IN CST
							</h2>
						</div>
						<div className="w-full h-full">
							<h3 className="text-[3.5vmin] md:text-[2.4vmin] font-bold text-gray-950/70 dark:text-gray-50/70 ">
								BEHALA GOVERNMENT POOLYTECHNIC
							</h3>
							<p className="text-xs pb-4  mt-2 md:mt-0 md:text-sm text-gray-600 font-medium dark:text-gray-400  ">
								I am currently pursuing a Diploma in Computer
								Science & Technology, which I began in September
								2023 and am expected to complete in 2026. I am
								in my final year (5th semester) with a current
								average GPA of 7.65. My studies focus on
								building a strong foundation in programming, web
								development, and problem-solving, preparing me
								for a career in the tech industry.
							</p>
						</div>
					</div>
				</div>
				<div className="w-[90%] md:w-[80%] mt-4 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1.2fr] direction-rtl items-center gap-4">
					<div className="order-3 sm:order-1 about-card-bg-image h-full px-8 pt-8 pb-4 flex flex-col gap-5 items-start justify-start rounded-md border border-transparent hover:border-gray-950/50 dark:hover:border-muted hover:scale-[1.02] transition-all duration-200 ">
						<div className="w-full h-full bg-linear-to-r from-[#b8b8b81c] to-[#00000083] border border-[#202020] rounded-3xl overflow-hidden flex items-center justify-center gap-6 px-5 hover:border-gray-700">
							<div className="w-[30%] bg-linear-120 from-[#6d6d6d4f] to-[#0000003d] border border-[#242424] flex items-center justify-center rounded-full aspect-square cursor-pointer hover:-rotate-12 transition-all duration-150 hover:scale-105">
								<Linkedin className="stroke-muted stroke-0 fill-muted dark:fill-muted-foreground focus:fill-blue-500" />
							</div>
							<div className="w-[30%] bg-linear-120 from-[#6d6d6d4f] to-[#0000003d] border border-[#242424] flex items-center justify-center rounded-full aspect-square cursor-pointer hover:-rotate-12 transition-all duration-150 hover:scale-105">
								<Github className="fill-muted dark:fill-muted-foreground stroke-muted stroke-0" />
							</div>
						</div>
						<div className="w-full flex items-center justify-between">
							<h2
								className={`${amarante.className} text-[7vmin] md:text-[3vmin] leading-[3vmin] flex items-center gap-3 text-white`}
							>
								<Slack className="w-[7vmin] h-[7vmin] md:w-[3vmin] md:h-[3vmin]  " />
								SOCIAL MEDIA
							</h2>

							{/* <CircleArrowRight
								size={30}
								className="stroke-1 stroke-gray-600 hover:stroke-muted-foreground transition-all duration-200 hover:-rotate-12 cursor-pointer hover:scale-110"
							/> */}
						</div>
					</div>
					<div className="order-2 sm:order-2 h-full px-8 py-6 pb-4 rounded-md border border-transparent hover:border-gray-950/50 dark:hover:border-muted bg-gray-600/20 flex flex-col items-start justify-end relative overflow-hidden hover:scale-[1.02] transition-all duration-200 ">
						<Image
							src="/bg-illustration.png"
							width={300}
							height={300}
							alt="image"
							className="absolute w-32 top-0 right-10 md:w-48"
						/>
						<h2
							className={`${amarante.className} text-[6vmin] leading-[4.5vmin] flex items-center dark:text-gray-300`}
						>
							{`Let's`}
						</h2>
						<div className="w-full  flex items-center justify-between">
							<h2
								className={`${amarante.className} text-[6vmin] leading-[5.8vmin] dark:text-gray-300`}
							>
								work{" "}
								<span className="text-gradient-cyan-purple">
									together
								</span>
							</h2>
							<CircleArrowRight
								size={50}
								className="stroke-1 stroke-muted z-[1] hover:stroke-muted-foreground transition-all duration-200 hover:-rotate-12 cursor-pointer hover:scale-110"
							/>
						</div>
					</div>
					<div className="order-1 sm:order-3 h-full px-8 py-2 pb-5 flex flex-col items-start justify-start bg-gray-600/20 rounded-md border border-transparent hover:border-gray-950/50 dark:hover:border-muted hover:scale-[1.02] transition-all duration-200 ">
						<h2
							className={`${cabin_sketch.className} text-[6vmin] md:text-[3vmin] flex items-center gap-2 text-teal-500`}
						>
							<School className="w-[7vmin] h-[7vmin] md:w-[3vmin] md:h-[3vmin] stroke-2 " />
							HIGHER SECONDARY
						</h2>
						<div className="w-full h-full">
							<h3 className="text-[3.5vmin] md:text-[1.4vmin] font-bold text-gray-950/70 dark:text-gray-50/70">
								JYOTIRMOY BASU VOCATIONAL CENTER
							</h3>
							<p className="text-xs pb-4  mt-2 md:mt-0 md:text-sm text-gray-600 font-medium dark:text-gray-400 ">
								Completed Higher Secondary Education in 2024
								from Jyotrimoy Basu Vocational Center,
								Vocational Department, achieving an aggregate of
								81.8%. Ask ChatGPT
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
