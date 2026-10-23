"use client";
// @ts-nocheck

import { useScroll, motion } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-amber to-brand-orange origin-left z-[999] pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
