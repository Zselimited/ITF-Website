"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { academyOfferings } from "@/lib/site-data";

export default function Academy() {
  return (
    <section id="academy" className="section py-24 sm:py-28">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="ITF Academy" title="Learning you can apply before the week is out." description="The ITF Academy delivers practical, founder-focused learning — no fluff, no theory that doesn't translate. Whether you are a first-time founder or an experienced operator hitting a ceiling, the Academy meets you where you are and moves you forward." />
        <Button href="https://selfany.com/s/Ideatofunded" variant="secondary" className="shrink-0">Explore the Academy</Button>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {academyOfferings.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lift group overflow-hidden rounded-2xl border border-ink/10 bg-white/60"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={o.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-5 font-display text-3xl text-cream/90">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl text-ink">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{o.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-flare/30 bg-flare/10 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="eyebrow mb-2 text-flare">Flagship cohort</p>
          <h3 className="font-display text-2xl text-ink">Pitch & Get Funded — 2026 Bootcamp</h3>
          <p className="mt-2 max-w-lg text-sm text-ink/65">
            A practical 6-week funding-readiness bootcamp. Build, test and strengthen your pitch — from the
            problem you solve to your numbers, funding ask, delivery and funder strategy.
          </p>
        </div>
        <Button href="/pitch-and-get-funded-webinar" className="shrink-0">
          View the Bootcamp
        </Button>
      </div>
    </section>
  );
}
