import type { CaseStudy } from "./types";

export const mcp: CaseStudy = {
  slug: "mcp",
  title: "Guardrails for the machines",
  teaser:
    "Eighteen Aurora MCP tools and a three-role workflow — product owner, designer, developer — so agents read contracts before they write components, not after.",
  workRole: "Design system lead",
  heroMedia: {
    src: "/work/mcp/mcp-demo.png",
    alt: "MCP workflow — Figma sketch resolved to responsive Aurora dialog via registry tools",
    fit: "cover",
  },
  metrics: [
    { label: "Aurora tools", value: "18" },
    { label: "Workflow roles", value: "3" },
    { label: "Registry lookups", value: "Mandatory" },
    { label: "Stack", value: "MCP + Cursor" },
  ],
  atAGlance: {
    role: "Design system lead — agent tooling and governance",
    scope:
      "Aurora MCP server, registry-backed tools, three-role PO/designer/developer workflow, Cursor integration",
    team: "Design system core; pilot squads testing agent-assisted builds",
    timeline: "Evolved alongside component registry and reference site; iterative tool additions",
    platforms: "Model Context Protocol, Cursor IDE, Aurora monorepo",
    outcomes:
      "Agents resolve Figma patterns to Storybook skeletons; contracts block hand-rolled primitives; three-role handoffs reduce spec drift",
  },
  artifacts: [
    {
      id: "server",
      label: "MCP server",
      blurb: "Eighteen Aurora tools: tokens, contracts, composition, Figma mapping, Storybook CSF.",
      isPrivate: true,
    },
    {
      id: "workflow",
      label: "Three-role workflow",
      blurb: "PO preflight → designer iteration → developer production context tools.",
      isPrivate: true,
    },
    {
      id: "rules",
      label: "Global rules",
      blurb: "Blocker rules for action groups, Figma interpretation, component usage.",
      isPrivate: true,
    },
    {
      id: "cursor",
      label: "Cursor wiring",
      blurb: "mcp.json setup, skill sync, agent personas per role.",
      isPrivate: true,
    },
    {
      id: "eval",
      label: "Eval notes",
      blurb: "Before/after captures of agent output with and without registry lookups.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "tools/aurora-mcp source (private).",
      isPrivate: true,
    },
  ],
  relatedWork: ["component-registry", "luminis", "aurora-reference-website"],
  sections: [
    {
      heading: "Agents without guardrails recreate the mess faster",
      body: "Once Cursor became the default internal IDE, I watched squads generate screens in minutes that would have taken days — and import the wrong button, invent a modal from divs, or paste Figma MCP output as production code. Humans had the same habits, but agents amplified volume. A bad pattern in one prompt became a bad pattern in fifty files before anyone opened Storybook.\n\nI did not try to ban agents. I built guardrails they could not skip: an Aurora MCP server that reads the same contracts humans should read, wired into the Figma-to-code workflow as a mandatory first step.",
      images: [
        {
          label: "Agent output without vs with registry lookup",
          aspect: "pair",
          src: "/work/graphics/mcp/guardrails-comparison.svg",
          alt: "Side by side comparison of agent output with and without registry guardrails",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Eighteen tools, one spine",
      body: "The server exposes eighteen Aurora tools. They cover token inventory, component contracts, composition patterns, global rules, Figma component key mapping, Storybook CSF snippets, and feature registries for product domains. Each tool returns structured JSON from the monorepo — not prose summaries that drift.\n\nThe critical path for implementation is aurora_resolve_from_figma: extract pattern keywords from a design, match a Storybook story, return the skeleton. Then aurora_get_components and aurora_get_global_rules fill gaps. The design-rules say storybook-is-skeleton: the matched story defines chrome; Figma overrides are not applied unless the brief explicitly asks for pixel parity. That single rule eliminated half the className spam I was reviewing in PRs.",
      images: [
        {
          label: "MCP tool list and resolve_from_figma flow",
          aspect: "wide",
          src: "/work/graphics/mcp/tool-flow.svg",
          alt: "Flow diagram from Figma frame through MCP resolve to Storybook skeleton",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Three roles, three contexts",
      body: "Product owners, designers, and developers do not need the same agent context. I split the workflow into three roles with separate context tools.\n\nThe product owner agent runs preflight questions first — feature name, layout type, user states, constraints, out of scope — and refuses to implement until categories are answered. The designer agent gets iteration context after unzipping the PO codebase: component picks, Storybook checks, design iteration checklist. The developer agent gets production context: API plan, state, tests, accessibility, token usage.\n\nHumans still hand off zip files between roles. MCP does not replace that social process. It ensures each role's agent starts from the right contract surface instead of improvising from a screenshot.",
      images: [
        {
          label:
            "MCP demo: napkin-sketch dialog → built responsive Aurora dialog (modal desktop / drawer mobile)",
          aspect: "wide",
          src: "/work/mcp/mcp-demo.png",
          alt: "MCP workflow — Figma sketch resolved to responsive Aurora dialog via registry tools",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Registry as the machine-readable law",
      body: "MCP tools are only as good as the registry behind them. Component JSON files carry whenToUse, whenNotToUse, props, and accessibility notes. Composition patterns name the components and rules for assemblies like confirmation dialogs and data tables. Global rules encode blockers — action group button order, no hand-rolled primitives when an export exists.\n\nWhen an agent calls aurora_get_global_rules before shipping, blocker violations surface as structured findings, not linter noise after the fact. That is the same governance frame we use for human contributors, just callable at generation time.",
    },
    {
      heading: "Luminis parity and internal apps",
      body: "Aurora MCP was the first server, but the pattern applies to Luminis. Internal apps use Cursor rules plus registry contracts the same way: prefer DataView over bespoke tables, prefer documented patterns over ad hoc layouts. CRM proved the loop — agents that read DataView's contract produced mergeable PRs; agents that skipped it produced div soup with sort icons.\n\nI treat MCP as documentation that agents must execute, not read optionally. The reference site and Storybook remain the human-friendly surfaces; MCP is the API for machines.",
    },
    {
      heading: "Cursor wiring and skills",
      body: "Team setup lives in mcp.json: Storybook MCP for live stories, Aurora MCP for contracts, Figma MCP for read-only design context. Skills sync from the monorepo so aurora-design-system and aurora-component-picker stay aligned with registry changes. Agent personas in .cursor/agents/ map to orchestrator, planner, design-interpreter, test-author, frontend-developer, ds-reviewer, verifier for the full harness.\n\nOnboarding doc targets one afternoon: install servers, run npm run mcp:aurora, confirm resolve_from_figma returns a story for a known Figma frame. If that works, the guardrail chain is live.",
    },
    {
      heading: "What improved and what did not",
      body: "Directional wins: fewer hand-rolled modals and buttons in agent-assisted PRs; faster time-to-first-screen when the matched story was correct; ds-reviewer findings shifting from wrong primitive to wrong copy or missing empty state. Failures: agents still hallucinate props when the registry entry is thin; Figma MCP reference JSX still tempts juniors to paste verbatim. Fixes: richer contracts, stronger storybook-is-skeleton enforcement in skills, and eval captures shared in office hours.\n\nTradeoff: mandatory lookups add latency to generation. The counter is review latency and rework avoided. Next: usage telemetry on which tools fire per session, so we invest in the contracts agents actually hit.",
    },
  ],
};
