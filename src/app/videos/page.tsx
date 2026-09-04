import type { Metadata } from "next";
import { VideoCarousel } from "@/components/site/video-carousel";
import { videoItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Videos",
  description: "Official music videos, lyric videos and live performances from Reyna Holmes.",
};

export default function VideosPage() {
  return (
    <section className="container-site py-16 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Watch</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-7xl">Videos</h1>

      <div className="mt-12">
        <VideoCarousel items={videoItems} />
      </div>
    </section>
  );
}
