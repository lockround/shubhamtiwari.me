"use client";

import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/mobile/shared/section-heading";

export function ExperienceScreen() {
  return (
    <div>
      <SectionHeading
        label="Timeline"
        title="A career of building at scale."
      />
      <div className="space-y-5">
        {experience.map((xp) => (
          <article
            key={xp.company}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="border-b border-border bg-secondary/40 px-5 py-4">
              <p className="font-mono text-xs text-primary">{xp.period}</p>
              <h2 className="mt-1 font-display text-lg font-semibold tracking-tight text-foreground">
                {xp.role}
              </h2>
              <p className="text-sm text-muted-foreground">{xp.company}</p>
            </div>
            <ul className="divide-y divide-border px-5 py-2">
              {xp.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 py-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}