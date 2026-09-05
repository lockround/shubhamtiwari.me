"use client";

import { Reveal } from "@/components/motion/reveal";
import { expertise } from "@/lib/data";

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 font-mono text-sm text-primary">Capabilities</p>
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                The disciplines I practice.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              From AI applications to cloud infrastructure — balancing scale,
              cost, security, and the people operating it.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e) => (
            <div key={e.title} className="group bg-card p-8 transition-colors duration-300 hover:bg-card/60">
              <Reveal className="h-full">
                <div className="flex h-full flex-col justify-between gap-6 min-h-[12rem]">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {e.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
