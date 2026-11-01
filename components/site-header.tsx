"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["/commands", "Commands"],
  ["/status", "Status"],
  ["/faq", "FAQ"],
  ["/support", "Support"]
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">V</span>
          <span>VILLAIN<span className="brand-dot">.</span></span>
        </Link>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/terms" className="nav-mobile-legal" onClick={() => setOpen(false)}>Legal</Link>
          <a className="nav-cta" href="/support">Get started <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
