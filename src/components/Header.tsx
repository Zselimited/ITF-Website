"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const WHATSAPP_URL = "https://chat.whatsapp.com/LvVpjKlL5vI6HckUXOqn3a?s=sh&p=a&ilr=0";

const links = [
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/#capital-copilot", label: "Capital Copilot" },
  { href: "/#academy", label: "Academy" },
  { href: "/#testimonials", label: "Stories" },
  { href: "/pitch-and-get-funded-webinar", label: "Webinar" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Idea to Funded home">
          <Image src="/icon-192.png" alt="" width={34} height={34} priority className="h-8 w-8" />
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? "text-cream" : "text-ink"
            }`}
          >
            Idea to Funded
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-cream/80 hover:text-cream" : "text-ink/80 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block"><Button href={WHATSAPP_URL} className="!px-5 !py-2.5 !text-xs">Join Community</Button></div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            scrolled ? "text-cream" : "text-ink"
          }`}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <nav className="section flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-ink/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2"><Button href={WHATSAPP_URL} className="w-full justify-center">Join Community</Button></div>
          </nav>
        </div>
      )}
    </header>
  );
}
