# Villain

**Discord Selfbot Hosting Platform**  
Domain: [villain.best](https://villain.best)

> Free selfbot hosting with custom Rich Presence, commands, multi-account support, and a clean dashboard.

---

## Stack

- **Frontend**: Next.js 15 (App Router)
- **Backend**: Node.js + Hono
- **Database**: PostgreSQL + Prisma
- **Workers**: `discord.js-selfbot-v13`
- **Cache**: Redis
- **Auth**: Discord OAuth + Email/Password
- **Encryption**: AES-256-GCM for tokens

---

## Features (v1)

- Max **3 accounts** per user
- Encrypted token storage
- Online / Offline status
- Custom Rich Presence
- Command system + custom prefix
- Activity logs
- Full Admin panel (IPs, actions, users)
- Auto-reconnect

---

## Project Structure

```text
villain/
├── apps/
│   ├── web/          # Next.js Dashboard + Landing
│   └── api/          # Hono API
├── packages/
│   ├── database/     # Prisma schema + client
│   ├── crypto/       # Token encryption
│   └── shared/       # Shared types & constants
├── workers/
│   └── selfbot/      # Selfbot runner
├── .env.example
└── package.json
```

---

## Getting Started

### 1. Environment Variables

Copy `.env.example` → `.env` and fill in the values.

### 2. Install

```bash
pnpm install
```

### 3. Database

```bash
pnpm db:push
```

### 4. Run

```bash
pnpm dev
```

---

## Security Notes

- Tokens are encrypted at rest using AES-256-GCM
- Encryption key must be set in environment variables
- All logins and sensitive actions are logged with IP
- Admin has full visibility for abuse / legal purposes

---

## Disclaimer

Selfbots violate Discord's Terms of Service.  
Users run them at their own risk. Accounts can be disabled by Discord.
