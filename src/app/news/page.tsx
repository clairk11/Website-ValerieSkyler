import type { Metadata } from "next";
import Image from "next/image";
import { newsItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description: "Every Reyna Holmes announcement, release and feature story.",
};

export default function NewsPage() {
  return (
    <section className="container-site py-16 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Latest</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-7xl">News</h1>

      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <article key={item.slug}>
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xs font-semibold tracking-[0.15em] text-accent uppercase">
              {item.date}
            </p>
            <h2 className="mt-2 font-display text-xl leading-tight tracking-tight normal-case">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
