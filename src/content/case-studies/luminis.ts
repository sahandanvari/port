import type { CaseStudy } from "./types";

export const luminis: CaseStudy = {
  slug: "luminis",
  title: "How we removed design from internal apps",
  teaser:
    "Fifty-four components, forty composition patterns, and a frozen library so WAVE, PME, CRM, and the rest could ship without a designer in every room. I built the system I wished existed when I walked into CRM knowing less than five percent of what the team already knew.",
  workRole: "Design system lead",
  metrics: [
    { label: "Components", value: "54" },
    { label: "Composition patterns", value: "40" },
    { label: "Internal apps", value: "~5 live" },
    { label: "Pilot → rollout", value: "WAVE first" },
  ],
  atAGlance: {
    role: "Design system lead — internal platforms",
    scope:
      "Component library, composition patterns, starter kits, Cursor rules, adoption across internal squads",
    team: "Design system core; embedded frontend partners; product owners per app",
    timeline: "WAVE pilot → CRM stress test → guidelines and starter rollout; ongoing support",
    platforms: "React, Tailwind v4, internal hosting",
    outcomes:
      "Repeatable path from idea to shipped internal UI; PO plus one front-end can build without a DS person embedded; directional improvement in cross-app consistency",
  },
  artifacts: [
    {
      id: "library",
      label: "Component library",
      blurb: "Fifty-four primitives and compounds aligned to a frozen shadcn fork on Tailwind v4.",
      isPrivate: true,
    },
    {
      id: "patterns",
      label: "Composition patterns",
      blurb: "Forty documented recipes for tables, forms, navigation, and admin flows.",
      isPrivate: true,
    },
    {
      id: "starter",
      label: "Starter kits",
      blurb: "Seeded apps with README runbooks, token wiring, and layout shells from WAVE.",
      isPrivate: true,
    },
    {
      id: "cursor",
      label: "Cursor rules",
      blurb: "Encoded patterns so AI-assisted coding follows the same decisions as the pilot.",
      isPrivate: true,
    },
    {
      id: "figma",
      label: "Figma library",
      blurb: "Components matched to the frozen code fork for stable handoff.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "Monorepo packages and example apps (private).",
      isPrivate: true,
    },
  ],
  relatedWork: ["dataview", "mcp", "aurora-reference-website"],
  sections: [
    {
      heading: "The problem was not components",
      body: "The org ran dozens of internal tools: marketing ops, CRM, logistics, finance middleware. Each squad picked its own CSS approach and component habits based on what the tech lead already knew. Power users jumped between apps daily and hit different global navigation models, modal timing, and density. Developers struggled to move across teams because the UI stack changed at the team boundary.\n\nI proposed a dedicated internal system instead of letting every app drift forever. The insight from early audits was simple: we did not need more one-off widgets. We needed consistent rules and a shared migration path from legacy stacks.",
      images: [
        {
          label: "Before/after: three internal apps with different nav and density",
          aspect: "pair",
        },
      ],
    },
    {
      heading: "WAVE as the honest pilot",
      body: "Luminis needed proof in production before wide rollout. We chose WAVE as the first real app because it had real users, real data density, and a motivated product owner willing to iterate publicly. The goal was not a perfect demo. It was a stress test that produced guidelines we could trust.\n\nI shipped with the squad, logged UX debt as we went, and promoted repeated compositions into shared patterns instead of letting WAVE fork privately. Navigation state handling, error surfacing, table filtering, and modal stacking all got exercised under real load. When something bent, we filed issues against the library. That kept debt visible and prevented the pilot from becoming a snowflake codebase.",
      images: [
        {
          label: "WAVE production screen using Luminis table and filter pattern",
          aspect: "wide",
        },
      ],
    },
    {
      heading: "CRM — arriving with five percent of the context",
      body: "CRM was the harder test. I joined a six-month rebuild already in motion. Nico, Tej, and Richard had years of domain knowledge I did not have. I knew less than five percent of what they knew about the product, the users, and the workflows. My job was not to redesign their Figma hand. It was to give them a system that made their existing design language implementable without a designer in every review.\n\nThat constraint shaped everything. I aligned the frozen library to their Figma library so dev-mode properties mapped to React props. I documented the compositions they already used — dense settings pages, list-detail splits, stacked forms — as named patterns instead of asking them to learn a new visual language. The win was credibility: they kept their hand; I gave them fewer reasons to fight implementation.",
      images: [
        {
          label: "CRM settings page built from Luminis patterns",
          aspect: "figure",
        },
        {
          label: "Figma dev-mode props aligned to React component API",
          aspect: "figure",
        },
      ],
    },
    {
      heading: "Frozen fork, shared spine",
      body: "Luminis shares the global token spine with Aurora where it makes sense: semantic color roles, typography roles, radius, spacing. The difference is philosophy. Internal tools need stability over chasing upstream releases.\n\nI froze shadcn on Tailwind v4 and aligned Figma to that fork so design and code cannot drift when the open-source project moves. Teams consume semantic CSS variables and documented utilities, not ad hoc hex. Starters wire theme imports by default so new repos cannot accidentally ship unstyled shells.",
    },
    {
      heading: "Patterns over primitives",
      body: "The library grew to fifty-four components: inputs, dialogs, data shells, navigation scaffolds. Each ships with states and keyboard expectations documented for internal admin UIs. But components alone do not remove design from the room. Forty composition patterns do.\n\nPatterns name the components, the order teams should assemble them, and when not to use the full recipe. WAVE surfaced how filters attach to tables, how validation surfaces in dense forms, how global nav behaves on narrow viewports. CRM pushed DataView requirements that became a flagship compound. Phoenix by Sohail and PME followed with their own edge cases, but the starter path stayed the same: clone, rename, join office hours, map screenshots to patterns before inventing new ones.",
      images: [
        {
          label: "Pattern catalog: list-detail, settings anatomy, empty states",
          aspect: "wide",
        },
      ],
    },
    {
      heading: "Starters and Cursor rules",
      body: "After WAVE and CRM, onboarding became clone starter, rename, join office hours. The starter README is the first doc surface: install, run, where to change navigation, how to add a CRUD screen using approved layouts. Longer docs deep-link from comments in the template code.\n\nCursor rules ship with the starter so AI-assisted coding respects the same constraints as a human who read the guidelines. Spacing scale for dense tables, default modal sizes, form validation timing — decisions WAVE already validated, now encoded for agents. Developers using Cursor inherit the guardrails without re-reading thirty pages. That was the bet: remove design from the room by making the right choice the easy choice, including when the developer is not alone.",
      images: [
        {
          label: "Cursor rules snippet and resulting component usage in a new app",
          aspect: "pair",
        },
      ],
    },
    {
      heading: "What changed",
      body: "Roughly five internal apps now run on Luminis: WAVE, Phoenix, PME, CRM, and others in various stages of migration. Signals were directional: fewer one-off navigation implementations in sampled repos after starters landed; support threads shifting from which CSS stack to which approved pattern; second and third teams shipping faster than WAVE because the starter removed decision fatigue.\n\nTradeoff: freezing upstream slows access to new shadcn features. The win is predictability for long-lived internal software. What failed early: assuming teams would read a long PDF. Fixed with executable starters and short walkthroughs. What I would redo: earlier automated check for deprecated classnames in templates, and a simple survey at day thirty for each adopting team.",
    },
  ],
};
