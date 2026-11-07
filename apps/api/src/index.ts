import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import "dotenv/config";

const app = new Hono();

app.use("*", logger());
app.use("*", cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  credentials: true,
}));

app.get("/", (c) => {
  return c.json({
    name: "Villain API",
    version: "0.1.0",
    status: "ok",
  });
});

app.get("/health", (c) => {
  return c.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Placeholder routes — will be expanded
app.get("/api/me", (c) => {
  return c.json({ error: "Not implemented yet" }, 501);
});

app.get("/api/accounts", (c) => {
  return c.json({ error: "Not implemented yet" }, 501);
});

const port = Number(process.env.PORT) || 4000;

console.log(`Villain API running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
