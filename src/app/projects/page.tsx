import { ExternalLink, Github, Globe, Link2 } from "lucide-react";
import { Merienda } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const merienda = Merienda({
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <div className="py-10 sm:py-[5vmin] min-h-screen px-4 md:px-[10vmin] ">
      <h1
        className={`${merienda.className} text-center text-[12vmin] md:text-[6vmin] text-gradient-red-purple font-semibold `}
      >
        Projects
      </h1>
      <div className="md:px-[6vmin] ">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] min-h-[400px] gap-6  justify-center">
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/1200x/3a/f2/e0/3af2e0f166efabe677fcf366f99c4e97.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
            </div>
          </div>
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/1200x/68/ec/f1/68ecf1d7961ffed5450ef6fdbdd61f9e.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
            </div>
          </div>
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/736x/b5/33/2c/b5332cae85fafcd62d19b0c53d1e0304.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
            </div>
          </div>
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/736x/1a/a2/0f/1aa20fa8af37e321176fc3b5d0e48102.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
            </div>
          </div>
        
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/1200x/3a/f2/e0/3af2e0f166efabe677fcf366f99c4e97.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
            </div>
          </div>
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/1200x/68/ec/f1/68ecf1d7961ffed5450ef6fdbdd61f9e.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
            </div>
          </div>
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/736x/b5/33/2c/b5332cae85fafcd62d19b0c53d1e0304.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
            </div>
          </div>
          <div className="bg-gray-600/30 h-fit p-4 pt-8 pb-12 rounded-2xl relative hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-700 hover:dark:border-gray-500 ">
            <Image
              src={
                "https://i.pinimg.com/736x/1a/a2/0f/1aa20fa8af37e321176fc3b5d0e48102.jpg"
              }
              width={400}
              height={400}
              alt="image"
              className="rounded-2xl"
            />
            <Link
              href={"/home"}
              className="absolute top-5 bg-[#00000052] p-2 rounded-full right-5 backdrop-blur-sm hover:scale-110 hover:-rotate-6 transition-all duration-200"
            >
              <ExternalLink className="stroke-white" />
            </Link>
            <div className="mt-3 bg-[#ffffff9c] dark:bg-[#ffffff17] border shadow-md border-transparent dark:border-gray-600 backdrop-blur-md py-1 px-2 rounded-sm flex gap-2 font-semibold text-sm items-center justify-between w-full">
              <h2 className="truncate w-full ">E-commerce Website</h2>
              <Link href={"https://github.com"}>
                <Github className="bg-black stroke-white dark:bg-white p-0.5 rounded-sm w-12 px-3 dark:stroke-black border border-gray-400 dark:border-black" />{" "}
              </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
