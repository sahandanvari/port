import type { CaseStudy } from "./types";

export const starterKit: CaseStudy = {
  slug: "starter-kit",
  title: "Wave — pilot to starter kit",
  teaser:
    "Wave was the first real internal app on Luminis before thirty teams joined. Production feedback became guidelines, then starter kits and Cursor rules so patterns survived contact with actual workflows.",
  workRole: "Design system lead",
  metrics: [
    { label: "Pilot app", value: "Wave" },
    { label: "Outcome", value: "Starter kits" },
    { label: "Cursor rules", value: "Yes" },
    { label: "Typical devs", value: "1 FE" },
  ],
  atAGlance: {
    role: "Design system lead — pilot program owner",
    scope:
      "Pilot delivery, pattern extraction, guideline authorship, starter packaging",
    team: "Pilot squad product + engineering; design system for synthesis",
    timeline: "Single pilot release before scaled internal adoption",
    platforms: "React + Tailwind v4 + internal deployment",
    outcomes:
      "Repeatable internal app shell; PO plus one engineer path; fewer one-off navigation and form patterns",
  },
  artifacts: [
    {
      id: "pilot",
      label: "Pilot app",
      blurb: "Production URLs and screenshots (private).",
      isPrivate: true,
    },
    {
      id: "guidelines",
      label: "Guidelines",
      blurb: "Wave-derived UX and layout rules.",
      isPrivate: true,
    },
    {
      id: "starter",
      label: "Starter kits",
      blurb: "Seeded apps with README and scripts.",
      isPrivate: true,
    },
    {
      id: "cursor",
      label: "Cursor rules",
      blurb: "Encoded decisions from the pilot for AI-assisted builds.",
      isPrivate: true,
    },
    {
      id: "retro",
      label: "Retro notes",
      blurb: "What broke in pilot and how starters prevent repeats.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "Repositories for pilot + starters (private).",
      isPrivate: true,
    },
  ],
  codeSnippets: [
    {
      title: "Pilot → pattern promotion (illustrative)",
      language: "md",
      code: `1. Ship Wave with Luminis primitives
2. Log UX debt and repeated compositions
3. Promote repeated compositions to guidelines
4. Encode in starter templates + Cursor rules
5. Open starter to next teams with office hours`,
    },
  ],
  sections: [
    {
      heading: "Context",
      body: "Luminis needed proof in production before thirty teams depended on it. We chose Wave as the pilot because it had real users, real data density, and a motivated product owner willing to iterate publicly.\n\nThe goal was not a perfect demo app. It was a stress test that produced guidelines we could trust.",
    },
    {
      heading: "Problem and goals",
      body: "Problems: big-bang rollouts without pilots hide edge cases until resentment sets in; guidelines written in a vacuum rarely match how admins work; AI-assisted coding without rules recreates old inconsistencies faster.\n\nGoals: ship Wave; extract durable patterns; encode them in starters and Cursor rules; prove the “PO plus one engineer” story.",
    },
    {
      heading: "Audit and baseline",
      body: "Before pilot wrap, we reviewed navigation state handling, error surfacing, table filtering, and modal stacking. The audit mixed heuristic evaluation with engineering notes on what was hard to implement.\n\nBaseline: list of one-off components that should become shared patterns versus legitimate product-specific UI.",
    },
    {
      heading: "Foundations and tokens",
      body: "Wave consumed the same semantic tokens as external-facing work where appropriate, with internal density tweaks documented. Starters wire theme imports by default so new repos cannot accidentally ship unstyled shells.\n\nToken literacy notes from Wave were folded into the internal docs site chapter on “why variables, not hex.”",
    },
    {
      heading: "Components",
      body: "Pilot pushed data tables, filter bars, side panels, and stacked forms. Where components bent, we filed issues against the library instead of letting Wave fork privately — that kept debt visible.\n\n[ADD SCREENSHOT: Wave screen using standardized table + filter pattern.]",
    },
    {
      heading: "Patterns",
      body: "Patterns shipped as short recipes: settings page anatomy, list/detail split, empty states for admin tasks. Each recipe lists components, order of assembly, and known failure modes (long translations, narrow breakpoints).\n\nPatterns explicitly say when not to use the full recipe — usually for marketing-like pages inside internal tools.",
    },
    {
      heading: "Documentation",
      body: "Starter README is the entry point: install, run, where to change navigation, how to add a CRUD screen using approved layouts. Longer docs deep-link from comments in the template code.\n\nVideo walkthroughs stayed under five minutes to respect squad time.",
    },
    {
      heading: "Governance and contribution",
      body: "Changes to starters after Wave required a changelog entry because they affect every new app. Promotions from pilot learnings needed a named owner and a date so we did not accumulate mystery defaults.\n\nSnowflakes remain allowed if documented with expiry — same governance frame as Aurora.",
    },
    {
      heading: "Tooling and pipeline",
      body: "Cursor rules capture the decisions Wave already validated: spacing scale for dense tables, default modal sizes, form validation timing. Developers using agents inherit the guardrails without re-reading thirty pages.\n\nCI templates stub lint for classnames and import order to match the starter.",
    },
    {
      heading: "Adoption and enablement",
      body: "After Wave, onboarding was “clone starter, rename, join office hours.” Teams brought screenshots; we mapped them to patterns before they invented new ones.\n\nSuccess signal: second and third teams shipped faster than Wave because the starter removed decision fatigue.",
    },
    {
      heading: "Metrics and outcomes",
      body: "Directional: shorter time from repo creation to first internal demo; fewer navigation model forks; reduced duplicate form layouts in sampled repos; positive feedback from POs on predictability.\n\nReplace with measured timelines when you can share them.",
    },
    {
      heading: "Reflections",
      body: "Tradeoff: opinionated starters annoy edge cases. We document escape hatches and keep office hours open.\n\nWhat failed: an early starter tried to include every pattern at once. Fixed by splitting minimal vs advanced templates.\n\nRedo: instrument a simple survey at day thirty for each adopting team.\n\nNext: publish an internal “pattern diff” when Wave changes so downstream apps know what to pick up.",
    },
  ],
};
