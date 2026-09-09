"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/sections";
import { Container, Section } from "./section";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);

  return value;
}

function Stat({ item, active }: { item: (typeof stats.items)[number]; active: boolean }) {
  const value = useCountUp(item.value, active);
  return (
    <div className="border-t border-white/10 pt-6">
      <div className="num font-display text-[clamp(2.5rem,1.5rem+3.4vw,4rem)] leading-none font-semibold tracking-[-0.04em] text-accent">
        {value}
        <span className="text-white/30">{item.suffix}</span>
      </div>
      <h3 className="mt-4 font-display text-[15px] font-semibold">{item.label}</h3>
      <p className="mt-1.5 max-w-[30ch] text-[13px] leading-relaxed text-white/45">{item.body}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <span className="eyebrow eyebrow-dark">{stats.eyebrow}</span>
            <h2 className="title mt-4 max-w-[15ch] text-white">{stats.title}</h2>
          </div>
        </div>

        {/* Numbers hang off a shared baseline rule instead of sitting in boxed
            cells; the last column is inset so the row is not a flat triptych. */}
        <div ref={ref} className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {stats.items.map((item, i) => (
            <div
              key={item.label}
              className={
                i === 0
                  ? "lg:col-span-4"
                  : i === 1
                    ? "lg:col-span-4"
                    : "lg:col-span-3 lg:col-start-10"
              }
            >
              <Stat item={item} active={active} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
