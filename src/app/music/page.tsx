import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import { musicTracks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Music",
  description: "Stream every Reyna Holmes single and album track.",
};

export default function MusicPage() {
  return (
    <section className="container-site relative overflow-hidden py-16 sm:py-24">
      <Image
        src="/images/site/vinyl.png"
        alt=""
        width={640}
        height={640}
        className="pointer-events-none absolute -top-24 -right-40 hidden opacity-20 mix-blend-screen sm:block lg:right-[-10rem]"
      />
      <p className="relative text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        Discography
      </p>
      <h1 className="relative mt-3 font-display text-5xl tracking-tight sm:text-7xl">Music</h1>

      <ul className="relative mt-12 divide-y divide-border/60 border-t border-border/60">
        {musicTracks.map((track, index) => (
          <li key={track.slug}>
            <button
              type="button"
              className="group flex w-full items-center gap-5 py-5 text-left transition-colors hover:bg-muted/40 sm:gap-8 sm:py-6"
            >
              <span className="w-6 shrink-0 font-display text-sm text-muted-foreground sm:w-10 sm:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-muted sm:size-16">
                <Image
                  src={track.cover}
                  alt={`${track.title} cover art`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <span className="flex-1 font-display text-xl tracking-tight normal-case sm:text-2xl">
                {track.title}
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <Play className="size-4 fill-current" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
