import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand footer-brand"><span className="brand-mark">V</span><span>VILLAIN<span className="brand-dot">.</span></span></Link>
          <p>One bot. Your entire server.</p>
        </div>
        <div className="footer-links">
          <div><span className="footer-label">Explore</span><Link href="/commands">Commands</Link><Link href="/status">Status</Link><Link href="/faq">FAQ</Link><Link href="/support">Support</Link></div>
          <div><span className="footer-label">Legal</span><Link href="/terms">Terms of Service</Link><Link href="/privacy">Privacy Policy</Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Villain. All rights reserved.</span><span>Made for Discord communities.</span></div>
    </footer>
  );
}
