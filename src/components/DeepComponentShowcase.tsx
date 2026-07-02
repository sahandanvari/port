import { useState } from "react";

interface Variant {
  name: string;
  description: string;
}

interface ShowcaseProps {
  componentName: string;
  variants: Variant[];
  tokens: string[];
  accessibilityNotes: string[];
  codeExample: string;
}

export function DeepComponentShowcase({
  componentName,
  variants,
  tokens,
  accessibilityNotes,
  codeExample,
}: ShowcaseProps) {
  const [tab, setTab] = useState<"design" | "develop">("design");

  const tabs = [
    { id: "design" as const, label: "Design" },
    { id: "develop" as const, label: "Develop" },
  ];

  return (
    <div className="my-8 rounded-xl border border-border bg-card overflow-hidden">
      <div className="border-b border-border px-6 pt-4 pb-0 flex items-end gap-0">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
              tab === t.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === "design" ? (
          <div className="space-y-6">
            <div>
              <h4 className="font-heading text-lg font-semibold mb-3">
                {componentName} — Anatomy &amp; variants
              </h4>

              {/* Visual anatomy placeholder */}
              <div className="rounded-lg bg-muted p-8 flex items-center justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 rounded-md bg-primary px-6 flex items-center">
                    <span className="text-sm font-medium text-primary-foreground">
                      Primary
                    </span>
                  </div>
                  <div className="h-10 rounded-md border border-border px-6 flex items-center">
                    <span className="text-sm font-medium text-foreground">
                      Secondary
                    </span>
                  </div>
                  <div className="h-10 rounded-md bg-muted px-6 flex items-center border border-border/50">
                    <span className="text-sm font-medium text-muted-foreground">
                      Ghost
                    </span>
                  </div>
                </div>
              </div>

              {/* Variants table */}
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-4 font-medium text-muted-foreground">
                      Variant
                    </th>
                    <th className="pb-2 font-medium text-muted-foreground">
                      Usage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {variants.map((v) => (
                    <tr key={v.name} className="border-b border-border/50">
                      <td className="py-2 pr-4 font-mono text-xs">{v.name}</td>
                      <td className="py-2 text-muted-foreground">
                        {v.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Accessibility */}
            <div>
              <h4 className="font-heading text-sm font-semibold mb-2 text-muted-foreground">
                Accessibility
              </h4>
              <ul className="space-y-1">
                {accessibilityNotes.map((note, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Tokens used */}
            <div>
              <h4 className="font-heading text-sm font-semibold mb-2 text-muted-foreground">
                Tokens consumed
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {tokens.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Code example */}
            <div>
              <h4 className="font-heading text-sm font-semibold mb-2 text-muted-foreground">
                Usage
              </h4>
              <pre className="rounded-lg bg-muted p-4 overflow-x-auto text-xs leading-relaxed">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
