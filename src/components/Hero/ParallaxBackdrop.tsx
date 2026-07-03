import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import EmberField from "./EmberField";
import { HERO_MEDIA } from "./heroMedia";

function useDepth(mouseX: ReturnType<typeof useMotionValue<number>>, factor: number) {
  return useTransform(mouseX, (v) => v * factor);
}

// Fixed behind every section. `background` and `foreground` are cut from the
// same photo (see heroMedia.ts) and drift apart at different scroll speeds —
// that divergence is what actually reads as depth, not just a moving image.
export default function ParallaxBackdrop() {
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const fgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const fogY = useTransform(scrollYProgress, [0, 1], [0, -520]);
  const emberY = useTransform(scrollYProgress, [0, 1], [0, -340]);

  const mouseX = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const bgX = useDepth(mouseXSpring, 6);
  const fgX = useDepth(mouseXSpring, 22);
  const fogX = useDepth(mouseXSpring, 30);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const normalized = e.clientX / window.innerWidth - 0.5;
    mouseX.set(normalized * 2);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="grain-overlay fixed inset-0 h-screen w-full overflow-hidden bg-navy"
    >
      {/* Back plane — the full photo, slowest plane */}
      <motion.div className="absolute inset-0" style={{ y: bgY, x: bgX, scale: bgScale }}>
        {HERO_MEDIA.background ? (
          <img
            className="h-full w-full object-cover"
            src={HERO_MEDIA.background}
            alt=""
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
        className="absolute inset-0 opacity-50 mix-blend-screen"
        style={{ y: fogY, x: fogX }}
      >
        {HERO_MEDIA.fog ? (
          <img className="h-full w-full object-cover" src={HERO_MEDIA.fog} alt="" />
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

      {/* Front plane — the cutout, fastest plane, lines up with the back
          plane at rest since it's cropped from the same photo */}
      {HERO_MEDIA.foreground && (
        <motion.div
          className="absolute inset-0"
          style={{ y: fgY, x: fgX, scale: fgScale }}
        >
          <img
            className="h-full w-full object-cover"
            src={HERO_MEDIA.foreground}
            alt=""
          />
        </motion.div>
      )}
    </div>
  );
}
