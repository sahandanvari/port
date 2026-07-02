import type { CaseStudyArtifact } from "@/content/case-studies/types";

export function CaseStudyArtifacts({ items }: { items: CaseStudyArtifact[] }) {
  return (
    <section
      className="mb-12 rounded-xl border border-dashed border-border bg-muted/10 p-5 md:p-6"
      aria-labelledby="artifacts-heading"
    >
      <h2
        id="artifacts-heading"
        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4"
      >
        Artifacts
      </h2>
      <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
        Links and screenshots that back the narrative. Items marked private can
        be shared in interview loops.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <li
            key={a.id}
            className="rounded-lg border border-border bg-background p-4 flex flex-col min-h-[140px]"
          >
            <span className="text-sm font-semibold text-foreground">
              {a.label}
            </span>
            <p className="text-xs text-muted-foreground mt-2 flex-1 leading-relaxed">
              {a.blurb}
            </p>
            {a.href && !a.isPrivate ? (
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs font-medium text-foreground underline underline-offset-4"
              >
                Open link
              </a>
            ) : (
              <span className="mt-3 text-xs font-medium text-muted-foreground">
                {a.isPrivate ? "Private — available on request" : "[ADD LINK]"}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
