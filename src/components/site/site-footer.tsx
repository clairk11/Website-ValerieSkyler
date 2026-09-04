import Link from "next/link";
import { socialLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-site py-10 sm:py-14">
        <h2 className="font-display text-[13vw] leading-[0.9] tracking-tight sm:text-[7rem] lg:text-[9rem]">
          REYNA HOLMES
        </h2>

        <div className="mt-10 flex flex-col gap-8 border-t border-border/60 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <nav aria-label="Social links">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:items-end">
            <div className="flex gap-4">
              <Link href="/legal/privacy-policy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-conditions" className="hover:text-foreground">
                Terms &amp; Conditions
              </Link>
            </div>
            <p className="tracking-[0.1em] uppercase">© 2026 Reyna HOLMES. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
