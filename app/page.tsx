import Link from "next/link";

const categories = [
  { number: "01", title: "Moderation", copy: "Keep conversations in check and give your staff the tools to handle a busy server.", tags: ["Warnings", "Bans", "Timeouts", "Automod"], visual: "mod" },
  { number: "02", title: "Server security", copy: "Protect your community with safeguards against raids and destructive activity.", tags: ["Anti-nuke", "Anti-raid", "Security logs"], visual: "security" },
  { number: "03", title: "Server management", copy: "Make everyday server administration easier with useful setup and management tools.", tags: ["Roles", "Logging", "Configuration"], visual: "manage" },
  { number: "04", title: "Music & voice", copy: "Bring your members together with music and voice channel features.", tags: ["Music", "Queue", "VoiceMaster"], visual: "music" },
  { number: "05", title: "Community tools", copy: "Give your members more ways to interact, participate, and have fun.", tags: ["Giveaways", "Tickets", "Levels"], visual: "community" },
  { number: "06", title: "Utilities & more", copy: "A growing collection of helpful commands for all kinds of situations.", tags: ["Information", "Fun", "Utility"], visual: "tools" }
];

const integrations = [
  { name: "Spotify", detail: "Music link support", mark: "S", tone: "spotify" },
  { name: "SoundCloud", detail: "Music link support", mark: "s", tone: "soundcloud" },
  { name: "YouTube", detail: "Video and feed features", mark: "▶", tone: "youtube" },
  { name: "Reddit", detail: "Community feed features", mark: "r", tone: "reddit" }
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "mod") return <div className="visual-window"><div className="window-top"><i/><i/><i/><span>moderation / overview</span></div><div className="visual-row"><b className="visual-icon">✓</b><div><strong>Action logged</strong><small>Member warning issued</small></div><em>JUST NOW</em></div><div className="visual-row"><b className="visual-icon muted-icon">⌁</b><div><strong>Auto moderation</strong><small>Filters are enabled</small></div><em className="visual-on">ACTIVE</em></div></div>;
  if (type === "security") return <div className="security-visual"><div className="shield-ring"><span>⌑</span></div><div><strong>Server protection</strong><small>Security tools in one place</small></div><div className="security-bars"><i/><i/><i/><i/><i/><i/><i/><i/></div></div>;
  if (type === "manage") return <div className="manage-visual"><div className="manage-pill"><span>✦</span> Server configuration</div><div className="manage-lines"><i/><i/><i/></div><div className="manage-bottom"><span>Roles</span><span>Channels</span><span>Logs</span></div></div>;
  if (type === "music") return <div className="music-visual"><div className="music-disc">♫</div><div className="music-track"><strong>Music for the whole server</strong><small>Queue · Playback · Voice</small><div className="music-progress"><i/></div></div><span className="music-play">▶</span></div>;
  if (type === "community") return <div className="community-visual"><div className="community-avatar">V</div><div className="community-message"><strong>Community hub</strong><small>Giveaways, tickets, and member activity</small></div><div className="community-bubbles"><i/><i/><i/></div></div>;
  return <div className="tools-visual"><span>⌘</span><span>✧</span><span>↗</span><span>◈</span><span>⌁</span><span>＋</span></div>;
}

export default function Home() {
  return (
    <>
      <section className="bleed-hero section-shell">
        <div className="hero-backdrop" />
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse" /> THE ALL-IN-ONE DISCORD BOT</div>
          <h1>More control.<br/><span>Less chaos.</span></h1>
          <p className="hero-copy">Everything your Discord server needs to run smoothly. Powerful moderation, server security, music, and community tools — all in one bot.</p>
          <div className="hero-actions"><Link href="/commands" className="button button-primary">Explore commands <span>↗</span></Link><Link href="/faq" className="button button-secondary">Learn more</Link></div>
          <div className="hero-trust"><span className="trust-mark">V</span><span>One bot for your entire community</span><span className="trust-separator">·</span><span>Free to use</span></div>
        </div>
        <div className="hero-product" aria-hidden="true">
          <div className="product-glow"/>
          <div className="product-card product-card-back"><div className="product-card-label">VILLAIN / SERVER TOOLS</div><div className="fake-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="fake-chart-caption"><span>SERVER ACTIVITY</span><span>LIVE VIEW</span></div></div>
          <div className="product-card product-card-front"><div className="product-top"><span className="product-logo">V</span><div><strong>Villain</strong><small>APP OVERVIEW</small></div><span className="product-dots">•••</span></div><div className="product-status"><span className="pulse"/> YOUR SERVER, ORGANIZED</div><div className="product-feature-list"><div><b>⌁</b><span>Moderation</span><em>READY</em></div><div><b>◈</b><span>Server security</span><em>READY</em></div><div><b>♫</b><span>Music & voice</span><em>READY</em></div><div><b>✳</b><span>Community tools</span><em>READY</em></div></div></div>
          <div className="floating-chip chip-one">✦ &nbsp; All in one</div><div className="floating-chip chip-two">V &nbsp; Villain</div>
        </div>
        <div className="hero-bottom-line"><span>BUILT FOR COMMUNITIES</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-strip section-shell"><div><span className="eyebrow">ONE BOT. MORE POSSIBILITIES.</span><h2>Your server deserves<br/>a better toolkit.</h2></div><p>Stop juggling a pile of different bots. Villain brings the essentials together, so you can spend less time managing tools and more time building your community.</p></section>

      <section className="bleed-features section-shell">
        <div className="feature-section-head"><div><div className="eyebrow">MADE TO DO MORE</div><h2>Tools for every<br/><span>side of your server.</span></h2></div><p>From keeping your server safe to keeping your members entertained, Villain has you covered.</p></div>
        <div className="bleed-feature-grid">{categories.map((item) => <article className={`bleed-feature-card feature-${item.visual}`} key={item.number}><div className="bleed-card-top"><span>{item.number} / VILLAIN</span><span>↗</span></div><FeatureVisual type={item.visual}/><div className="bleed-card-copy"><h3>{item.title}</h3><p>{item.copy}</p><div className="feature-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="integration-section section-shell"><div className="feature-section-head"><div><div className="eyebrow">CONNECTED EXPERIENCES</div><h2>Bring your platforms<br/><span>closer together.</span></h2></div><p>Connect music and community platforms through the integrations supported by Villain.</p></div><div className="integration-grid">{integrations.map(item=><div className="integration-card" key={item.name}><div className={`integration-mark ${item.tone}`}>{item.mark}</div><div><strong>{item.name}</strong><small>{item.detail}</small></div><span className="integration-arrow">↗</span></div>)}</div></section>

      <section className="everything-section section-shell"><div className="everything-panel"><div className="everything-copy"><div className="eyebrow">AND THERE'S MORE</div><h2>One bot.<br/><span>So much more.</span></h2><p>Explore the full command list and find the tools that fit your community. Villain keeps growing, with more ways to manage, protect, and bring your server together.</p><Link href="/commands" className="button button-primary">View all commands <span>↗</span></Link></div><div className="command-cloud"><span>moderation</span><span>antinuke</span><span>music</span><span>tickets</span><span>giveaways</span><span>voicemaster</span><span>logging</span><span>levels</span><span>utility</span><span>and more</span></div><div className="everything-watermark">V</div></div></section>

      <section className="bottom-cta section-shell"><div className="eyebrow">YOUR COMMUNITY, YOUR RULES</div><h2>Get your server<br/><span>under control.</span></h2><p>See what Villain can do for your community.</p><Link href="/commands" className="button button-primary">Explore Villain <span>↗</span></Link><div className="cta-watermark">V</div></section>
    </>
  );
}
