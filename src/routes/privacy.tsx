import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/site/Legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Villain" },
      { name: "description", content: "What data the Villain Discord bot stores and why." },
      { property: "og:title", content: "Privacy Policy — Villain" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "What data Villain stores and why." },
    ],
  }),
  component: () => (
    <Legal
      title="Privacy Policy"
      sections={[
        ["What we store", "Server IDs, configuration settings, moderation cases (user ID, moderator, reason, timestamp) and ticket transcripts if you enable them."],
        ["What we don't store", "Villain does not log or store general message content outside features you explicitly enable."],
        ["How data is used", "Data is used only to provide Villain's features. It is never sold or shared with third parties."],
        ["Deletion", "Removing Villain from your server, or asking in the support server, lets us delete your server's data."],
        ["Contact", "Questions about privacy can be raised through the Support page."],
      ]}
    />
  ),
});
