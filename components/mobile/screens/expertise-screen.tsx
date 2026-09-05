"use client";

import { expertise } from "@/lib/data";
import { Pill } from "@/components/mobile/shared/pill";
import { SectionHeading } from "@/components/mobile/shared/section-heading";

export function ExpertiseScreen() {
  return (
    <div>
      <SectionHeading
        label="Capabilities"
        title="The disciplines I practice."
      />
      <div className="space-y-4">
        {expertise.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}