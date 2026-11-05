import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { IconButton, InviteButton, Logo } from "./primitives";

const links = [
  { to: "/", hash: "features", label: "Features" },
  { to: "/commands", label: "Commands" },
  { to: "/status", label: "Status" },
  { to: "/faq", label: "FAQ" },
  { to: "/support", label: "Support" },
] as const;

function NavLink({ l, className }: { l: (typeof links)[number]; className: string }) {
  if ("hash" in l)
    return <Link to={l.to} hash={l.hash} className={className}>{l.label}</Link>;
  return <Link to={l.to} className={className} activeProps={{ className: "text-foreground" }}>{l.label}</Link>;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px]">
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => <li key={l.label}><NavLink l={l} className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground" /></li>)}
        </ul>
        <div className="hidden md:block"><InviteButton size="sm" label="Invite" /></div>
        <IconButton className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </IconButton>
      </nav>
      {open && (
        <div id="mobile-navigation" className="page-arrival border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => <li key={l.label}><NavLink l={l} className="block border-b border-border py-3.5 text-base text-muted-foreground hover:text-foreground" /></li>)}
            <li className="pb-2 pt-4"><InviteButton className="w-full" /></li>
          </ul>
        </div>
      )}
    </header>
  );
}
