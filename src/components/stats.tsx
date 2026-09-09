import { stats } from "@/content/sections";
import { Container, Section } from "./section";

/**
 * The figures render at their final value so a reader without JS sees real
 * numbers; the scroll controller resets them to zero and counts up.
 */
export function Stats() {
  return (
    <Section tone="dark">
      <Container>
        <div data-rise className="lg:max-w-[52%]">
          <span className="eyebrow eyebrow-dark">{stats.eyebrow}</span>
          <h2 className="title mt-4 max-w-[15ch] text-white">{stats.title}</h2>
        </div>

        {/* Numbers hang off a shared baseline rule instead of sitting in boxed
            cells, and the last column is inset so the row is not a triptych. */}
        <div data-rise-group className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {stats.items.map((item, i) => (
            <div
              key={item.label}
              className={
                i === 2 ? "lg:col-span-3 lg:col-start-10" : "lg:col-span-4"
              }
            >
              <div className="border-t border-white/10 pt-6">
                <div className="num font-display text-[clamp(2.5rem,1.5rem+3.4vw,4rem)] leading-none font-semibold tracking-[-0.04em] text-accent">
                  <span data-count={item.value} data-suffix={item.suffix}>
                    {item.value}
                    {item.suffix}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[15px] font-semibold">{item.label}</h3>
                <p className="mt-1.5 max-w-[30ch] text-[13px] leading-relaxed text-white/45">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
