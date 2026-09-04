import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Nyla Monroe website collects, uses, and protects your information.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    body: [
      "When you subscribe to our newsletter or fan-club codes, we collect your email address and any details you choose to provide, such as your name and country.",
      "We also automatically collect basic technical data — browser type, device, and pages visited — to understand how the site is used and to keep it running smoothly.",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    body: [
      "We use your information to send tour presales, unreleased demos, and occasional notes from the road — never more than once a month unless you opt into additional updates.",
      "We may also use aggregated, anonymised data to improve the site and tailor content to our audience.",
    ],
  },
  {
    number: "03",
    title: "Sharing & Third Parties",
    body: [
      "We do not sell your personal information. We share it only with trusted service providers — such as our email and analytics platforms — who process it on our behalf and under strict confidentiality.",
    ],
  },
  {
    number: "04",
    title: "Your Choices",
    body: [
      "You can unsubscribe from our emails at any time using the link in every message. You may also request access to, correction of, or deletion of your personal data by contacting us at privacy@nylamonroe.com.",
    ],
  },
  {
    number: "05",
    title: "Cookies",
    body: [
      "We use a small number of cookies to remember your preferences and measure site performance. You can disable cookies in your browser, though some features may not work as intended.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="container-site py-16 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        Last updated — 25.07.2026
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-7xl">Privacy Policy</h1>
      <p className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">
        This Privacy Policy explains how the Nyla Monroe website collects, uses, and protects the
        information you share with us when you visit, subscribe to updates, or interact with our
        content.
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
