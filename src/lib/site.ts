/**
 * Central site links.
 * Configure invite and support URLs when their public Discord links are ready.
 */
export const site = {
  name: "Villain",
  inviteUrl: "",
  supportServerUrl: "",
  statusUrl: "",
  url: "https://villain.best",
};

export const navLinks = [
  { to: "/commands", label: "Commands" },
  { to: "/status", label: "Status" },
  { to: "/faq", label: "FAQ" },
  { to: "/support", label: "Support" },
] as const;
