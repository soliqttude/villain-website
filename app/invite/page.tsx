import Link from "next/link";

export const metadata = { title: "Invite Villain" };

function getInviteUrl() {
  const value = process.env.BOT_INVITE_URL;
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || !["discord.com", "discordapp.com"].includes(url.hostname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export default function InvitePage() {
  const inviteUrl = getInviteUrl();

  return (
    <div className="page-shell narrow-page">
      <div className="page-hero">
        <div className="eyebrow">ADD TO DISCORD</div>
        <h1>Invite Villain<span>.</span></h1>
        <p>Bring moderation, server tools, music and community features into your server.</p>
      </div>
      <section className="status-panel">
        {inviteUrl ? (
          <>
            <div className="status-panel-top"><div><span className="status-indicator status-muted" /> <strong>Ready to add</strong></div><span className="status-tag">DISCORD</span></div>
            <h2>Choose your server.</h2>
            <p>Continue to Discord to select a server and review the permissions Villain requests.</p>
            <a className="action-button action-primary" href={inviteUrl}>Continue to Discord</a>
          </>
        ) : (
          <>
            <div className="status-panel-top"><div><span className="status-indicator status-muted" /> <strong>Not publicly available yet</strong></div><span className="status-tag">COMING SOON</span></div>
            <h2>Villain's invite link isn't ready.</h2>
            <p>The bot's public invite has not been configured yet. We won't send you to a broken or guessed link.</p>
            <div className="hero-actions">
              <Link href="/commands" className="action-button action-secondary">Browse commands</Link>
              <Link href="/faq" className="action-button action-secondary">Read the FAQ</Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
