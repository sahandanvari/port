import type { CaseStudy } from "./types";

export const tokenPipeline: CaseStudy = {
  slug: "token-pipeline",
  title: "Custom token build pipeline",
  teaser:
    "I replaced Style Dictionary with a Python generator: Token Studio in, flat theme.css and Tailwind v4 @theme out — plus inv- inverse tokens and interaction states from a twelve-line allowlist.",
  workRole: "Design system lead",
  metrics: [
    { label: "Generator", value: "Python" },
    { label: "Theme packages", value: "12" },
    { label: "Outputs", value: "CSS + @theme" },
    { label: "Interaction roles", value: "12" },
  ],
  atAGlance: {
    role: "Design system lead — token pipeline owner",
    scope:
      "flatten_tokens(), Tailwind v4 @theme emission, inv- inverse family, interaction generation, theme packaging",
    team: "Design system + platform engineers consuming npm/CDN artifacts",
    timeline: "Iterative replacement of generic exporters; ongoing maintenance",
    platforms:
      "Figma Token Studio → JSON → W3C-css-aurora-theme-generator-nav.py → theme packages",
    outcomes:
      "Single source of truth for twelve brands; consumers see flat semantic variables; hover/active generated deterministically; inverse tokens for dark-native surfaces",
  },
  artifacts: [
    {
      id: "script",
      label: "Python generator",
      blurb:
        "W3C-css-aurora-theme-generator-nav.py — custom flatten, interaction pass, inv- synthesis.",
      isPrivate: true,
    },
    {
      id: "studio",
      label: "Token Studio",
      blurb: "Authoring layer: global → semantic → component-scoped structure.",
      isPrivate: true,
    },
    {
      id: "interaction",
      label: "interaction_tokens.txt",
      blurb: "Twelve declarative roles that receive generated hover/active pairs.",
      isPrivate: true,
    },
    {
      id: "themes",
      label: "Theme packages",
      blurb: "Per-brand css/ and tailwind/ folders — flat theme.css ready for CDN or import.",
      isPrivate: true,
    },
    {
      id: "ci",
      label: "CI",
      blurb:
        "Build fails on invalid tokens or contrast regressions where enforced.",
      isPrivate: true,
    },
    {
      id: "registry",
      label: "Token inventory",
      blurb: "Generated inventory + metadata overlay for agent and docs tooling.",
      isPrivate: true,
    },
  ],
  codeSnippets: [
    {
      title: "aurora-website theme.css import chain (production)",
      language: "css",
      code: `@import "tailwindcss";
@import "tw-animate-css";

/* Source of truth: the library's default theme.
   Tailwind v4 follows this @import chain and generates utility classes
   from the @theme {} block inside. The SettingsBar runtime switcher also
   fetches this same file, so build-time and runtime always agree. */
@import "../../../tokens/aurora/theme-packages/base-rounded-base/tailwind/theme.css";

@custom-variant dark (&:where(.dark, .dark *));`,
    },
    {
      title: "Generated flat variables + inverse family (excerpt)",
      language: "css",
      code: `:root {
  --primary: hsl(219 72% 20%);
  --primary-hover: hsl(211 100% 60%);
  --primary-active: hsl(211 100% 70%);
  --transparent-hover: hsl(214 37% 4% / 10%);
  --inv-primary: hsl(220 60% 95%);
  --inv-primary-hover: hsl(220 60% 85%);
}`,
    },
  ],
  codeSnippetsAfter: "Tailwind v4 @theme output",
  relatedWork: ["multibrand", "interaction-tokens", "component-registry"],
  sections: [
    {
      heading: "Why I replaced Style Dictionary",
      body: "We needed Token Studio’s rich nesting without asking every consumer to understand that graph. Style Dictionary was a starting point, but transforms broke when export shapes shifted and I spent more time patching config than improving token quality.\n\nI wrote W3C-css-aurora-theme-generator-nav.py so we own the contract end to end. Authors keep a three-layer mental model (global → semantic → component-scoped). Apps see a flat map: --primary, --card-border, --cta-1-foreground.",
    },
    {
      heading: "From Tokens Studio to flat CSS",
      body: "The flow is deliberate and boring to operate: designers commit Token Studio JSON, CI runs the generator, twelve theme packages land with paired css/ and tailwind/ trees. Each package emits a single theme.css consumers can link or import — no manual second pass.\n\nWhen a new primitive appears in Studio, detection logic appends it to exports without someone editing a second file. That “add once, propagate everywhere” rule is what kept six parallel CSS approaches from drifting again.",
    },
    {
      heading: "Tailwind v4 @theme output",
      body: "Tailwind v4 consumers do not maintain a parallel config. The generator writes an @theme {} block inside each tailwind/theme.css so utilities like bg-background-1 and text-foreground-high compile from the same values as vanilla CSS variables.\n\nThe reference website proves the chain: its root theme.css imports the base-rounded-base package, and the runtime theme switcher fetches that same file so build-time and runtime always agree.",
    },
    {
      heading: "Inverse tokens (inv-)",
      body: "Some products are dark-native — sportsbook chrome, operational dashboards — but still need an accessibility-oriented dark mode toggle. Light/dark naming collided with that reality, so I generate a parallel inv- family for every semantic color.\n\nDefault surfaces use --primary; dark-native surfaces can bind --inv-primary so an OS-level dark preference does not double-invert. The generator mirrors the full semantic set — not a hand-maintained subset — which is why theme swaps stay trustworthy across brands.",
      images: [
        {
          label:
            "Side-by-side: default surface vs inv- surface with the same Button component",
          aspect: "pair",
        },
      ],
    },
    {
      heading: "Interaction hook and operations",
      body: "During flatten, the script reads interaction_tokens.txt — twelve named roles — and emits hover/active mates. Solid roles use HSL lightness steps; transparent roles use alpha-safe overlay math (see the interaction-tokens case study for the algorithm and Interaction Builder UI).\n\nGovernance: generation changes affect every brand simultaneously, so they ship with paired design + engineering review and semver on theme packages. I would add earlier snapshot tests per package — we learned that the hard way after a silent rename in Studio export keys.",
    },
  ],
};
