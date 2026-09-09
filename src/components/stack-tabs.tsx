"use client";

import { Children, useId, useState, type ReactNode } from "react";

/**
 * Tab state only. Panels arrive already rendered from the server so the 90
 * vendor SVGs travel as markup rather than as strings inside the JS bundle.
 */
export function StackTabs({
  tabs,
  children,
}: {
  tabs: { id: string; label: string }[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const baseId = useId();
  const panels = Children.toArray(children);
  const active = tabs[index];

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div
        role="tablist"
        aria-label="Technology categories"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:col-span-4 lg:flex-col lg:gap-0"
      >
        {tabs.map((tab, i) => {
          const selected = i === index;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              onClick={() => setIndex(i)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors lg:w-full lg:rounded-none lg:border-x-0 lg:border-b-0 lg:border-t lg:px-1 lg:py-4 lg:text-left lg:text-[15px] lg:last:border-b ${
                selected
                  ? "border-accent bg-accent text-ink lg:border-white/10 lg:bg-transparent lg:text-accent"
                  : "border-white/10 text-white/55 hover:text-white"
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
          id={`${baseId}-panel-${active.id}`}
          aria-labelledby={`${baseId}-tab-${active.id}`}
          className="lg:col-span-7 lg:col-start-6"
        >
          {panels[index]}
        </div>
      ) : null}
    </div>
  );
}
