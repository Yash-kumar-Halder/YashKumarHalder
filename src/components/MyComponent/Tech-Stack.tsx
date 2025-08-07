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
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
	{
		imageUrl: "/react.png",
		title: "HTML",
		description: "Hypertext Murkup Language",
	},
];

const tools = [
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
	{
		imageUrl: "/git.png",
		title: "GIT",
		description: "Version Controll System",
	},
];

const otherTeches = [
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
	},
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
	},
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
	},
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
	},
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
	},
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
	},
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
	},
	{
		imageUrl: "/java.png",
		title: "Java",
		description: "Library",
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
					className={`${permanent_marker.className} text-[5vmin] text-muted-foreground`}
				>
					Essential Tools I Use
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
					{tools.map((tool) => (
						<TechCard {...tool} key={tool.title} />
					))}
				</div>
			</div>
			<div className="mt-14">
				<h2
					className={`${permanent_marker.className} text-[5vmin] text-muted-foreground`}
				>
					Essential Tools I Use
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
					{otherTeches.map((tech) => (
						<TechCard {...tech} key={tech.title} />
					))}
				</div>
			</div>
		</div>
  );
}

export default TechStack
