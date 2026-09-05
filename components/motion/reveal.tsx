"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

function offset(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: 32 };
    case "down":
      return { y: -32 };
    case "left":
      return { x: 32 };
    case "right":
      return { x: -32 };
    default:
      return {};
  }
}

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  duration?: number;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  duration = 0.7,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const o = offset(direction);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...o }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
