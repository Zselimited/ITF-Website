"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeTestimonials } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 sm:py-28">
      <div className="section">
        <SectionHeading eyebrow="Testimonials" title="What builders say after working with us" align="center" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {homeTestimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-ink/10 bg-white/70 p-8"
            >
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="mb-4 text-flare/60">
                <path
                  d="M0 20V11.6C0 4.4 4 0.4 11.2 0L12 3.6C7.6 4.4 5.2 6.8 5.2 10.4H11.2V20H0ZM16.8 20V11.6C16.8 4.4 20.8 0.4 28 0L28.8 3.6C24.4 4.4 22 6.8 22 10.4H28V20H16.8Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="text-sm leading-relaxed text-ink/75 sm:text-base">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt="" fill sizes="40px" className="object-cover" />
                </span>
                <span className="text-sm font-semibold text-ink">
                  {t.name}
                  {t.org && <span className="block font-normal text-ink/50">{t.org}</span>}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
