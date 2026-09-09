"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Lenis drives the scroll position and GSAP's ticker drives Lenis, so there is
 * a single rAF loop on the page and ScrollTrigger reads a position that is
 * always in sync with what the reader sees.
 *
 * lagSmoothing is off because GSAP's default catch-up behaviour fights a
 * lerped scroller: after a stall it jumps the timeline forward while Lenis is
 * still easing, and pinned sections visibly snap.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 });
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    document.documentElement.classList.add("lenis-active");

    // Lenis owns the scroll position, so in-page links have to go through it
    // rather than through the browser's native anchor jump.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const link = (event.target as HTMLElement).closest("a");
      const href = link?.getAttribute("href");
      if (!href?.startsWith("#") || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.1 });
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      document.documentElement.classList.remove("lenis-active");
    };
  }, []);

  return null;
}
