import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export async function GET() {
  const clientId = process.env.DISCORD_CLIENT_ID;
  if (!clientId) return NextResponse.json({ error: "Discord OAuth is not configured." }, { status: 503 });
  const state = randomBytes(32).toString("hex");
  const url = new URL("https://discord.com/oauth2/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", "https://villain.best/api/admin/auth/callback");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "identify");
  url.searchParams.set("state", state);
  const response = NextResponse.redirect(url);
  response.cookies.set("villain_admin_oauth_state", state, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 600 });
  return response;
}
