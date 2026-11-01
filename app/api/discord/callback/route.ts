import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const siteUrl = () => process.env.NEXT_PUBLIC_SITE_URL || "https://villain.best";

function finish(path: string) {
  return NextResponse.redirect(new URL(path, siteUrl()));
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const returnedError = request.nextUrl.searchParams.get("error");
  const savedState = request.cookies.get("villain_discord_oauth_state")?.value;

  if (returnedError) return finish("/connect?error=cancelled");
  if (!code || !state || !savedState || state !== savedState) {
    return finish("/connect?error=invalid_state");
  }

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;
  if (!clientId || !clientSecret || !redirectUri) {
    return finish("/connect?error=not_configured");
  }

  try {
    const tokenResponse = await fetch("https://discord.com/api/v10/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri
      }),
      cache: "no-store"
    });

    if (!tokenResponse.ok) return finish("/connect?error=token_exchange");
    const tokenData = await tokenResponse.json() as { access_token?: string; token_type?: string };
    if (!tokenData.access_token) return finish("/connect?error=token_exchange");

    const userResponse = await fetch("https://discord.com/api/v10/users/@me", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
      cache: "no-store"
    });
    if (!userResponse.ok) return finish("/connect?error=identity");
    const user = await userResponse.json() as { username?: string; global_name?: string | null };
    const platformUsername = user.global_name || user.username || "Discord user";

    const connectionResponse = await fetch(
      `https://discord.com/api/v10/users/@me/applications/${clientId}/role-connection`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          platform_name: "Villain",
          platform_username: platformUsername,
          metadata: {}
        }),
        cache: "no-store"
      }
    );

    if (!connectionResponse.ok) {
      console.error("Discord role connection update failed:", connectionResponse.status, await connectionResponse.text());
      return finish("/connect?error=connection_update");
    }

    const response = finish("/connect?connected=1");
    response.cookies.delete("villain_discord_oauth_state");
    return response;
  } catch (error) {
    console.error("Discord connection callback failed:", error);
    return finish("/connect?error=unexpected");
  }
}
