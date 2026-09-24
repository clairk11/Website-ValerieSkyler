import {
  ABOUT_GALLERY,
  FEATURED_TRACK,
  LIVE_DATES,
  NAV_LINKS,
  SITE_LINKS,
  SOCIAL_LINKS,
  TRACKS,
} from "./data";

const ACCENT = "#CFE0FF";

function SoundformNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
      <a href="#top" className="font-semibold tracking-[0.08em] text-white">
        NOA RIVE
      </a>
      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {link}
          </a>
        ))}
      </div>
      <a
        href="mailto:booking@noarive.com"
        className="hidden text-sm text-white/60 transition-colors hover:text-white md:block"
      >
        booking@noarive.com
      </a>
      <button
        type="button"
        className="text-sm text-white/80 md:hidden"
        aria-label="Open menu"
      >
        Menu
      </button>
    </nav>
  );
}

function SoundformHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#05060a] px-6 pb-16 md:px-12 md:pb-24"
    >
      <img
        src="/media/soundform/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060a] via-[#05060a]/60 to-[#05060a]/10" />
      <div className="relative z-10 max-w-4xl">
        <p className="mb-4 text-xs tracking-[0.3em] text-white/50 uppercase">
          {FEATURED_TRACK.title} — New single
        </p>
        <h1 className="font-[Inter_Display,Inter,sans-serif] text-[13vw] leading-[0.9] font-black tracking-tight text-white md:text-[7vw]">
          RHYTHM FOR
          <br />
          THE HOURS
          <br />
          IN BETWEEN
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
          <span>Afro house. Warm drums, deep nights.</span>
          <span className="text-white/30">·</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}

function SelectedMusic() {
  return (
    <section className="bg-[#05060a] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
          Selected music
        </p>
        <h2 className="mt-3 font-[Inter_Display,Inter,sans-serif] text-3xl font-bold text-white md:text-5xl">
          Rhythm for the hours in between
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white/5">
            <img
              src={FEATURED_TRACK.cover}
              alt="Cover art of the featured release"
              className="aspect-square w-full object-cover"
            />
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="text-xs tracking-[0.2em] text-white/40 uppercase">
                  {FEATURED_TRACK.eyebrow}
                </p>
                <p className="mt-1 text-xl font-semibold text-white">
                  {FEATURED_TRACK.title}
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition-colors hover:border-white/50"
              >
                Listen now
              </button>
            </div>
          </div>

          <ul className="divide-y divide-white/10 self-center">
            {TRACKS.map((track) => (
              <li
                key={track.id}
                className="flex items-center justify-between gap-4 py-5"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={track.cover}
                    alt={`${track.title} cover`}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-white">{track.title}</p>
                    <p className="text-sm text-white/40">{track.meta}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 text-sm text-white/50 transition-colors hover:text-white"
                >
                  Listen now
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function LiveDates() {
  return (
    <section className="bg-[#0a0c12] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
          Live / autumn 2026
        </p>
        <h2 className="mt-3 font-[Inter_Display,Inter,sans-serif] text-3xl font-bold text-white md:text-5xl">
          Live dates
        </h2>

        <ul className="mt-12 divide-y divide-white/10">
          {LIVE_DATES.map((date) => (
            <li
              key={date.city}
              className="flex flex-wrap items-center justify-between gap-4 py-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 shrink-0 text-center">
                  <p className="text-2xl font-bold text-white">{date.day}</p>
                  <p className="text-xs text-white/40 uppercase">{date.month}</p>
                </div>
                <div>
                  <p className="text-sm text-white/40">{date.weekday}</p>
                  <p className="text-lg font-medium text-white">
                    {date.city}, {date.country}
                  </p>
                  <p className="text-sm text-white/40">{date.venue}</p>
                </div>
              </div>
              {date.status === "Sold out" ? (
                <span className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/30">
                  Sold out
                </span>
              ) : (
                <button
                  type="button"
                  className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition-colors hover:border-white/50"
                  style={{ color: ACCENT }}
                >
                  Tickets
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WatchSection() {
  return (
    <section className="bg-[#05060a] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="/media/soundform/watch-poster.png"
            alt="Glass Hours, live performance still"
            className="aspect-video w-full object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-8">
            <div>
              <p className="text-xs tracking-[0.2em] text-white/60 uppercase">
                Official live session · Filmed at Halle Nord, Berlin
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                Glass Hours, live
              </p>
              <p className="mt-1 text-sm text-white/50">
                One take · Live percussion · 04:12
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Watch"
            className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition-transform hover:scale-105"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-[#0a0c12] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
          Newsletter
        </p>
        <h2 className="mt-3 font-[Inter_Display,Inter,sans-serif] text-3xl font-bold text-white md:text-5xl">
          Join the hours
        </h2>
        <p className="mt-4 text-white/50">
          New music. Tour dates. Mixes from the road. One letter a month.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            className="w-full rounded-full border border-white/15 bg-transparent px-5 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Sign me up
          </button>
        </form>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-[#05060a] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
          About
        </p>
        <h2 className="mt-3 font-[Inter_Display,Inter,sans-serif] text-3xl font-bold text-white md:text-5xl">
          Drums before words
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/media/soundform/about-portrait.png"
              alt="Portrait of Noa Rive against a deep blue sky"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-white/60">
            <p>
              Noa Rive makes afro house with a human pulse: hand percussion,
              warm bass and melodies that arrive slowly, like light over
              water.
            </p>
            <p>
              Glass Hours is her newest single: kalimba, congas and one long
              groove, recorded live in a single room and built for the last
              hour of the night.
            </p>
            <p className="text-sm text-white/30">
              Afro house · Live percussion · Since 2019
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {ABOUT_GALLERY.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoundformFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05060a] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-10">
          <div>
            <p className="font-semibold tracking-[0.08em] text-white">
              NOA RIVE
            </p>
            <p className="mt-4 text-sm text-white/50">Booking &amp; management</p>
            <p className="text-sm text-white/70">Mara Lind, Northroom</p>
            <a
              href="mailto:booking@noarive.com"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              booking@noarive.com
            </a>
            <p className="mt-4 text-sm text-white/50">General inquiries</p>
            <a
              href="mailto:hello@noarive.com"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              hello@noarive.com
            </a>
          </div>

          <div>
            <p className="text-sm text-white/40 uppercase">Follow</p>
            <ul className="mt-4 space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm text-white/40 uppercase">Site</p>
            <ul className="mt-4 space-y-2">
              {SITE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/30">
          <p>© 2026 Noa Rive</p>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function SoundformPage() {
  return (
    <div className="bg-[#05060a] font-[Inter,sans-serif]">
      <SoundformNav />
      <SoundformHero />
      <SelectedMusic />
      <LiveDates />
      <WatchSection />
      <Newsletter />
      <AboutSection />
      <SoundformFooter />
    </div>
  );
}
