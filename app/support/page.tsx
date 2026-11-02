import Link from "next/link";

export const metadata = {
  title: "Support",
  description: "Get help with Villain in the official Discord support server."
};

export default function SupportPage() {
  return (
    <div className="page-shell narrow-page support-page">
      <div className="page-hero">
        <p className="eyebrow">VILLAIN / SUPPORT</p>
        <h1>Need a hand?</h1>
        <p>Questions about setup, commands, permissions, or something not working? Join the official Villain support server.</p>
      </div>
      <section className="status-panel support-panel">
        <span className="support-icon" aria-hidden="true">V.</span>
        <p className="eyebrow">OFFICIAL COMMUNITY</p>
        <h2>Get help from the team.</h2>
        <p>When asking for help, include the command or feature you're using, what happened, and any error message. Never share your Discord password, bot token, or other secrets.</p>
        <div className="hero-actions">
          <a className="btn" href="https://discord.gg/villainbot" target="_blank" rel="noreferrer">Join support server <span aria-hidden="true">↗</span></a>
          <Link href="/faq" className="btn btn-ghost">Read the FAQ</Link>
        </div>
      </section>
    </div>
  );
}
