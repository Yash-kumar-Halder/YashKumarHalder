"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import HomePage from "./home/home";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import TechStack from "./tech/page";
import Contact from "./contact/page";

const MainPage = () => {
    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      
        const indicator = document.querySelector(".scroll-indicator") as HTMLElement;
        let fadeTimeout: ReturnType<typeof setTimeout>;
      
        function showIndicator(scroll: number, limit: number) {
          const viewportHeight = window.innerHeight;
          const indicatorHeight = 120;
          const availableHeight = viewportHeight - indicatorHeight;
          const scrollProgress = scroll / limit;
      
          // Move top → bottom (elastic via CSS)
          indicator.style.top = `${scrollProgress * availableHeight}px`;
      
          // Show scrollbar
          indicator.classList.add("visible");
      
          // Reset fade timer
          clearTimeout(fadeTimeout);
          fadeTimeout = setTimeout(() => {
            indicator.classList.remove("visible"); // fade out
          }, 500); // fade out after 0.5s of no scroll
        }
      
        lenis.on("scroll", (e: any) => {
          showIndicator(e.scroll, e.limit);
        });
      
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      
        requestAnimationFrame(raf);
        return () => lenis.destroy();
      }, []);
      
      
      
            
      
      
      

  return (
    <>
      <div className="scroll-indicator" />
      <main className="w-full h-full">
        <HomePage />
        <TechStack />
        <AboutMe />
        <Projects />
        <Contact />
        {/* <Stats /> */}
      </main>
    </>
  );
};

export default MainPage;
