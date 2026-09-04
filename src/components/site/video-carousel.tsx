"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VideoItem } from "@/types/content";

export function VideoCarousel({ items }: { items: VideoItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
    setActive((prev) => Math.min(Math.max(prev + dir, 0), items.length - 1));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl tracking-tight">{items[active]?.title}</h3>
        <p className="font-display text-sm text-muted-foreground">
          {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {items.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "group relative shrink-0 snap-start overflow-hidden rounded-sm bg-muted",
              item.aspect === "portrait" ? "aspect-[2/3] w-44" : "aspect-square w-64",
              active === index ? "ring-2 ring-accent" : "ring-0",
            )}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="264px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Play className="size-4 fill-current" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous video"
          onClick={() => scrollBy(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={() => scrollBy(1)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
