// @ts-nocheck
"use client";

import { useScroll, motion, useSpring } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Springified for a satisfying trailing effect
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-amber to-brand-orange origin-left z-[999] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
