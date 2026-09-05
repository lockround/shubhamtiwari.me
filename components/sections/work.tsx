"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-primary">Case studies</p>
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Systems I&apos;ve built.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative flex flex-col bg-card p-8 transition-colors duration-300 hover:bg-card/60"
            >
              <Reveal delay={(i % 3) * 0.08} className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </p>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
