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

  // depth layers drift apart at different rates as the section scrolls past —
  // this is the "broken down" parallax read: one scene, separated into planes.
  const skyY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const skylineY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const fogY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const emberY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const silhouetteY = useTransform(scrollYProgress, [0, 1], [0, -430]);
  const silhouetteScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const silhouetteOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.5]);
  const dissolveOpacity = useTransform(scrollYProgress, [0.65, 1], [0, 1]);

  const mouseX = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const skylineX = useDepth(mouseXSpring, 10);
  const fogX = useDepth(mouseXSpring, 22);
  const silhouetteX = useDepth(mouseXSpring, -16);

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
        {/* Layer 1 — sky / atmosphere, slowest plane */}
        <motion.div className="absolute inset-0" style={{ y: skyY }}>
          {HERO_MEDIA.sky ? (
            <video
              className="h-full w-full object-cover"
              src={HERO_MEDIA.sky}
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
        </motion.div>

        {/* Layer 2 — skyline silhouette */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[55%]"
          style={{ y: skylineY, x: skylineX }}
        >
          {HERO_MEDIA.skyline ? (
            <video
              className="h-full w-full object-cover object-bottom"
              src={HERO_MEDIA.skyline}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Skyline />
          )}
        </motion.div>

        {/* Layer 3 — drifting fog / cloud bank */}
        <motion.div
          className="absolute inset-0 opacity-70 mix-blend-screen"
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
                  "radial-gradient(ellipse 40% 25% at 20% 65%, rgba(61,30,109,0.55), transparent 70%), radial-gradient(ellipse 45% 30% at 80% 75%, rgba(255,0,127,0.16), transparent 70%)",
              }}
            />
          )}
        </motion.div>

        {/* Layer 4 — ember / particle plane */}
        <motion.div className="absolute inset-0" style={{ y: emberY }}>
          <EmberField />
        </motion.div>

        {/* Layer 5 — foreground silhouette, fastest plane */}
        <motion.div
          className="absolute inset-x-0 bottom-0 flex h-full items-end justify-center"
          style={{ y: silhouetteY, x: silhouetteX, scale: silhouetteScale, opacity: silhouetteOpacity }}
        >
          {HERO_MEDIA.silhouette ? (
            <video
              className="h-full w-full object-cover object-bottom"
              src={HERO_MEDIA.silhouette}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <FigureSilhouette />
          )}
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

function Skyline() {
  const buildings = [
    { w: 6, h: 30, x: 4 }, { w: 8, h: 46, x: 11 }, { w: 5, h: 26, x: 20 },
    { w: 10, h: 60, x: 26 }, { w: 6, h: 38, x: 37 }, { w: 7, h: 50, x: 44 },
    { w: 12, h: 72, x: 52 }, { w: 6, h: 34, x: 65 }, { w: 9, h: 55, x: 72 },
    { w: 6, h: 40, x: 82 }, { w: 8, h: 28, x: 89 },
  ];
  return (
    <svg viewBox="0 0 100 80" preserveAspectRatio="none" className="h-full w-full">
      {buildings.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={80 - b.h} width={b.w} height={b.h} fill="#150c2e" />
          {Array.from({ length: Math.floor(b.h / 8) }).map((_, row) => (
            <rect
              key={row}
              x={b.x + b.w * 0.25}
              y={80 - b.h + row * 8 + 3}
              width={b.w * 0.15}
              height={2}
              fill={row % 3 === 0 ? "#ff007f" : "#f4f1ea"}
              opacity={row % 2 === 0 ? 0.8 : 0.35}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

function FigureSilhouette() {
  return (
    <div className="relative h-[92%] w-[260px] sm:w-[320px] md:h-[95%] md:w-[380px]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 50% 30%, rgba(255,0,127,0.35), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <svg
        viewBox="0 0 200 400"
        preserveAspectRatio="xMidYMax meet"
        className="relative h-full w-full drop-shadow-[0_0_40px_rgba(255,0,127,0.25)]"
      >
        <defs>
          <linearGradient id="figureFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff007f" stopOpacity="0.5" />
            <stop offset="18%" stopColor="#0a0612" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a0612" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* hair */}
        <path
          d="M100 30 C60 30 48 75 52 115 C54 150 46 190 36 230 C70 210 66 160 70 120 C110 122 132 150 128 210 C120 250 132 260 150 235 C142 190 150 145 148 110 C150 70 138 30 100 30 Z"
          fill="url(#figureFill)"
        />
        {/* head */}
        <circle cx="100" cy="66" r="30" fill="url(#figureFill)" />
        {/* shoulders + gown, flowing wide toward the ground */}
        <path
          d="M62 150 C58 190 30 300 10 400 L190 400 C170 300 142 190 138 150 C126 168 74 168 62 150 Z"
          fill="url(#figureFill)"
        />
      </svg>
    </div>
  );
}
