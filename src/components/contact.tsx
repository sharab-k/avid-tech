"use client";

import { useId, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { contact } from "@/content/sections";
import { Container, Section } from "./section";
import { icons } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [engagementType, setEngagementType] = useState(contact.engagements[0]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" tone="dim" flushTop>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-rise className="lg:col-span-5">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2 className="title mt-4 max-w-[16ch]">{contact.title}</h2>
            <ul className="mt-9 flex flex-col divide-y divide-line border-y border-line">
              {contact.points.map((p) => (
                <li key={p.title} className="flex items-start gap-3.5 py-4">
                  <span className="mt-0.5 shrink-0 text-accent-deep [&_svg]:size-[18px]">
                    {icons[p.icon]}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{p.title}</div>
                    <div className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">{p.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div data-rise className="rounded-lg border border-line bg-white p-6 sm:p-9 lg:col-span-6 lg:col-start-7">
            <AnimatePresence mode="wait" initial={false}>
            {status === "sent" ? (
              <m.div
                key="sent"
                role="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-deep [&_svg]:size-6">
                  {icons.check}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">Message received</h3>
                <p className="mx-auto mt-2 max-w-[36ch] text-sm text-ink-soft">
                  Thanks for reaching out — someone from Avid Tech Services will follow up within
                  24 hours.
                </p>
              </m.div>
            ) : (
              <m.form
                key="form"
                onSubmit={onSubmit}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id={`${id}-name`} name="name" label="Full name" required>
                    <input
                      id={`${id}-name`}
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jordan Lee"
                      className="field-input"
                    />
                  </Field>
                  <Field id={`${id}-email`} name="email" label="Email" required>
                    <input
                      id={`${id}-email`}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jordan@company.com"
                      className="field-input"
                    />
                  </Field>
                  <Field id={`${id}-phone`} name="phone" label="Phone">
                    <input
                      id={`${id}-phone`}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      className="field-input"
                    />
                  </Field>
                  <Field id={`${id}-stack`} name="stack" label="Preferred tech stack">
                    <select id={`${id}-stack`} name="stack" defaultValue="" className="field-input">
                      <option value="">Select preferred tech stack</option>
                      {contact.stacks.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <fieldset className="mt-5">
                  <legend className="field-label">Engagement type</legend>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {contact.engagements.map((e) => {
                      const checked = engagementType === e;
                      return (
                        <label
                          key={e}
                          className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent-deep ${
                            checked
                              ? "border-accent bg-accent-soft text-accent-deep"
                              : "border-line text-ink-soft hover:border-ink/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name="engagement"
                            value={e}
                            checked={checked}
                            onChange={() => setEngagementType(e)}
                            className="sr-only"
                          />
                          {e}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-5">
                  <Field id={`${id}-message`} name="message" label="Message" required>
                    <textarea
                      id={`${id}-message`}
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project, your company, and your goals."
                      className="field-input min-h-24 resize-y"
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary mt-6 w-full disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Submit"}
                </button>

                <p aria-live="polite" className="mt-3 min-h-5 text-center text-[13px]">
                  {status === "error" ? (
                    <span className="text-magenta">
                      Something went wrong. Email {contact.points[0]?.title} instead.
                    </span>
                  ) : null}
                </p>
              </m.form>
            )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  id,
  label,
  required = false,
  children,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="field-label">
        {label}
        {required ? <span className="text-magenta"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
