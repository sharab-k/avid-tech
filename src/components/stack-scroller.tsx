"use client";

import { Children, useRef, useState, type ReactNode } from "react";
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
  children,
}: {
  head: ReactNode;
  tabs: { id: string; label: string }[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [pinned, setPinned] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panels = Children.toArray(children);
  const active = tabs[index];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.registerPlugin(ScrollTrigger);
        setPinned(true);

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
          setPinned(false);
          setIndex(0);
        };
      });

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
                aria-selected={selected}
                aria-controls={`stack-panel-${tab.id}`}
                onClick={() => setIndex(i)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors duration-300 lg:w-full lg:rounded-none lg:border-x-0 lg:border-b-0 lg:border-t lg:border-l-2 lg:py-4 lg:pl-4 lg:text-left lg:text-[15px] lg:last:border-b ${
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
            className="lg:col-span-7 lg:col-start-6"
          >
            <div key={active.id} className="animate-panel">
              {panels[index]}
            </div>
          </div>
        ) : null}
      </div>

      {pinned ? (
        <div aria-hidden="true" className="mt-10 hidden h-px bg-white/10 lg:block">
          <div
            className="h-px bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${((index + 1) / tabs.length) * 100}%` }}
          />
        </div>
      ) : null}
    </div>
  );
}
