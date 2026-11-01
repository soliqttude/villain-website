import Link from "next/link";

const groups = [
  {
    name: "Moderation",
    description: "Handle day-to-day staff actions with a focused set of moderation commands.",
    commands: ["/ban", "/kick", "/timeout", "/warn", "/purge"]
  },
  {
    name: "Information",
    description: "Look up useful details about members, roles, and your server.",
    commands: ["/userinfo", "/serverinfo", "/avatar", "/roleinfo"]
  },
  {
    name: "Utility",
    description: "Give members and staff practical tools for everyday tasks.",
    commands: ["/poll", "/remind", "/embed", "/translate"]
  },
  {
    name: "Community",
    description: "Give people more ways to participate and contribute.",
    commands: ["/giveaway", "/level", "/rank", "/ticket"]
  },
  {
    name: "Music & voice",
    description: "Keep audio controls and voice features close at hand.",
    commands: ["/play", "/pause", "/skip", "/queue"]
  },
  {
    name: "Fun",
    description: "A few lightweight commands for the quieter moments.",
    commands: ["/meme", "/8ball", "/ship", "/coinflip"]
  }
];

export default function Home() {
  return (
    <div className="villain-home">
      <section className="hero-section">
        <div className="hero-copy-block">
          <div className="eyebrow"><span className="eyebrow-mark" /> DISCORD BOT</div>
          <h1>Villain<span className="hero-period">.</span></h1>
          <p className="hero-description">
            Moderation, server utilities, community tools, music, and more — in one bot built for Discord servers.
          </p>
          <div className="hero-actions">
            <Link href="/commands" className="action-button action-primary">Browse commands <span aria-hidden="true">→</span></Link>
            <Link href="/faq" className="action-button action-secondary">How it works</Link>
          </div>
          <div className="hero-footnote"><span>ONE BOT</span><i /> <span> SIX TOOLSETS</span><i /> <span>BUILT FOR DISCORD</span></div>
        </div>

        <div className="hero-visual" aria-label="A selection of Villain command categories">
          <div className="visual-glow" />
          <div className="visual-topline"><span>VILLAIN / COMMANDS</span><span>DIRECTORY</span></div>
          <div className="command-window">
            <div className="command-window-head">
              <div className="window-brand"><span>V</span><div><strong>Villain</strong><small>COMMAND DIRECTORY</small></div></div>
              <span className="window-count">06 CATEGORIES</span>
            </div>
            <div className="window-divider" />
            {groups.slice(0, 4).map((group, index) => (
              <div className="window-category" key={group.name}>
                <span className="window-index">0{index + 1}</span>
                <strong>{group.name}</strong>
                <span className="window-commands">{group.commands.slice(0, 2).join("  ")}</span>
              </div>
            ))}
            <div className="window-bottom"><span>MODERATION / COMMUNITY / UTILITY</span><span>V.</span></div>
          </div>
          <div className="visual-caption">A QUICK LOOK AT WHAT'S INSIDE</div>
        </div>
      </section>

      <section className="category-section">
        <div className="section-heading">
          <div><div className="eyebrow">THE COMMANDS</div><h2>Tools for the<br /><span>whole server.</span></h2></div>
          <p>Browse the main command groups. Open the directory for command names and details.</p>
        </div>
        <div className="category-grid">
          {groups.map((group, index) => (
            <article className="category-card" key={group.name}>
              <div className="category-card-top"><span>0{index + 1}</span><span>{group.commands.length.toString().padStart(2, "0")} EXAMPLES</span></div>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <div className="command-chips">{group.commands.map(command => <code key={command}>{command}</code>)}</div>
            </article>
          ))}
        </div>
        <div className="section-link-wrap"><Link href="/commands" className="text-link">View the full command directory <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="details-section">
        <div className="details-copy">
          <div className="eyebrow">MADE FOR SERVER TEAMS</div>
          <h2>Less switching.<br /><span>More doing.</span></h2>
          <p>Keep everyday server tasks in one place. Find the command you need, check what it does, and get back to your community.</p>
          <Link href="/commands" className="action-button action-primary">Explore commands <span aria-hidden="true">→</span></Link>
        </div>
        <div className="details-list">
          <div><span>01</span><strong>Find a command</strong><small>Search by name or browse a category.</small></div>
          <div><span>02</span><strong>Check the details</strong><small>See the command groups and examples.</small></div>
          <div><span>03</span><strong>Use Villain in Discord</strong><small>Run the commands available to your server.</small></div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-panel">
          <div className="closing-mark">V</div>
          <div className="eyebrow">VILLAIN / DISCORD</div>
          <h2>Start with the<br /><span>command directory.</span></h2>
          <p>Explore the available command groups and find the tools your server needs.</p>
          <Link href="/commands" className="action-button action-primary">Browse commands <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  );
}
