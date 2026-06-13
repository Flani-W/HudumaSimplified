# Huduma Simplified — Government Service Navigator

A mobile-first, offline-capable PWA that turns complex Kenyan government services
(eCitizen + county) into simple **step-by-step Swahili/English guides** — checklist,
required documents, real fees, timeline, and a downloadable PDF.

> Why: eCitizen is hard to navigate, so many people pay cyber cafés to transact for
> them, and a majority of Kenyans are often offline. Huduma Simplified explains each
> service in plain language, works without data once visited, and costs **$0** to run
> (static site on Vercel/Netlify).

## Features

- **7 real services**: birth certificate, national ID, passport, KRA PIN, driving
  licence, single business permit, certificate of good conduct.
- **Fully bilingual (EN/SW)** — one toggle switches the whole UI and all content;
  the choice persists per device.
- **Interactive checklist** per guide with progress saved in `localStorage`.
- **Offline PDF download** of any guide in the active language (jsPDF).
- **Installable PWA** with a service worker: the app shell and visited guides load
  with no network.
- **Accessible**: semantic HTML, keyboard-reachable controls, visible focus, labelled
  inputs, `prefers-reduced-motion` respected.

## Tech stack

Next.js 15 (App Router, `output: "export"`) · React 19 · TypeScript · Tailwind CSS v4 ·
client-side i18n (React context + `localStorage`) · jsPDF · custom service worker +
web manifest. **No backend** — optional Supabase progress sync is deferred to post-v1.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & deploy

```bash
npm run build        # static export → ./out
npm run serve        # preview the built export locally
```

Deploy the `out/` directory to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project layout

```
src/
  app/                 # routes: home, /about, /services/[slug]
  components/          # presentational + interactive UI (client components)
  data/
    types.ts           # Service / Localized content model
    services.ts        # the bilingual service content (source of truth)
  i18n/
    I18nProvider.tsx   # locale context: t() for chrome, loc() for content
    strings.ts         # UI chrome strings (en/sw)
  lib/
    format.ts          # KES fee formatting + totals
    pdf.ts             # jsPDF guide generation
public/
  manifest.webmanifest, sw.js, icons/
```

## Adding or editing a service

Edit `src/data/services.ts`. Every user-facing string is `{ en, sw }`; fees are in
KES. The home grid, guide page, PDF and search all derive from this one file.

## Disclaimer

Fees, documents and timelines are gathered from official sources and are **indicative**
— they can change and some vary by county. Always confirm on the official government
portal before paying. The app collects no personal data.
