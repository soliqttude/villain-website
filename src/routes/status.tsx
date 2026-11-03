import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/primitives";
import { site } from "@/lib/site";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Status — Villain" },
      { name: "description", content: "Service status and incident updates for the Villain Discord bot." },
      { property: "og:title", content: "Status — Villain" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Villain service status and incidents." },
    ],
  }),
  component: StatusPage,
});

function StatusPage() {
  return (
    <>
      <PageHeader eyebrow="Status" title="Service status" text="Live shard health and incident reports." />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="card-surface p-8">
          {site.statusUrl ? (
            <>
              <p className="text-muted-foreground">Live status is hosted on our status page.</p>
              <a href={site.statusUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground">
                Open status page
              </a>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                A public status page isn't live yet. Incident updates are posted in the support server.
              </p>
              <Link to="/support" className="mt-5 inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground">
                Go to support
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
