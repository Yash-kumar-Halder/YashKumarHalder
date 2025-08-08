import React from 'react';
import {Merienda, Permanent_Marker} from "next/font/google";
import TechCard from './tech-card';

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


const TechStack = () => {
  return (
		<div className="w-full min-h-screen px-[5%] pb-24">
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
		</div>
  );
}

export default TechStack
