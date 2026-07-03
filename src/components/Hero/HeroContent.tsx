import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Copy below is placeholder — none of this was provided, so it's left obviously
// unfinished rather than dressed up as final. Swap it out once real copy lands.
export default function HeroContent() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={heroRef} className="relative flex h-screen items-center justify-center px-6">
      <motion.div
        className="pointer-events-none flex flex-col items-center text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <p className="font-display mb-3 text-xs font-semibold tracking-[0.5em] text-pink uppercase text-glow-pink">
          [ eyebrow copy — e.g. archetype / tour name ]
        </p>
        <h1 className="font-display text-5xl font-semibold tracking-tight text-white uppercase sm:text-7xl md:text-8xl">
          Valerie Skyler
        </h1>
        <p className="mt-5 max-w-md text-sm text-white/60 md:text-base">
          [ hero subheading placeholder — send over the line you want here ]
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
        </a>
      </motion.div>
    </div>
  );
}
