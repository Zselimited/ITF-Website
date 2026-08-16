"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { founderServices, institutionServices } from "@/lib/site-data";

export default function WhatWeDo() {
  const [tab, setTab] = useState<"founders" | "institutions">("founders");

  return (
    <section id="what-we-do" className="section py-24 sm:py-28">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="What We Do"
          title={tab === "founders" ? "For Founders and SMEs" : "For Institutions, Donors & Ecosystem Enablers"}
          description={
            tab === "founders"
              ? "You don't need more generic advice. You need a partner who helps you close the gap between a good business and one that funders say yes to — with the right strategy, numbers, materials, and connections."
              : "ITF works as a builder-partner to institutions running entrepreneurship and innovation initiatives — from strategy through implementation, with credible evidence for learning, reporting, and scale."
          }
        />

        <div className="flex shrink-0 rounded-full border border-ink/15 p-1">
          {(["founders", "institutions"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === t ? "bg-ink text-cream" : "text-ink/60 hover:text-ink"
              }`}
            >
              {t === "founders" ? "Founders" : "Institutions"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14" id="services-founders">
        <AnimatePresence mode="wait">
          {tab === "founders" ? (
            <motion.div
              key="founders"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {founderServices.map((s) => (
                <div
                  key={s.title}
                  className="lift rounded-2xl border border-ink/10 bg-white/60 p-8"
                >
                  <h3 className="font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.description}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="institutions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {institutionServices.map((s) => (
                <div
                  key={s.title}
                  className="lift rounded-2xl border border-ink/10 bg-white/60 p-8"
                >
                  <h3 className="font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                    {s.points.slice(0, 4).map((p) => (
                      <li key={p} className="flex gap-2 text-xs leading-relaxed text-ink/55">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-flare" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-12 flex justify-center">
        <Button href={tab === "founders" ? "/#book-call" : "/#partner"} variant="secondary">
          {tab === "founders" ? "Book Your Strategy Call Today" : "Partner With Us"}
        </Button>
      </div>
    </section>
  );
}
