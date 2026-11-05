import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { ChevronRight } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

export function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("grid size-10 place-items-center rounded-full border border-border-strong bg-card text-foreground transition-colors hover:bg-elevated", className)} {...props} />;
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label="Villain home">
      <svg viewBox="0 0 24 24" className="size-6 text-foreground" fill="currentColor" aria-hidden>
        <path d="M3 4h4.2L12 15.6 16.8 4H21l-7.4 16h-3.2L3 4Z" />
      </svg>
      <span className="text-lg font-semibold">villain</span>
    </Link>
  );
}

const btnBase = "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const variants = {
  primary: "border border-foreground bg-foreground text-background hover:bg-foreground/90",
  ghost: "border border-border-strong bg-transparent text-foreground hover:bg-elevated",
};
const sizes = { sm: "h-10 px-4", lg: "h-12 px-6" };

export function InviteButton({ size = "lg", className, label = "Invite to Discord" }: { size?: "sm" | "lg"; className?: string; label?: string }) {
  const cls = cn(btnBase, variants.primary, sizes[size], className);
  if (site.inviteUrl) return <a href={site.inviteUrl} target="_blank" rel="noreferrer" className={cls}>{label}</a>;
  return <Link to="/support" className={cls}>{label}</Link>;
}

export function GhostLink({ to, children, size = "lg" }: { to: "/commands" | "/status" | "/support" | "/faq"; children: ReactNode; size?: "sm" | "lg" }) {
  return <Link to={to} className={cn(btnBase, variants.ghost, sizes[size])}>{children}<ChevronRight className="size-4 text-subtle transition-transform group-hover:translate-x-0.5" /></Link>;
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.dataset["shown"] = "true"; io.disconnect(); }
    }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-subtle">{children}</p>;
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <Reveal className="mx-auto mb-10 max-w-2xl text-center md:mb-14"><Eyebrow>{eyebrow}</Eyebrow><h2 className="text-3xl font-semibold text-balance md:text-4xl md:leading-[1.2]">{title}</h2><p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">{text}</p></Reveal>;
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-md border border-border bg-elevated px-2 py-1 font-mono text-[11px] text-muted-foreground">{children}</span>;
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <header className="relative overflow-hidden border-b border-border"><div className="pointer-events-none absolute inset-0 glow-top" /><div className="relative mx-auto max-w-6xl px-5 pb-10 pt-32 text-center md:pt-40"><Eyebrow>{eyebrow}</Eyebrow><h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1><p className="mx-auto mt-4 max-w-xl text-muted-foreground">{text}</p></div></header>;
}
