import { NextRequest, NextResponse } from "next/server";
import { createAdminSession, ADMIN_COOKIE, isAdminId } from "@/lib/admin-auth";

export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const expectedState = request.cookies.get("villain_admin_oauth_state")?.value;
  const fail = (message: string, status = 400) => NextResponse.json({ error: message }, { status });
  if (!code || !state || !expectedState || state !== expectedState) return fail("Invalid or expired sign-in request.");
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  if (!clientId || !clientSecret || !process.env.ADMIN_SESSION_SECRET || !process.env.ADMIN_DISCORD_USER_IDS) return fail("Admin sign-in is not configured yet.", 503);
  try {
    const body = new URLSearchParams({
      client_id: clientId, client_secret: clientSecret, grant_type: "authorization_code",
      code, redirect_uri: "https://villain.best/api/admin/auth/callback"
    });
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body
    });
    if (!tokenResponse.ok) return fail("Discord sign-in failed. Try again.", 401);
    const token = await tokenResponse.json() as { access_token: string; token_type: string };
    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: token.token_type + " " + token.access_token }, cache: "no-store"
    });
    if (!userResponse.ok) return fail("Could not verify your Discord account.", 401);
    const user = await userResponse.json() as { id: string };
    if (!isAdminId(user.id)) return fail("Access denied. This Discord account is not an admin.", 403);
    const response = NextResponse.redirect(new URL("/admin", request.url));
    response.cookies.set(ADMIN_COOKIE, createAdminSession(user.id), {
      httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12
    });
    response.cookies.set("villain_admin_oauth_state", "", { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 0 });
    return response;
  } catch {
    return fail("Admin sign-in could not be completed.", 500);
  }
}
