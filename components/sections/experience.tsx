"use client";

import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-primary">Timeline</p>
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A track record of shipping at scale.
          </h2>
        </Reveal>

        <div className="mt-16">
          {experience.map((xp, i) => (
            <Reveal key={xp.company} delay={i * 0.06}>
              <div className="grid gap-6 border-t border-border py-10 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="font-mono text-sm text-primary">{xp.period}</p>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {xp.role}
                    </h3>
                    <span className="text-muted-foreground">· {xp.company}</span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {xp.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span className="text-base leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
