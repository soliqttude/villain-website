"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";

const groups = [
  { name: "Moderation", desc: "Tools for keeping your server in order.", commands: ["ban", "kick", "timeout", "untimeout", "warn", "warnings", "purge", "lock", "unlock", "slowmode"] },
  { name: "Information", desc: "Get useful details about your server and its members.", commands: ["userinfo", "serverinfo", "avatar", "roleinfo", "botinfo", "ping", "help"] },
  { name: "Utility", desc: "Everyday tools for members and staff.", commands: ["poll", "remind", "embed", "translate", "weather", "calculator"] },
  { name: "Community", desc: "Give your members more ways to take part.", commands: ["giveaway", "level", "rank", "leaderboard", "ticket", "suggest"] },
  { name: "Music & voice", desc: "Audio and voice-channel features.", commands: ["play", "pause", "resume", "skip", "queue", "stop", "volume"] },
  { name: "Fun", desc: "A little something for the downtime.", commands: ["meme", "8ball", "ship", "coinflip", "joke"] }
];

export default function CommandsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...groups.map(g => g.name)];
  const filtered = useMemo(() => groups.filter(g => (category === "All" || g.name === category) && (g.name.toLowerCase().includes(query.toLowerCase()) || g.commands.some(c => c.includes(query.toLowerCase())))), [query, category]);
  return <div className="page-shell">
    <div className="page-hero"><div className="eyebrow">THE TOOLKIT</div><h1>Commands<span>.</span></h1><p>Find the right tool for the job. Search commands or browse by category.</p></div>
    <div className="command-toolbar"><label className="search-box"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search commands..." aria-label="Search commands" /></label><div className="filter-row">{categories.map(c => <button key={c} onClick={() => setCategory(c)} className={category === c ? "filter-chip selected" : "filter-chip"}>{c}</button>)}</div></div>
    <div className="command-groups">{filtered.map(g => <section className="command-group" key={g.name}><div className="command-group-head"><div><h2>{g.name}</h2><p>{g.desc}</p></div><span>{g.commands.length.toString().padStart(2,"0")} COMMANDS</span></div><div className="command-pills">{g.commands.filter(c => c.includes(query.toLowerCase()) || g.name.toLowerCase().includes(query.toLowerCase())).map(c => <code key={c}>/{c}</code>)}</div></section>)}{filtered.length === 0 && <div className="empty-state"><h2>No commands found.</h2><p>Try another search or category.</p></div>}</div>
    <p className="page-disclaimer">Command names shown here are an initial directory and may change as the bot develops. Check Villain in Discord for the commands currently available to your server.</p>
  </div>;
}
