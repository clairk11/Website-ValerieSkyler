const LINKS = ["Home", "Discography", "Biography", "Contact"];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12 1.33ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.92.56a6.9 6.9 0 0 0-2.5 1.63A6.9 6.9 0 0 0 0 4.76c-.3.77-.5 1.64-.56 2.92C-.63 8.96-.64 9.37-.64 12.63s.01 3.67.08 4.95c.06 1.28.26 2.15.56 2.92a6.9 6.9 0 0 0 1.63 2.5 6.9 6.9 0 0 0 2.5 1.63c.77.3 1.64.5 2.92.56 1.28.06 1.69.08 4.95.08s3.67-.02 4.95-.08c1.28-.06 2.15-.26 2.92-.56a6.9 6.9 0 0 0 2.5-1.63 6.9 6.9 0 0 0 1.63-2.5c.3-.77.5-1.64.56-2.92.06-1.28.08-1.69.08-4.95s-.02-3.67-.08-4.95c-.06-1.28-.26-2.15-.56-2.92a6.9 6.9 0 0 0-1.63-2.5A6.9 6.9 0 0 0 19.86.63c-.77-.3-1.64-.5-2.92-.56C15.66.01 15.26 0 12 0Z" />
      <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.16-1.4v9.63a4.98 4.98 0 1 1-4.98-4.98c.16 0 .32.01.48.03v2.1a2.9 2.9 0 1 0 2.4 2.86V0h2.13a4.27 4.27 0 0 0 3.13 4.1v1.72Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.4 31.4 0 0 0 .5-5.8 31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]" />
      <div className="relative flex items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="block">
          <img
            src="/media/logo/valerie-skyler-logo.png"
            alt="Valerie Skyler"
            className="h-14 w-auto md:h-16"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-display text-sm font-medium tracking-[0.15em] text-white/70 uppercase transition-colors hover:text-pink"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="transition-colors hover:text-pink" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="transition-colors hover:text-pink" aria-label="TikTok">
            <TikTokIcon />
          </a>
          <a href="#" className="transition-colors hover:text-pink" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
