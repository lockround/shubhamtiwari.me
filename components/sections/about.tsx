"use client";

import { Reveal } from "@/components/motion/reveal";
import { profile, stats, journey } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="mb-4 font-mono text-sm text-primary">Context</p>
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Translating business goals into scalable architecture.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p className="text-balance">{profile.summary}</p>
                <p>
                  A versatile team-player with a passion for multi-platform
                  support, I collaborate iteratively with different teams to
                  translate business requirements into projects with established
                  scope. I design cloud architecture for applications that have
                  an achievable and sustainable development schedule — balancing
                  scale, cost, security, and the people who will run it.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border-l border-border pl-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  The journey
                </h3>
                <div className="mt-6 space-y-7">
                  {journey.map((j) => (
                    <div key={j.year} className="relative pl-6">
                      <span className="absolute -left-px top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-primary/15" />
                      <p className="font-mono text-xs text-primary">{j.year}</p>
                      <p className="mt-1 font-medium">{j.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {j.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-card p-7">
              <Reveal delay={i * 0.08}>
                <p className="font-display text-4xl font-semibold tracking-tight text-gradient">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
