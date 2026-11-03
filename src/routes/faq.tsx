import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/primitives";

const faqs = [
  ["Is Villain free?", "Yes. All core moderation, protection and community features are free to use."],
  ["What's the default prefix?", "A comma — for example ,ban. You can change it with ,prefix, and every command also works as a slash command."],
  ["What permissions does Villain need?", "Administrator is recommended so anti-nuke can act on any role. You can grant narrower permissions, but some protection features won't work."],
  ["Where does Villain's role need to be?", "As high as possible in your role list. Villain can only moderate members whose highest role is below its own."],
  ["Does Villain store my messages?", "No. Villain stores configuration, moderation cases and ticket transcripts you choose to save. See the Privacy Policy for details."],
  ["How do I report a bug?", "Open a ticket in the support server with the command you ran and what happened."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Villain" },
      { name: "description", content: "Answers to common questions about setting up and using Villain." },
      { property: "og:title", content: "FAQ — Villain" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Common questions about the Villain Discord bot." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently asked" text="Setup, permissions and data — the short version." />
      <div className="mx-auto max-w-3xl px-5 py-12">
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {faqs.map(([q, a]) => (
            <details key={q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}
                <span className="font-mono text-subtle transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
