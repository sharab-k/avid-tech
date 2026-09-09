"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Wordmark } from "./icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-line bg-paper/85 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-ink text-accent">
            <Wordmark className="size-4" />
          </span>
          <span className="font-display text-[17px] font-semibold tracking-[-0.02em]">
            <span className="text-accent-deep">Avid</span> Tech Services
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-[10px] border border-line lg:hidden"
          >
            <span className="relative block h-[10px] w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-ink transition-transform duration-200 ${
                  open ? "top-[4px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-ink transition-transform duration-200 ${
                  open ? "top-[4px] -rotate-45" : "top-[8px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="px-5 py-3 sm:px-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line-soft py-3.5 font-display text-lg font-medium tracking-[-0.02em] last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 mb-2 w-full"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
