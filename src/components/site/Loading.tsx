import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteLoading() {
  const [opening, setOpening] = useState(true);
  const isLoading = useRouterState({ select: (state) => state.isLoading });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpening(false);
      return;
    }
    const timer = window.setTimeout(() => setOpening(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {opening && (
        <div className="site-opening pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-background" aria-hidden="true">
          <div className="flex flex-col items-center gap-6">
            <div className="opening-mark flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="size-9 text-foreground" fill="currentColor">
                <path d="M3 4h4.2L12 15.6 16.8 4H21l-7.4 16h-3.2L3 4Z" />
              </svg>
              <span className="text-2xl font-semibold">villain</span>
            </div>
            <span className="opening-name text-sm text-subtle">Loading villain</span>
            <div className="h-px w-28 overflow-hidden bg-border-strong">
              <div className="opening-progress h-full w-full origin-left bg-foreground" />
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[110] h-0.5 overflow-hidden bg-border" role="status">
          <span className="sr-only">Loading page</span>
          <div className="navigation-progress h-full w-1/3 bg-primary" />
        </div>
      )}
    </>
  );
}
