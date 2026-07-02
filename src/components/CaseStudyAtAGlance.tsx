import type { AtAGlance } from "@/content/case-studies/types";

const fields: { key: keyof AtAGlance; label: string }[] = [
  { key: "role", label: "Role" },
  { key: "scope", label: "Scope" },
  { key: "team", label: "Team & partners" },
  { key: "timeline", label: "Timeline" },
  { key: "platforms", label: "Platforms" },
  { key: "outcomes", label: "Outcomes" },
];

export function CaseStudyAtAGlance({ data }: { data: AtAGlance }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-5 md:p-6 mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        At a glance
      </h2>
      <dl className="grid gap-4 sm:grid-cols-2">
        {fields.map(({ key, label }) => (
          <div key={key} className="min-w-0">
            <dt className="text-xs font-medium text-muted-foreground">
              {label}
            </dt>
            <dd className="mt-1 text-sm text-foreground leading-snug">
              {data[key]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
