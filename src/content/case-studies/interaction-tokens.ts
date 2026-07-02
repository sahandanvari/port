import type { CaseStudy } from "./types";

export const interactionTokens: CaseStudy = {
  slug: "interaction-tokens",
  title: "Interaction token system",
  teaser:
    "I stopped arguing about hover in Slack. Twelve roles in a text file drive ±10/±20 HSL steps, transparent overlays, inv- variants, and a live Interaction Builder shipped in PR 18417.",
  workRole: "Design system lead",
  metrics: [
    { label: "Named roles", value: "12" },
    { label: "Hover delta", value: "±10 L" },
    { label: "Active delta", value: "±20 L" },
    { label: "Interaction Builder", value: "PR 18417" },
  ],
  atAGlance: {
    role: "Design system lead — color + interaction architecture",
    scope:
      "Role taxonomy, generation rules, transparent overlay branch, inv- variants, Interaction Builder on reference site",
    team: "Design system + frontend partners validating edge cases",
    timeline: "Evolved alongside Token Studio adoption and twelve theme packages",
    platforms: "CSS variables consumed across React, Vue, and Razor stacks",
    outcomes:
      "Predictable interaction colors per theme; fewer one-off hover filters; live builder for engineers who learn by tweaking",
  },
  artifacts: [
    {
      id: "roles",
      label: "Role list",
      blurb:
        "primary, fill-medium, transparent, fill-low, primary-muted, foreground-high, accent, cta-1, cta-2, cta-3, nav-transparent, nav-foreground-medium.",
      isPrivate: true,
    },
    {
      id: "builder",
      label: "Interaction Builder",
      blurb:
        "Reference-site tool to preview generated hover/active before filing a token change — shipped PR 18417.",
      isPrivate: true,
    },
    {
      id: "tokens-file",
      label: "interaction_tokens.txt",
      blurb: "Plain twelve-line list consumed by the Python generator.",
      isPrivate: true,
    },
    {
      id: "docs",
      label: "Documentation",
      blurb:
        "When to use transparent roles vs solid; how inv- maps for dark-native UIs.",
      isPrivate: true,
    },
    {
      id: "figma",
      label: "Figma notes",
      blurb: "Designer-facing guidance for states Figma variants do not always model.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Generated CSS",
      blurb: "Paired --role-hover and --role-active per theme package (private).",
      isPrivate: true,
    },
  ],
  codeSnippets: [
    {
      title: "interaction_tokens.txt (authoritative list)",
      language: "text",
      code: `primary
fill-medium
transparent
fill-low
primary-muted
foreground-high
accent
cta-1
cta-2
cta-3
nav-transparent
nav-foreground-medium`,
    },
    {
      title: "Solid vs transparent output (excerpt)",
      language: "css",
      code: `:root {
  --primary-hover: hsl(211 100% 60%);   /* base L + 10 */
  --primary-active: hsl(211 100% 70%);  /* base L + 20 */
  --transparent-hover: hsl(214 37% 4% / 10%);
  --transparent-active: hsl(214 37% 4% / 20%);
}`,
    },
  ],
  relatedWork: ["token-pipeline", "aurora-reference-website", "multibrand"],
  sections: [
    {
      heading: "The argument I ended",
      body: "Designers and engineers disagreed on what “slightly darker” meant for hover. Figma variants covered some states, not the matrix we needed across twelve themes and glassy nav surfaces. Hand-authored hover values drifted between React packages and legacy CSS.\n\nI defined twelve interaction roles and moved generation into the build. Hover and active became contract, not opinion.",
    },
    {
      heading: "Twelve roles, one algorithm",
      body: "interaction_tokens.txt is intentionally plain — one role per line, no JSON ceremony. The Python generator looks up each role’s base value and emits --role-hover and --role-active.\n\nSolid fills use HSL lightness shifts: hover ±10, active ±20 on the L channel. That is simple to explain in a workshop and simple to regression-test when a brand remaps primaries.\n\nRoles cover buttons, inputs, tabs, navigation, and CTA stacks (cta-1 through cta-3) without exploding into per-component permutations.",
    },
    {
      heading: "Transparent overlays",
      body: "Transparent roles — transparent, nav-transparent — cannot use naive darkening; contrast lies about legibility on photography and video behind the chrome. Those branches use controlled alpha overlays instead of crushing lightness.\n\nNavigation and glassy headers were the worst offenders before generation. Centralizing the math meant a new theme package inherited the same overlay behavior the moment it built.",
    },
    {
      heading: "Interaction Builder (PR 18417)",
      body: "Prose did not stick. I shipped an Interaction Builder on the reference website (PR 18417) so engineers tweak a role, see computed hover/active, and compare default vs inv- outputs live. It is the teachable moment I wished we had earlier.\n\nWorkshops now trace a button from Figma variant → role name → generated CSS. When someone asks for a one-off darker state in Slack, I send the builder link — it converts opinion into a governed change request.",
      images: [
        {
          label:
            "Interaction Builder on the reference site — live hover/active preview per role",
          aspect: "wide",
        },
      ],
    },
    {
      heading: "Governance and tradeoffs",
      body: "Adding a thirteenth role is rare: it touches every theme package and needs accessibility review. Algorithm tweaks are versioned with before/after swatches.\n\nTradeoff: centralized generation removes some marketing fine-tuning. I mitigate with time-bounded exceptions, not silent hex in feature PRs.\n\nNext: optional perceptual uniformity per brand where stacks support OKLCH — the role names stay stable even if the math evolves.",
    },
  ],
};
