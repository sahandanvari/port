import type { CaseStudy } from "./types";

export const adoption: CaseStudy = {
  slug: "adoption",
  title: "Adoption and developer experience",
  workRole: "Design system lead",
  teaser:
    "Dual-audience docs, contribution workflow, and stack-specific starters so 36 components and 12 themes get used — not admired.",
  metrics: [
    { label: "Components documented", value: "36" },
    { label: "Theme packages", value: "12" },
    { label: "Starter kits", value: "3" },
    { label: "Glossary terms", value: "22" },
  ],
  atAGlance: {
    role: "Design system lead — adoption and DX owner",
    scope:
      "Documentation model, contribution process, training, starter kits, migration support",
    team: "Design system + embedded frontend partners; feature squads as consumers",
    timeline: "Ongoing program parallel to 98 library releases",
    platforms:
      "React-first; Tailwind v4 and plain CSS entry paths for mixed skill levels",
    outcomes:
      "Directional drop in “how do I use this?” tickets after dual-tab docs; repeatable migration guides for deprecations; legacy adoption slow but steady",
  },
  artifacts: [
    {
      id: "docs",
      label: "Doc surface",
      blurb:
        "Design/Develop tabs, props tables, token references, do/don’t galleries.",
      isPrivate: true,
    },
    {
      id: "contrib",
      label: "Contribution",
      blurb:
        "Issue templates, triage checklist, review gates before docs merge.",
      isPrivate: true,
    },
    {
      id: "starters",
      label: "Starter kits",
      blurb:
        "React, Tailwind-only, CSS+theme.css minimal seeds with README runbooks.",
      isPrivate: true,
    },
    {
      id: "training",
      label: "Enablement",
      blurb: "Workshop decks, office hours calendar, glossary export.",
      isPrivate: true,
    },
    {
      id: "metrics",
      label: "Adoption signals",
      blurb:
        "Support channel tags, doc search queries, migration checklist completion (proxy).",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Playground",
      blurb:
        "Live theme toggles and isolated component trials on the reference site.",
      isPrivate: true,
    },
  ],
  relatedWork: ["aurora", "luminis", "multibrand"],
  sections: [
    {
      heading: "Context",
      body: "Shipping components is not adoption. Teams had different stacks, skill levels, and trust in shared UI. I owned the layer between library releases and squads actually importing @ppt/aurora: how documentation is structured, how requests become changes, and how migrations feel safe.",
    },
    {
      heading: "What I shipped",
      body: "Dual-tab docs per component — Design answers when, Develop answers how. Three starter kits (React, Tailwind-only, CSS+theme.css) wire the correct theme import so backend-heavy teams do not improvise paths. Contribution flows through intake → triage → spec → implementation + docs → release notes → office-hours support.\n\nThe glossary (22 terms) deliberately gives designers and developers different definitions where discipline language diverges.",
    },
    {
      heading: "Outcomes",
      body: "Directional signals: repeat questions in support shifted after glossary and tabs landed; PR review comments about token misuse trended down after linters and examples; Vue and Razor squads onboard without big-bang PRs when they follow stack quickstarts.\n\nProxy metrics until leadership approves publishing: doc traffic on top components, starter kit clones, migration checklist completion per squad.",
    },
    {
      heading: "Reflections",
      body: "Assuming Storybook alone was enough failed once — narrative docs and product-like IA fixed it. Next: squad-level adoption scorecards in QBRs so progress on legacy stacks is visible, not anecdotal.",
    },
  ],
};
