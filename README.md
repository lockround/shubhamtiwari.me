# shubhamtiwari.me

Portfolio website for **Shubham Tiwari — Solutions Architect**.

Built with Next.js (App Router), Tailwind CSS, shadcn/ui-style components, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build (type-checks + lints)
npm run lint      # eslint
npm start         # serve the production build
```

## Editing your content

All site content lives in one place: [`lib/data.ts`](lib/data.ts). Profile info, stats,
expertise items, work history, and case studies are plain data — no component changes needed.

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Pages, layout, metadata, `robots.txt`, `sitemap.xml`, favicon |
| `components/sections/` | Hero, About, Expertise, Experience, Work, Contact |
| `components/ui/` | shadcn-style primitives (`Button`) |
| `components/motion/` | Scroll-reveal animation wrapper |
| `lib/data.ts` | All editable content |

## Design

- Dark "systems" identity: deep graphite ink with a steel-cyan accent and indigo/violet gradient.
- Typography: Sora (display), Hanken Grotesk (body), JetBrains Mono (technical labels).
- Motion: one orchestrated hero load sequence plus restrained scroll reveals. Respects
  `prefers-reduced-motion`.