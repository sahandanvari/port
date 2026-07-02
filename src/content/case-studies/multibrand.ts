import type { CaseStudy } from "./types";

export const multibrand: CaseStudy = {
  slug: "multibrand",
  title: "Multibrand theming",
  workRole: "Design system lead",
  teaser:
    "I made brand independence a deployment concern: ~40 color decisions per brand, twelve theme packages, one theme.css swap — React, Vue, Razor, and widgets unchanged.",
  metrics: [
    { label: "Color decisions / brand", value: "~40" },
    { label: "Semantic color names", value: "55" },
    { label: "Theme packages", value: "12" },
    { label: "Stacks", value: "3+" },
  ],
  atAGlance: {
    role: "Design system lead — theming architecture",
    scope:
      "Brand decision model, token pipeline integration, CDN delivery, cross-stack rollout",
    team: "Design system, platform engineers, feature teams per stack; brand design partners",
    timeline: "Phased after enterprise inventory; parallel tracks for assets and tokens",
    platforms: "React, Vue, ASP.NET Razor, standalone widgets",
    outcomes:
      "Per-brand theme.css on CDN; identical component structure across brands; directional decrease in hardcoded brand colors in new work",
  },
  artifacts: [
    {
      id: "theme",
      label: "Theme packages",
      blurb: "Generated CSS variables per brand; contrast validation in build.",
      isPrivate: true,
    },
    {
      id: "pipeline",
      label: "Pipeline",
      blurb: "Token Studio → Python generator → twelve packaged theme.css artifacts.",
      isPrivate: true,
    },
    {
      id: "docs",
      label: "Rollout docs",
      blurb:
        "Stack-specific integration: import paths, Razor layout hooks, Vue global style injection.",
      isPrivate: true,
    },
    {
      id: "gov",
      label: "Change management",
      blurb:
        "Global-by-default token review; comms template for breaking releases.",
      isPrivate: true,
    },
    {
      id: "decisions",
      label: "Brand decision worksheet",
      blurb:
        "~40 color choices per brand mapped to 55 semantic names (40 excluding alpha-only roles).",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Integration examples",
      blurb:
        "Consumer snippets per stack; widget bootstrap referencing CDN theme.",
      isPrivate: true,
    },
  ],
  codeSnippets: [
    {
      title: "Consumer contract",
      language: "html",
      code: `<!-- Each deployment points at one theme file — no runtime theme switching in ops -->
<link rel="stylesheet" href="https://cdn.example.com/themes/wiseguy-rounded-casino/tailwind/theme.css" />`,
    },
  ],
  relatedWork: ["token-pipeline", "aurora", "adoption"],
  sections: [
    {
      heading: "One codebase, two brands",
      body: "The business needed a second brand without forking the codebase. Users should not infer shared infrastructure. Timeline and staffing ruled out rewrites; the answer had to be shared components with swappable presentation.\n\nI defined theming as a deployment concern: same HTML and component tree, different theme.css URL per environment. No runtime theme switcher in production ops — boring CDN configuration instead of clever client logic.",
    },
    {
      heading: "~40 decisions per brand",
      body: "Brand independence is not infinite choice. I scoped roughly forty color decisions per brand — mapped into fifty-five semantic color names in Token Studio, forty if you exclude alpha-only roles used for overlays and scrims.\n\nDesigners work from a decision worksheet (primary, surfaces, borders, CTA stacks, nav chrome) rather than repainting every component. Three visual levers stay independent: palette, typeface, radius. Components bind to semantic roles; brands remap aliases.\n\nThat constraint is what made twelve packages achievable without twelve parallel libraries.",
      images: [
        {
          label:
            "Theme switcher: Base vs SlotsParadise vs Contigo on the same component page",
          aspect: "wide",
        },
      ],
    },
    {
      heading: "Twelve packages, one swap",
      body: "Each brand gets a generated theme package — css/ and tailwind/ trees — published to CDN or npm. Consumers import one file; Tailwind v4 squads pull the @theme block inside tailwind/theme.css.\n\nInteraction states, inverse tokens, and alpha scrims regenerate with the package — teams do not hand-maintain hover per brand. The enterprise audit told us which stacks needed import-path docs versus deeper refactors; we sequenced rollout by tier, not big-bang.",
    },
    {
      heading: "Rollout and tradeoffs",
      body: "I partnered with platform teams on smoke tests that fail when theme.css is missing. Widgets and Razor received copy-paste examples validated in staging.\n\nDirectional outcomes: fewer new hardcoded hex values in reviewed PRs, burndown of Tier 1 styling items from the audit, faster QA on new themes because interaction pairs are table-driven.\n\nTradeoff: strict token purity slows experimental marketing — I used time-boxed branches and explicit exceptions. Failure mode I fixed: assuming Tailwind consumers could self-serve without stack-specific examples.",
    },
  ],
};
