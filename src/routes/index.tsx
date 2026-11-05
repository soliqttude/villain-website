import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Lock, Users, Mic, ShieldCheck, Pause, SkipForward, Volume2, Music2, Check, Hash } from "lucide-react";
import { totalCommands } from "@/lib/commands";
import { GhostLink, InviteButton, Reveal } from "@/components/site/primitives";
import { DiscordWindow, Cmd } from "@/components/site/Discord";
import { cn } from "@/lib/utils";

const title = "Villain — Discord's all-in-one bot";
const description = "Moderation, engagement and server management in one Discord bot.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

/* ---------- local building blocks ---------- */

function Block({ title, text, children, className }: { title: string; text: string; children?: ReactNode; className?: string }) {
  return (
    <div className={cn("card-surface group flex h-full flex-col overflow-hidden", className)}>
      <div className="p-6 pb-4">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{text}</p>
      </div>
      {children && <div className="mt-auto px-6 pb-6">{children}</div>}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-border-strong bg-elevated px-3 py-1 text-xs text-muted-foreground">{children}</span>;
}

function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg bg-discord p-4", className)}>{children}</div>;
}

function Section({ id, title, text, children }: { id?: string; title: string; text: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <h2 className="text-3xl font-semibold text-balance md:text-5xl md:leading-[1.1]">{title}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">{text}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function ExploreLink() {
  return (
    <Reveal className="mt-10">
      <GhostLink to="/commands">Explore commands</GhostLink>
    </Reveal>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={cn("relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors", on ? "bg-foreground" : "bg-elevated")} aria-hidden>
      <span className={cn("absolute top-0.5 size-4 rounded-full transition-all", on ? "left-[18px] bg-background" : "left-0.5 bg-muted-foreground")} />
    </span>
  );
}

/* ---------- page ---------- */

function Index() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-36 text-center md:pb-24 md:pt-48">
          <Reveal>
            <h1 className="text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
              <span className="text-primary">villain</span> is Discord’s premier all-in-one bot
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              Built for management and engagement. Keep your community safe, make it your own, and bring everyone together.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <InviteButton />
              <GhostLink to="/commands">Commands</GhostLink>
            </div>
            <p className="mt-6 font-mono text-xs text-subtle">{totalCommands}+ commands · slash and prefix</p>
          </Reveal>
        </div>
        <Reveal className="mx-auto max-w-5xl px-5 pb-20 md:pb-28">
          <DiscordWindow />
        </Reveal>
      </section>

      <section className="marquee overflow-hidden border-y border-border py-8 md:py-10" aria-label="Protect your server. Make it yours. Bring everyone together.">
        <div className="marquee-track flex w-max gap-14 whitespace-nowrap text-3xl font-semibold text-subtle md:text-5xl" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex gap-14">
              <span>Protect your server.</span>
              <span className="text-foreground">Make it yours.</span>
              <span>Bring everyone together.</span>
            </span>
          ))}
        </div>
      </section>

      <Section id="features" title="Powerful moderation and security" text="Keep your community clean, protected, and in your control.">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal><Block title="Filters" text="Keep chat clean with automated moderation for your server."><div className="flex flex-wrap gap-2">{["Links", "Mass mentions", "Spam", "Invites"].map((f) => <Pill key={f}>{f}</Pill>)}</div></Block></Reveal>
          <Reveal delay={80}><Block title="Fake permissions" text="Give roles access to bot commands without granting dangerous Discord permissions."><Panel><div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-foreground"><Lock className="size-4 text-subtle" /> Moderator</span><Cmd>,fakepermissions add</Cmd></div></Panel></Block></Reveal>
          <Reveal><Block title="Anti-Nuke" text="Protect your server against malicious actions with dedicated antinuke tools."><Panel><p className="text-sm font-medium text-foreground">Anti-nuke: action blocked</p><p className="mt-1 text-[13px] text-muted-foreground">admin_alt deleted 4 channels in 6s · permissions stripped</p></Panel></Block></Reveal>
          <Reveal delay={80}><Block title="Anti-Raid" text="Manage incoming threats with your server’s anti-raid protection."><Panel><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-sm text-foreground"><Users className="size-4 text-subtle" /> 14 joins in 10 seconds</span><span className="flex items-center gap-1.5 text-xs text-online"><ShieldCheck className="size-3.5" /> Server protected</span></div></Panel></Block></Reveal>
        </div>
        <ExploreLink />
      </Section>

      <Section title="Integrations with your favorite platforms" text="Music, profiles, updates, and more. Your favorite platforms, closer to your community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["as", "Last.fm", "Your listening profile, recent tracks, and music stats."],
            ["S", "Spotify", "Find tracks and albums, and share what you’re listening to."],
            ["𝕏", "Twitter", "Bring Twitter updates into your Discord community."],
            ["F", "Fortnite", "Explore Fortnite commands right from your server."],
          ].map(([mark, name, text], i) => (
            <Reveal key={name} delay={i * 60}><div className="card-surface h-full p-6"><span className="grid size-11 place-items-center rounded-xl border border-border-strong bg-elevated text-sm font-semibold">{mark}</span><h3 className="mt-6 text-base font-medium">{name}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{text}</p></div></Reveal>
          ))}
        </div>
      </Section>

      <Section title="Personal channels with VoiceMaster" text="Temporary, personalized voice channels for your community.">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal><Block title="VoiceMaster interface" text="Your own voice channel. Rename it, lock it, and set member limits."><Panel><div className="grid grid-cols-4 gap-2 text-center text-xs text-muted-foreground">{[[Lock, "Lock"], [Hash, "Rename"], [Users, "Limit"], [Mic, "Claim"]].map(([Icon, label]) => { const I = Icon as typeof Lock; return <div key={label as string} className="rounded-md bg-discord-rail px-2 py-3"><I className="mx-auto mb-1.5 size-4 text-foreground" />{label as string}</div>; })}</div></Panel></Block></Reveal>
          <Reveal delay={80}><Block title="Easy setup" text="Create a home for your community’s voice channels."><Panel><Cmd>,voicemaster setup</Cmd><ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">{["Server configured", "Channels configured", "VoiceMaster ready"].map((t) => <li key={t} className="flex items-center gap-2"><Check className="size-3.5 text-online" /> {t}</li>)}</ul></Panel></Block></Reveal>
          <Reveal><Block title="Roles & personal channels" text="Set custom roles for members joining voice, and give everyone a place to hang out."><Panel><p className="font-mono text-[10px] uppercase tracking-wider text-subtle">Voice channels</p><div className="mt-2 space-y-1 text-sm"><p className="flex items-center gap-2 text-muted-foreground"><Mic className="size-3.5" /> Join to Create</p><p className="flex items-center gap-2 text-foreground"><Volume2 className="size-3.5" /> your channel <span className="ml-auto font-mono text-[11px] text-subtle">3:54</span></p></div></Panel></Block></Reveal>
          <Reveal delay={80}><Block title="Music in your channel" text="Play a song and let villain DJ while you hang out."><Panel><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">V</span><div className="min-w-0 flex-1 text-sm"><p className="font-medium text-foreground">villain</p><p className="text-xs text-muted-foreground">Playing in voice</p></div><Cmd>,play</Cmd></div></Panel></Block></Reveal>
        </div>
        <ExploreLink />
      </Section>

      <Section title="Music features built for everyone" text="Your soundtrack, your voice channel. Keep the music going together.">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal><Block title="Sound controls" text="Shape your listening experience with music controls."><Panel className="space-y-3"><div className="flex items-center justify-between text-sm text-foreground"><span>Audio</span><span className="flex items-center gap-2 text-xs text-muted-foreground">ON <Toggle on /></span></div><div className="flex flex-wrap gap-2">{["bassboost", "nightcore", "8d", "vaporwave"].map((f) => <Pill key={f}>{f}</Pill>)}</div></Panel></Block></Reveal>
          <Reveal delay={80}><Block title="Queue" text="One track after another. A soundtrack that doesn’t stop."><Panel><div className="flex items-center gap-3"><span className="flex h-6 items-end gap-0.5" aria-hidden>{[0, 1, 2, 3].map((n) => <span key={n} className="eq-bar block h-full w-1 rounded-full bg-foreground" />)}</span><div className="min-w-0 flex-1"><p className="flex items-center gap-1.5 text-sm font-medium text-foreground"><Music2 className="size-3.5" /> Late night</p><p className="font-mono text-[11px] text-subtle">Music preview · 1 / 3</p></div><span className="font-mono text-xs text-subtle">3:54</span></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-discord-rail"><div className="h-full w-2/5 rounded-full bg-foreground" /></div><div className="mt-3 flex items-center justify-center gap-4 text-muted-foreground"><Pause className="size-4" /><SkipForward className="size-4" /></div></Panel></Block></Reveal>
        </div>
        <ExploreLink />
      </Section>

      <section className="hero-glow relative overflow-hidden border-t border-border">
        <Reveal className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <h2 className="text-4xl font-semibold text-balance md:text-6xl">Your server. Your rules.</h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">Bring moderation, protection and community tools together with villain.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3"><InviteButton /><Link to="/commands" className="inline-flex h-12 items-center rounded-full px-6 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Browse {totalCommands} commands</Link></div>
        </Reveal>
      </section>
    </>
  );
}
