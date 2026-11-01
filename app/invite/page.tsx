import Link from "next/link";

export const metadata = { title: "Add to server" };

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
        <h1>Add to server</h1>
        <p>Moderation, music, tickets, levels, giveaways, and temp voice. One invite.</p>
      </div>
      <section className="status-panel">
        {inviteUrl ? (
          <>
            <h2>Discord will ask which server.</h2>
            <p>You'll review the permissions Villain requests before anything is added.</p>
            <a className="btn" href={inviteUrl}>Continue to Discord</a>
          </>
        ) : (
          <>
            <h2>The invite isn't public yet.</h2>
            <p>This page will send you to Discord once the link is connected. It won't guess one.</p>
            <div className="hero-actions">
              <Link href="/commands" className="btn">Command list</Link>
              <Link href="/faq" className="btn btn-ghost">FAQ</Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
