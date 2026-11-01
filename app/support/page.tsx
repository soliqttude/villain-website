import Link from "next/link";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return <div className="page-shell narrow-page"><div className="page-hero"><div className="eyebrow">WE CAN HELP</div><h1>Support<span>.</span></h1><p>Need a hand with Villain? Here's where to start.</p></div><section className="support-card"><div className="support-symbol">✳</div><div className="eyebrow">VILLAIN COMMUNITY</div><h2>We're setting up<br />our support space.</h2><p>The official support server link will be added here once it's ready. Until then, check the FAQ or browse the command directory.</p><div className="hero-actions"><Link href="/faq" className="button button-primary">Read the FAQ <span>↗</span></Link><Link href="/commands" className="button button-secondary">View commands</Link></div></section></div>;
}
