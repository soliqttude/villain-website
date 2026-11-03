import { PageHeader } from "./primitives";

export function Legal({ title, sections }: { title: string; sections: [string, string][] }) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} text="Last updated November 2026." />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-12">
        {sections.map(([h, p]) => (
          <section key={h}>
            <h2 className="text-lg font-medium">{h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p}</p>
          </section>
        ))}
      </article>
    </>
  );
}
