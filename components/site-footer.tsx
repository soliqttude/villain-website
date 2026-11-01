import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">V</span>
            <span className="brand-name">VILLAIN</span>
          </Link>
          <p>Discord tools for moderation, utilities, music, and community.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">PRODUCT</span>
          <Link href="/commands">Commands</Link>
          <Link href="/status">Status</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">SUPPORT</span>
          <Link href="/faq">FAQ</Link>
          <Link href="/support">Support</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">LEGAL</span>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Villain. All rights reserved.</span>
        <span>Discord bot</span>
      </div>
    </footer>
  );
}
