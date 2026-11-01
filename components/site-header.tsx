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
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Villain home">
          <span className="brand-mark">V</span>
          <span className="brand-name">VILLAIN</span>
        </Link>
        <button
          className={open ? "menu-toggle is-open" : "menu-toggle"}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "nav-link active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link className="nav-cta" href="/commands" onClick={() => setOpen(false)}>Commands</Link>
        </nav>
      </div>
    </header>
  );
}
