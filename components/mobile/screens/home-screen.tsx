"use client";

import { Github, Linkedin, Mail, MapPin, X } from "lucide-react";
import { profile, stats, journey } from "@/lib/data";
import type { TabId } from "@/components/mobile/tab-bar";

const socialIcons = [
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin },
  { label: "X / Twitter", icon: X },
  { label: "Email", icon: Mail },
] as const;

type HomeScreenProps = {
  onNavigate: (tab: TabId) => void;
};

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const social = profile.socials.find((s) => s.label.includes("GitHub"));

  return (
    <div>
      <p className="flex items-center gap-2 font-mono text-xs text-foreground">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        {profile.availability} · {profile.location}
      </p>

      <h1 className="mt-5 text-balance font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-foreground">
        I build AI systems that{" "}
        <span className="text-gradient">scale without losing shape.</span>
      </h1>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        {profile.tagline}
      </p>

      <div className="mt-7 flex gap-3">
        <button
          type="button"
          onClick={() => onNavigate("connect")}
          className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Start a conversation
        </button>
        <button
          type="button"
          onClick={() => onNavigate("work")}
          className="inline-flex h-11 flex-1 items-center justify-center rounded-lg border border-border bg-transparent px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          See selected work
        </button>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 via-accent/20 to-violet-500/30 font-display text-lg font-semibold tracking-tight text-foreground ring-1 ring-border">
            ST
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-semibold tracking-tight text-foreground">
              {profile.name}
            </p>
            <p className="truncate font-mono text-xs text-muted-foreground">
              {profile.role} ·{" "}
              <a
                href={social?.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                @lockround
              </a>
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" aria-hidden />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          {profile.socials.map((s) => {
            const Icon =
              socialIcons.find((m) => m.label === s.label)?.icon ?? Mail;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-4">
            <p className="font-display text-3xl font-semibold tracking-tight text-gradient">
              {s.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 pb-2">
        <p className="mb-3 flex items-center gap-2 font-mono text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          The journey
        </p>
        <div className="space-y-0">
          {journey.map((j) => (
            <div key={j.year} className="relative border-l border-border pl-5 pb-6 last:pb-0">
              <span
                className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/15"
                aria-hidden
              />
              <p className="font-mono text-xs text-primary">{j.year}</p>
              <p className="mt-1 text-[15px] font-semibold text-foreground">
                {j.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {j.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}