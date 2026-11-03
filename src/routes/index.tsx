import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Ban, Gavel, ShieldAlert, Ticket, Gift, Music2, Activity, ArrowUpRight, ShieldCheck, Headphones } from "lucide-react";
import { categories, totalCommands } from "@/lib/commands";
import { Chip, GhostLink, InviteButton, Reveal, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { Cmd, Embed, Message } from "@/components/site/Discord";
import villainScene from "@/assets/villain-scene.jpg";
import { cn } from "@/lib/utils";

const title = "Villain — Less bot clutter. More control.";
const description = "Moderation, protection, music and community tools. Everything your Discord server needs in one bot.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Card({ title, text, children, className }: { title: string; text: string; children?: ReactNode; className?: string }) {
  return (
    <div className={cn("card-surface group flex flex-col overflow-hidden", className)}>
      <div className="p-6">
        <h3 className="flex items-center gap-2 text-base font-medium">
          <span className="size-1.5 rounded-full bg-border-strong transition-colors group-hover:bg-oxblood" />
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
      </div>
      {children && <div className="mt-auto px-6 pb-6">{children}</div>}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return <div className="flex flex-wrap gap-1.5">{items.map((i) => <Chip key={i}>{i}</Chip>)}</div>;
}

function Preview({ children }: { children: ReactNode }) {
  return <div className="rounded-md bg-discord p-4">{children}</div>;
}

function Section({ id, children, alt }: { id: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={cn("border-t border-border py-16 md:py-24", alt && "bg-section")}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="hero-stage relative isolate overflow-hidden">
        <img src={villainScene} width={1920} height={1088} alt="" className="hero-art pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="relative mx-auto flex min-h-[570px] max-w-6xl items-center px-5 pb-14 pt-32 md:min-h-[660px] md:pb-20 md:pt-40">
          <Reveal className="max-w-xl">
            <Eyebrow>All-in-one Discord bot</Eyebrow>
            <h1 className="text-7xl font-semibold leading-none text-primary md:text-8xl">Villain<span className="text-foreground">.</span></h1>
            <p className="mt-6 text-2xl font-medium leading-8 text-balance md:text-3xl md:leading-10">Less bot clutter.<br />More control.</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground md:text-base">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <InviteButton label="Invite to Discord" />
              <GhostLink to="/commands">Commands</GhostLink>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 font-mono text-[11px] text-subtle">
              <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-primary" />Protection</span>
              <span className="flex items-center gap-1.5"><Ticket className="size-3.5 text-primary" />Community</span>
              <span className="flex items-center gap-1.5"><Headphones className="size-3.5 text-primary" />Music</span>
            </div>
          </Reveal>
          <div className="absolute right-8 top-48 hidden w-56 space-y-12 lg:block">
            {[[ShieldCheck, "server protection"], [Ticket, "community tools"], [Headphones, "music & voice"]].map(([Icon, label], i) => {
              const FeatureIcon = Icon as typeof ShieldCheck;
              return <div key={label as string} className={cn("feature-tag flex w-fit items-center gap-3 rounded-lg border border-border-strong bg-card/90 px-4 py-3 font-mono text-xs", i === 1 && "ml-12")}><FeatureIcon className="size-4 text-primary" />{label as string}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Proof: capability counts only */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl grid-cols-2 text-center md:grid-cols-4">
          {[
            [String(totalCommands), "Documented commands"],
            [String(categories.length), "Command categories"],
            ["/ + ,", "Slash and prefix"],
            ["1", "Bot instead of five"],
          ].map(([n, l], i) => (
            <div key={l} className={cn("px-4 py-6 md:py-8", i % 2 === 0 && "border-r border-border", i === 1 && "md:border-r md:border-border", i < 2 && "border-b border-border md:border-b-0")}>
              <p className="text-2xl font-semibold text-primary">{n}</p>
              <p className="mt-1 text-sm text-subtle">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moderation */}
      <Section id="moderation">
        <SectionHeading eyebrow="Moderation" title="Every action, on the record." text="Warn, time out, kick and ban with reasons, durations and case numbers that stay in your logs." />
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <Card className="h-full" title="Bans, kicks and timeouts" text="Temporary or permanent, with a reason and a case ID attached every time.">
              <Preview>
                <Message name="Villain" bot>
                  <Embed title="Member banned">
                    <p><span className="text-foreground">User</span> raider#7781</p>
                    <p><span className="text-foreground">Duration</span> 7 days</p>
                    <p className="font-mono text-[11px] text-subtle">Case #219</p>
                  </Embed>
                </Message>
              </Preview>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full" title="Warnings" text="Build a history per member and see it at a glance.">
              <Chips items={[",warn", ",warnings", ",clearwarns"]} />
            </Card>
          </Reveal>
          <Reveal>
            <Card className="h-full" title="Purge" text="Bulk delete by user, bots, links or attachments.">
              <Chips items={[",purge 50", ",purge bots", ",purge links"]} />
            </Card>
          </Reveal>
          <Reveal delay={80} className="md:col-span-2">
            <Card className="h-full" title="Moderation logs" text="A dedicated channel for every action, so nothing happens off the record.">
              <div className="space-y-2 font-mono text-[12px]">
                {[[Gavel, "ban", "raider#7781", "#219"], [Ban, "timeout", "spammer#0412", "#218"], [ShieldAlert, "warn", "late#1102", "#217"]].map(([Icon, a, u, c]) => {
                  const I = Icon as typeof Gavel;
                  return (
                    <div key={c as string} className="flex items-center justify-between rounded-md border border-border bg-elevated px-3 py-2 text-muted-foreground">
                      <span className="flex items-center gap-2"><I className="size-3.5" />{a as string} · {u as string}</span>
                      <span className="text-subtle">{c as string}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Protection */}
      <Section id="protection" alt>
        <SectionHeading eyebrow="Protection" title="Built for the worst day." text="Villain watches for mass actions and join floods, and acts before the damage is done." />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Card className="h-full" title="Anti-nuke" text="Limits on bans, channel deletions, role edits and webhooks. Offenders lose their permissions automatically.">
              <Preview>
                <Message name="Villain" bot>
                  <Embed title="Anti-nuke: action blocked">
                    <p>admin_alt deleted 4 channels in 6s</p>
                    <p>Roles stripped · owner notified</p>
                  </Embed>
                </Message>
              </Preview>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full" title="Anti-raid" text="Detects join floods and new-account waves, then locks the server down.">
              <Chips items={["join rate", "account age", "auto-lock", "quarantine"]} />
            </Card>
          </Reveal>
          <Reveal>
            <Card className="h-full" title="Security logs" text="Every trigger and every blocked action, in one channel.">
              <Chips items={[",securitylogs #security"]} />
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full" title="Permission protection" text="Whitelist trusted staff. Everyone else is held to the limits.">
              <Chips items={[",whitelist add", ",whitelist list"]} />
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Management */}
      <Section id="management">
        <SectionHeading eyebrow="Server management" title="Run the server from chat." text="Roles, channels, configuration and automod without opening server settings." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Role management", "Add, remove and mass-assign roles.", [",role add", ",role all"]],
            ["Channel management", "Lock, unlock and set slowmode.", [",lock", ",slowmode 10"]],
            ["Server configuration", "Custom prefix and per-module settings.", [",prefix", ",config"]],
            ["Automod", "Filter invites, spam, caps and words.", [",automod invites on"]],
          ].map(([t, d, c], i) => (
            <Reveal key={t as string} delay={i * 60}>
              <Card className="h-full" title={t as string} text={d as string}><Chips items={c as string[]} /></Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Community */}
      <Section id="community" alt>
        <SectionHeading eyebrow="Community" title="Keep members around." text="Tickets, giveaways and welcomes that look like they belong in your server." />
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2 md:row-span-2">
            <Card className="h-full" title="Tickets" text="A button opens a private channel for the member and your staff. Closing saves a transcript.">
              <Preview>
                <Message name="Villain" bot>
                  <Embed title="Support">
                    <p>Need help? Open a ticket and staff will be with you.</p>
                  </Embed>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded bg-elevated px-3 py-1.5 text-[13px] text-foreground"><Ticket className="size-3.5" /> Open ticket</span>
                </Message>
              </Preview>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full" title="Giveaways" text="Timed, button entry, reroll when needed.">
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Gift className="size-4" /><Cmd>,giveaway start 1d Nitro</Cmd></div>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card className="h-full" title="Welcome messages" text="Greet new members with variables like {user} and {server}.">
              <Chips items={[",welcome #lobby"]} />
            </Card>
          </Reveal>
          <Reveal className="md:col-span-3">
            <Card title="Member utilities" text="Quick lookups that members and staff use every day.">
              <Chips items={[",userinfo", ",avatar", ",banner", ",serverinfo", ",roleinfo"]} />
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Music */}
      <Section id="music">
        <SectionHeading eyebrow="Music & voice" title="Sound that stays in sync." text="Playback, queues and filters, plus temporary voice channels your members control." />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Card className="h-full" title="Music playback" text="Search or paste a link, and Villain joins your channel.">
              <Preview>
                <Message name="Villain" bot>
                  <Embed title="Now playing">
                    <p className="flex items-center gap-1.5"><Music2 className="size-3.5" /> Midnight City — M83</p>
                    <div className="mt-2 h-1 overflow-hidden rounded bg-discord-rail"><div className="h-full w-2/5 bg-muted-foreground" /></div>
                    <p className="font-mono text-[11px] text-subtle">1:42 / 4:03</p>
                  </Embed>
                </Message>
              </Preview>
            </Card>
          </Reveal>
          <div className="grid gap-4">
            <Reveal delay={60}><Card title="Queue management" text="Reorder, shuffle, loop and remove."><Chips items={[",queue", ",shuffle", ",loop"]} /></Card></Reveal>
            <Reveal delay={100}><Card title="VoiceMaster" text="Join-to-create voice channels members can rename and lock."><Chips items={[",vm lock", ",vm name"]} /></Card></Reveal>
            <Reveal delay={140}><Card title="Audio filters" text="Bass boost, nightcore, 8D and more."><Chips items={["bassboost", "nightcore", "8d"]} /></Card></Reveal>
          </div>
        </div>
      </Section>

      {/* Integrations */}
      <Section id="integrations" alt>
        <SectionHeading eyebrow="Integrations" title="Connected platforms." text="These integrations are in development and marked as planned until they're confirmed working." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Spotify", "Play tracks and playlists from Spotify links."],
            ["SoundCloud", "Queue SoundCloud tracks and sets."],
            ["YouTube", "Search and play videos as audio."],
            ["Reddit", "Post new subreddit posts to a channel."],
          ].map(([n, d], i) => (
            <Reveal key={n} delay={i * 60}>
              <div className="card-surface h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-lg border border-border bg-elevated font-mono text-sm">{n?.charAt(0)}</span>
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-subtle">Planned</span>
                </div>
                <h3 className="mt-5 font-medium">{n}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Additional */}
      <Section id="more">
        <SectionHeading eyebrow="And more" title="The small things, covered." text="Utility commands that fill in the gaps." />
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {["afk", "remind", "snipe", "poll", "embed", "steal", "translate", "math", "timezone", "nickname", "membercount", "invites"].map((c) => (
              <div key={c} className="bg-card px-4 py-4 font-mono text-[13px] text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground">,{c}</div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Status */}
      <Section id="status" alt>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-elevated"><Activity className="size-5" /></span>
              <div>
                <h3 className="text-lg font-medium">Service status</h3>
                <p className="mt-1 text-sm text-muted-foreground">Check shard health and incident updates on the status page.</p>
              </div>
            </div>
            <GhostLink to="/status">View status <ArrowUpRight className="size-4" /></GhostLink>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute inset-0 glow-top" />
        <Reveal className="relative mx-auto max-w-3xl px-5 py-28 text-center md:py-36">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Your server. Your rules.</h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">Bring moderation, protection and community tools together with Villain.</p>
          <div className="mt-9"><InviteButton /></div>
        </Reveal>
      </section>
    </>
  );
}
