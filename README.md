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

## The mobile app

Open **[/app](/app)** for the installable mobile app experience — an app-shell UI with
bottom-tab navigation, built as a PWA so it can be added to a phone's home screen and
opened full-screen and offline.

- **Install:** use the *Install* button in the app header, or your browser's
  "Add to Home Screen" / "Install app". Works on iOS and Android.
- **Structure:** `app/app/` is the route; `components/mobile/` holds the shell,
  tab bar, and the five screens (Home, Expertise, Experience, Work, Connect).
  Screens render the same content from `lib/data.ts`.
- **Offline:** `public/sw.js` precaches the app shell and falls back to the cache
  when the network is unavailable.

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Pages, layouts, metadata, robots, sitemap, PWA manifest (`manifest.ts`) |
| `app/(site)/` | The marketing site (Shares the root layout, adds Nav + Footer) |
| `app/app/` | The mobile app experience (`/app`) |
| `components/sections/` | Hero, About, Expertise, Experience, Work, Contact |
| `components/mobile/` | Mobile app shell, tab bar, and screens |
| `components/ui/` | shadcn-style primitives (`Button`) |
| `components/motion/` | Scroll-reveal animation wrapper |
| `public/` | PWA icons, `sw.js` service worker |
| `lib/data.ts` | All editable content |

## Design

- Dark "systems" identity: deep graphite ink with a steel-cyan accent and indigo/violet gradient.
- Typography: Sora (display), Hanken Grotesk (body), JetBrains Mono (technical labels).
- Motion: one orchestrated hero load sequence plus restrained scroll reveals. Respects
  `prefers-reduced-motion`.