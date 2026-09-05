"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* schematic grid backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.16] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative">
        <motion.div
          variants={prefersReduced ? undefined : container}
          initial={prefersReduced ? false : "hidden"}
          animate={prefersReduced ? undefined : "show"}
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-6 font-mono text-sm tracking-wide text-primary"
          >
            {profile.availability} · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            I design systems that{" "}
            <span className="text-gradient">scale without losing shape.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <Link href="#contact">
                Start a conversation
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#work">See selected work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="block h-12 w-px animate-pulse-slow bg-gradient-to-b from-primary to-transparent" />
      </a>
    </section>
  );
}
