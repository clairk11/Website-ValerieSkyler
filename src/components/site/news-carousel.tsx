"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NewsItem } from "@/types/content";

export function NewsCarousel({ items }: { items: NewsItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {items.map((item) => (
          <Link
            key={item.slug}
            href="/news"
            className="group w-72 shrink-0 snap-start sm:w-80"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xs font-semibold tracking-[0.15em] text-accent uppercase">
              {item.date}
            </p>
            <h3 className="mt-2 font-display text-xl leading-tight tracking-tight normal-case">
              {item.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p>
          </Link>
        ))}
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Scroll news left"
          onClick={() => scrollBy(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Scroll news right"
          onClick={() => scrollBy(1)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
