"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { PAYSTACK_DEPOSIT_URL, PAYSTACK_FULL_URL } from "@/lib/site-data";

type EnrolButtonProps = {
  plan?: "full" | "deposit";
  variant?: "primary" | "outline-light" | "outline-dark";
  children: ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-flare text-white shadow-[0_10px_30px_-12px_rgba(240,109,56,0.65)] hover:bg-[#d85a26]",
  "outline-light": "border border-cream/30 text-cream hover:border-cream/60 hover:bg-cream/10",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/5",
};

// Opens the Paystack payment page for the chosen plan. Falls back to the
// pricing section while the Paystack links have not been configured.
export default function EnrolButton({
  plan = "full",
  variant = "primary",
  children,
  className = "",
}: EnrolButtonProps) {
  const url = plan === "deposit" ? PAYSTACK_DEPOSIT_URL : PAYSTACK_FULL_URL;
  const external = url.length > 0;

  return (
    <a
      href={external ? url : "#enrol"}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() =>
        // Shows in GA4 as "begin_checkout": one per click through to Paystack.
        trackEvent("begin_checkout", {
          currency: "NGN",
          value: plan === "deposit" ? 100000 : 200000,
          payment_plan: plan,
          items: [{ item_name: "Pitch & Get Funded 2026 Bootcamp", item_variant: plan }],
        })
      }
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all ${variants[variant]} ${className}`}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
