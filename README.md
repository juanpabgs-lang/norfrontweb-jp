# Norfront Group — Website v2

The new norfront.group. Joint redesign by JP (`juanpabgs-lang`) and Tomas (`tomasbm21`).
When finished, this repo replaces the current production site.

## Stack

Vite · React · TypeScript · Tailwind · shadcn/ui. Deployed on Vercel
(`vercel.json` includes the SPA rewrite so deep links work).

## Run locally

```sh
npm install
npm run dev   # http://localhost:8080
```

## How we work

- `main` is always deployable — Vercel previews build from every push.
- Work on branches (`jp/...`, `tomas/...`), merge via PR.
- Pull `main` before starting; keep branches short-lived.

## Design system (read before adding sections)

The site speaks one language — "the operating statement":

- Pure black surfaces, hairline `white/10` borders, light-seam section rules
  (gradient from `#7ec8e3` with a glowing origin tick).
- Type: Inter (UI), JetBrains Mono (eyebrows, data, annotations),
  Playfair Display italic (one accent phrase per heading).
- Accent `#7ec8e3` is reserved for live/proof/data. Tradara amber `#D97706`.
- Sections are numbered like a report (`01 — Production Proof`) and visuals
  carry `Fig.` captions.
- Reveal animation: `useReveal` from `src/components/home2/reveal.ts` —
  calm fade+rise, no bounce, no blur.
- The brand mark is `src/components/NorfrontMark.tsx` (exact crop from the
  logo file — don't redraw it).

## Key custom pieces

- `src/components/home2/` — homepage sections (hero + OpsConsole, machine
  zoom in `ProductShowcase`, marquee, stat band, portfolio ledger, FIG
  schematics, closing CTA).
- `src/components/CardSwap.tsx` — 3D deck, extended with `bringToFront()`
  for the interactive portfolio page.
- Forms post to Formspree (contact: `xzzavgqp`, careers: `mdawrvqo`).

## Publishing checklist (when we call it done)

1. Vercel project → point the `norfront.group` domain here.
2. Verify OG image + deep links on the production URL.
3. Archive the old repo's deployment.
