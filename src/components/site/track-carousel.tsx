"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { Track } from "@/types/content";

export function TrackCarousel({ tracks }: { tracks: Track[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {tracks.map((track) => (
          <div
            key={track.slug}
            className="group relative w-56 shrink-0 snap-start overflow-hidden rounded-sm bg-muted sm:w-64"
          >
            <div className="relative aspect-square">
              <Image
                src={track.cover}
                alt={`${track.title} cover art`}
                fill
                sizes="264px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Play className="size-5 fill-current" />
                </span>
              </div>
            </div>
            <p className="px-1 py-3 text-sm font-semibold tracking-wide uppercase">
              {track.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Scroll tracks left"
          onClick={() => scrollBy(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Scroll tracks right"
          onClick={() => scrollBy(1)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
