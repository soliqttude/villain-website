import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/site/Legal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Villain" },
      { name: "description", content: "The terms for using the Villain Discord bot." },
      { property: "og:title", content: "Terms of Service — Villain" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "The terms for using Villain." },
    ],
  }),
  component: () => (
    <Legal
      title="Terms of Service"
      sections={[
        ["Acceptance", "By adding Villain to a server or using its commands, you agree to these terms and to Discord's Terms of Service."],
        ["Acceptable use", "Don't use Villain to harass users, spam, or break Discord's rules. We may block servers or users that do."],
        ["Availability", "Villain is provided as is. We aim for reliable service but don't guarantee uninterrupted availability."],
        ["Changes", "Features and these terms may change. Continued use means you accept the updated terms."],
      ]}
    />
  ),
});
