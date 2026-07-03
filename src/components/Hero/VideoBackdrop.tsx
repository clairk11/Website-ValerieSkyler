import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import EmberField from "./EmberField";
import { HERO_MEDIA } from "./heroMedia";

// Autoplay attributes alone don't guarantee playback in every embedding
// context (iframes without an autoplay permission, some webviews). Forcing
// .play() explicitly is a stronger guarantee than the autoplay attribute on
// its own, and failures are caught silently since the poster frame still
// covers us visually either way.
function useForcePlay() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);
  return ref;
}

function useDepth(mouseX: ReturnType<typeof useMotionValue<number>>, factor: number) {
  return useTransform(mouseX, (v) => v * factor);
}

// Fixed behind every section — the footage keeps drifting/zooming for as long
// as there's page left to scroll, instead of being boxed into the hero alone.
export default function VideoBackdrop() {
  const { scrollYProgress } = useScroll();
  const bgVideoRef = useForcePlay();

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const fogY = useTransform(scrollYProgress, [0, 1], [0, -460]);
  const emberY = useTransform(scrollYProgress, [0, 1], [0, -340]);

  const mouseX = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const bgX = useDepth(mouseXSpring, 8);
  const fogX = useDepth(mouseXSpring, 20);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const normalized = e.clientX / window.innerWidth - 0.5;
    mouseX.set(normalized * 2);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="grain-overlay fixed inset-0 h-screen w-full overflow-hidden bg-navy"
    >
      {/* Base plane — the footage itself, never fully leaves, just keeps drifting */}
      <motion.div className="absolute inset-0" style={{ y: bgY, x: bgX, scale: bgScale }}>
        {HERO_MEDIA.background ? (
          <video
            ref={bgVideoRef}
            className="h-full w-full object-cover"
            src={HERO_MEDIA.background}
            poster={HERO_MEDIA.backgroundPoster ?? undefined}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(255,0,127,0.18), transparent 60%), linear-gradient(180deg, #0a1128 0%, #17123a 45%, #3d1e6d 100%)",
            }}
          />
        )}
      </motion.div>

      {/* Drifting fog / cloud bank */}
      <motion.div
        className="absolute inset-0 opacity-60 mix-blend-screen"
        style={{ y: fogY, x: fogX }}
      >
        {HERO_MEDIA.fog ? (
          <video
            className="h-full w-full object-cover"
            src={HERO_MEDIA.fog}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="h-full w-full blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse 40% 25% at 20% 65%, rgba(61,30,109,0.5), transparent 70%), radial-gradient(ellipse 45% 30% at 80% 75%, rgba(255,0,127,0.14), transparent 70%)",
            }}
          />
        )}
      </motion.div>

      {/* Ember / particle plane */}
      <motion.div className="absolute inset-0" style={{ y: emberY }}>
        <EmberField />
      </motion.div>
    </div>
  );
}
