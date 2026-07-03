import { motion } from "framer-motion";
import { CARDS } from "./cardData";
import FlingCard from "./FlingCard";

export default function FlingCards() {
  return (
    <section id="discover" className="relative bg-navy px-6 py-24 md:px-12 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 0%, rgba(61,30,109,0.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-xl"
        >
          <p className="font-display mb-3 text-xs font-semibold tracking-[0.4em] text-pink uppercase">
            The Universe
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white uppercase sm:text-5xl">
            Step Into Her World
          </h2>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            Videos, releases, and moments from the story of Valerie Skyler —
            reinvented, one frame at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[200px]">
          {CARDS.map((card, index) => (
            <FlingCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
