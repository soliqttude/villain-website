import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export default async function AdminPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  const sections = [
    ["Announcements", "Publish a site-wide announcement."],
    ["Maintenance mode", "Show a maintenance notice across the website."],
    ["Website content", "Manage homepage and support-page copy."],
    ["Activity log", "Review admin actions and changes."]
  ];
  return <div className="page admin-page">
    <div className="admin-top"><div><span className="eyebrow">VILLAIN / CONTROL ROOM</span><h1>Website<br/><span className="admin-mark">controls.</span></h1><p className="dek">Signed in as Discord user <code>{session.id}</code>. Website controls only; bot controls are not included.</p></div><form action="/api/admin/auth/logout" method="post"><button className="btn btn-ghost" type="submit">Sign out</button></form></div>
    <div className="admin-notice"><strong>Database not connected</strong><p>Your dashboard login is protected, but changes cannot be saved yet. Connect the website database to activate these controls.</p></div>
    <div className="admin-grid">{sections.map(([title, description], i) => <section className="admin-card" key={title}><span className="eyebrow">0{i+1} / WEBSITE</span><h2>{title}</h2><p>{description}</p><span className="admin-disabled">Waiting for database</span></section>)}</div>
    <p className="admin-foot"><Link href="/">← Back to website</Link><span>Access is restricted to the configured Discord ID allowlist.</span></p>
  </div>;
}
