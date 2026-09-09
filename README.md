# Avid Tech Services

Marketing site for Avid Tech Services. Next.js App Router, TypeScript (strict), Tailwind CSS v4.

Ported from a single 871 KB static HTML file. Same copy, same palette, same imagery — restructured into components, with the layout, accessibility, and asset pipeline rebuilt.

## Run it

```bash
npm install
npm run dev
```

`npm run build` · `npm run lint` · `npm run typecheck`

## Layout

```
src/
  app/            routes, metadata, sitemap, robots, contact API
  components/     section components; client islands are marked "use client"
  content/        all copy and data — edit here, not in JSX
public/img/       hero, client logos, case-study shots, design-tool marks
```

Copy changes go in `src/content/sections.ts` and `src/content/site.ts`. `src/content/stack.ts` is generated from the original build and holds the 90 vendor SVG marks for the Hire Talent tabs.

## Contact form

`POST /api/contact` validates the payload and forwards it to `CONTACT_WEBHOOK_URL` (Formspree, a Zapier/Make catch hook, a Slack workflow, your own endpoint). With no webhook set the route accepts the submission and logs it, so previews stay usable. Copy `.env.example` to `.env.local` to wire it up.

## Deploying to Vercel

Import the repo, framework preset **Next.js**. No build overrides needed. Set `CONTACT_WEBHOOK_URL` in project settings if the form should deliver.

Before going live, set `site.url` in `src/content/site.ts` to the production domain — canonical URLs, Open Graph tags, and the sitemap all read from it.

## Known gaps

- Privacy Policy and Terms of Use in the footer are `#` placeholders. They need real pages.
- The "4.9/5 average client rating" figure in the hero is unsourced. It is not emitted as structured data.
