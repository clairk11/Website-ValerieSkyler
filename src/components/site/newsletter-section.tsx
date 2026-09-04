"use client";

import Image from "next/image";

export function NewsletterSection() {
  return (
    <section id="subscribe" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/site/newsletter-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      </div>

      <div className="container-site relative py-20 text-center sm:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Be the first to know
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl leading-[0.95] sm:text-6xl">
          Be the first
          <br />
          to know
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Tour presales, unreleased demos and late-night notes from the road. Straight from NYLA,
          never more than once a month.
        </p>

        <form
          className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            aria-label="Email address"
            className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-sm bg-accent px-6 py-3 text-xs font-bold tracking-[0.1em] text-accent-foreground uppercase transition-colors hover:bg-accent-soft"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
