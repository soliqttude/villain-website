import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const botToken = process.env.DISCORD_BOT_TOKEN;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;

  if (!clientId || !clientSecret || !botToken || !redirectUri) {
    return NextResponse.redirect(new URL("/connect?error=not_configured", process.env.NEXT_PUBLIC_SITE_URL || "https://villain.best"));
  }

  // Register the single boolean criterion used by Villain's linked role.
  const metadataResponse = await fetch(
    `https://discord.com/api/v10/applications/${clientId}/role-connections/metadata`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bot ${botToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        type: 7,
        key: "villain_member",
        name: "Villain Member",
        description: "Has connected their Discord account to Villain"
      }]),
      cache: "no-store"
    }
  );

  if (!metadataResponse.ok) {
    console.error("Discord linked-role metadata registration failed:", metadataResponse.status, await metadataResponse.text());
    return NextResponse.redirect(new URL("/connect?error=metadata_registration", process.env.NEXT_PUBLIC_SITE_URL || "https://villain.best"));
  }

  const state = randomBytes(32).toString("hex");
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "identify role_connections.write",
    state
  });

  const response = NextResponse.redirect(`https://discord.com/oauth2/authorize?${params.toString()}`);
  response.cookies.set("villain_discord_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600
  });
  return response;
}
