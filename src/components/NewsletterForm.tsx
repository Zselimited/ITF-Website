"use client";

import { useState, type FormEvent } from "react";
import { NEWSLETTER_SCRIPT_URL } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    // Until the Google Sheet script is deployed, fall back to email.
    if (!NEWSLETTER_SCRIPT_URL) {
      window.location.href = `mailto:itofunded@gmail.com?subject=Newsletter%20sign-up&body=${encodeURIComponent(
        `Please add ${email} to the Idea to Funded mailing list.`
      )}`;
      return;
    }
    setStatus("submitting");
    try {
      await fetch(NEWSLETTER_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email, source: window.location.pathname }),
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-cream">You&apos;re subscribed — thank you! 🎉</p>;
  }

  return (
    <>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <label htmlFor="footer-email" className="sr-only">Email address</label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="w-full rounded-full border border-cream/20 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus-visible:outline-2"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 rounded-full bg-flare px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#d85a26] disabled:opacity-60"
        >
          {status === "submitting" ? "..." : "Join"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-flare">Something went wrong — please try again in a moment.</p>
      )}
    </>
  );
}
