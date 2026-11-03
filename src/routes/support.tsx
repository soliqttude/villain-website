import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/primitives";
import { site } from "@/lib/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Villain" },
      { name: "description", content: "Get help with Villain, invite the bot and reach the team." },
      { property: "og:title", content: "Support — Villain" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Get help with the Villain Discord bot." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const btn = "inline-flex h-10 items-center rounded-lg px-5 text-sm font-medium";
  return (
    <>
      <PageHeader eyebrow="Support" title="Get help" text="Invite Villain, join the community or check the docs." />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-2">
        <div className="card-surface p-8">
          <h2 className="text-lg font-medium">Invite Villain</h2>
          {site.inviteUrl ? (
            <>
              <p className="mt-2 text-sm text-muted-foreground">Add Villain to a server where you have Manage Server permission.</p>
              <a href={site.inviteUrl} target="_blank" rel="noreferrer" className={`${btn} mt-5 bg-primary text-primary-foreground`}>Invite Villain</a>
            </>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">Public invites open soon. Join the support server to get early access.</p>
          )}
        </div>
        <div className="card-surface p-8">
          <h2 className="text-lg font-medium">Support server</h2>
          {site.supportServerUrl ? (
            <>
              <p className="mt-2 text-sm text-muted-foreground">Ask questions, report bugs and follow updates.</p>
              <a href={site.supportServerUrl} target="_blank" rel="noreferrer" className={`${btn} mt-5 border border-border-strong bg-elevated`}>Join support server</a>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm text-muted-foreground">The support server link will appear here. Meanwhile, most answers are in the FAQ.</p>
              <Link to="/faq" className={`${btn} mt-5 border border-border-strong bg-elevated`}>Read the FAQ</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
