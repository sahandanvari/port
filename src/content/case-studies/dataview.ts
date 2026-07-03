import type { CaseStudy } from "./types";

export const dataview: CaseStudy = {
  slug: "dataview",
  title: "Building the ultimate table in-house",
  teaser:
    "Six months to ship sorting, filtering, server pagination, column pinning, sub-rows, and bulk actions — then a production feedback loop and a 200-row performance fix that landed in PR 21060.",
  workRole: "Design system lead",
  heroMedia: {
    src: "/work/dataview/dataview-ui.png",
    alt: "DataView table with pinned columns, active filters, and bulk action bar",
    fit: "cover",
  },
  metrics: [
    { label: "Build time", value: "~6 months" },
    { label: "Row perf fix", value: "PR 21060" },
    { label: "Production loop", value: "CRM" },
    { label: "Capabilities", value: "7 core" },
  ],
  atAGlance: {
    role: "Design system lead — data display architecture",
    scope:
      "DataView compound component: sorting, filtering, server pagination, pinning, sub-rows, bulk actions, virtualization path",
    team: "Design system core; CRM squad as primary consumer; frontend partners on perf",
    timeline: "Roughly six months from spec to production-ready; iterative CRM feedback",
    platforms: "React, TanStack Table patterns, internal admin apps",
    outcomes:
      "Single approved table primitive for internal apps; CRM shipped on DataView; 200-row render path fixed in PR 21060",
  },
  artifacts: [
    {
      id: "spec",
      label: "Component spec",
      blurb: "Anatomy, props contract, server-side vs client-side modes, accessibility expectations.",
      isPrivate: true,
    },
    {
      id: "crm",
      label: "CRM integration",
      blurb: "Production screens exercising filters, pinning, and bulk actions at scale.",
      isPrivate: true,
    },
    {
      id: "perf",
      label: "PR 21060",
      blurb: "200-row performance fix: memoization and render path optimization.",
      isPrivate: true,
    },
    {
      id: "storybook",
      label: "Storybook stories",
      blurb: "State matrices for empty, loading, error, and dense data modes.",
      isPrivate: true,
    },
    {
      id: "registry",
      label: "Registry contract",
      blurb: "whenToUse, whenNotToUse, and composition rules in component-registry.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "DataView source and CRM consumer examples (private).",
      isPrivate: true,
    },
  ],
  relatedWork: ["luminis", "mcp", "component-registry"],
  sections: [
    {
      heading: "Every team was building the same table",
      body: "Before DataView, internal apps each rolled their own data grid. Some used lightweight table markup with custom sort handlers. Others pulled in heavy third-party libraries that fought our token system and accessibility defaults. CRM alone needed sorting, multi-column filtering, server pagination, column pinning, expandable sub-rows, and bulk actions on selected rows. That is not a weekend component.\n\nI scoped DataView as a Luminis compound: one implementation, one contract, one place to fix keyboard navigation and performance. The goal was to make the boring admin table so solved that squads stopped debating which library to import.",
      images: [
        {
          label: "Three bespoke table implementations vs one DataView contract",
          aspect: "pair",
          src: "/work/graphics/dataview/bespoke-vs-unified.svg",
          alt: "Diagram contrasting fragmented table implementations with a single shared DataView primitive",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Six months of deliberate scope",
      body: "I spent roughly six months on the first production-ready version. Each capability had to work in server-driven mode — CRM loads thousands of rows from APIs, not from client-side arrays. Sorting and filtering needed to emit stable query params. Pagination had to preserve selection state across page changes. Pinning had to survive horizontal scroll without breaking focus order. Sub-rows needed a composable slot so CRM could render nested detail without forking the shell. Bulk actions needed a selection model that did not fight row click handlers.\n\nI shipped incrementally behind feature flags in CRM so real users hit edge cases early. Long translations, empty filter results, slow networks, and partial page loads all surfaced before we called it stable.",
      images: [
        {
          label: "DataView with pinned columns, active filters, and bulk action bar",
          aspect: "wide",
          src: "/work/dataview/dataview-ui.png",
          alt: "DataView table with pinned columns, active filters, and bulk action bar",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Production as the feedback loop",
      body: "CRM was the primary consumer and the harshest reviewer. Operators did not care about component elegance. They cared whether someone could scan two hundred rows, pin the status column, filter by date range, expand a row for detail, select twelve records, and apply a bulk action without the UI stuttering.\n\nI treated CRM tickets as the backlog. When a pattern repeated across screens — filter chip placement, loading skeleton density, error retry on failed fetch — it went into the shared API instead of a CRM-only fork. That loop is why DataView feels opinionated. It is not abstract table theory. It is what operators actually do eight hours a day.",
    },
    {
      heading: "The 200-row problem",
      body: "Performance broke in production before it broke in Storybook. CRM lists routinely render two hundred visible rows with complex cell renderers — badges, avatars, inline actions. Initial implementations re-rendered too aggressively on sort and scroll. Operators noticed lag before we did.\n\nI traced the render path, tightened memo boundaries, and reduced unnecessary state propagation. The fix landed in PR 21060. After that, we added guidance in the registry contract: when to use virtualization, when server pagination is mandatory, and which cell patterns are safe at density. Performance became part of the component contract, not an afterthought.",
      images: [
        {
          label: "Render time before and after PR 21060 at 200 rows",
          aspect: "figure",
          src: "/work/graphics/dataview/performance-chart.svg",
          alt: "Bar chart showing reduced render time after performance optimization",
          fit: "contain",
        },
      ],
    },
    {
      heading: "API shape and accessibility",
      body: "DataView exposes explicit props for server callbacks rather than magic context. Teams pass fetch handlers, column definitions, and row actions as typed objects. Keyboard support follows WAI-ARIA grid patterns: focusable headers, arrow navigation where appropriate, and bulk selection via shift-click documented in the contract.\n\nI resisted feature bloat. Export-to-CSV, inline editing, and tree hierarchies stay as composition slots or adjacent patterns, not bolted onto the core. The registry entry states when to use DataView versus a simpler Table primitive — admin density with server data versus static read-only lists.",
    },
    {
      heading: "Registry and agent guardrails",
      body: "DataView is one of the most referenced contracts in the component registry. Agents and humans both need to know: do not hand-roll a sortable table when DataView exists; do not import a third-party grid without an exception ticket. The MCP tooling surfaces that contract during Figma-to-code workflows so generated screens default to the approved compound.\n\nThat pairing — heavy component investment plus machine-readable guardrails — is how we keep CRM-scale tables from re-fragmenting every quarter.",
      images: [
        {
          label: "Registry contract: whenToUse / whenNotToUse for DataView",
          aspect: "figure",
          src: "/work/graphics/component-registry/global-rules.svg",
          alt: "Illustration of registry contract fields for component usage rules",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Outcomes and tradeoffs",
      body: "CRM shipped production flows on DataView. Other internal apps adopted it for list screens without reimplementing filter bars. Support questions shifted from how do I wire server sort to which slot do I use for sub-rows.\n\nTradeoff: six months on one component felt slow to squads waiting for tables. The counter was six squads times six months of duplicate work avoided. What I would redo: performance budgets in CI earlier, with a synthetic 200-row story as a gate. Next: optional virtualization as a first-class variant instead of a documented escape hatch.",
    },
  ],
};
