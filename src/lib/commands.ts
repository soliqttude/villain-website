export type Command = {
  name: string;
  usage: string;
  description: string;
  aliases?: string[];
  examples?: string[];
  permission?: string | null;
};
export type Category = { id: string; title: string; blurb?: string; commands: Command[] };

export const PREFIX = ",";
export const categories: Category[] = [
  {
    id: "moderation", title: "Moderation", blurb: "Bans, warnings, timeouts and message cleanup.",
    commands: [
      { name: "warn", usage: "warn <member> [reason]", description: "Issue a warning and record it on the member's history.", permission: "Manage Messages" },
      { name: "warnings", usage: "warnings <member>", description: "List every warning a member has received.", permission: "Manage Messages" },
      { name: "ban", usage: "ban <user> [duration] [reason]", description: "Ban a user, optionally for a set duration.", permission: "Ban Members" },
      { name: "unban", usage: "unban <user>", description: "Lift an existing ban.", permission: "Ban Members" },
      { name: "kick", usage: "kick <member> [reason]", description: "Remove a member from the server.", permission: "Kick Members" },
      { name: "timeout", usage: "timeout <member> <duration> [reason]", description: "Temporarily mute a member.", permission: "Moderate Members" },
      { name: "purge", usage: "purge <amount> [filter]", description: "Bulk delete messages by user, bots, links or files.", permission: "Manage Messages" },
      { name: "modlogs", usage: "modlogs <member>", description: "Show a member's moderation record.", permission: "Manage Messages" },
    ],
  },
  {
    id: "protection", title: "Protection", blurb: "Security controls for server owners and administrators.",
    commands: [
      { name: "antinuke", usage: "antinuke <enable|disable|config>", description: "Stop mass bans, deletions and webhook abuse.", permission: "Administrator" },
      { name: "antiraid", usage: "antiraid <enable|disable|config>", description: "Detect join floods and lock the server down.", permission: "Manage Guild" },
      { name: "whitelist", usage: "whitelist <add|remove> <user>", description: "Exempt trusted staff from protection triggers.", permission: "Administrator" },
      { name: "securitylogs", usage: "securitylogs <channel>", description: "Send security events to a channel.", permission: "Manage Guild" },
    ],
  },
  {
    id: "management", title: "Server Management", blurb: "Configure channels, roles and server settings.",
    commands: [
      { name: "role", usage: "role <add|remove> <member> <role>", description: "Assign or remove roles.", permission: "Manage Roles" },
      { name: "lock", usage: "lock [channel]", description: "Prevent members from sending messages.", permission: "Manage Channels" },
      { name: "unlock", usage: "unlock [channel]", description: "Reopen a locked channel.", permission: "Manage Channels" },
      { name: "slowmode", usage: "slowmode <seconds> [channel]", description: "Set a channel's slowmode.", permission: "Manage Channels" },
      { name: "prefix", usage: "prefix <new>", description: "Change Villain's command prefix.", permission: "Manage Guild" },
      { name: "automod", usage: "automod <filter> <on|off>", description: "Filter invites, spam, caps and banned words.", permission: "Manage Guild" },
    ],
  },
  {
    id: "community", title: "Community", blurb: "Tools to help members connect and get support.",
    commands: [
      { name: "ticket", usage: "ticket <setup|close|add>", description: "Private support tickets with transcripts.", permission: "Manage Channels" },
      { name: "giveaway", usage: "giveaway <start|end|reroll>", description: "Run timed giveaways with a button entry.", permission: "Manage Guild" },
      { name: "welcome", usage: "welcome <channel> <message>", description: "Greet new members with a custom message.", permission: "Manage Guild" },
      { name: "userinfo", usage: "userinfo [member]", description: "Show account and server details for a member." },
      { name: "avatar", usage: "avatar [member]", description: "Show a member's avatar in full size." },
    ],
  },
  {
    id: "music", title: "Music & Voice", blurb: "Music playback and personal voice channels.",
    commands: [
      { name: "play", usage: "play <query|url>", description: "Play a track or add it to the queue." },
      { name: "queue", usage: "queue", description: "View and manage the upcoming tracks." },
      { name: "skip", usage: "skip", description: "Skip the current track." },
      { name: "filter", usage: "filter <bassboost|nightcore|8d|off>", description: "Apply an audio filter." },
      { name: "voicemaster", usage: "voicemaster setup", description: "Let members create temporary voice channels." },
    ],
  },
];
export const totalCommands = categories.reduce((n, c) => n + c.commands.length, 0);
export function displayUsage(value: string): string {
  return value.startsWith(PREFIX) ? value : `${PREFIX}${value}`;
}
