"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="container relative text-center">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-primary">Connect</p>
          <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Have a system that needs a shape?{" "}
            <span className="text-gradient">Let&apos;s design it together.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            I help teams and leaders turn complex, ambiguous problems into
            architecture that is dependable, honest, and built to last.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.socials[1].href} target="_blank" rel="noreferrer">
                Connect on LinkedIn
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
