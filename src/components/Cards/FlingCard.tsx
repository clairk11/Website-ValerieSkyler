import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { CardDef } from "./cardData";

export default function FlingCard({ card, index }: { card: CardDef; index: number }) {
  return (
    <motion.div
      className={`group relative isolate min-h-[220px] overflow-hidden rounded-[28px] ${card.span ?? ""}`}
      initial={{
        opacity: 0,
        x: card.from.x,
        y: card.from.y,
        rotate: card.from.rotate,
        scale: 0.85,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 16,
        mass: 0.9,
        delay: index * 0.08,
      }}
      whileHover={{ scale: 1.02, rotate: 0 }}
    >
      <div className="absolute inset-0" style={{ background: card.gradient }} />

      {card.imageSrc && (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={card.imageSrc}
          alt={card.title}
        />
      )}

      {!card.imageSrc && card.videoSrc && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={card.videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {!card.imageSrc && <div className="grain-overlay absolute inset-0" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="font-display w-fit text-[11px] font-semibold tracking-[0.3em] text-white/80 uppercase text-glow-pink">
          {card.label}
        </span>

        <div className="flex items-end justify-between gap-4">
          {!card.imageSrc && (
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {card.title}
            </h3>
          )}
          <span className="liquid-glass ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110">
            <Play className="ml-0.5 h-4 w-4" strokeWidth={1.5} fill="currentColor" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
