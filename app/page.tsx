import Link from "next/link";

const coreFeatures = [
  ["Moderation", "Everyday moderation tools to help staff look after the server and its members."],
  ["Music", "Bring music into voice and keep the hangout moving."],
  ["Tickets & giveaways", "Give your community a place to ask for help and moments to join in."]
];

const moreFeatures = [
  ["Levels & rewards", "Give participation a place to grow."],
  ["Giveaways", "Add a little anticipation to community moments."],
  ["Server setup", "Get the essentials organized in one place."],
  ["Temporary voice", "Create a room when members are ready to talk."]
];

function Arrow() {
  return <span aria-hidden="true" className="arrow-mark">↗</span>;
}

function VillainMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 9.5h32v8.2L24 38.5 8 17.7V9.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="m16.2 17.2 7.8 9.8 7.8-9.8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="villain-home">
      <section className="vh-hero" id="home">
        <div className="vh-shell vh-hero-grid">
          <div className="vh-hero-copy">
            <div className="vh-eyebrow"><span /> THE ALL-IN-ONE DISCORD BOT</div>
            <h1>Villain is Discord’s<br /><em>all-in-one bot.</em></h1>
            <p>Moderation, music, tickets, levels, giveaways, and voice tools—together in one place. Spend less time juggling bots and more time with your community.</p>
            <div className="vh-actions">
              <Link href="/invite" className="vh-button vh-button-primary">Invite to Discord <Arrow /></Link>
              <Link href="#features" className="vh-button vh-button-secondary">Explore features <Arrow /></Link>
            </div>
          </div>
          <div className="vh-hero-art" aria-hidden="true">
            <div className="vh-hero-glow" />
            <div className="vh-feature-chip vh-chip-one"><span>01</span> Moderation</div>
            <div className="vh-feature-chip vh-chip-two"><span>02</span> Music</div>
            <div className="vh-feature-chip vh-chip-three"><span>03</span> Tickets &amp; giveaways</div>
          </div>
        </div>
        <a className="vh-scroll" href="#proof-strip" aria-label="Scroll to Villain features">↓</a>
      </section>

      <section className="vh-proof vh-shell" id="proof-strip" aria-label="Villain features">
        <p>One home for the tools your server needs</p>
        <div className="vh-proof-items">
          <span>Moderation</span><span>Music</span><span>Tickets</span><span>Levels &amp; rewards</span><span>Giveaways</span><span>Voice rooms</span>
        </div>
      </section>

      <section className="vh-section vh-shell" id="features">
        <div className="vh-section-intro">
          <span className="vh-kicker">01 / THE TOOLKIT</span>
          <div>
            <h2>Less juggling.<br />More community.</h2>
            <p>Keep the day-to-day essentials together, so your team can spend less time switching tools and more time with the people in your server.</p>
          </div>
        </div>
        <div className="vh-bento">
          <article className="vh-card vh-card-moderation">
            <div className="vh-card-copy">
              <span className="vh-kicker">SERVER CARE</span>
              <h3>{coreFeatures[0][0]} that stays in hand.</h3>
              <p>{coreFeatures[0][1]}</p>
            </div>
            <div className="vh-moderation-window" aria-hidden="true">
              <div className="vh-window-head"><span>MODERATION TOOLS</span><span>VILLAIN</span></div>
              <div className="vh-window-row"><b>◈</b><span>Member tools</span><i>READY</i></div>
              <div className="vh-window-row"><b>⌁</b><span>Server protection</span><i>READY</i></div>
            </div>
          </article>
          <article className="vh-card vh-card-music">
            <div className="vh-card-copy">
              <span className="vh-kicker">LISTEN TOGETHER</span>
              <h3>{coreFeatures[1][0]} for the room.</h3>
              <p>{coreFeatures[1][1]}</p>
            </div>
            <div className="vh-music-pill" aria-hidden="true"><span>♪</span><div><b>Music in your voice channel</b><small>Villain / Now playing</small></div><i>▮▮▮</i></div>
          </article>
          <article className="vh-card vh-card-community">
            <div className="vh-card-copy">
              <span className="vh-kicker">COMMUNITY TOOLS</span>
              <h3>{coreFeatures[2][0]} in one place.</h3>
              <p>{coreFeatures[2][1]}</p>
            </div>
            <div className="vh-ticket-tags" aria-hidden="true"><span>Tickets</span><span>Giveaways</span></div>
          </article>
        </div>
      </section>

      <section className="vh-platform">
        <div className="vh-shell vh-platform-grid">
          <div>
            <span className="vh-kicker">02 / BUILT FOR DISCORD</span>
            <h2>Made to fit<br />your server.</h2>
            <p>Villain brings the tools your community already uses into one familiar place.</p>
            <Link href="/invite" className="vh-text-link">Getting started <Arrow /></Link>
          </div>
          <div className="vh-platform-visual" aria-label="Villain features arranged around Discord">
            <div className="vh-platform-orbit vh-orbit-a" />
            <div className="vh-platform-orbit vh-orbit-b" />
            <div className="vh-platform-mark"><VillainMark /><span>VILLAIN</span></div>
            <span className="vh-platform-tag vh-tag-a">Moderation</span>
            <span className="vh-platform-tag vh-tag-b">Music</span>
            <span className="vh-platform-tag vh-tag-c">Tickets</span>
            <span className="vh-platform-tag vh-tag-d">Levels</span>
          </div>
        </div>
      </section>

      <section className="vh-section vh-shell vh-voice-section" id="setup">
        <div className="vh-section-intro">
          <span className="vh-kicker">03 / ROOM TO GROW</span>
          <div>
            <h2>Set the pace<br />for your community.</h2>
            <p>From server setup to the everyday rhythm of your voice channels, Villain gives your community room to grow.</p>
          </div>
        </div>
        <div className="vh-feature-tiles">
          {moreFeatures.map(([title, description], index) => (
            <article className="vh-feature-tile" key={title}>
              <span className="vh-tile-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vh-command-section vh-shell" id="commands">
        <div className="vh-command-card">
          <div>
            <span className="vh-kicker">THE COMMAND GUIDE</span>
            <h2>Commands,<br />coming next.</h2>
            <p>The full Villain command guide will be added after the redesign.</p>
            <div className="vh-guide-status"><span>⌘</span><div><b>Command guide</b><small>Details are on the way</small></div><i>IN PROGRESS</i></div>
          </div>
          <div className="vh-command-visual" aria-hidden="true">
            <div className="vh-command-window">
              <div className="vh-command-window-head"><span>VILLAIN / GUIDE</span><span>•••</span></div>
              <div className="vh-command-placeholder"><i /><i /><i /><b>Command details are on the way<span /></b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="vh-closing vh-shell" id="faq">
        <span className="vh-closing-mark"><VillainMark /></span>
        <span className="vh-kicker">VILLAIN / DISCORD BOT</span>
        <h2>One toolkit<br />for your server.</h2>
        <p>Moderation, music, tickets, levels, giveaways, and voice tools—all in one place.</p>
        <Link href="/invite" className="vh-button vh-button-primary">Invite Villain <Arrow /></Link>
        <span className="vh-closing-note">Public invite coming soon</span>
      </section>
    </div>
  );
}
