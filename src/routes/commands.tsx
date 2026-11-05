import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search, ShieldCheck } from "lucide-react";
import { categories, displayUsage, totalCommands, PREFIX } from "@/lib/commands";
import { PageHeader } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/commands")({
  head: () => ({
    meta: [
      { title: "Commands — villain" },
      { name: "description", content: "Browse every villain command: syntax, examples, aliases and permissions." },
      { property: "og:title", content: "Commands — villain" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:description", content: "Every villain command with syntax, examples, aliases and permissions." },
    ],
  }),
  component: CommandsPage,
});

function CommandsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return categories
      .filter((c) => cat === "all" || c.id === cat)
      .map((c) => ({
        ...c,
        commands: needle
          ? c.commands.filter((x) => `${x.name} ${x.aliases.join(" ")} ${x.description}`.toLowerCase().includes(needle))
          : c.commands,
      }))
      .filter((c) => c.commands.length);
  }, [q, cat]);

  const shown = filtered.reduce((n, c) => n + c.commands.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Commands"
        title="Commands"
        text={`${totalCommands} commands with syntax, examples, aliases and permissions. Default prefix is "${PREFIX}" and most commands also work as slash commands.`}
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[220px_1fr] lg:gap-12">
        {/* Category rail */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <label className="flex h-11 items-center gap-2 rounded-full border border-border-strong bg-card px-4">
            <Search className="size-4 shrink-0 text-subtle" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search commands"
              aria-label="Search commands"
              className="w-full bg-transparent text-sm outline-none placeholder:text-subtle"
            />
          </label>
          <nav aria-label="Command categories" className="mt-4 flex gap-1.5 overflow-x-auto pb-1 lg:max-h-[calc(100vh-12rem)] lg:flex-col lg:gap-0.5 lg:overflow-y-auto lg:pb-0">
            {[{ id: "all", title: "All commands", commands: { length: totalCommands } }, ...categories].map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                aria-pressed={cat === c.id}
                className={cn(
                  "flex shrink-0 items-center justify-between gap-3 rounded-full px-3.5 py-2 text-left text-sm transition-colors lg:rounded-lg",
                  cat === c.id ? "bg-elevated text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span>{c.title}</span>
                <span className="font-mono text-[11px] text-subtle">{c.commands.length}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Command list */}
        <div className="min-w-0">
          <p className="mb-6 text-sm text-subtle" role="status">
            {shown} {shown === 1 ? "command" : "commands"}
            {q && <> matching “{q}”</>}
          </p>
          <div className="space-y-12">
            {filtered.map((c) => (
              <section key={c.id}>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">{c.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
                </div>
                <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                  {c.commands.map((x) => (
                    <details key={x.name} className="group">
                      <summary className="flex cursor-pointer list-none items-start gap-3 px-5 py-4 transition-colors hover:bg-elevated [&::-webkit-details-marker]:hidden">
                        <code className="w-28 shrink-0 pt-0.5 font-mono text-sm text-foreground sm:w-40">{PREFIX + x.name}</code>
                        <p className="min-w-0 flex-1 text-sm text-muted-foreground">{x.description}</p>
                        <ChevronDown className="mt-0.5 size-4 shrink-0 text-subtle transition-transform group-open:rotate-180" />
                      </summary>
                      <dl className="space-y-4 border-t border-border bg-section px-5 py-4 text-sm">
                        <div>
                          <dt className="mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle">Syntax</dt>
                          <dd><code className="break-words rounded-md bg-elevated px-2 py-1 font-mono text-[13px] text-foreground">{displayUsage(x.usage)}</code></dd>
                        </div>
                        {x.examples.length > 0 && (
                          <div>
                            <dt className="mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle">Examples</dt>
                            <dd className="space-y-1.5">
                              {x.examples.map((e) => (
                                <code key={e} className="block break-words rounded-md bg-elevated px-2 py-1 font-mono text-[13px] text-muted-foreground">{displayUsage(e)}</code>
                              ))}
                            </dd>
                          </div>
                        )}
                        {x.aliases.length > 0 && (
                          <div>
                            <dt className="mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle">Aliases</dt>
                            <dd className="flex flex-wrap gap-1.5">
                              {x.aliases.map((a) => (
                                <code key={a} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">{PREFIX + a}</code>
                              ))}
                            </dd>
                          </div>
                        )}
                        <div>
                          <dt className="mb-1.5 text-xs uppercase tracking-[0.14em] text-subtle">Permissions</dt>
                          <dd className="flex items-center gap-1.5 text-muted-foreground">
                            <ShieldCheck className="size-3.5 text-subtle" />
                            {x.permission ?? "Everyone"}
                          </dd>
                        </div>
                      </dl>
                    </details>
                  ))}
                </div>
              </section>
            ))}
            {!filtered.length && <p className="text-sm text-muted-foreground">No commands match “{q}”.</p>}
          </div>
        </div>
      </div>
    </>
  );
}
