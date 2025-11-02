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

const NavigationBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={`${inter.className} bg-[#ffffff80] w-[95%] h-10 md:w-[70%] flex items-center justify-between px-8 py-0.5 fixed top-2 left-1/2 transform -translate-x-1/2 shadow-sm dark:bg-[#242424c0] backdrop-blur-sm rounded-sm z-[50] `}
    >
      <div className="h-full flex items-center justify-center">
        <Link href="/"  aria-label="Home section">
          <h1 className="font-bold text-md md:text-lg hover:tracking-wider transition-all duration-200">
            <span className="text-red-600">Y</span>ASH{" "}
            <span className="text-red-600"> K</span>UMAR
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-end gap-3 h-full font-medium text-sm">
        <div className="md:flex items-center gap-1 md:gap-2 hidden h-full">
          <Link
            href="#home"
            aria-label="Home section"
            className="hover:text-orange-400 h-full px-4 content-center"
          >
            Home
          </Link>
          <Link
            href="#tech"
            aria-label="Tech section"
            className="hover:text-orange-400 h-full px-4 content-center"
          >
            Tech
          </Link>
          <Link
          href="#projects"
          aria-label="Projects section"
            className="hover:text-orange-400 h-full px-4 content-center"
          >
            Projects
          </Link>
          <Link
            href="#about"
            aria-label="About section"
            className="hover:text-orange-400 h-full px-4 content-center"
          >
            About
          </Link>
          {/* <Link
            href="#stats"
            aria-label="Stacts section"
            className="hover:text-orange-400 h-full px-4 content-center"
          >
            Stats
          </Link> */}
          <Link
            href="#contact"
            aria-label="Contact section"
            className="hover:text-orange-400 h-full px-4 content-center"
          >
            Contact
          </Link>
        </div>
        <button
        aria-label="Theme toggle"
          className="cursor-pointer ml-3"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {mounted &&
            (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
        </button>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="md:hidden">
            <SheetHeader>
              <SheetTitle className="text-2xl" >Pages</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col px-4 pt-6 gap-2 text-lg">
                <Link href="#home" aria-label="Home"  >Home</Link>
                <Link href="#tech" aria-label="Tech"  >Tech</Link>
                <Link href="#projects" aria-label="Projects"  >Projects</Link>
                <Link href="#about" aria-label="About"  >About</Link>
                <Link href="#contact" aria-label="Contact"  >Contact</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavigationBar;
