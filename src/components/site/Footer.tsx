import { Link } from "@tanstack/react-router";
import { Logo } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center">
        <Logo />
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {[
            ["/commands", "Commands"],
            ["/status", "Status"],
            ["/faq", "FAQ"],
            ["/support", "Support"],
            ["/privacy", "Privacy"],
            ["/terms", "Terms"],
          ].map(([to, label]) => (
            <li key={to}>
              <Link to={to as "/commands"} className="transition-colors hover:text-foreground">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-subtle">© {new Date().getFullYear()} villain. Not affiliated with Discord.</p>
      </div>
    </footer>
  );
}
