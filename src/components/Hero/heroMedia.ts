// Swap in real footage by dropping files into /public/media/hero and setting the path here.
// `fog` left `null` keeps rendering its CSS placeholder.
export const HERO_MEDIA: Record<"background" | "backgroundPoster" | "fog", string | null> = {
  background: "/media/hero/skyline-orbit.mp4",
  backgroundPoster: "/media/hero/poster.jpg",
  fog: null,
};
