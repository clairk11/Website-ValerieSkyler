import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import EmberField from "./EmberField";
import { HERO_MEDIA } from "./heroMedia";

function useDepth(mouseX: ReturnType<typeof useMotionValue<number>>, factor: number) {
  return useTransform(mouseX, (v) => v * factor);
}

export default function ParallaxHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // the footage plays as the base plane; the fog and embers drift apart from it
  // at different scroll speeds — the "layers broken down" read.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fogY = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const emberY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.5]);
  const dissolveOpacity = useTransform(scrollYProgress, [0.65, 1], [0, 1]);

  const mouseX = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const bgX = useDepth(mouseXSpring, 6);
  const fogX = useDepth(mouseXSpring, 20);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalized = (e.clientX - rect.left) / rect.width - 0.5;
    mouseX.set(normalized * 2);
  };

  return (
    <section ref={sectionRef} className="relative h-[190vh]">
      <div
        onPointerMove={handlePointerMove}
        className="grain-overlay sticky top-0 h-screen w-full overflow-hidden bg-navy"
      >
        {/* Base plane — the footage itself */}
        <motion.div className="absolute inset-0" style={{ y: bgY, x: bgX, scale: bgScale }}>
          {HERO_MEDIA.background ? (
            <video
              className="h-full w-full object-cover"
              src={HERO_MEDIA.background}
              autoPlay
              loop
              muted
              playsInline
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
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
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

        {/* Vignette for depth + contrast */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: vignetteOpacity,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 55%, transparent 40%, #0a1128 100%), linear-gradient(180deg, rgba(10,17,40,0.5) 0%, transparent 25%, transparent 65%, rgba(10,17,40,0.9) 100%)",
          }}
        />

        {/* Final dissolve into the cards section, only in the last stretch of scroll */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-navy"
          style={{ opacity: dissolveOpacity }}
        />

        {/* Title layer */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ y: textY, opacity: textOpacity }}
        >
          <p className="font-display mb-3 text-xs font-semibold tracking-[0.5em] text-pink uppercase text-glow-pink">
            Fallen Heiress
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white uppercase sm:text-7xl md:text-8xl">
            Valerie Skyler
          </h1>
          <p className="mt-5 max-w-md text-sm text-white/60 md:text-base">
            Cinematic dystopian pop — where old-money elegance collides with a
            neon-lit, high-tech future.
          </p>

          <a
            href="#discover"
            className="pointer-events-auto group mt-12 flex flex-col items-center gap-3"
          >
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-white/40 opacity-70 transition-opacity group-hover:opacity-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy transition-transform group-hover:scale-105">
                <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={2} />
              </span>
            </span>
            <span className="font-display text-[11px] tracking-[0.3em] text-white/60 uppercase">
              Enter the World
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
