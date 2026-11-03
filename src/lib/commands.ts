export type Command = { name: string; usage: string; description: string };
export type Category = { id: string; title: string; commands: Command[] };

export const categories: Category[] = [
  {
    id: "moderation",
    title: "Moderation",
    commands: [
      { name: "warn", usage: "warn <member> [reason]", description: "Issue a warning and record it on the member's history." },
      { name: "warnings", usage: "warnings <member>", description: "List every warning a member has received." },
      { name: "ban", usage: "ban <user> [duration] [reason]", description: "Ban a user, optionally for a set duration." },
      { name: "unban", usage: "unban <user>", description: "Lift an existing ban." },
      { name: "kick", usage: "kick <member> [reason]", description: "Remove a member from the server." },
      { name: "timeout", usage: "timeout <member> <duration> [reason]", description: "Temporarily mute a member." },
      { name: "purge", usage: "purge <amount> [filter]", description: "Bulk delete messages by user, bots, links or files." },
      { name: "modlogs", usage: "modlogs <member>", description: "Show a member's full moderation record." },
    ],
  },
  {
    id: "protection",
    title: "Protection",
    commands: [
      { name: "antinuke", usage: "antinuke <enable|disable|config>", description: "Stop mass bans, deletions and webhook abuse." },
      { name: "antiraid", usage: "antiraid <enable|disable|config>", description: "Detect join floods and lock the server down." },
      { name: "whitelist", usage: "whitelist <add|remove> <user>", description: "Exempt trusted staff from protection triggers." },
      { name: "securitylogs", usage: "securitylogs <channel>", description: "Send security events to a channel." },
    ],
  },
  {
    id: "management",
    title: "Server Management",
    commands: [
      { name: "role", usage: "role <add|remove> <member> <role>", description: "Assign or remove roles." },
      { name: "lock", usage: "lock [channel]", description: "Prevent members from sending messages." },
      { name: "unlock", usage: "unlock [channel]", description: "Reopen a locked channel." },
      { name: "slowmode", usage: "slowmode <seconds> [channel]", description: "Set a channel's slowmode." },
      { name: "prefix", usage: "prefix <new>", description: "Change Villain's command prefix." },
      { name: "automod", usage: "automod <filter> <on|off>", description: "Filter invites, spam, caps and banned words." },
    ],
  },
  {
    id: "community",
    title: "Community",
    commands: [
      { name: "ticket", usage: "ticket <setup|close|add>", description: "Private support tickets with transcripts." },
      { name: "giveaway", usage: "giveaway <start|end|reroll>", description: "Run timed giveaways with a button entry." },
      { name: "welcome", usage: "welcome <channel> <message>", description: "Greet new members with a custom message." },
      { name: "userinfo", usage: "userinfo [member]", description: "Show account and server details for a member." },
      { name: "avatar", usage: "avatar [member]", description: "Show a member's avatar in full size." },
    ],
  },
  {
    id: "music",
    title: "Music & Voice",
    commands: [
      { name: "play", usage: "play <query|url>", description: "Play a track or add it to the queue." },
      { name: "queue", usage: "queue", description: "View and manage the upcoming tracks." },
      { name: "skip", usage: "skip", description: "Skip the current track." },
      { name: "filter", usage: "filter <bassboost|nightcore|8d|off>", description: "Apply an audio filter." },
      { name: "voicemaster", usage: "voicemaster setup", description: "Let members create their own temporary voice channels." },
    ],
  },
];

export const totalCommands = categories.reduce((n, c) => n + c.commands.length, 0);
