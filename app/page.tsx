import Link from "next/link";

const features = [
  { n: "01", title: "Moderation", desc: "Keep conversations in check with the tools your staff needs." },
  { n: "02", title: "Server security", desc: "Give your community another layer of protection." },
  { n: "03", title: "Server tools", desc: "Useful utilities and setup tools, all in one place." },
  { n: "04", title: "Music & voice", desc: "Bring people together with music and voice features." },
  { n: "05", title: "Community", desc: "Tickets, giveaways, leveling, and more ways to engage." },
  { n: "06", title: "Customization", desc: "Shape Villain around the way your server works." }
];

export default function Home() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-glow" />
        <div className="eyebrow"><span className="pulse" /> THE ALL-IN-ONE DISCORD BOT</div>
        <h1>Your server.<br /><span>Under control.</span></h1>
        <p className="hero-copy">Moderation, security, music, community tools, and more. Everything your Discord server needs, in one place.</p>
        <div className="hero-actions"><Link href="/commands" className="button button-primary">Explore commands <span>↗</span></Link><Link href="/faq" className="button button-secondary">How it works</Link></div>
        <div className="hero-note"><span className="note-line" /> BUILT TO KEEP YOUR COMMUNITY MOVING</div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-monogram">V</div>
      </section>

      <section className="feature-section section-shell">
        <div className="section-heading"><div><div className="eyebrow">WHAT VILLAIN CAN DO</div><h2>Everything in<br />its right place.</h2></div><p>No need to stack your server with a dozen different bots. Villain brings your everyday tools together in one reliable place.</p></div>
        <div className="feature-grid">{features.map((f) => <article className="feature-card" key={f.n}><span className="feature-number">{f.n}</span><div className="feature-icon">✳</div><h3>{f.title}</h3><p>{f.desc}</p><span className="card-arrow">↗</span></article>)}</div>
      </section>

      <section className="bottom-cta section-shell"><div className="eyebrow">READY WHEN YOU ARE</div><h2>Make room for<br /><span>better things.</span></h2><p>Find the tools you need and see what Villain can bring to your community.</p><Link href="/commands" className="button button-primary">Browse commands <span>↗</span></Link><div className="cta-watermark">V</div></section>
    </>
  );
}
