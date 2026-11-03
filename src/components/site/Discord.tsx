import { Hash, Volume2, Shield, Users } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BotTag() {
  return <span className="rounded bg-elevated px-1 py-px font-mono text-[9px] font-semibold uppercase text-muted-foreground">App</span>;
}

export function Avatar({ letter, bot }: { letter: string; bot?: boolean }) {
  return (
    <div className={cn("grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold", bot ? "bg-foreground text-background" : "bg-elevated text-muted-foreground")}>
      {letter}
    </div>
  );
}

export function Message({ name, bot, time = "Today at 21:04", children }: { name: string; bot?: boolean; time?: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <Avatar letter={name.charAt(0)} bot={bot ?? false} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-foreground">{name}</span>
          {bot && <BotTag />}
          <span className="text-[11px] text-subtle">{time}</span>
        </div>
        <div className="mt-0.5 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

export function Embed({ title, children, accent = true }: { title?: string; children: ReactNode; accent?: boolean }) {
  return (
    <div className={cn("mt-1.5 max-w-md rounded-md border-l-4 bg-discord-embed px-3.5 py-3", accent ? "border-oxblood" : "border-border-strong")}>
      {title && <p className="mb-1.5 text-sm font-semibold text-foreground">{title}</p>}
      <div className="space-y-1 text-[13px] text-muted-foreground">{children}</div>
    </div>
  );
}

export function Cmd({ children }: { children: ReactNode }) {
  return <span className="rounded bg-discord-rail px-1 font-mono text-[12px] text-foreground">{children}</span>;
}

/** Large hero preview mimicking a Discord client. */
export function DiscordWindow() {
  const channels = ["general", "announcements", "mod-logs", "tickets"];
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-discord shadow-2xl shadow-background">
      <div className="flex h-8 items-center gap-1.5 border-b border-border bg-discord-rail px-3">
        <span className="size-2.5 rounded-full bg-elevated" />
        <span className="size-2.5 rounded-full bg-elevated" />
        <span className="size-2.5 rounded-full bg-elevated" />
      </div>
      <div className="flex h-[440px] text-left md:h-[500px]">
        <aside className="hidden w-[72px] flex-col items-center gap-2 bg-discord-rail py-3 sm:flex">
          <div className="grid size-12 place-items-center rounded-2xl bg-foreground text-lg font-bold text-background">V</div>
          <div className="h-0.5 w-8 rounded bg-border-strong" />
          {["N", "A", "M"].map((l) => (
            <div key={l} className="grid size-12 place-items-center rounded-full bg-discord text-sm text-muted-foreground">{l}</div>
          ))}
        </aside>
        <aside className="hidden w-56 flex-col bg-discord-side md:flex">
          <div className="border-b border-border px-4 py-3 text-sm font-semibold">Nightshift</div>
          <div className="space-y-0.5 p-2">
            <p className="px-2 pb-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-subtle">Text channels</p>
            {channels.map((c) => (
              <div key={c} className={cn("flex items-center gap-1.5 rounded px-2 py-1.5 text-sm", c === "mod-logs" ? "bg-discord text-foreground" : "text-subtle")}>
                <Hash className="size-4" /> {c}
              </div>
            ))}
            <p className="px-2 pb-1 pt-4 font-mono text-[10px] uppercase tracking-wider text-subtle">Voice</p>
            <div className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-subtle"><Volume2 className="size-4" /> Lounge</div>
            <div className="ml-7 flex items-center gap-2 py-1 text-xs text-muted-foreground"><span className="size-5 rounded-full bg-foreground" /> Villain</div>
          </div>
        </aside>
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-sm font-semibold">
            <Hash className="size-4 text-subtle" /> mod-logs
          </div>
          <div className="flex-1 space-y-5 overflow-hidden p-4">
            <Message name="ren" time="Today at 21:02">
              <Cmd>,timeout @spammer 1h sending invite links</Cmd>
            </Message>
            <Message name="Villain" bot time="Today at 21:02">
              <Embed title="Member timed out">
                <p><span className="text-foreground">User</span> spammer#0412</p>
                <p><span className="text-foreground">Duration</span> 1 hour</p>
                <p><span className="text-foreground">Reason</span> sending invite links</p>
                <p className="pt-1 font-mono text-[11px] text-subtle">Case #218 · moderator ren</p>
              </Embed>
            </Message>
            <Message name="Villain" bot time="Today at 21:06">
              <Embed title="Anti-raid triggered">
                <p className="flex items-center gap-1.5"><Users className="size-3.5" /> 14 joins in 10 seconds</p>
                <p className="flex items-center gap-1.5"><Shield className="size-3.5" /> Server locked · new joins quarantined</p>
              </Embed>
            </Message>
          </div>
          <div className="p-4 pt-0">
            <div className="rounded-lg bg-discord-side px-4 py-3 text-sm text-subtle">Message #mod-logs</div>
          </div>
        </main>
      </div>
    </div>
  );
}
