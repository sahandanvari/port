import type { CaseStudy } from "./types";

export const luminis: CaseStudy = {
  slug: "luminis",
  title: "How we removed design from internal apps",
  teaser:
    "Fifty-four components, forty composition patterns, and a frozen library so internal squads could ship admin UI without a designer in every review. Pilot in production first, then patterns, starters, and agent rules.",
  workRole: "Design system lead",
  heroMedia: {
    src: "/work/luminis/internal-apps-hero.png",
    alt: "Internal admin app built with Luminis — shared navigation, density, and component patterns",
    fit: "cover",
  },
  metrics: [
    { label: "Components", value: "54" },
    { label: "Composition patterns", value: "40" },
    { label: "Internal apps", value: "~5 live" },
    { label: "Pilot → rollout", value: "Production first" },
  ],
  atAGlance: {
    role: "Design system lead — internal platforms",
    scope:
      "Component library, composition patterns, starter kits, Cursor rules, adoption across internal squads",
    team: "Design system core; embedded frontend partners; product owners per app",
    timeline:
      "Production pilot → CRM stress test → guidelines and starter rollout; ongoing support",
    platforms: "React, Tailwind v4, internal hosting",
    outcomes:
      "Repeatable path from idea to shipped internal UI; PO plus one front-end can build without a DS person embedded; directional improvement in cross-app consistency",
  },
  artifacts: [
    {
      id: "library",
      label: "Component library",
      blurb:
        "Fifty-four primitives and compounds aligned to a frozen shadcn fork on Tailwind v4.",
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
      blurb: "Seeded apps with README runbooks, token wiring, and layout shells.",
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
      body: "The org ran dozens of internal tools — marketing ops, CRM, logistics, finance middleware. Each squad picked its own CSS approach and component habits based on what the tech lead already knew. Power users jumped between apps daily and hit different global navigation models, modal timing, and density. Developers struggled to move across teams because the UI stack changed at the team boundary.\n\nI proposed a dedicated internal system instead of letting every app drift forever. Early audits showed we did not need more one-off widgets. We needed consistent rules and a shared migration path from legacy stacks.",
      images: [
        {
          label: "Before/after: three internal apps with different nav and density",
          aspect: "pair",
          src: "/work/graphics/luminis/inconsistent-nav.svg",
          alt: "Diagram comparing inconsistent navigation models across three internal apps versus one shared pattern",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Production pilot",
      body: "Luminis needed proof in production before wide rollout. We chose a live internal app with real users, real data density, and a product owner willing to iterate in the open. The goal was not a perfect demo. It was a stress test that produced guidelines we could trust.\n\nI shipped with the squad, logged UX debt as we went, and promoted repeated compositions into shared patterns instead of letting the pilot fork privately. Navigation state, error surfacing, table filtering, and modal stacking all got exercised under real load. When something bent, we filed issues against the library — keeping debt visible and preventing a snowflake codebase.",
      images: [
        {
          label: "Production screen using Luminis table and filter pattern",
          aspect: "wide",
          src: "/work/luminis/internal-apps-hero.png",
          alt: "Internal admin app built with Luminis — shared navigation, density, and component patterns",
          fit: "contain",
        },
      ],
    },
    {
      heading: "CRM as the harder test",
      body: "CRM was the stress test. I joined a six-month rebuild already in motion. The squad had years of domain knowledge I was still learning. My job was not to redesign their Figma hand. It was to give them a system that made their existing design language implementable without a designer in every review.\n\nI aligned the frozen library to their Figma library so dev-mode properties mapped to React props. I documented the compositions they already used — dense settings pages, list-detail splits, stacked forms — as named patterns instead of asking them to learn a new visual language. They kept their hand; I gave them fewer reasons to fight implementation.",
      images: [
        {
          label: "CRM settings page built from Luminis patterns",
          aspect: "figure",
          src: "/work/luminis/crm-settings.png",
          alt: "CRM settings page composed from Luminis patterns — dense forms and list-detail layout",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Frozen fork, shared spine",
      body: "Luminis shares the global token spine with Aurora where it makes sense: semantic color roles, typography roles, radius, spacing. The difference is philosophy. Internal tools need stability over chasing upstream releases.\n\nI froze shadcn on Tailwind v4 and aligned Figma to that fork so design and code cannot drift when the open-source project moves. Teams consume semantic CSS variables and documented utilities, not ad hoc hex. Starters wire theme imports by default so new repos cannot accidentally ship unstyled shells.",
    },
    {
      heading: "Patterns over primitives",
      body: "The library grew to fifty-four components: inputs, dialogs, data shells, navigation scaffolds. Each ships with states and keyboard expectations documented for internal admin UIs. But components alone do not remove design from the room. Forty composition patterns do.\n\nPatterns name the components, the order teams should assemble them, and when not to use the full recipe. The pilot surfaced how filters attach to tables, how validation surfaces in dense forms, how global nav behaves on narrow viewports. CRM pushed DataView requirements that became a flagship compound. Later adopters followed the same starter path: clone, rename, join office hours, map screenshots to patterns before inventing new ones.",
      images: [
        {
          label: "Pattern catalog: list-detail, settings anatomy, empty states",
          aspect: "wide",
          src: "/work/graphics/luminis/pattern-catalog.svg",
          alt: "Illustration of documented composition patterns for list-detail, settings, and empty states",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Starters and Cursor rules",
      body: "After the pilot and CRM, onboarding became clone starter, rename, join office hours. The starter README is the first doc surface: install, run, where to change navigation, how to add a CRUD screen using approved layouts. Longer docs deep-link from comments in the template code.\n\nCursor rules ship with the starter so AI-assisted coding respects the same constraints as a human who read the guidelines. Spacing scale for dense tables, default modal sizes, form validation timing — decisions validated in production, now encoded for agents. That was the bet: remove design from the room by making the right choice the easy choice.",
      images: [
        {
          label: "Cursor rules and resulting component usage in a new app",
          aspect: "pair",
          src: "/work/graphics/luminis/cursor-rules-flow.svg",
          alt: "Flow from Cursor rules through starter template to consistent component usage",
          fit: "contain",
        },
      ],
    },
    {
      heading: "What changed",
      body: "Roughly five internal apps now run on Luminis, with more in migration. Directional signals: fewer one-off navigation implementations in sampled repos after starters landed; support threads shifting from which CSS stack to which approved pattern; second and third teams shipping faster because the starter removed decision fatigue.\n\nTradeoff: freezing upstream slows access to new shadcn features. The win is predictability for long-lived internal software. What failed early: assuming teams would read a long PDF. Fixed with executable starters and short walkthroughs. What I would redo: earlier automated check for deprecated classnames in templates, and a simple survey at day thirty for each adopting team.",
    },
  ],
};
