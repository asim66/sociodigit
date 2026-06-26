// @ts-nocheck
"use client";

import React, { useRef } from "react";
import { motion, useInView, Variant } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
  scale?: boolean;
  fade?: boolean;
  stagger?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 40 },
  down:  { y: -40 },
  left:  { x: 50 },
  right: { x: -50 },
  none:  {},
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.65,
  once = true,
  distance = 40,
  scale = false,
  fade = true,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px -60px 0px" });

  const offset = directionMap[direction];

  const hidden: Record<string, any> = {
    opacity: fade ? 0 : 1,
    ...(offset.x !== undefined ? { x: offset.x } : {}),
    ...(offset.y !== undefined ? { y: (offset.y / 40) * distance } : {}),
    ...(scale ? { scale: 0.95 } : {}),
  };

  const visible: Record<string, any> = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </MotionComponent>
  );
}

// Stagger container for animating children in sequence
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Item for use inside StaggerContainer
export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const offset = directionMap[direction];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...(offset.x !== undefined ? { x: offset.x } : {}),
          ...(offset.y !== undefined ? { y: offset.y } : {}),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
