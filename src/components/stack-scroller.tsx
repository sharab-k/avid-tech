"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import { m } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const STEP_VH = 45;

/**
 * The section pins and the eight categories advance with scroll depth, so the
 * stack reads as one continuous pass instead of eight things to click.
 *
 * Pinning is desktop-only and motion-preference gated. Below that, and for
 * anyone who asked for reduced motion, the same markup stays a plain tab list —
 * the buttons are real buttons in a real tablist either way, so the section is
 * keyboard-operable in both modes.
 */
export function StackScroller({
  head,
  tabs,
  cta,
  children,
}: {
  head: ReactNode;
  tabs: { id: string; label: string }[];
  cta: ReactNode;
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const panels = Children.toArray(children);
  const active = tabs[index];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (min-height: 780px) and (prefers-reduced-motion: no-preference)",
        () => {
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
          trigger: root.current,
          start: "center center",
          end: `+=${tabs.length * STEP_VH}%`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          onUpdate: ({ progress }) => {
            const next = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));
            setIndex(next);
          },
        });

          return () => {
            trigger.kill();
            setIndex(0);
          };
        },
      );

      return () => mm.revert();
    },
    { scope: root, dependencies: [tabs.length] },
  );

  return (
    <div ref={root}>
      {head}

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div
          role="tablist"
          aria-label="Technology categories"
          aria-orientation="vertical"
          className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:col-span-4 lg:flex-col lg:gap-0 lg:overflow-visible"
        >
          {tabs.map((tab, i) => {
            const selected = i === index;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`stack-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`stack-panel-${tab.id}`}
                onClick={() => setIndex(i)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors duration-300 lg:w-full lg:rounded-none lg:border-x-0 lg:border-b-0 lg:border-t lg:border-l-2 lg:py-4 lg:pl-4 lg:text-left lg:text-[15px] ${
                  selected
                    ? "border-accent bg-accent text-ink lg:border-t-white/10 lg:border-l-accent lg:bg-transparent lg:text-accent"
                    : "border-white/10 text-white/55 hover:text-white lg:border-l-transparent"
                }`}
              >
                <span className="num hidden pr-3 text-[12px] font-medium opacity-45 lg:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {active ? (
          <div
            role="tabpanel"
            id={`stack-panel-${active.id}`}
            aria-labelledby={`stack-tab-${active.id}`}
            className="lg:col-span-7 lg:col-start-6"
          >
            {/* Every panel occupies the same grid cell, so the container is as
                tall as the tallest one and never reflows as categories change.
                A panel that mounts and unmounts would resize the pinned element
                mid-scrub and invalidate ScrollTrigger's measurements. */}
            <div className="grid">
              {panels.map((panel, i) => (
                <m.div
                  key={tabs[i]?.id ?? i}
                  className="[grid-area:1/1]"
                  animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden={i !== index}
                  inert={i !== index}
                >
                  {panel}
                </m.div>
              ))}
            </div>

            {/* Sits directly under the tiles rather than below the whole
                section: the tab rail is far taller than any icon grid, and the
                card left in that gap read as a hole in the layout. */}
            <div className="mt-10">{cta}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
