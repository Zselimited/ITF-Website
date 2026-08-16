"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <div id="register" className="rounded-3xl border border-ink/10 bg-white/80 p-8 sm:p-10">
      {status === "submitted" ? (
        <div className="py-6 text-center">
          <p className="font-display text-2xl text-ink">You&apos;re on the list 🎉</p>
          <p className="mt-3 text-sm text-ink/65">
            Check your inbox for your webinar access link and reminders ahead of Friday, 4 September
            2026.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("submitted");
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Your first name"
              className="w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus-visible:outline-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus-visible:outline-2"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-flare px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#d85a26]"
          >
            Save My Free Seat →
          </button>
          <p className="text-center text-[11px] leading-relaxed text-ink/45">
            Free to attend. No spam. You will only receive relevant information about the webinar
            and Idea to Funded programmes. You can unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}
