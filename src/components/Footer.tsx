export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-baseline gap-1">
          <span className="font-script text-2xl text-white">valerie</span>
          <span className="font-display text-xs font-semibold tracking-[0.35em] text-white/70">
            SKYLER
          </span>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Valerie Skyler. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
