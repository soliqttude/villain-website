import { Link } from "@tanstack/react-router";
import { Logo } from "./primitives";

const cols = [
  { title: "Product", links: [{ to: "/", label: "Overview" }, { to: "/commands", label: "Commands" }, { to: "/status", label: "Status" }] },
  { title: "Help", links: [{ to: "/faq", label: "FAQ" }, { to: "/support", label: "Support" }] },
  { title: "Legal", links: [{ to: "/privacy", label: "Privacy Policy" }, { to: "/terms", label: "Terms of Service" }] },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-x-4 gap-y-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-3 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Moderation, protection, music and community tools for Discord — in one bot.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-subtle md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Villain. Not affiliated with Discord Inc.</span>
          <span className="font-mono">villain — all-in-one discord bot</span>
        </div>
      </div>
    </footer>
  );
}
