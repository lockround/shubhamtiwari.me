"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Boxes,
  FolderGit2,
  House,
  Layers,
  MessageSquareMore,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type TabId = "home" | "expertise" | "experience" | "work" | "connect";

export const tabs: { id: TabId; label: string; icon: typeof House }[] = [
  { id: "home", label: "Home", icon: House },
  { id: "expertise", label: "Expertise", icon: Boxes },
  { id: "experience", label: "Experience", icon: Layers },
  { id: "work", label: "Work", icon: FolderGit2 },
  { id: "connect", label: "Connect", icon: MessageSquareMore },
];

type TabBarProps = {
  active: TabId;
  onSelect: (id: TabId) => void;
};

export function TabBar({ active, onSelect }: TabBarProps) {
  const prefersReduced = useReducedMotion();

  return (
    <nav
      aria-label="App sections"
      className="px-3 pb-[calc(env(safe-area-inset-bottom)+0.7rem)]"
    >
      <div className="flex items-stretch gap-1 rounded-2xl border border-border/80 bg-background/85 p-1.5 shadow-[0_-10px_32px_rgba(2,6,23,0.65)] backdrop-blur-xl">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelect(tab.id)}
              aria-current={isActive ? "page" : undefined}
              aria-label={tab.label}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-1.5 rounded-xl px-1 pb-2 pt-2.5 transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground active:text-foreground"
              )}
            >
              {isActive &&
                (prefersReduced ? (
                  <span className="absolute inset-0 rounded-xl bg-secondary" />
                ) : (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-secondary/90"
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  />
                ))}
              <Icon
                className="relative h-5 w-5"
                strokeWidth={isActive ? 2.1 : 1.8}
                aria-hidden
              />
              <span className="relative font-mono text-[10px] leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}