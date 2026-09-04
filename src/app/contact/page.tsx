import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { contactChannels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Booking, management, press and licensing contacts for Reyna Holmes.",
};

export default function ContactPage() {
  return (
    <section className="container-site py-16 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Contact</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-7xl">Get in touch</h1>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
        For bookings, press and licensing, the fastest route is the right inbox below. Everything
        else — including fan mail — reaches the team through the form.
      </p>

      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        {/* Channels */}
        <ul className="divide-y divide-border/60 border-t border-border/60">
          {contactChannels.map((channel) => (
            <li key={channel.number} className="flex items-start gap-6 py-6">
              <span className="font-display text-2xl text-accent">{channel.number}</span>
              <div>
                <h2 className="font-display text-lg tracking-tight normal-case">
                  {channel.role}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{channel.contact}</p>
                <a
                  href={`mailto:${channel.email}`}
                  className="mt-1 inline-block text-sm text-foreground underline decoration-accent underline-offset-4"
                >
                  {channel.email}
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Form */}
        <div>
          <h2 className="font-display text-2xl tracking-tight normal-case">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us who you are and what you need — the team reads every message that comes
            through.
          </p>

          <ContactForm />
        </div>
      </div>

      <div className="mt-16 grid gap-8 border-t border-border/60 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            General
          </h3>
          <a
            href="mailto:hello@nylamonroe.com"
            className="mt-2 block text-sm text-muted-foreground hover:text-foreground"
          >
            hello@nylamonroe.com
          </a>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            Fan mail
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">PO Box 1184, Asheville, NC 28802</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            Studio
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Half-Light Studios, 114 Ridge Lane, Asheville, NC 28801
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            Response time
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Mon–Fri. Most messages get a reply within three business days.
          </p>
        </div>
      </div>
    </section>
  );
}
