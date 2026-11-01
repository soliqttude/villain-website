import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">Villain</span>
          </Link>
          <p>One Discord bot for moderation, music, and the rest of the server work.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Product</span>
          <Link href="/commands">Commands</Link>
          <Link href="/status">Status</Link>
          <Link href="/invite">Add to server</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Help</span>
          <Link href="/faq">FAQ</Link>
          <Link href="/support">Support</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Legal</span>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Villain</span>
        <span>villain.best</span>
      </div>
    </footer>
  );
}
