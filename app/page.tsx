import Link from "next/link";

const groups = [
  {
    name: "Moderation",
    description: "Handle staff actions and keep conversations under control.",
    commands: ["/ban", "/kick", "/timeout", "/warn", "/purge"],
    tone: "wide"
  },
  {
    name: "Protection",
    description: "Security tools for server owners and moderators.",
    commands: ["/antinuke", "/antiraid", "/security"],
    tone: "tall"
  },
  {
    name: "Server management",
    description: "Manage roles, channels, and the structure of your server.",
    commands: ["/role", "/channel", "/setup"]
  },
  {
    name: "Community",
    description: "Give members ways to participate and get involved.",
    commands: ["/giveaway", "/level", "/rank", "/ticket"]
  },
  {
    name: "Music & voice",
    description: "Control playback and voice features from Discord.",
    commands: ["/play", "/pause", "/skip", "/queue"]
  },
  {
    name: "Utilities",
    description: "Useful everyday tools for members and staff.",
    commands: ["/poll", "/remind", "/embed", "/translate"]
  }
];

const integrations = ["Spotify", "SoundCloud", "YouTube", "Reddit"];

export default function Home() {
  return (
    <div className="villain-home">
      <section className="hero-section">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-copy-block">
          <div className="eyebrow"><span className="eyebrow-mark" /> DISCORD BOT</div>
          <h1>Less bot clutter.<br /><span>More control.</span></h1>
          <p className="hero-description">
            Moderation, protection, server tools, music, and community features — brought together in one Discord bot.
          </p>
          <div className="hero-actions">
            <Link href="/commands" className="action-button action-primary">Browse commands <span aria-hidden="true">→</span></Link>
            <Link href="/faq" className="action-button action-secondary">Learn about Villain</Link>
          </div>
          <div className="hero-proof">
            <div><strong>06</strong><span>COMMAND GROUPS</span></div>
            <i />
            <div><strong>24</strong><span>EXAMPLE COMMANDS</span></div>
            <i />
            <div><strong>01</strong><span>BOT</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="preview-label"><span>COMMAND PREVIEW</span><span>EXAMPLES</span></div>
          <div className="discord-preview">
            <div className="discord-preview-top">
              <div className="discord-avatar">V</div>
              <div><strong>Villain</strong><small>APP · COMMAND EXAMPLES</small></div>
              <span className="preview-live"><i /> READY</span>
            </div>
            <div className="preview-rule" />
            <div className="preview-command">
              <span className="preview-prompt">/</span>
              <div><strong>ban</strong><small>Ban a member from the server</small></div>
              <kbd>MODERATION</kbd>
            </div>
            <div className="preview-command">
              <span className="preview-prompt">/</span>
              <div><strong>antinuke</strong><small>Configure server protection</small></div>
              <kbd>PROTECTION</kbd>
            </div>
            <div className="preview-command">
              <span className="preview-prompt">/</span>
              <div><strong>ticket</strong><small>Open a support ticket</small></div>
              <kbd>COMMUNITY</kbd>
            </div>
            <div className="preview-command">
              <span className="preview-prompt">/</span>
              <div><strong>play</strong><small>Start music in a voice channel</small></div>
              <kbd>MUSIC</kbd>
            </div>
            <div className="preview-footer"><span>EXAMPLE COMMANDS</span><Link href="/commands">OPEN DIRECTORY ↗</Link></div>
          </div>
          <p className="preview-disclaimer">Illustrative command preview · not a live Discord capture</p>
        </div>
      </section>

      <section className="category-section" id="features">
        <div className="section-heading">
          <div><div className="eyebrow">THE TOOLKIT</div><h2>Everything your<br /><span>server runs on.</span></h2></div>
          <p>Six focused command groups. Find the tools you need without jumping between a stack of different bots.</p>
        </div>
        <div className="category-grid">
          {groups.map((group, index) => (
            <article className={`category-card ${group.tone === "wide" ? "category-card-wide" : ""} ${group.tone === "tall" ? "category-card-tall" : ""}`} key={group.name}>
              <div className="category-card-top"><span className="category-index">{String(index + 1).padStart(2, "0")}</span><span>{group.commands.length} EXAMPLES</span></div>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <div className="command-chips">{group.commands.map(command => <code key={command}>{command}</code>)}</div>
            </article>
          ))}
        </div>
        <div className="section-link-wrap"><Link href="/commands" className="text-link">Explore all commands <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="connections-section">
        <div className="connections-copy">
          <div className="eyebrow">PLATFORM CONNECTIONS</div>
          <h2>Your platforms.<br /><span>In the same place.</span></h2>
          <p>Villain's site lists these platform connections. Visit the command directory for the available commands and details.</p>
        </div>
        <div className="integration-list">
          {integrations.map((name, index) => (
            <div className="integration-item" key={name}>
              <span className="integration-number">0{index + 1}</span>
              <strong>{name}</strong>
              <span className="integration-mark">V</span>
            </div>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-panel">
          <div className="closing-content">
            <div className="eyebrow">VILLAIN FOR DISCORD</div>
            <h2>Find the right<br /><span>command.</span></h2>
            <p>Browse the directory to see the command groups, examples, and available tools.</p>
            <Link href="/commands" className="action-button action-primary">Open command directory <span aria-hidden="true">→</span></Link>
          </div>
          <div className="closing-mark" aria-hidden="true">V</div>
        </div>
      </section>
    </div>
  );
}
