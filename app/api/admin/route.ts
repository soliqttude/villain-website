import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession, ADMIN_COOKIE } from "@/lib/admin-auth";

export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  const session = verifyAdminSession(request.cookies.get(ADMIN_COOKIE)?.value);
  if (!session) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return NextResponse.json({ authenticated: true, adminId: session.id, storage: "not_configured" });
}
