"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-flare/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="section relative grid gap-14 py-24 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow mb-6 text-flare"
          >
            Idea → Funded
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]"
          >
            We help builders launch, grow, and become{" "}
            <span className="italic text-flare">funding-ready.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            We also partner with institutions to design and deliver entrepreneurship and
            innovation programmes with measurable outcomes — backed by a decade+ of combined
            experience and a global network of trainers, mentors, operators, and capital partners.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/#book-call">Book Your Strategy Call Today</Button>
            <Button href="/#partner" variant="ghost" className="!border-cream/25 !text-cream hover:!bg-cream/10">
              Partner With Us
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 rounded-xl border border-flare/40 bg-flare/10 px-5 py-3.5 sm:inline-flex sm:items-center sm:gap-3"
          >
            <span className="text-sm font-semibold text-cream">
              Free live webinar · How to Pitch and Get Funded
            </span>
            <a
              href="/pitch-and-get-funded-webinar"
              className="mt-1 inline-block text-sm font-semibold text-flare underline underline-offset-4 hover:text-cream sm:mt-0"
            >
              Save my free seat →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-pulse-ring rounded-full border border-flare/40" />
          <div className="absolute inset-6 rounded-full border border-cream/10" />
          <MarkArrow />
        </motion.div>
      </div>

      <div className="hairline opacity-30" />
    </section>
  );
}

/** Animated version of the logo's lightbulb + arrow mark: the arrow draws itself on load. */
function MarkArrow() {
  return (
    <svg viewBox="0 0 180 215" fill="none" className="h-40 w-40 sm:h-52 sm:w-52" aria-hidden="true">
      <circle
        cx="90"
        cy="70"
        r="58"
        stroke="#F06D38"
        strokeWidth="10"
        className="opacity-90"
      />
      <motion.path
        d="M50 100 L110 40 M110 40 H70 M110 40 V80"
        stroke="#F06D38"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
      />
      <rect x="65" y="150" width="50" height="10" rx="5" fill="#F06D38" />
      <rect x="70" y="170" width="40" height="10" rx="5" fill="#F06D38" />
      <rect x="76" y="190" width="28" height="10" rx="5" fill="#F06D38" />
    </svg>
  );
}
