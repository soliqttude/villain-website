import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories } from "@/lib/commands";
import { PageHeader } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/commands")({
  head: () => ({
    meta: [
      { title: "Commands — Villain" },
      { name: "description", content: "Every Villain command for moderation, protection, server management, community and music." },
      { property: "og:title", content: "Commands — Villain" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Browse every Villain command by category." },
    ],
  }),
  component: CommandsPage,
});

function CommandsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const filtered = useMemo(
    () =>
      categories
        .filter((c) => cat === "all" || c.id === cat)
        .map((c) => ({ ...c, commands: c.commands.filter((x) => (x.name + x.description).toLowerCase().includes(q.toLowerCase())) }))
        .filter((c) => c.commands.length),
    [q, cat],
  );

  return (
    <>
      <PageHeader eyebrow="Commands" title="Command reference" text="Default prefix is a comma. Every command also works as a slash command." />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {[{ id: "all", title: "All" }, ...categories].map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={cn("rounded-md border px-3 py-1.5 text-sm transition-colors", cat === c.id ? "border-border-strong bg-elevated text-foreground" : "border-border text-muted-foreground hover:text-foreground")}
              >
                {c.title}
              </button>
            ))}
          </div>
          <label className="flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-3 md:w-72">
            <Search className="size-4 text-subtle" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search commands" className="w-full bg-transparent text-sm outline-none placeholder:text-subtle" />
          </label>
        </div>
        <div className="mt-10 space-y-12">
          {filtered.map((c) => (
            <section key={c.id}>
              <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">{c.title}</h2>
              <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                {c.commands.map((x) => (
                  <div key={x.name} className="grid gap-1 px-5 py-4 transition-colors hover:bg-elevated md:grid-cols-[260px_1fr] md:gap-6">
                    <code className="font-mono text-sm text-foreground">,{x.usage}</code>
                    <p className="text-sm text-muted-foreground">{x.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
          {!filtered.length && <p className="text-sm text-muted-foreground">No commands match "{q}".</p>}
        </div>
      </div>
    </>
  );
}
