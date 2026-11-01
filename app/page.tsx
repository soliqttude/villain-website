import Link from "next/link";

const areas = [
  {
    n: "01",
    title: "Moderation",
    text: "Bans, jails, lockdowns, raid mode, word filters. The commands you reach for when chat is on fire.",
    cmds: "ban · kick · timeout · jail · lockdown · antiraid"
  },
  {
    n: "02",
    title: "Music",
    text: "Queue, filters, skip, volume. It stays inside Villain, so you don't bolt on a separate music bot.",
    cmds: "play · queue · skip · filter · volume"
  },
  {
    n: "03",
    title: "Tickets & giveaways",
    text: "A place for staff to take questions, and giveaways for when you want people to stick around.",
    cmds: "ticket · ticketpanel · gcreate · gend · greroll"
  },
  {
    n: "04",
    title: "Levels",
    text: "XP, rank cards, reward roles. Turn the whole thing off if your server doesn't care.",
    cmds: "rank · leaderboard · addxp · rewards · levelcard"
  },
  {
    n: "05",
    title: "Setup",
    text: "Welcome messages, logs, autoroles, the prefix, and who actually counts as staff.",
    cmds: "setwelcome · setlogs · setautorole · setprefix · setmodrole"
  },
  {
    n: "06",
    title: "Voice",
    text: "Temporary channels members can open, rename, lock, limit, and throw away.",
    cmds: "voicemaster · vmname · vmlock · vmlimit · vmkick"
  }
];

const samples = [
  ["Moderation", "ban, kick, jail"],
  ["Music", "play, queue, skip"],
  ["Tickets", "ticket, giveaway"],
  ["Levels", "rank, rewards"],
  ["Voice", "lock, limit, kick"]
];

const extras = [
  "Welcome and goodbye messages",
  "Autoroles and reaction roles",
  "Logging and counters",
  "Profiles, bios, reputation",
  "Polls, reminders, embeds",
  "Tags and autoresponders",
  "Starboard and suggestions",
  "Last.fm and social lookups",
  "Image commands",
  "Stickers and emoji tools",
  "Thread controls",
  "Small games and jokes"
];

export default function Home() {
  return (
    <div className="wrap">
      <section className="hero">
        <h1>
          The bot you add <span className="mark">instead of five.</span>
        </h1>
        <div className="hero-grid">
          <div>
            <p className="lead">
              Moderation, music, tickets, levels, giveaways, and temporary voice channels. Prefix and slash commands, one bot.
            </p>
            <div className="hero-actions">
              <Link href="/invite" className="btn">Add to server</Link>
              <Link href="/commands" className="btn btn-ghost">Command list</Link>
            </div>
          </div>
          <div>
            <p className="sample-label">From the command list</p>
            <div className="sample">
              {samples.map(([name, cmds]) => (
                <div className="sample-row" key={name}>
                  <strong>{name}</strong>
                  <span>{cmds}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-head">
          <h2>What people add it for</h2>
          <p>The jobs that usually end up split across a handful of bots.</p>
        </div>
        <div>
          {areas.map((area) => (
            <article className="area" key={area.n}>
              <div className="area-n">{area.n}</div>
              <div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
              <p className="area-cmds">{area.cmds}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="also">
        <h2>And the smaller stuff</h2>
        <ul className="also-list">
          {extras.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="note">
        <div>
          <h2>No fake uptime.</h2>
          <p>Monitoring isn't connected. The status page says that in plain text instead of inventing a percentage.</p>
        </div>
        <Link href="/status" className="text-link">Read the status</Link>
      </section>

      <section className="close">
        <h2>Put Villain on the server.</h2>
        <Link href="/invite" className="btn">Add to server</Link>
      </section>
    </div>
  );
}
