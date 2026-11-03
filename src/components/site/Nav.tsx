import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { IconButton, InviteButton, Logo } from "./primitives";

export function Nav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:h-24">
        <Logo />
        <ul className="hidden items-center gap-1 rounded-full border border-border bg-card px-2 py-1.5 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "bg-elevated text-primary" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <InviteButton size="sm" />
        </div>
        <IconButton
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </IconButton>
      </nav>
      {open && (
        <div id="mobile-navigation" className="page-arrival border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="block border-b border-border py-3.5 text-base text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <InviteButton className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
