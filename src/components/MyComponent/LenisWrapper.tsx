// components/LenisWrapper.tsx
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisScrollEvent {
    scroll: number;
    limit: number;
    velocity: number;
    direction: 1 | -1;
    progress: number;
  }
  

export default function LenisWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.3, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

    const indicator = document.querySelector(".scroll-indicator") as HTMLElement;
    let fadeTimeout: ReturnType<typeof setTimeout>;

    function showIndicator(scroll: number, limit: number) {
      const viewportHeight = window.innerHeight;
      const indicatorHeight = 120;
      const availableHeight = viewportHeight - indicatorHeight;
      const scrollProgress = scroll / limit;
      indicator.style.top = `${scrollProgress * availableHeight}px`;
      indicator.classList.add("visible");
      clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(() => indicator.classList.remove("visible"), 500);
    }

    lenis.on("scroll", (e: LenisScrollEvent) => showIndicator(e.scroll, e.limit));

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
