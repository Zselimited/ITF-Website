"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Signature element: a fixed vertical line running down the edge of the
 * viewport that fills with the brand's flare-orange as the visitor scrolls —
 * literally tracing the "Idea → Funded" arrow from the mark across the
 * whole page. Hidden on small screens to keep mobile uncluttered, and
 * respects prefers-reduced-motion via the spring's damping.
 */
export default function GrowthLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });
  const dotTop = useTransform(scaleY, (v) => `${v * 100}%`);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-[3px] md:block"
    >
      <div className="absolute inset-0 bg-ink/10" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute inset-0 bg-gradient-to-b from-flare to-gold"
      />
      <motion.div
        style={{ top: dotTop }}
        className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flare shadow-[0_0_0_4px_rgba(240,109,56,0.2)]"
      />
    </div>
  );
}
