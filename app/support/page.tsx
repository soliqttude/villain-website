import Link from "next/link";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <div className="page-shell narrow-page">
      <div className="page-hero">
        <h1>Support</h1>
        <p>No server link yet.</p>
      </div>
      <section className="status-panel">
        <h2>The useful pages are already up.</h2>
        <p>An official support server will be linked here when there is one. Until then, start with the FAQ or look up a command by name.</p>
        <div className="hero-actions">
          <Link href="/faq" className="btn">Read the FAQ</Link>
          <Link href="/commands" className="btn btn-ghost">Command list</Link>
        </div>
      </section>
    </div>
  );
}
