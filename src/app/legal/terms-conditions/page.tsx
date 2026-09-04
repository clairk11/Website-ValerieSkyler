import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The rules for using the Nyla Monroe website, content, and services.",
};

const sections = [
  {
    number: "01",
    title: "Use of the Site",
    body: [
      "You may browse the site for personal, non-commercial use. You agree not to misuse the site, attempt to disrupt its operation, or access it in any unlawful way.",
    ],
  },
  {
    number: "02",
    title: "Intellectual Property",
    body: [
      "All music, artwork, photography, logos, and written content on this site are owned by Nyla Monroe or her licensors and are protected by copyright and trademark law.",
      "You may not reproduce, distribute, or create derivative works from any content without prior written permission.",
    ],
  },
  {
    number: "03",
    title: "Tickets & Presales",
    body: [
      "Presale codes and fan-club access are provided for personal use only and may not be resold. We reserve the right to cancel orders that breach these terms.",
    ],
  },
  {
    number: "04",
    title: "User Conduct",
    body: [
      "When interacting with the site or any community features, you agree to be respectful and not to post content that is unlawful, harmful, or infringes the rights of others.",
    ],
  },
  {
    number: "05",
    title: "Limitation of Liability",
    body: [
      "The site is provided on an 'as is' basis. To the fullest extent permitted by law, we are not liable for any damages arising from your use of, or inability to use, the site.",
    ],
  },
  {
    number: "06",
    title: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <section className="container-site py-16 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        Last updated — 25.07.2026
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-7xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">
        By accessing the Nyla Monroe website you agree to these Terms &amp; Conditions. Please
        read them carefully — they set out the rules for using the site, our content, and any
        services we offer.
      </p>

      <div className="mt-14 divide-y divide-border/60 border-t border-border/60">
        {sections.map((section) => (
          <div key={section.number} className="grid gap-4 py-8 sm:grid-cols-[80px_1fr]">
            <span className="font-display text-2xl text-accent">{section.number}</span>
            <div>
              <h2 className="font-display text-xl tracking-tight normal-case sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-3 grid gap-3 text-sm text-muted-foreground sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
