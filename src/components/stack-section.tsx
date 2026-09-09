import Image from "next/image";
import { stack } from "@/content/sections";
import { stackGroups, tickerIcons, type StackIcon } from "@/content/stack";
import { Container, Section } from "./section";
import { StackTabs } from "./stack-tabs";
import { icons } from "./icons";

function Tile({ icon }: { icon: StackIcon }) {
  return (
    <li
      className="flex aspect-square items-center justify-center rounded-md border border-white/10 bg-white shadow-[0_8px_20px_rgb(0_0_0/0.25)] transition duration-200 hover:-translate-y-1 hover:border-accent"
      title={icon.name}
    >
      {icon.img ? (
        <Image
          src={icon.img}
          alt={icon.name}
          width={64}
          height={64}
          className="size-[58%] rounded-[6px] object-contain"
        />
      ) : (
        <span
          role="img"
          aria-label={icon.name}
          className="size-[58%] [&_svg]:size-full"
          dangerouslySetInnerHTML={{ __html: icon.svg ?? "" }}
        />
      )}
    </li>
  );
}

export function StackSection() {
  return (
    <Section id="stack" tone="dark">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-dark">{stack.eyebrow}</span>
            <h2 className="title mt-4 max-w-[18ch] text-white">{stack.title}</h2>
          </div>
          <p className="text-sm leading-relaxed text-white/55 lg:col-span-4 lg:col-start-9">
            {stack.desc}
          </p>
        </div>

        <StackTabs tabs={stackGroups.map(({ id, label }) => ({ id, label }))}>
          {stackGroups.map((group) => (
            <ul key={group.id} className="grid grid-cols-4 gap-3 sm:grid-cols-6 sm:gap-4">
              {group.icons.map((icon) => (
                <Tile key={icon.name} icon={icon} />
              ))}
            </ul>
          ))}
        </StackTabs>

        <div className="mt-14 grid items-center gap-8 rounded-lg bg-paper p-8 text-ink sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-5">
              <span className="num font-display text-[52px] leading-none font-semibold tracking-[-0.04em] text-accent-deep">
                {stack.ctaCount}
                <span className="text-ink/25">+</span>
              </span>
              <p className="max-w-[22ch] text-sm leading-snug text-ink-soft">{stack.ctaCopy}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-ink">
                Get in touch
                {icons.arrowUpRight}
              </a>
              <a href="#contact" className="btn btn-ghost-light">
                Book a meeting
                {icons.calendar}
              </a>
            </div>
          </div>

          <ul
            aria-hidden="true"
            className="edge-fade no-scrollbar flex items-center gap-6 overflow-x-auto lg:col-span-5 lg:col-start-8 lg:justify-end"
          >
            {tickerIcons.map((t) => (
              <li
                key={t.name}
                className={
                  t.featured
                    ? "flex size-16 shrink-0 items-center justify-center rounded-md border-4 border-white bg-ink shadow-[0_10px_24px_rgb(0_0_0/0.18)] [&_svg]:size-8"
                    : "flex size-7 shrink-0 items-center justify-center opacity-35 [&_svg]:size-full"
                }
                dangerouslySetInnerHTML={{ __html: t.svg }}
              />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
