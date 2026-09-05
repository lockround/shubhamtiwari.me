"use client";

import { Download } from "lucide-react";

type AppHeaderProps = {
  canInstall: boolean;
  onInstall: () => void;
};

export function AppHeader({ canInstall, onInstall }: AppHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border/60 bg-background/80 px-4 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-border bg-card">
          <svg viewBox="0 0 64 64" className="h-4 w-4" aria-hidden>
            <rect width="64" height="64" rx="14" fill="#0b1120" />
            <path d="M16 44V20" stroke="#22d3ee" strokeWidth="8" strokeLinecap="round" />
            <path d="M48 44V20" stroke="#22d3ee" strokeWidth="8" strokeLinecap="round" />
            <path d="M16 25h32" stroke="#818cf8" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
            <path d="M16 36h32" stroke="#818cf8" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
          </svg>
        </span>
        <div className="leading-none">
          <p className="font-display text-sm font-semibold tracking-tight text-foreground">
            Shubham Tiwari
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-wide text-muted-foreground">
            Solutions Architect
          </p>
        </div>
      </div>

      {canInstall && (
        <button
          type="button"
          onClick={onInstall}
          aria-label="Install app to your home screen"
          className="flex h-8 items-center gap-1.5 rounded-full border border-border px-3 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
        >
          <Download className="h-3.5 w-3.5" aria-hidden />
          Install
        </button>
      )}
    </header>
  );
}