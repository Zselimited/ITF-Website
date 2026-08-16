"use client";

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

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line for the process, since this genuinely is a sequence */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-cream/15 lg:block" />
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
    </section>
  );
}
