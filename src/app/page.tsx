"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import HomePage from "./home/home";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import TechStack from "./tech/page";
import Contact from "./contact/page";

const MainPage = () => {useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ✅ smooth easing curve
    });

    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="w-full h-full">
      <HomePage />
      <TechStack />
      <AboutMe />
      <Projects />
      <Contact />
      {/* <Stats /> */}
    </main>
  );
};

export default MainPage;
