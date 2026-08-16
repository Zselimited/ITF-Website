"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/site-data";

export default function ImpactStats() {
  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="section grid grid-cols-2 gap-8 py-14 sm:py-16 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left"
          >
            <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm leading-snug text-ink/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
