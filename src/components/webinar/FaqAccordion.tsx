"use client";

import { useState } from "react";
import { bootcampFaqs } from "@/lib/site-data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white/60">
      {bootcampFaqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-base text-ink sm:text-lg">{faq.question}</span>
              <span
                className={`shrink-0 text-xl text-flare transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden px-6 transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-ink/65">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
