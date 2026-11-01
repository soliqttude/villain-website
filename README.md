# Villain

Website for Villain, a Discord bot. Live at [villain.best](https://villain.best).

```bash
npm install
npm run dev
```

Set `BOT_INVITE_URL` to an `https://discord.com/...` invite when the public link is ready. The invite page stays honest until then.


## Discord profile connection

The `/connect` page lets a user connect their Discord account to the Villain application profile.

Add these environment variables to the Vercel project:

- `DISCORD_CLIENT_ID` — Villain's Discord Application ID.
- `DISCORD_CLIENT_SECRET` — the OAuth2 client secret from the Discord Developer Portal. Keep this secret; never use a `NEXT_PUBLIC_` prefix.
- `DISCORD_BOT_TOKEN` — Villain's bot token, used server-side to register Linked Role metadata. Never expose it in client-side code.
- `DISCORD_REDIRECT_URI` — exactly `https://villain.best/api/discord/callback`.
- `NEXT_PUBLIC_SITE_URL` — `https://villain.best`.

In Discord Developer Portal → OAuth2 → Redirects, add exactly:

```
https://villain.best/api/discord/callback
```

The Linked Roles verification URL in Discord must be `https://villain.best/linked-role` (not `/api/discord/connect`). That route registers the `villain_member` boolean metadata field using the bot token, then starts OAuth. The callback requests `identify` and `role_connections.write` and publishes `villain_member: 1`. It does not store Discord access or refresh tokens. The OAuth2 Redirect URI remains `https://villain.best/api/discord/callback`.

User Install must remain enabled for the app. This profile connection is separate from installing the app to a server or to a user's account.
