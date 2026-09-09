"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

declare global {
  interface Window {
    __motionFallback?: number;
  }
}

const RISE = { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" } as const;
const START = "top 88%";

const q = (selector: string) => gsap.utils.toArray<HTMLElement>(selector);

/**
 * One controller drives every scroll animation on the page, selecting by data
 * attribute. Sections stay server components — none of them import GSAP, and
 * none needs "use client" just to move.
 *
 * The page ships with its content visible; an inline script in the layout adds
 * html.js, and that class is the only thing hiding the animated elements. Since
 * it stands between a reader and the copy, both the reduced-motion branch here
 * and a timeout in the layout drop it directly, rather than trusting that GSAP
 * loaded at all.
 */
export function ScrollMotion() {
  useGSAP(() => {
    window.clearTimeout(window.__motionFallback);
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      document.documentElement.classList.remove("js");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // The hero is already in view on load, so it animates on mount, not scroll.
      const heroItems = q("[data-hero-item]");
      if (heroItems.length) {
        gsap.to(heroItems, { ...RISE, stagger: 0.09, delay: 0.05 });
      }

      for (const layer of q("[data-parallax]")) {
        gsap.fromTo(
          layer,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: layer.closest("[data-hero]") ?? layer,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      for (const el of q("[data-rise]")) {
        gsap.to(el, {
          ...RISE,
          scrollTrigger: { trigger: el, start: START, once: true },
        });
      }

      for (const group of q("[data-rise-group]")) {
        const children = Array.from(group.children);
        if (!children.length) continue;
        gsap.to(children, {
          ...RISE,
          stagger: 0.07,
          scrollTrigger: { trigger: group, start: START, once: true },
        });
      }

      for (const el of q("[data-count]")) {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.value) + suffix;
          },
        });
      }
    });

    return () => mm.revert();
  });

  return null;
}
