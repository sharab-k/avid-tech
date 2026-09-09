import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

type Tone = "paper" | "dim" | "dark";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  dim: "bg-paper-dim text-ink",
  dark: "dark-band bg-forest text-white",
};

/**
 * `flushTop` drops the top padding. Two consecutive sections on the same
 * background stack their vertical padding, which doubles the gap into a void
 * with no change of colour to justify it; the second one opts out.
 */
export function Section({
  id,
  tone = "paper",
  flushTop = false,
  children,
  className = "",
}: {
  id?: string;
  tone?: Tone;
  flushTop?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const padding = flushTop ? "pb-20 sm:pb-24 lg:pb-32" : "py-20 sm:py-24 lg:py-32";
  return (
    <section id={id} className={`${toneClass[tone]} ${padding} ${className}`}>
      {children}
    </section>
  );
}

/**
 * Section heads sit on a 12-column grid with the supporting note pushed off
 * the title's axis, so no two section openings line up identically.
 */
export function SectionHead({
  eyebrow,
  title,
  side,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  side?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <header className={`grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10 ${className}`}>
      <div className="lg:col-span-7">
        <span data-rise className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
          {eyebrow}
        </span>
        <h2 data-lines className={`title mt-4 max-w-[16ch] ${dark ? "text-white" : ""}`}>
          {title}
        </h2>
      </div>
      {side ? (
        <p
          data-rise
          className={`text-sm leading-relaxed lg:col-span-4 lg:col-start-9 ${
            dark ? "text-white/55" : "text-ink-soft"
          }`}
        >
          {side}
        </p>
      ) : null}
    </header>
  );
}
