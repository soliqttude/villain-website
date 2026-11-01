import Link from "next/link";

const featureGroups = [
  {
    title: "Moderation",
    description: "Handle the day-to-day work of keeping a server in order.",
    commands: [",ban", ",kick", ",timeout", ",warn", ",purge", ",lock"],
    size: "large",
  },
  {
    title: "Server protection",
    description: "Layer server security with automated safeguards.",
    commands: [",antinuke", ",antiraid", ",automod", ",filter"],
    size: "tall",
  },
  {
    title: "Server management",
    description: "Configure the structure and routine of your community.",
    commands: [",setup", ",welcome", ",autorole", ",logging"],
  },
  {
    title: "Tickets & giveaways",
    description: "Give members a clear way to get help and take part.",
    commands: [",ticket", ",giveaway", ",suggest"],
  },
  {
    title: "Music & voice",
    description: "Play music and manage temporary voice channels.",
    commands: [",play", ",queue", ",skip", ",voicemaster"],
  },
  {
    title: "Community & utility",
    description: "Useful tools for members, profiles and everyday tasks.",
    commands: [",rank", ",profile", ",poll", ",remind", ",translate"],
  },
];

const extraFeatures = [
  "Welcome and goodbye messages",
  "Autoroles and reaction roles",
  "Counters and server logging",
  "Levels, ranks and leaderboards",
  "Profiles, bios and reputation",
  "Giveaways and suggestions",
  "Reminders and polls",
  "Embeds and custom tags",
  "Image and fun commands",
  "User and server information",
];

function CommandChips({ items }: { items: string[] }) {
  return <div className="command-chips">{items.map((item) => <code key={item}>{item}</code>)}</div>;
}

export default function Home() {
  return (
    <div className="villain-home">
      <section className="hero-section">
        <div className="hero-copy-block">
          <div className="eyebrow"><span className="eyebrow-mark" /> DISCORD BOT</div>
          <h1>Less bot clutter.<br /><span>More control.</span></h1>
          <p className="hero-description">
            Moderation, server protection, music and community tools — in one bot built to run your Discord server.
          </p>
          <div className="hero-actions">
            <Link href="/invite" className="action-button action-primary">Invite Villain</Link>
            <Link href="/commands" className="action-button action-secondary">Browse commands</Link>
          </div>
          <div className="hero-proof">
            <div><strong>6</strong><span>COMMAND CATEGORIES</span></div>
            <i />
            <div><strong>1</strong><span>BOT</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Villain command categories and example commands">
          <div className="preview-label"><span>COMMAND DIRECTORY</span><span>FEATURE OVERVIEW</span></div>
          <div className="discord-preview">
            <div className="discord-preview-top">
              <div className="discord-avatar">V</div>
              <div><strong>Villain</strong><small>SERVER TOOLKIT</small></div>
              <span className="preview-live">COMMANDS</span>
            </div>
            <div className="preview-rule" />
            <div className="response-heading"><span className="response-accent" /> <strong>Moderation &amp; management</strong></div>
            <p className="response-copy">A quick look at the tools in the command directory.</p>
            <div className="response-fields">
              <div><span>MODERATION</span><strong>,ban · ,kick · ,warn</strong></div>
              <div><span>COMMUNITY</span><strong>,ticket · ,giveaway</strong></div>
              <div><span>MUSIC</span><strong>,play · ,queue · ,skip</strong></div>
              <div><span>UTILITY</span><strong>,poll · ,remind · ,embed</strong></div>
            </div>
            <div className="preview-footer"><span>COMMAND EXAMPLES</span><span>VIEW DIRECTORY →</span></div>
          </div>
          <p className="preview-disclaimer">Browse the command directory for the current published list.</p>
        </div>
      </section>

      <section className="proof-strip" aria-label="Villain capabilities">
        <div><strong>6</strong><span>command categories</span></div>
        <div><strong>One bot</strong><span>server toolkit</span></div>
      </section>

      <section className="category-section" id="features">
        <div className="section-heading">
          <div><div className="eyebrow">THE TOOLKIT</div><h2>Tools for the way<br /><span>your server runs.</span></h2></div>
          <p>Use the features you need, from staff moderation to music and member activity.</p>
        </div>
        <div className="category-grid">
          {featureGroups.map((group) => (
            <article className={`category-card ${group.size === "large" ? "category-card-wide" : ""} ${group.size === "tall" ? "category-card-tall" : ""}`} key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <CommandChips items={group.commands} />
            </article>
          ))}
        </div>
        <div className="section-link-wrap"><Link href="/commands" className="text-link">Browse the command directory</Link></div>
      </section>

      <section className="extras-section">
        <div className="section-heading extras-heading">
          <div><div className="eyebrow">MORE BUILT IN</div><h2>And the everyday<br /><span>server essentials.</span></h2></div>
          <p>A wider set of tools for members and staff, ready when you need them.</p>
        </div>
        <ul className="extras-list">
          {extraFeatures.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>

      <section className="trust-section">
        <div className="trust-copy">
          <div className="eyebrow">STRAIGHT UP</div>
          <h2>No made-up<br /><span>uptime numbers.</span></h2>
          <p>Live monitoring is not connected yet. The status page tells you exactly that instead of showing an invented percentage.</p>
        </div>
        <Link href="/status" className="status-link"><span className="status-link-dot" /> View current service status</Link>
      </section>

      <section className="closing-section">
        <div className="closing-panel">
          <div className="closing-content">
            <div className="eyebrow">VILLAIN FOR DISCORD</div>
            <h2>Run your server<br /><span>with Villain.</span></h2>
            <p>Bring moderation, protection and community tools into one place.</p>
            <Link href="/invite" className="action-button action-primary">Invite Villain</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
