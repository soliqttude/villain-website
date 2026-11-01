import Link from "next/link";

const areas = [
  { n: "01", title: "Moderation", text: "Keep your server in check with the tools staff actually need. From quick actions to serious server protection.", cmds: ["BAN", "TIMEOUT", "JAIL", "LOCKDOWN", "ANTIRAID"] },
  { n: "02", title: "Music", text: "Bring the soundtrack with you. Build queues, skip tracks, tune the sound, and keep the room moving.", cmds: ["PLAY", "QUEUE", "SKIP", "FILTER", "VOLUME"] },
  { n: "03", title: "Tickets & giveaways", text: "Give your community a direct line to staff, then give them a reason to keep showing up.", cmds: ["TICKETS", "PANELS", "GIVEAWAYS", "REROLL"] },
  { n: "04", title: "Levels & rewards", text: "Make activity count with XP, rank cards, leaderboards, and roles worth earning.", cmds: ["RANK", "LEADERBOARD", "ADDXP", "REWARDS"] },
  { n: "05", title: "Server setup", text: "Welcome new members, keep useful logs, and make the everyday admin work feel lighter.", cmds: ["WELCOME", "LOGS", "AUTOROLES", "PREFIX"] },
  { n: "06", title: "Voice rooms", text: "Temporary voice channels members can shape themselves. Create a room, make it yours, leave no clutter.", cmds: ["VOICEMASTER", "VMNAME", "VMLOCK", "VMLIMIT"] }
];

const extras = ["Welcome messages", "Reaction roles", "Logging & counters", "Profiles & reputation", "Polls & reminders", "Tags & autoresponders", "Starboard & suggestions", "Social lookups", "Image tools", "Stickers & emoji", "Thread controls", "Mini games"];

function Arrow() { return <span aria-hidden="true" className="arrow-mark">↗</span>; }

export default function Home() {
  return (
    <div className="home">
      <section className="hero wrap">
        <div className="hero-kicker"><span className="live-dot" /> THE ALL-IN-ONE DISCORD BOT <span className="kicker-line" /></div>
        <div className="hero-title-row">
          <h1>Run your server.<br /><span>Not five bots.</span></h1>
          <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core">V.</div><span className="orbit-label">VILLAIN / 001</span></div>
        </div>
        <div className="hero-bottom">
          <p className="lead">Moderation, music, tickets, levels, giveaways, voice tools and everything between. One bot. One place. Your server, under control.</p>
          <div className="hero-actions"><Link href="/invite" className="btn">Add Villain <Arrow /></Link><Link href="/commands" className="btn btn-ghost">Explore commands <Arrow /></Link></div>
          <span className="hero-index">01 — BUILT FOR COMMUNITIES</span>
        </div>
        <div className="hero-marquee" aria-hidden="true"><div className="marquee-track">{Array.from({length: 2}, (_, i) => <span key={i}>MODERATION <b>✳</b> MUSIC <b>✳</b> COMMUNITY <b>✳</b> AUTOMATION <b>✳</b> CONTROL <b>✳</b> </span>)}</div></div>
      </section>

      <section className="capabilities wrap" id="features">
        <div className="section-intro"><span className="eyebrow">02 / WHAT IT DOES</span><div><h2>Everything your<br /><span>server needs.</span></h2><p>Less switching between bots. More time running your community.</p></div></div>
        <div className="feature-grid">
          {areas.map((area, index) => <article className="feature-card" key={area.n}>
            <div className="feature-top"><span>{area.n} / 06</span><span className="feature-cross">✳</span></div>
            <h3>{area.title}</h3><p>{area.text}</p>
            <div className="feature-tags">{area.cmds.map(cmd => <span key={cmd}>{cmd}</span>)}</div>
            <span className="feature-arrow"><Arrow /></span>
          </article>)}
        </div>
      </section>

      <section className="command-band"><div className="wrap command-band-inner"><div><span className="eyebrow">03 / YOUR CONTROL PANEL</span><h2>One prefix.<br /><span>A lot of power.</span></h2><p>Find the exact tool you need in a searchable list of Villain commands.</p><Link href="/commands" className="text-link">Browse all commands <Arrow /></Link></div><div className="terminal-card"><div className="terminal-head"><span><i /> VILLAIN / TERMINAL</span><span>READY</span></div><div className="terminal-body"><p><b>$</b> villain help</p><p className="terminal-muted">Loading command index...</p><p><b>✓</b> moderation <span>available</span></p><p><b>✓</b> music <span>available</span></p><p><b>✓</b> community <span>available</span></p><p><b>✓</b> automation <span>available</span></p><div className="terminal-prompt"><b>$</b> <i /></div></div></div></div></section>

      <section className="extras wrap"><div><span className="eyebrow">04 / THE LITTLE THINGS</span><h2>And then<br />some.</h2></div><ul>{extras.map((item, i) => <li key={item}><span>0{i+1}</span>{item}<Arrow /></li>)}</ul></section>

      <section className="honesty wrap"><div className="honesty-symbol">!</div><div><span className="eyebrow">NO MADE-UP NUMBERS</span><h2>We keep it real.</h2><p>Live monitoring isn't connected yet. The status page tells you that plainly instead of pretending everything is online.</p></div><Link href="/status" className="text-link">View status <Arrow /></Link></section>

      <section className="final-cta wrap"><span className="eyebrow">05 / YOUR SERVER, YOUR RULES</span><h2>Make room<br /><span>for Villain.</span></h2><div className="final-cta-bottom"><p>All the tools. None of the clutter.</p><Link href="/invite" className="btn">Add to server <Arrow /></Link></div><span className="cta-watermark" aria-hidden="true">V</span></section>
    </div>
  );
}
