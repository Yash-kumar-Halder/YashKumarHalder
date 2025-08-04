"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const inter = Inter({
	subsets: ["latin"],
	// weight: ["400", "700"],
	display: "swap",
});

const NavigationBar = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<div
			className={`${inter.className} w-[100%] flex items-center justify-between px-8 py-2 fixed top-0 shadow-sm`}
		>
			<div className="h-full items-center justify-center">
				<h1 className="font-bold text-lg">
					<span className="text-red-600">Y</span>ASH{" "}
					<span className="text-red-600"> K</span>UMAR
				</h1>
			</div>
			<div className="flex items-center justify-end gap-3 h-full font-medium text-sm">
				<div className="flex items-center gap-8">
					<Link className="hover:text-orange-400" href="/project">
						Projects
					</Link>
					<Link className="hover:text-orange-400" href="/aout">
						About
					</Link>
					<Link className="hover:text-orange-400" href="/contact">
						Contact
					</Link>
				</div>
				<button
					className="cursor-pointer ml-3"
					onClick={() => {
						setTheme(theme === "dark" ? "light" : "dark");
					}}
				>
					{theme === "dark" ? <Sun /> : <Moon />}
				</button>
			</div>
		</div>
	);
};

export default NavigationBar;
