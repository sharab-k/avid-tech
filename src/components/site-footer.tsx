import { footer } from "@/content/sections";
import { site } from "@/content/site";
import { Container } from "./section";
import { Mark } from "./icons";

export function SiteFooter() {
  return (
    <footer className="dark-band bg-ink pt-20 pb-8 text-white/55">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div data-rise className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5 text-white">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-white/10 text-white">
                <Mark className="size-[18px]" />
              </span>
              <span className="font-display text-[17px] font-semibold tracking-[-0.02em]">
                <span className="text-accent">Avid</span> Tech Services
              </span>
            </a>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/45">
              {footer.blurb}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div data-rise-group className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-[11px] font-semibold tracking-[0.14em] text-white/35 uppercase">
                  {col.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-[13.5px] transition-colors hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[12.5px] text-white/35">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
