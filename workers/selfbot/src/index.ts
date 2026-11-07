/**
 * Villain Selfbot Worker
 * 
 * This is the process that actually connects to Discord using a user token.
 * In production each account will run in its own process / container.
 * 
 * For now this is a skeleton that can be expanded.
 */

import { Client } from "discord.js-selfbot-v13";
import "dotenv/config";

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX || ".";

if (!token) {
  console.error("[Worker] No DISCORD_TOKEN provided");
  process.exit(1);
}

const client = new Client({
  checkUpdate: false,
});

client.on("ready", async () => {
  console.log(`[Worker] Logged in as ${client.user?.tag}`);
  console.log(`[Worker] Prefix: ${prefix}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.id !== client.user?.id) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();

  if (command === "ping") {
    const sent = await message.channel.send("Pinging...");
    const latency = sent.createdTimestamp - message.createdTimestamp;
    await sent.edit(`Pong. Latency: ${latency}ms | API: ${Math.round(client.ws.ping)}ms`);
  }

  if (command === "help") {
    await message.channel.send(
      `**Villain Selfbot**\nPrefix: \`${prefix}\`\n\nCommands:\n- \`${prefix}ping\`\n- \`${prefix}help\``
    );
  }
});

client.on("error", (err) => {
  console.error("[Worker] Client error:", err);
});

process.on("SIGINT", () => {
  console.log("[Worker] Shutting down...");
  client.destroy();
  process.exit(0);
});

client.login(token).catch((err) => {
  console.error("[Worker] Failed to login:", err);
  process.exit(1);
});
