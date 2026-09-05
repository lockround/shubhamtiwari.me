"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScreenProps = {
  children: ReactNode;
  /** Changes every time the active tab changes, so the entrance replays. */
  tabId: string;
};

export function Screen({ children, tabId }: ScreenProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      key={tabId}
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="px-5 pb-10 pt-6"
    >
      {children}
    </motion.div>
  );
}