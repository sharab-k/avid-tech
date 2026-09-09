import Image from "next/image";
import {
  clients,
  engagement,
  industries,
  services,
  why,
  work,
} from "@/content/sections";
import { Container, Section, SectionHead } from "./section";
import { icons } from "./icons";

export function ClientStrip() {
  return (
    <div className="border-b border-line bg-paper py-9">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <span className="shrink-0 text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
          Trusted by teams at
        </span>
        <ul data-rise-group className="no-scrollbar flex items-center gap-8 overflow-x-auto sm:gap-10">
          {clients.map((c) => (
            <li key={c.name} className="shrink-0">
              <Image
                src={c.src}
                alt={c.name}
                width={140}
                height={30}
                className="h-[26px] w-auto object-contain opacity-55 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHead eyebrow={services.eyebrow} title={services.title} side={services.side} />

        {/* Hairline grid rather than nine free-floating cards: one shared rule
            system, so the section reads as a single table of capability. */}
        <div data-rule className="mt-14 h-px origin-left bg-line" />
        <ul data-rise-group className="grid sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <li
              key={s.title}
              className="group relative border-b border-line py-7 sm:border-r sm:px-6 sm:[&:nth-child(2n)]:border-r-0 lg:px-7 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <span className="num absolute top-7 right-0 text-[11px] font-medium text-ink-soft/40 sm:right-6 lg:right-7">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-accent-soft text-accent-deep [&_svg]:size-[18px]">
                {icons[s.icon]}
              </span>
              <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.015em]">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[38ch] text-[13.5px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        <div data-rise className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <p className="text-sm text-ink-soft">{services.footNote}</p>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </Container>
    </Section>
  );
}

export function Industries() {
  return (
    <Section id="industries" tone="dim">
      <Container>
        <SectionHead
          eyebrow={industries.eyebrow}
          title={industries.title}
          side={industries.side}
        />

        <div data-rule className="mt-14 h-px origin-left bg-line" />
        <ul data-rise-group className="grid gap-x-12 md:grid-cols-2">
          {industries.items.map((ind, i) => (
            <li
              key={ind.name}
              className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-line py-7 sm:grid-cols-[3rem_1fr]"
            >
              <span className="num pt-1 font-display text-[13px] font-medium text-accent-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                  {ind.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-1.5 gap-y-2">
                  {ind.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-line bg-white px-2.5 py-1 text-[12.5px] leading-tight text-ink-soft"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function Engagement() {
  const [lead, ...rest] = engagement.items;
  return (
    <Section id="engagement">
      <Container>
        <SectionHead
          eyebrow={engagement.eyebrow}
          title={engagement.title}
          side={engagement.side}
        />

        {/* Deliberately uneven: the lead model gets the wide, dark panel and the
            other two stack beside it, so the trio is not three identical boxes. */}
        <div data-rise-group className="mt-14 grid gap-5 lg:grid-cols-12">
          {lead ? (
            <div className="dark-band flex flex-col rounded-lg bg-forest p-8 text-white lg:col-span-5 lg:p-10">
              <span className="num font-display text-[13px] font-medium text-accent">
                {lead.index} / {lead.kicker}
              </span>
              <h3 className="mt-5 font-display text-[26px] font-semibold tracking-[-0.025em] lg:text-[30px]">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-white/60">
                {lead.body}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {lead.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[13.5px] leading-snug">
                    <span className="mt-px shrink-0 text-accent [&_svg]:size-[15px]">
                      {icons.check}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="grid gap-5 lg:col-span-7 lg:content-between">
            {rest.map((m) => (
              <div
                key={m.index}
                className="rounded-lg border border-line bg-white p-8 lg:p-9"
              >
                <div className="grid gap-6 sm:grid-cols-12 sm:gap-8">
                  <div className="sm:col-span-5">
                    <span className="num font-display text-[13px] font-medium text-accent-deep">
                      {m.index} / {m.kicker}
                    </span>
                    <h3 className="mt-4 font-display text-[21px] font-semibold tracking-[-0.02em]">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{m.body}</p>
                  </div>
                  <ul className="flex flex-col gap-3 sm:col-span-6 sm:col-start-7 sm:justify-center">
                    {m.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[13.5px] leading-snug">
                        <span className="mt-px shrink-0 text-accent-deep [&_svg]:size-[15px]">
                          {icons.check}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Work() {
  const [feature, ...others] = work.items;
  return (
    <Section id="work">
      <Container>
        <SectionHead eyebrow={work.eyebrow} title={work.title} side={work.side} />

        <div data-rise-group className="mt-14 grid gap-5 lg:grid-cols-12">
          {feature ? <WorkCard item={feature} feature className="lg:col-span-7" /> : null}
          <div className="grid gap-5 lg:col-span-5">
            {others.map((item) => (
              <WorkCard key={item.href} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function WorkCard({
  item,
  feature = false,
  className = "",
}: {
  item: (typeof work.items)[number];
  feature?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-lg border border-line bg-white ${className}`}
    >
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col">
        <div
          className={`relative overflow-hidden bg-ink ${feature ? "aspect-[16/9]" : "aspect-[16/7]"}`}
        >
          <Image
            src={item.image}
            alt={`${item.title} — screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.04em] text-white backdrop-blur-sm">
            {item.tag}
          </span>
        </div>
        <div className={`flex flex-1 flex-col p-6 ${feature ? "sm:p-8" : ""}`}>
          <h3
            className={`font-display font-semibold tracking-[-0.02em] ${
              feature ? "text-[21px]" : "text-[17px]"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-2.5 max-w-[58ch] text-[13.5px] leading-relaxed text-ink-soft">
            {item.body}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-deep group-hover:underline">
            {item.hrefLabel}
            <span className="[&_svg]:size-[13px]">{icons.arrowUpRight}</span>
          </span>
        </div>
      </a>
    </article>
  );
}

export function Why() {
  return (
    <Section tone="dim">
      <Container>
        <SectionHead eyebrow={why.eyebrow} title={why.title} side={why.side} />
        <div data-rule className="mt-14 h-px origin-left bg-line" />
        <ul data-rise-group className="grid sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map((w, i) => (
            <li
              key={w.title}
              className="border-b border-line py-7 sm:border-r sm:px-6 sm:first:pl-0 sm:[&:nth-child(2n)]:border-r-0 lg:px-7 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="num font-display text-[13px] font-medium text-accent-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold tracking-[-0.015em]">
                {w.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{w.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
