export type CardDef = {
  id: string;
  label: string;
  title: string;
  imageSrc: string | null;
  videoSrc: string | null;
  gradient: string;
  span?: string;
  from: { x: number; y: number; rotate: number };
};

// Swap `videoSrc` for a real clip in /public/media/cards whenever it's ready —
// the gradient is just the placeholder fallback when neither image nor video is set.
export const CARDS: CardDef[] = [
  {
    id: "about-you",
    label: "Music Video",
    title: "About You",
    imageSrc: "/media/cards/about-you.png",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #3d1e6d 0%, #0a1128 60%)",
    span: "md:col-span-2 md:row-span-2",
    from: { x: -120, y: 80, rotate: -10 },
  },
  {
    id: "undefined",
    label: "Single",
    title: "Undefined",
    imageSrc: "/media/cards/undefined.png",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #3d1e6d 0%, #ff007f 90%)",
    from: { x: 140, y: -60, rotate: 12 },
  },
  {
    id: "system-reboot",
    label: "Single",
    title: "System Reboot",
    imageSrc: "/media/cards/system-reboot.png",
    videoSrc: null,
    gradient: "linear-gradient(155deg, #b00020 0%, #2c2c2c 70%)",
    from: { x: 160, y: 100, rotate: 9 },
  },
];
