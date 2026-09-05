"use client";

import {
  ArrowUpRight,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { profile } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

type Row = {
  label: string;
  sub: string;
  icon: LucideIcon;
  href: string;
  external: boolean;
};

function handle(href: string) {
  return href.replace(/^(https?:\/\/|mailto:|tel:)/, "");
}

const socialMeta = [
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin },
  { label: "X / Twitter", icon: X },
  { label: "Email", icon: Mail },
];

const rows: Row[] = [
  {
    label: profile.email,
    sub: "Email",
    icon: Mail,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: profile.phone,
    sub: "Phone",
    icon: Phone,
    href: `tel:${profile.phone}`,
    external: false,
  },
  ...profile.socials
    .filter((s) => s.label !== "Email")
    .map((s) => ({
      label: handle(s.href),
      sub: s.label,
      icon:
        socialMeta.find((m) => m.label === s.label)?.icon ?? (Mail as LucideIcon),
      href: s.href,
      external: true,
    })),
];

export function ConnectScreen() {
  return (
    <div>
      <h1 className="text-balance font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-foreground">
        Have a system that needs a shape?{" "}
        <span className="text-gradient">Let&apos;s build it together.</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        I help teams and leaders turn complex, ambiguous problems into
        architecture that is dependable, honest, and built to last.
      </p>

      <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-card">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <a
              key={row.sub}
              href={row.href}
              target={row.external ? "_blank" : undefined}
              rel={row.external ? "noreferrer" : undefined}
              className="flex items-center gap-4 border-b border-border px-5 py-4 last:border-b-0 transition-colors hover:bg-secondary/50"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/60 text-primary">
                <Icon className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">
                  {row.label}
                </span>
                <span className="block font-mono text-[11px] text-muted-foreground">
                  {row.sub}
                </span>
              </span>
              <ChevronRight
                className="ml-auto h-4 w-4 shrink-0 text-muted-foreground"
                aria-hidden
              />
            </a>
          );
        })}
      </div>

      <p className="mt-6 text-center font-mono text-xs text-muted-foreground">
        Response within 24 hours — India · Remote worldwide
      </p>

      <a
        href="/"
        className="mt-4 flex items-center justify-center gap-1.5 text-center font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        Visit the full website
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
      </a>
    </div>
  );
}