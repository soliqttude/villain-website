import { NextResponse } from "next/server";

export function GET() {
  const inviteUrl = process.env.BOT_INVITE_URL;

  if (!inviteUrl) {
    return new NextResponse(
      "Villain's invite link has not been configured yet. Please try again later.",
      {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      }
    );
  }

  try {
    const url = new URL(inviteUrl);
    if (url.protocol !== "https:" || url.hostname !== "discord.com" && url.hostname !== "discordapp.com") {
      throw new Error("Invalid Discord invite URL");
    }
    return NextResponse.redirect(url);
  } catch {
    return new NextResponse("Villain's invite link is configured incorrectly.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
}
