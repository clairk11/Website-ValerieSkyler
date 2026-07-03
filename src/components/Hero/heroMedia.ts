// Swap in real footage/photography by dropping files into /public/media/hero
// and setting the paths here. `fog` left `null` keeps rendering its CSS placeholder.
//
// `background` and `foreground` should be the SAME source photo — foreground
// is a cutout (transparent PNG) of whatever's closest to camera (a person,
// railing, a close building edge...), background is the full original plate.
// Because they're cut from the same image, they line up perfectly at rest and
// only diverge once scroll starts moving them at different speeds.
export const HERO_MEDIA: Record<"background" | "foreground" | "fog", string | null> = {
  background: "/media/hero/layers/background.jpg",
  foreground: "/media/hero/layers/foreground.png",
  fog: null,
};
