"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { matchedSteps } from "@/lib/site-data";

export default function CapitalCopilot() {
  return (
    <section id="capital-copilot" className="bg-ink py-24 text-cream sm:py-28">
      <div className="section">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Capital Copilot — Funding & Connections"
            title="We don't just prepare you for funding. We help you find it."
            description="Most advisory firms get founders ready and then send them out alone. ITF closes that gap. Through our Matched programme, we connect investment-ready founders with vetted capital partners, grant opportunities, and strategic partnerships — based on fit, not proximity. If the connection isn't right, we don't make it."
            light
          />
          <Button href="/#book-call" className="shrink-0">
            Book a Discovery Call
          </Button>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-cream/10"
          >
            <Image
              src="/images/mentor-mentee-laptop.jpg"
              alt="An ITF mentor guiding a founder through their materials"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
          </motion.div>

          <div className="relative grid gap-8 sm:grid-cols-2">
            {matchedSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-flare ring-1 ring-flare/50">
                  {step.number}
                </span>
                <h3 className="font-display text-lg text-cream">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/65">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
