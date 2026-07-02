import type { CodeSnippet } from "@/content/case-studies/types";

export function CodeSnippetsBlock({ snippets }: { snippets: CodeSnippet[] }) {
  if (!snippets.length) return null;
  return (
    <div className="space-y-6 my-8">
      {snippets.map((s) => (
        <div key={s.title}>
          <p className="text-sm font-medium text-foreground mb-2">{s.title}</p>
          <pre className="text-xs leading-relaxed overflow-x-auto rounded-lg border border-border bg-muted/30 p-4">
            <code>{s.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}
