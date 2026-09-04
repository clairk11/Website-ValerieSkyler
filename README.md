# Reyna Holmes — Official Site

A Next.js 16 (App Router) rebuild of the [Reyna](https://reyna.framer.ai/) Framer music template — a dark-theme artist site for singer/songwriter Reyna Holmes, with a CMS-style news feed, discography, and video library.

## Stack

- Next.js 16 (App Router, React 19, TypeScript strict)
- Tailwind CSS v4 with oklch design tokens
- `next/font/google` — Antonio (display) + Hanken Grotesk (body)
- Lucide React icons

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero video, bio, tracks carousel, featured video, news carousel |
| `/music` | Full track listing |
| `/news` | News & release grid |
| `/videos` | Video carousel + full library |
| `/about` | Artist bio, marquee, photography |
| `/contact` | Booking/management/press contacts + message form |
| `/legal/privacy-policy` | Privacy policy |
| `/legal/terms-conditions` | Terms & conditions |

## Commands

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
npm run typecheck
```

## Content & assets

All copy is extracted verbatim from the live Framer site, and all imagery/video under `public/images` and `public/videos` is downloaded from the original site's CDN (`framerusercontent.com`).
