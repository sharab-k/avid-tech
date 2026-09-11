import Image from "next/image";
import { hero } from "@/content/sections";
import { icons, Star } from "./icons";

export function Hero() {
  return (
    <section id="top" data-hero className="dark-band relative isolate overflow-hidden bg-ink text-white">
      {/* Overscanned so the parallax never exposes an edge. */}
      <div data-parallax className="absolute inset-0 scale-115">
        <Image
          src="/img/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Hard-edged directional scrim instead of the stock radial colour blobs:
          the photograph stays legible on the right, the type keeps full contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,#0b0e15_0%,#0b0e15_34%,rgb(11_14_21/0.88)_56%,rgb(11_14_21/0.55)_100%)]"
      />
      <div className="relative mx-auto grid w-full max-w-[1180px] gap-14 px-5 pt-20 pb-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:pt-28 lg:pb-28">
        <div className="lg:col-span-7">
          <span data-hero-item className="eyebrow eyebrow-dark">{hero.eyebrow}</span>
          <h1
            data-hero-item
            data-lines
            className="display mt-5 text-[clamp(2.25rem,1.2rem+4.2vw,3.75rem)] leading-[1.12] sm:leading-[1.04]"
          >
            {hero.headline.before}
            <em className="not-italic text-magenta">{hero.headline.accent}</em>
            {hero.headline.after}
          </h1>
          <p data-hero-item className="mt-10 max-w-[46ch] text-[16.5px] leading-[1.65] text-white/65 sm:mt-9">
            {hero.lead}
          </p>

          <div data-hero-item className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Start a Project
              {icons.arrowRight}
            </a>
            <a href="#contact" className="btn btn-ghost-dark">
              Book a Meeting
            </a>
          </div>

          <div data-hero-item className="mt-11 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-[15px]" />
              ))}
            </span>
            <span className="num font-display text-lg font-semibold">{hero.rating.score}</span>
            <span className="max-w-[22ch] text-[12.5px] leading-snug text-white/45">
              {hero.rating.caption}
            </span>
          </div>
        </div>

        <div data-hero-item className="lg:col-span-5 lg:col-start-9">
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-[6px] sm:p-7">
            <dl>
              {hero.intake.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-white/8 py-3.5 first:pt-0 last:border-0 last:pb-0"
                >
                  <dt className="text-[13px] text-white/55">{row.label}</dt>
                  <dd className="flex items-center gap-2 text-right font-display text-[13.5px] font-medium">
                    {row.live ? (
                      <span className="size-[7px] shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgb(51_225_237/0.18)]" />
                    ) : null}
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[12.5px] leading-relaxed text-white/40">{hero.intakeFoot}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
