import type { Metadata } from "next";
import { Antonio, Hanken_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { NewsletterSection } from "@/components/site/newsletter-section";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reyna Holmes — Official Site",
    template: "%s — Reyna Holmes",
  },
  description:
    "Reyna Holmes turns memory into melody, writing the songs you didn't know you needed. Music, news, videos and tour updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${hankenGrotesk.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <NewsletterSection />
        <SiteFooter />
      </body>
    </html>
  );
}
