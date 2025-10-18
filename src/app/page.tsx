"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import HomePage from "./home/home";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import TechStack from "./tech/page";
import Stats from "./stats/page";

const MainPage = () => {useEffect(() => {
    const lenis = new Lenis({
      duration: 2.3,
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
      <Projects />
      <AboutMe />
      {/* <Stats /> */}
    </main>
  );
};

export default MainPage;
