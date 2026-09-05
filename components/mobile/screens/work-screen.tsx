"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Pill } from "@/components/mobile/shared/pill";
import { SectionHeading } from "@/components/mobile/shared/section-heading";

export function WorkScreen() {
  return (
    <div>
      <SectionHeading label="Case studies" title="Systems I've built." />
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {project.category}
              </p>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden
              />
            </div>
            <h2 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}