import Link from "next/link";

export const metadata = { title: "Add to server" };

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1566495827122331898&permissions=8&integration_type=0&scope=bot+applications.commands";

export default function InvitePage() {
  return (
    <div className="page-shell narrow-page">
      <div className="page-hero">
        <h1>Add to server</h1>
        <p>Moderation, music, tickets, levels, giveaways, and temp voice. One invite.</p>
      </div>
      <section className="status-panel">
        <h2>Ready to add Villain?</h2>
        <p>Choose a server and review the requested permissions on Discord before authorizing.</p>
        <a className="btn" href={inviteUrl}>Continue to Discord</a>
        <div className="hero-actions">
          <Link href="/commands" className="btn btn-ghost">Command list</Link>
          <Link href="/support" className="btn btn-ghost">Support</Link>
        </div>
      </section>
    </div>
  );
}
