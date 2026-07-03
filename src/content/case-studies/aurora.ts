import type { CaseStudy } from "./types";

export const aurora: CaseStudy = {
  slug: "aurora",
  title: "Aurora design system",
  workRole: "Design system lead",
  heroMedia: {
    src: "/work/aurora/hero.png",
    alt: "Aurora design system — component library, theme packages, and reference documentation",
    fit: "cover",
  },
  teaser:
    "I led Aurora from Figma specs through 36 components, 12 theme packages, and 98 releases — with a reference site that dogfoods the same library it documents.",
  metrics: [
    { label: "Components", value: "36" },
    { label: "Themes", value: "12" },
    { label: "Releases", value: "98" },
    { label: "Registry contracts", value: "36" },
  ],
  atAGlance: {
    role: "Design system lead (product + frontend partnership)",
    scope:
      "Figma library, token pipeline, component library, registry contracts, reference website, adoption enablement",
    team: "Design system + feature designers; frontend/platform engineers across React, Vue, and Razor",
    timeline:
      "Multi-year program — foundations, library growth, docs platform, ongoing governance",
    platforms:
      "React primary; Vue and ASP.NET Razor via shared theme.css; CDN-hosted theme packages",
    outcomes:
      "36 documented components with state matrices; 12 swappable themes; Figma-first workflow with code as downstream artifact; legacy adoption slow but steady",
  },
  artifacts: [
    {
      id: "figma",
      label: "Figma library",
      blurb:
        "Component anatomy, variants, state coverage, and dev-mode handoff metadata — authored before code.",
      isPrivate: true,
    },
    {
      id: "registry",
      label: "Component registry",
      blurb:
        "Per-slug JSON contracts: whenToUse, props, a11y, Figma keys, Storybook paths.",
      isPrivate: true,
    },
    {
      id: "tokens",
      label: "Theme packages",
      blurb:
        "Token Studio export → Python build → per-theme CSS and Tailwind v4 @theme output.",
      isPrivate: true,
    },
    {
      id: "docs",
      label: "Reference website",
      blurb:
        "Dual Design/Develop surfaces, glossary, changelog, Interaction Builder — built on @ppt/aurora.",
      isPrivate: true,
    },
    {
      id: "gov",
      label: "Governance",
      blurb:
        "Contribution template, semver releases, deprecation guides with migration steps.",
      isPrivate: true,
    },
    {
      id: "metrics",
      label: "Adoption signals",
      blurb:
        "Package usage scans, doc analytics, support theme tracking (directional).",
      isPrivate: true,
    },
  ],
  relatedWork: ["token-pipeline", "multibrand", "aurora-reference-website"],
  sections: [
    {
      heading: "Why I treated this as a product",
      body: "When I took on Aurora, production had grown for years without a shared interface language. Teams shipped their own buttons, modals, and forms across React, Vue, and Razor. I counted multiple blues, conflicting radii, and no single place to learn what “correct” looked like.\n\nI framed the work as a product bet: define the contract (tokens + components), ship docs teams actually use, and make adoption easier than reinventing primitives. The alternative was another round of one-off UI that would diverge again within months.",
    },
    {
      heading: "Figma first, then code",
      body: "I insisted on Figma-first delivery. Designers spec anatomy, variants, and state matrices in the library before engineering starts. Code is downstream — it proves the spec, it does not invent it. That order cut rework: when a variant is missing in Figma, we find it in review, not in QA.\n\nEach of the 36 components ships with a registry contract (whenToUse, props, accessibility notes, Figma component keys, Storybook paths). Agents and humans read the same JSON. Storybook and the reference site adopt the matched story as skeleton; Figma supplies copy and structure hints.",
      images: [
        {
          label: "Figma button sheet — variant matrix and states before implementation",
          aspect: "wide",
          src: "/work/graphics/aurora/figma-first.svg",
          alt: "Diagram of Figma-first workflow from variant matrix to implementation",
          fit: "contain",
        },
      ],
    },
    {
      heading: "What I shipped",
      body: "The library now covers layout, navigation, data display, feedback, forms, overlays, and typography — 36 components across the registry. Releases are frequent and semver-governed: 98 published versions to date, each paired with changelog notes and migration guidance when APIs change.\n\nTwelve theme packages encode brand independence on three axes — palette, typeface, radius — without multiplying component variants. Consumers import one theme.css per deployment; components resolve semantic roles, not literal brand colors.\n\nThe reference website dogfoods @ppt/aurora. If a doc example breaks, we feel it in the same PR train as the library.",
      images: [
        {
          label: "Aurora design system — components, themes, and documentation surface",
          aspect: "wide",
          src: "/work/aurora/hero.png",
          alt: "Aurora design system — component library, theme packages, and reference documentation",
          fit: "contain",
        },
        {
          label: "Theme packages — css/ and tailwind/ per brand",
          aspect: "figure",
          src: "/work/graphics/aurora/theme-packages.svg",
          alt: "Folder structure diagram for per-brand theme packages",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Adoption across legacy stacks",
      body: "Greenfield React teams moved fastest. Vue and Razor adopters needed stack-specific quickstarts — where to mount theme.css, how to avoid double-loading, how to validate staging against the correct CDN URL. I expected that friction; I did not fight it with a rewrite mandate.\n\nProgress on legacy stacks has been slow but steady. Directional signals: fewer ad hoc hex values in reviewed PRs, support questions shifting from “how do I style this?” to “which variant should I use?”, and repeat squads importing @ppt/aurora without pairing sessions. The enterprise audit gave us a prioritized burndown; adoption work consumed those tiers rather than arguing from taste.",
    },
    {
      heading: "Governance and what I would redo",
      body: "Contributions flow through an intake template (problem, users affected, extend vs new primitive), triage with a frontend partner, and docs that ship in the same release. Snowflakes are allowed when they follow tokens and accessibility rules; promotion happens when a second team needs the same thing.\n\nTradeoff: semantic naming and strict tokens slow one-off marketing experiments — I mitigated with documented exceptions and time-bounded branches.\n\nWhat I would redo earlier: automated lint for hardcoded colors in CI, parallel to human review. Next: squad-level adoption scorecards leadership can read without a design-system translator.",
    },
  ],
};
