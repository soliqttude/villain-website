/**
 * Central site links. Replace these with Villain's real URLs.
 * If inviteUrl is empty, invite buttons route to the Support page instead of a dead link.
 */
export const site = {
  name: "Villain",
  inviteUrl: "", // e.g. https://discord.com/oauth2/authorize?client_id=YOUR_ID&permissions=8&scope=bot+applications.commands
  supportServerUrl: "", // e.g. https://discord.gg/yourcode
  statusUrl: "", // external status page, if any
  url: "https://villain.bot",
};

export const navLinks = [
  { to: "/commands", label: "Commands" },
  { to: "/status", label: "Status" },
  { to: "/faq", label: "FAQ" },
  { to: "/support", label: "Support" },
] as const;
