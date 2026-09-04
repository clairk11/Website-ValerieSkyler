import type { Metadata } from "next";
import Image from "next/image";
import { bioParagraph } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Reyna Holmes — from an Asheville piano bench to sold-out stadiums.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">About</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight normal-case sm:text-6xl">
          Reyna Holmes turns memory into melody, writing the songs you didn&rsquo;t know you
          needed
        </h1>
      </section>

      <section className="relative aspect-4/3 w-full overflow-hidden bg-black sm:aspect-21/9">
        <Image
          src="/images/site/about-hero.png"
          alt="Reyna Holmes performing live at the piano under a spotlight"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </section>

      {/* Marquee bio */}
      <section className="overflow-hidden border-y border-border/60 py-8">
        <div className="no-scrollbar flex w-max animate-marquee gap-16">
          {Array.from({ length: 2 }).map((_, loop) => (
            <p
              key={loop}
              className="shrink-0 font-display text-3xl tracking-tight text-muted-foreground normal-case sm:text-5xl"
            >
              {bioParagraph}
            </p>
          ))}
        </div>
      </section>

      <section className="container-site grid gap-10 py-16 sm:grid-cols-2 sm:items-center sm:py-24">
        <div className="relative aspect-3/4 overflow-hidden rounded-sm bg-black">
          <Image
            src="/images/site/about-secondary.png"
            alt="Reyna Holmes writing songs on guitar in her bedroom studio"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-muted-foreground sm:text-base">{bioParagraph}</p>
        </div>
      </section>
    </>
  );
}
