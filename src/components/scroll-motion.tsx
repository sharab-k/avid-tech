"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

declare global {
  interface Window {
    __motionFallback?: number;
  }
}

const START = "top 85%";
const q = (selector: string) => gsap.utils.toArray<HTMLElement>(selector);

/**
 * One controller drives every scroll animation on the page, selecting by data
 * attribute. Sections stay server components — none of them import GSAP, and
 * none needs "use client" just to move.
 *
 * The page ships with its content visible; an inline script in the layout adds
 * html.js, and that class is the only thing hiding animated elements. Since it
 * stands between a reader and the copy, both the reduced-motion branch here and
 * a timeout in the layout drop it directly, rather than trusting GSAP loaded.
 */
export function ScrollMotion() {
  useGSAP(() => {
    window.clearTimeout(window.__motionFallback);
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      document.documentElement.classList.remove("js");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const splits: SplitText[] = [];

      /**
       * Headings rise out of a mask a line at a time. Splitting depends on the
       * final line breaks, so it waits on the webfonts — measuring against the
       * fallback face wraps the lines in the wrong places. Each split reverts
       * once its animation is done, which also removes the mask wrappers before
       * they can clip anything on a later resize.
       */
      const buildLineReveals = () => {
        for (const heading of q("[data-lines]")) {
          const split = new SplitText(heading, {
            type: "lines",
            mask: "lines",
            linesClass: "line",
          });
          splits.push(split);
          gsap.set(heading, { opacity: 1 });

          const isHero = heading.hasAttribute("data-hero-item");
          gsap.from(split.lines, {
            yPercent: 115,
            duration: 1,
            ease: "power4.out",
            stagger: 0.09,
            delay: isHero ? 0.15 : 0,
            scrollTrigger: isHero
              ? undefined
              : { trigger: heading, start: START, once: true },
            onComplete: () => split.revert(),
          });
        }
        ScrollTrigger.refresh();
      };

      if (document.fonts?.status === "loaded") buildLineReveals();
      else void document.fonts.ready.then(buildLineReveals);

      // The hero is already in view on load, so it plays on mount, not scroll.
      // These start hidden in CSS, so they animate *to* the visible state — a
      // `from` tween would read the hidden value as its destination.
      const heroItems = q("[data-hero-item]:not([data-lines])");
      if (heroItems.length) {
        gsap.to(heroItems, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.35,
        });
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

      // Hairlines draw from the left, so a section's structure arrives before
      // the content sitting on it.
      for (const rule of q("[data-rule]")) {
        gsap.fromTo(
          rule,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: { trigger: rule, start: "top 92%", once: true },
          },
        );
      }

      for (const el of q("[data-rise]")) {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: START, once: true },
        });
      }

      for (const group of q("[data-rise-group]")) {
        const children = Array.from(group.children);
        if (!children.length) continue;
        gsap.to(children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: { each: 0.07, from: "start" },
          scrollTrigger: { trigger: group, start: START, once: true },
        });
      }

      for (const el of q("[data-count]")) {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.value) + suffix;
          },
        });
      }

      return () => {
        for (const split of splits) split.revert();
      };
    });

    return () => mm.revert();
  });

  return null;
}
