"use client";

export function ContactForm() {
  return (
    <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
          Name
          <input
            type="text"
            name="name"
            required
            className="rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground normal-case focus:border-accent focus:outline-none"
          />
        </label>
        <label className="grid gap-2 text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground normal-case focus:border-accent focus:outline-none"
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
        Subject
        <input
          type="text"
          name="subject"
          required
          className="rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground normal-case focus:border-accent focus:outline-none"
        />
      </label>
      <label className="grid gap-2 text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground normal-case focus:border-accent focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="mt-2 w-fit rounded-sm bg-accent px-6 py-3 text-xs font-bold tracking-[0.1em] text-accent-foreground uppercase transition-colors hover:bg-accent-soft"
      >
        Subscribe
      </button>
    </form>
  );
}
