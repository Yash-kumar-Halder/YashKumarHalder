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
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/CSS.png",
		title: "CSS",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/js.jpeg",
		title: "JAVASCRIPT",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "REACT JS",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/nodejs.png",
		title: "NODE JS",
		description: "Hypertext Murkup Language",
	},

	{
		imageUrl: "/mongodb.svg",
		title: "MONGODB",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/java.png",
		title: "JAVA",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/python.png",
		title: "PYTHON",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/c.png",
		title: "C LANGUAGE",
		description: "Hypertext Murkup Language",
	},
];

const tools = [
	{
		imageUrl: "/vs-code.png",
		title: "VS CODE",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/postman-img.png",
		title: "POSTMAN",
		description: "Version Controll System",
	},
	{
		imageUrl: "/tailwind.png",
		title: "TAILWIND CSS",
		description: "Version Controll System",
	},
	{
		imageUrl: "/threejs.png",
		title: "THREE JS",
		description: "Version Controll System",
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
