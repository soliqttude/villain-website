import Link from "next/link";

const features = [
  { id: "01", name: "Moderation", detail: "The tools your staff use every day, without the extra noise.", commands: "WARN / BAN / PURGE / TIMEOUT" },
  { id: "02", name: "Protection", detail: "Security controls built to help keep your community safe.", commands: "ANTINUKE / ANTIRAID / SECURITY LOGS" },
  { id: "03", name: "Server management", detail: "Keep roles, channels, and the moving parts of your server organised.", commands: "ROLES / LOGGING / CONFIGURATION" },
  { id: "04", name: "Music & voice", detail: "Bring listening and voice-channel tools into the same place.", commands: "PLAYBACK / QUEUE / VOICEMASTER" },
  { id: "05", name: "Community", detail: "Give members useful ways to connect, contribute, and take part.", commands: "TICKETS / GIVEAWAYS / LEVELS" },
  { id: "06", name: "Utilities", detail: "A considered set of everyday tools for members and staff.", commands: "INFORMATION / FUN / UTILITIES" }
];

const platforms = ["Spotify", "SoundCloud", "YouTube", "Reddit"];

export default function Home() {
  return (
    <div className="home-v2">
      <section className="v2-hero">
        <div className="v2-hero-inner">
          <div className="v2-kicker"><span className="v2-kicker-line" /> BUILT FOR DISCORD</div>
          <h1>Less bot clutter.<br /><span>More control.</span></h1>
          <p className="v2-lede">A complete toolkit for running your Discord server. Moderation, protection, music, and community features — brought together under one roof.</p>
          <div className="v2-actions">
            <Link href="/commands" className="v2-button v2-button-solid">Browse commands <span>↗</span></Link>
            <Link href="/support" className="v2-button v2-button-quiet">Get support <span>↗</span></Link>
          </div>
          <div className="v2-meta"><span>V / 001</span><i /> ONE BOT. YOUR ENTIRE SERVER.</div>
        </div>
        <div className="v2-hero-art" aria-label="Villain feature overview">
          <div className="v2-art-grid" />
          <div className="v2-orbit v2-orbit-a" />
          <div className="v2-orbit v2-orbit-b" />
          <div className="v2-monogram">V</div>
          <div className="v2-art-caption"><span>VILLAIN — DISCORD TOOLKIT</span><span>01 / 06</span></div>
          <div className="v2-console">
            <div className="v2-console-head"><span className="v2-console-mark">V</span><div><b>Villain</b><small>SERVER TOOLKIT</small></div><span className="v2-console-state"><i /> ALL IN ONE</span></div>
            <div className="v2-console-rule" />
            <div className="v2-console-row"><span>01</span><b>Moderation</b><small>STAFF CONTROL</small><em>↗</em></div>
            <div className="v2-console-row"><span>02</span><b>Protection</b><small>SERVER SAFETY</small><em>↗</em></div>
            <div className="v2-console-row"><span>03</span><b>Community</b><small>MEMBER TOOLS</small><em>↗</em></div>
            <div className="v2-console-foot">ONE PLACE FOR THE WORK THAT MATTERS.</div>
          </div>
          <span className="v2-coordinate">VILLAIN / 2026</span>
        </div>
        <div className="v2-hero-bottom"><span>MADE FOR COMMUNITIES</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="v2-intro">
        <div className="v2-section-index">01 — THE IDEA</div>
        <div className="v2-intro-main"><h2>Your server.<br /><span>One toolkit.</span></h2><div><p>Running a community takes enough work already. Villain brings the essential tools together, so your team can spend less time switching between bots and more time looking after the people in your server.</p><Link href="/commands" className="v2-text-link">Explore the command directory <span>↗</span></Link></div></div>
      </section>

      <section className="v2-features">
        <div className="v2-section-index">02 — THE TOOLKIT</div>
        <div className="v2-features-heading"><h2>Everything has<br /><span>its place.</span></h2><p>Six parts of one connected toolkit.</p></div>
        <div className="v2-feature-list">{features.map((feature) => <article className="v2-feature" key={feature.id}><span className="v2-feature-id">{feature.id}</span><div className="v2-feature-body"><h3>{feature.name}</h3><p>{feature.detail}</p><small>{feature.commands}</small></div><span className="v2-feature-arrow">↗</span></article>)}</div>
      </section>

      <section className="v2-integrations">
        <div className="v2-section-index">03 — CONNECTIONS</div>
        <div className="v2-integrations-inner"><div><h2>Fits into<br />your setup.</h2><p>Useful connections to the platforms your community already uses.</p></div><div className="v2-platforms">{platforms.map((name, i) => <div className="v2-platform" key={name}><span>0{i + 1}</span><b>{name}</b><em>↗</em></div>)}</div></div>
      </section>

      <section className="v2-end">
        <div className="v2-section-index">04 — GET STARTED</div>
        <div className="v2-end-content"><span className="v2-end-label">TAKE BACK YOUR SERVER.</span><h2>Make room<br /><span>for community.</span></h2><p>Find the tools your server needs in the command directory.</p><Link href="/commands" className="v2-button v2-button-solid">Explore Villain <span>↗</span></Link></div>
        <div className="v2-end-mark">V</div>
      </section>
    </div>
  );
}
