import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border px-2.5 py-1 font-mono text-[11px] leading-none text-muted-foreground">
      {children}
    </span>
  );
}