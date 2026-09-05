import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Solutions Architect
        </p>
        <div className="flex gap-6">
          {profile.socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
