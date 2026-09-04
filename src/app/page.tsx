import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrackCarousel } from "@/components/site/track-carousel";
import { NewsCarousel } from "@/components/site/news-carousel";
import { homeTracks, newsItems, bioParagraph, videoItems } from "@/lib/data";

export default function HomePage() {
  const featuredVideo = videoItems[1];

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[85vh] min-h-[560px] items-end overflow-hidden bg-black">
        <video
          className="absolute inset-0 size-full object-cover opacity-70"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/10" />
        <div className="container-site relative pb-12 sm:pb-16">
          <h1 className="font-display text-[15vw] leading-[0.85] tracking-tight text-accent sm:text-8xl lg:text-9xl">
            REYNA HOLMES
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="container-site py-16 sm:py-24">
        <p className="max-w-3xl font-display text-2xl leading-tight tracking-tight normal-case sm:text-4xl">
          Reyna Holmes turns memory into melody, writing the songs you didn&rsquo;t know you
          needed
        </p>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {bioParagraph}
        </p>
      </section>

      {/* Tracks carousel */}
      <section className="container-site py-10 sm:py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Tracks</h2>
          <Link
            href="/music"
            className="hidden items-center gap-1 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-accent sm:inline-flex"
          >
            All Music <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <TrackCarousel tracks={homeTracks} />
      </section>

      {/* Videos preview */}
      <section className="container-site py-10 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Videos
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              {featuredVideo.title}
            </h2>
            <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground">
                About Me
              </Link>
              <span aria-hidden>—</span>
              <Link href="/videos" className="hover:text-foreground">
                Videos
              </Link>
            </div>
            <p className="mt-6 font-display text-sm text-muted-foreground">02 / 06</p>
          </div>
          <Link
            href="/videos"
            className="group relative block aspect-video overflow-hidden rounded-sm bg-muted"
          >
            <Image
              src="/images/videos/hamsafar-mera-wide.png"
              alt={featuredVideo.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        </div>
      </section>

      {/* News carousel */}
      <section className="container-site py-10 sm:py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">News</h2>
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-accent"
          >
            View All <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <NewsCarousel items={newsItems.slice(0, 3)} />
      </section>
    </>
  );
}
