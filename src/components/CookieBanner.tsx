"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_COOKIE_SETTINGS, getStoredConsent, setConsent } from "@/lib/analytics";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  if (!open) return null;

  function choose(granted: boolean) {
    setConsent(granted);
    setOpen(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-xl rounded-2xl border border-cream/15 bg-ink p-5 text-cream shadow-2xl sm:p-6"
    >
      <p className="font-display text-lg">We use cookies</p>
      <p className="mt-2 text-sm leading-relaxed text-cream/75">
        We use analytics cookies to understand how visitors use our website so we can improve it.
        We do not use them for advertising. See our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-flare">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full bg-flare px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#d85a26]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full border border-cream/30 px-6 py-2.5 text-sm font-semibold text-cream hover:border-cream/60 hover:bg-cream/10"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
      className={className}
    >
      Cookie Settings
    </button>
  );
}
