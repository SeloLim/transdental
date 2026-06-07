"use client";

import { motion, useReducedMotion } from "motion/react";
import { createElement, type ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "footer" | "h1" | "h2" | "h3" | "ol" | "ul" | "p";
  amount?: number;
};

export default function FadeUp({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
  amount = 0.2,
}: FadeUpProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    return createElement(as, { className }, children);
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
