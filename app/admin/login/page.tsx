import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export default async function AdminLoginPage() {
  if (await getAdminSession()) redirect("/admin");
  return <div className="page page-narrow admin-login"><span className="eyebrow">VILLAIN / PRIVATE AREA</span><h1>Admin<br/><span className="admin-mark">access.</span></h1><p className="dek">Sign in with Discord. Only the three approved account IDs can enter this dashboard.</p><a className="btn" href="/api/admin/auth/login">Continue with Discord ↗</a><p className="admin-foot"><Link href="/">← Back to website</Link></p></div>;
}
