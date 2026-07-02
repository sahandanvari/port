import type { CaseStudy } from "./types";

export const componentRegistry: CaseStudy = {
  slug: "component-registry",
  title: "Contracts, not screenshots",
  teaser:
    "Machine-readable component contracts — whenToUse, props, accessibility, composition rules — so humans, CI, and eighteen MCP tools share one source of truth instead of a Figma PNG and hope.",
  workRole: "Design system lead",
  metrics: [
    { label: "Aurora components", value: "36" },
    { label: "Luminis components", value: "54" },
    { label: "Luminis patterns", value: "40" },
    { label: "MCP tools fed", value: "18" },
  ],
  atAGlance: {
    role: "Design system lead — registry architecture",
    scope:
      "registry/aurora and registry/luminis: component contracts, composition patterns, global rules, token inventory, feature registries",
    team: "Design system core; component owners per slug; MCP tooling consumers",
    timeline: "Grew with Aurora and Luminis; continuous updates per release",
    platforms: "JSON contracts in monorepo; consumed by docs, MCP, Cursor skills, CI checks",
    outcomes:
      "Single authority for when to use each primitive; agents and humans cite the same files; reduced hand-rolled duplicates in review",
  },
  artifacts: [
    {
      id: "aurora-registry",
      label: "Aurora registry",
      blurb: "component-registry.json plus per-slug JSON for thirty-six components.",
      isPrivate: true,
    },
    {
      id: "luminis-registry",
      label: "Luminis registry",
      blurb: "Fifty-four components and forty composition patterns with rules.",
      isPrivate: true,
    },
    {
      id: "global-rules",
      label: "Global rules",
      blurb: "action-groups, figma-interpretation, component-usage — blocker severity tagged.",
      isPrivate: true,
    },
    {
      id: "tokens",
      label: "Token inventory",
      blurb: "Semantic token metadata with role, usage, and optional contrast hints.",
      isPrivate: true,
    },
    {
      id: "features",
      label: "Feature registries",
      blurb: "Product domains: glossary, business rules, UI composition for betslip, lobby, etc.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "registry/ tree and validation scripts (private).",
      isPrivate: true,
    },
  ],
  relatedWork: ["mcp", "token-pipeline", "aurora"],
  sections: [
    {
      heading: "Screenshots do not survive contact with production",
      body: "Before the registry, handoff was a Figma frame and a verbal this is probably Button secondary. Engineers guessed variants. Designers assumed hover was obvious. Agents pasted whatever looked close. Review became aesthetics policing instead of contract enforcement.\n\nI moved authority into JSON files colocated with the monorepo. Each component slug gets whenToUse, whenNotToUse, props documentation, accessibility notes, and Figma hints. Composition patterns describe assemblies — confirmation dialog, filter bar plus table, settings form — with explicit component lists and rules. Global rules capture cross-cutting blockers like action group button order and storybook-is-skeleton for Figma interpretation.",
      images: [
        {
          label: "Figma screenshot vs registry contract for the same Button variant",
          aspect: "pair",
        },
      ],
    },
    {
      heading: "Thirty-six Aurora, fifty-four Luminis",
      body: "Aurora ships thirty-six documented components across customer-facing stacks — live in BetUS Join, My Account, casino widgets, and wagering pools. Luminis ships fifty-four components and forty composition patterns for internal apps like WAVE, Phoenix, PME, and CRM. The registries mirror those boundaries so consumers query the right catalog.\n\nSplitting catalogs prevented internal admin patterns from leaking into customer UI contracts and vice versa. Shared token inventory still spans both where semantic roles align.",
      images: [
        {
          label: "Registry folder structure: aurora/components, luminis/composition-patterns",
          aspect: "wide",
        },
      ],
    },
    {
      heading: "The Button that justified the model",
      body: "Button was the case study that proved contracts beat screenshots. One primitive carried twenty to sixty hours of design and engineering iteration, roughly three hundred variants, and more than fifty thousand Figma inserts per year at low detach rate. Without a whenToUse entry, every squad invented a slightly different loading state, icon alignment, or destructive pairing.\n\nThe registry documents variant matrix, prop names aligned to Figma dev mode, keyboard focus behavior, and when not to use a button versus a link. Reviewers cite slug JSON in PR comments. Agents fetch the same file via aurora_get_components. One source, three audiences.",
    },
    {
      heading: "Global rules with teeth",
      body: "Component entries alone cannot catch composition mistakes — wrong button order in a dialog, hand-rolled modal when Dialog exists, Figma pixel overrides on Storybook skeletons. Global rules files tag severity: blocker versus advisory. MCP aurora_get_global_rules returns them before generation; ds-reviewer skills enforce them after.\n\naction-groups.json codifies primary-right destructive-left expectations. figma-interpretation.json encodes storybook-is-skeleton. component-usage.json blocks reinventing primitives that already export from @ppt/aurora or @ppt/luminis. These are the guardrails that turn the registry from documentation into governance.",
      images: [
        {
          label: "Global rules JSON with blocker severity tags",
          aspect: "figure",
        },
      ],
    },
    {
      heading: "Token inventory as first-class registry",
      body: "Tokens are not an afterthought file. inventory.json lists semantic tokens with role and usage; token-metadata.overlay.json curates contrast and application notes. Roughly forty authored color decisions per brand sit upstream, excluding generated alpha ramps. Twelve interaction roles and inverse inv- variants document how hover and active derive.\n\nLinking tokens to components in registry entries stopped engineers from hardcoding hex when a semantic utility exists. CI and MCP can ask: does this className reference an inventoried token? If not, flag it.",
    },
    {
      heading: "Feature registries for product language",
      body: "Beyond atoms, feature registries describe product domains — betslip, lobby, odds display — with glossaries, business rules, user states, and recommended UI composition. Agents implementing a feature call aurora_get_feature before picking components. That reduces product logic errors, not just visual drift.\n\nFeature JSON connects to related component slugs so a lobby implementation query returns both the feature contract and the Card, Badge, and Skeleton entries it depends on.",
    },
    {
      heading: "Maintenance and outcomes",
      body: "Registry files ship in the same PR train as component changes. Definition of done: code, Storybook or reference page, registry JSON update. Stale contracts are worse than none — they train agents to lie confidently.\n\nDirectional wins: PR comments linking to slugs; fewer bespoke tables and modals in review; MCP resolve_from_figma returning actionable story IDs instead of generic advice. Tradeoff: JSON authoring tax on every new variant. Win: review time shifted from is this the user-facing to is this the right pattern for the state. Next: automated diff when Figma component keys change, prompting registry updates before merge.",
    },
  ],
};
