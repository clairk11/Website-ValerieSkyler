# Valerie Skyler — Website

Vite + React + TypeScript + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Structure

- `src/components/Hero` — full-viewport parallax hero. Depth layers (sky, skyline,
  fog, embers, foreground silhouette) drift apart at different rates as the page
  scrolls. Swap placeholder visuals for real footage by setting paths in
  `src/components/Hero/heroMedia.ts` and dropping files into `public/media/hero/`.
- `src/components/Cards` — the "Step Into Her World" section. Cards fling in from
  offset positions/rotations as they scroll into view. Edit `cardData.ts` to swap
  copy or add a `videoSrc` (files go in `public/media/cards/`).
