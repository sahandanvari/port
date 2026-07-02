/** Mermaid diagram definitions for case studies, from the deep research report templates */

export const auroraTimeline = `timeline
  title Design system arc
  Context : Fragmentation, inconsistency, no shared language
  Audit : Inventory existing UI, variance counts, baseline
  Foundations : Primitives to semantic tokens, 3-axis system, naming rules
  Build : 36 components with states, API, responsive, accessibility
  Docs : Dual-audience site, glossary, do and don't, code examples
  Governance : Contribution flow, lifecycle stages, deprecations
  Adoption : Onboarding, starter kits, migration guides
  Measurement : Usage analytics, adoption percentage, quality metrics`;

export const tokenERDiagram = `erDiagram
  GLOBAL_TOKEN ||--o{ ALIAS_TOKEN : "references"
  ALIAS_TOKEN  ||--o{ COMPONENT_TOKEN : "feeds"
  COMPONENT_TOKEN ||--o{ COMPONENT_STYLE : "applies"
  COMPONENT_STYLE ||--o{ UI_INSTANCE : "renders"

  GLOBAL_TOKEN {
    string name
    string value
    string type
  }
  ALIAS_TOKEN {
    string name
    string ref
    string semanticMeaning
  }
  COMPONENT_TOKEN {
    string name
    string ref
    string componentScope
  }`;

export const contributionFlow = `flowchart LR
  A[Idea identified] --> B[Discussion and proposal]
  B --> C{Approved?}
  C -->|No| D[Revise or will not pursue]
  C -->|Yes| E[Assigned, in development]
  E --> F[Alpha/Beta, tests, docs]
  F --> G[Release]
  G --> H[Measure adoption, collect feedback]
  H --> I[Iterate or deprecate]`;

/** Gated contribution path — system-worthy vs exception (portfolio template). */
export const contributionFlowGated = `flowchart TD
  A[Request / issue] --> B[Triage]
  B --> C{System-worthy?}
  C -->|No| D[Exception / one-off guidance]
  C -->|Yes| E[Design spec]
  E --> F[Build + review]
  F --> G[Docs + examples]
  G --> H[Release + changelog]
  H --> I[Adoption support]
  I --> J[Measure + iterate]`;

/** Token layering — feeds / references (simplified from ER for slide-style reading). */
export const tokenLayeringFlow = `flowchart TB
  subgraph sources[Sources]
    F[Figma / Token Studio]
  end
  F --> G[GLOBAL / primitive values]
  G --> S[SEMANTIC / alias roles]
  S --> C[COMPONENT-scoped tokens]
  C --> P[Component styles]
  P --> U[UI in product]`;

/** Delivery phases — mirrors case study template sections. */
export const designSystemDeliveryTimeline = `timeline
  title Design system delivery timeline
  Audit : Inventory + baseline signals
  Foundations : Tokens + naming + theming
  Components : API + states + accessibility
  Docs : Templates + examples + surfaces
  Governance : Contribution + lifecycle
  Adoption : Enablement + rollout
  Measurement : Dashboards + outcomes`;

export const adoptionLoop = `flowchart TD
  A[Visibility: awareness and internal marketing] --> B[Adoption: integrate into workflows]
  B --> C[Impact: measure usage and outcomes]
  C --> D{Insights}
  D -->|Improve| E[Backlog: tokens, components, docs, governance]
  D -->|Deprecate| F[Deprecation and migration plan]
  E --> B
  F --> B`;

export const tokenPipeline = `flowchart LR
  A[Figma] --> B[Token Studio]
  B --> C[JSON export]
  C --> D[Python build]
  D --> E[Contrast check]
  E --> F[theme.css per brand]
  F --> G[CDN]
  G --> H[React / Vue / Razor]`;

/** Deep component showcase data for the Button component */
export const buttonShowcase = {
  componentName: "Button",
  variants: [
    {
      name: "primary",
      description:
        "Main call-to-action, high emphasis. Uses --primary background.",
    },
    {
      name: "secondary",
      description: "Supporting actions. Border-only with --border color.",
    },
    {
      name: "ghost",
      description:
        "Low-emphasis actions in dense UIs. No background, no border.",
    },
    {
      name: "destructive",
      description: "Irreversible actions. Uses the Urgency color role.",
    },
    {
      name: "link",
      description: "Inline text-level actions. Renders as underlined text.",
    },
  ],
  tokens: [
    "--primary",
    "--primary-foreground",
    "--border",
    "--muted",
    "--radius-md",
    "--font-body",
    "--spacing-2",
    "--spacing-4",
  ],
  accessibilityNotes: [
    "Minimum 44x44px touch target (WCAG 2.5.8)",
    "4.5:1 contrast ratio for text on all backgrounds",
    "Focus ring visible in both light and dark modes",
    "Keyboard: Enter and Space activate; Tab for focus order",
    "Loading state announced via aria-busy and aria-live",
    "Disabled state uses aria-disabled, not the disabled attribute (preserves focusability)",
  ],
  codeExample: `import { Button } from "@/components/ui/button";

<Button variant="primary" size="md">
  Save changes
</Button>

<Button variant="secondary" size="sm">
  Cancel
</Button>

<Button variant="ghost" size="icon" aria-label="Settings">
  <GearIcon />
</Button>`,
};
