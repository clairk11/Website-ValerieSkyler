export type CardDef = {
  id: string;
  label: string;
  title: string;
  videoSrc: string | null;
  gradient: string;
  span?: string;
  from: { x: number; y: number; rotate: number };
};

// Swap `videoSrc` for a real clip in /public/media/cards whenever it's ready —
// the gradient is just the placeholder fallback.
export const CARDS: CardDef[] = [
  {
    id: "latest-video",
    label: "Music Video",
    title: "About You",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #3d1e6d 0%, #0a1128 60%)",
    span: "md:col-span-2 md:row-span-2",
    from: { x: -120, y: 80, rotate: -10 },
  },
  {
    id: "single",
    label: "New Single",
    title: "Obsidian Heights",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #b00020 0%, #2c2c2c 70%)",
    from: { x: 140, y: -60, rotate: 12 },
  },
  {
    id: "acoustic",
    label: "Acoustic",
    title: "Stripped",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #ff007f 0%, #3d1e6d 75%)",
    from: { x: 160, y: 100, rotate: 9 },
  },
  {
    id: "live",
    label: "Live",
    title: "On Tour",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #0a1128 0%, #b00020 80%)",
    span: "md:col-span-2",
    from: { x: -100, y: 140, rotate: -8 },
  },
  {
    id: "world",
    label: "The Story",
    title: "Enter the World",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #3d1e6d 0%, #ff007f 90%)",
    from: { x: 0, y: 160, rotate: 6 },
  },
];
