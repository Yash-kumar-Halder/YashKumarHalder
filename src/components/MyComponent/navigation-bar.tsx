"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

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
			className={`${inter.className} bg-[#ffffff80] w-[95%] md:w-[70%] flex items-center justify-between px-8 py-2 fixed top-2 left-1/2 transform -translate-x-1/2 shadow-sm dark:bg-[#242424c0] backdrop-blur-sm rounded-sm z-[50] `}
		>
			<div className="h-full items-center justify-center">
				<Link href="/">
					<h1 className="font-bold text-md md:text-lg hover:tracking-wider transition-all duration-200">
						<span className="text-red-600">Y</span>ASH{" "}
						<span className="text-red-600"> K</span>UMAR
					</h1>
				</Link>
			</div>
			<div className="flex items-center justify-end gap-3 h-full font-medium text-sm">
				<div className="md:flex items-center gap-4 md:gap-8 hidden">
					<Link className="hover:text-orange-400" href="/project">
						Projects
					</Link>
					<Link className="hover:text-orange-400" href="/about">
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
					{mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
				</button>

				<Sheet>
					<SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
					<SheetContent className="md:hidden">
						<SheetHeader>
							<SheetTitle>Are you absolutely sure?</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will
								permanently delete your account and remove your
								data from our servers.
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default NavigationBar;
