import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[30vh] border-t bg-neutral-900 dark:bg-neutral-950 border-t-neutral-400 dark:border-t-neutral-800 flex items-center justify-evenly ">
      <div className="flex flex-col items-center py-5 border-r w-2/3     md:w-full h-full">
        <div className="flex py-4 items-center gap-2 text-neutral-300">
          <Link
            href="https://github.com/yash-kumar-halder"
            aria-label="Github"
            className="hover:text-amber-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yash-kumar-halder/"
            aria-label="Linkedin"
            className="hover:text-amber-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
          </Link>
          <Link
            href="https://x.com/YashKumarHalder"
            aria-label="X"
            className="hover:text-amber-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </Link>
        </div>
        <div className="flex font-semibold text-neutral-300 dark:text-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-code"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 8l-4 4l4 4" />
            <path d="M17 8l4 4l-4 4" />
            <path d="M14 4l-4 16" />
          </svg>
          <h1>YASH KUMAR HALDER</h1>
        </div>
        <p className="text-neutral-200 text-lg font-semibold">
          &#xA9; All Rights Reserved - 2025
        </p>
        <p className="text-neutral-400" >yashkumarhalder@gmail.com</p>
        <p className="text-neutral-400" >(+91) 8388893667</p>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 md:w-full gap-1 text-neutral-300 font-semibold ">
        <Link
          href="#home"
          aria-label="Home section"
          className="hover:text-amber-500 transition-colors duration-100"
        >
          Home
        </Link>
        <Link
          href="#about"
          aria-label="About section"
          className="hover:text-amber-500 transition-colors duration-100"
        >
          About
        </Link>
        <Link
          href="#projects"
          aria-label="Projects section"
          className="hover:text-amber-500 transition-colors duration-100"
        >
          Projects
        </Link>
        <Link
          href="#tech"
          aria-label="Tech section"
          className="hover:text-amber-500 transition-colors duration-100"
        >
          Tech
        </Link>
        <Link
          href="#contact"
          aria-label="Contact section"
          className="hover:text-amber-500 transition-colors duration-100"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Footer;
