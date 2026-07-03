export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <img
          src="/media/logo/valerie-skyler-logo.png"
          alt="Valerie Skyler"
          className="h-12 w-auto opacity-90"
        />
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Valerie Skyler. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
