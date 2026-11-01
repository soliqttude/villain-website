"use client";

import { useEffect, useState } from "react";

export function SiteIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("villain-intro-seen")) return;
      window.sessionStorage.setItem("villain-intro-seen", "1");
      setVisible(true);
      const timeout = window.setTimeout(() => setVisible(false), 1900);
      return () => window.clearTimeout(timeout);
    } catch {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="site-intro" role="status" aria-label="Loading Villain">
      <div className="intro-content">
        <div className="intro-mark">V</div>
        <div className="intro-word">VILLAIN<span>.</span></div>
        <div className="intro-caption">THE SERVER STARTS HERE</div>
        <div className="intro-progress"><i /></div>
      </div>
    </div>
  );
}
