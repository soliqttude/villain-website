"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["/commands", "Commands"],
  ["/status", "Status"],
  ["/faq", "FAQ"],
  ["/support", "Support"]
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Villain home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Villain</span>
        </Link>
        <button
          type="button"
          className={open ? "menu-toggle is-open" : "menu-toggle"}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "nav-link is-active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link className="btn nav-cta" href="/invite" onClick={() => setOpen(false)}>
            Add to server
          </Link>
        </nav>
      </div>
    </header>
  );
}
