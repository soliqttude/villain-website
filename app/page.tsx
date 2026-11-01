import Link from "next/link";

const features = [
  { id: "01", name: "Moderation", detail: "Handle the day-to-day without digging through menus.", commands: "WARN  /  BAN  /  PURGE  /  TIMEOUT" },
  { id: "02", name: "Server security", detail: "Tools designed to help staff respond when things get messy.", commands: "ANTINUKE  /  ANTIRAID  /  SECURITY LOGS" },
  { id: "03", name: "Server management", detail: "Set up, organise, and maintain your community in one place.", commands: "ROLES  /  LOGGING  /  CONFIGURATION" },
  { id: "04", name: "Music & voice", detail: "Bring music and voice features into the same server toolkit.", commands: "PLAYBACK  /  QUEUE  /  VOICEMASTER" },
  { id: "05", name: "Community", detail: "Give members useful ways to join in and stay involved.", commands: "TICKETS  /  GIVEAWAYS  /  LEVELS" },
  { id: "06", name: "Utilities", detail: "A practical set of extra tools for members and staff.", commands: "INFORMATION  /  FUN  /  EVERYDAY TOOLS" }
];

const platforms = ["Spotify", "SoundCloud", "YouTube", "Reddit"];

export default function Home() {
  return (
    <div className="home-v2">
      <section className="v2-hero">
        <div className="v2-hero-inner">
          <div className="v2-kicker"><span className="v2-kicker-line" /> DISCORD, UNDER CONTROL</div>
          <h1>Run your server.<br /><span>Not a dozen bots.</span></h1>
          <p className="v2-lede">Villain brings moderation, security, music, and community tools into one place. Less clutter for your staff. More room for your community.</p>
          <div className="v2-actions">
            <Link href="/commands" className="v2-button v2-button-solid">Explore commands <span>↗</span></Link>
            <Link href="/faq" className="v2-button v2-button-quiet">How it works <span>→</span></Link>
          </div>
          <div className="v2-meta"><span>01</span><i /> ONE TOOLKIT FOR YOUR COMMUNITY</div>
        </div>
        <div className="v2-hero-art" aria-hidden="true">
          <div className="v2-art-grid" />
          <div className="v2-orbit v2-orbit-a" />
          <div className="v2-orbit v2-orbit-b" />
          <div className="v2-monogram">V</div>
          <div className="v2-art-caption"><span>VILLAIN / SYSTEM OVERVIEW</span><span>EST. FOR DISCORD</span></div>
          <div className="v2-console">
            <div className="v2-console-head"><span className="v2-console-mark">V</span><div><b>Villain</b><small>SERVER TOOLKIT</small></div><span className="v2-console-state"><i /> READY</span></div>
            <div className="v2-console-rule" />
            <div className="v2-console-row"><span>01</span><b>Moderation</b><small>STAFF TOOLS</small><em>↗</em></div>
            <div className="v2-console-row"><span>02</span><b>Protection</b><small>SERVER SECURITY</small><em>↗</em></div>
            <div className="v2-console-row"><span>03</span><b>Community</b><small>MEMBER EXPERIENCE</small><em>↗</em></div>
            <div className="v2-console-foot">ONE BOT. YOUR ENTIRE SERVER.</div>
          </div>
          <span className="v2-coordinate">V / 001</span>
        </div>
        <div className="v2-hero-bottom"><span>BUILT FOR COMMUNITIES</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="v2-intro">
        <div className="v2-section-index">[ 01 — THE IDEA ]</div>
        <div className="v2-intro-main"><h2>Everything in its<br /><span>right place.</span></h2><div><p>Running a Discord server shouldn't mean managing a stack of separate bots. Villain keeps the essentials together, with a straightforward toolkit for the people who keep your community moving.</p><Link href="/commands" className="v2-text-link">See the command directory <span>↗</span></Link></div></div>
      </section>

      <section className="v2-features">
        <div className="v2-section-index">[ 02 — THE TOOLKIT ]</div>
        <div className="v2-features-heading"><h2>Made for the<br /><span>whole server.</span></h2><p>Different jobs. One place to manage them.</p></div>
        <div className="v2-feature-list">{features.map((feature) => <article className="v2-feature" key={feature.id}><span className="v2-feature-id">{feature.id}</span><div className="v2-feature-body"><h3>{feature.name}</h3><p>{feature.detail}</p><small>{feature.commands}</small></div><span className="v2-feature-arrow">↗</span></article>)}</div>
      </section>

      <section className="v2-integrations">
        <div className="v2-section-index">[ 03 — CONNECTIONS ]</div>
        <div className="v2-integrations-inner"><div><h2>Plays well<br />with others.</h2><p>Villain supports features connected to the platforms below.</p></div><div className="v2-platforms">{platforms.map((name, i) => <div className="v2-platform" key={name}><span>0{i + 1}</span><b>{name}</b><em>↗</em></div>)}</div></div>
      </section>

      <section className="v2-end">
        <div className="v2-section-index">[ 04 — GET STARTED ]</div>
        <div className="v2-end-content"><span className="v2-end-label">YOUR SERVER. YOUR RULES.</span><h2>Keep it<br /><span>under control.</span></h2><p>Find the tools your community needs. Start with the command directory.</p><Link href="/commands" className="v2-button v2-button-solid">Explore Villain <span>↗</span></Link></div>
        <div className="v2-end-mark">V</div>
      </section>
    </div>
  );
}
