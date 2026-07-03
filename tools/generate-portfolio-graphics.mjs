import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../public/work/graphics");

function wrap(svgInner, w = 960, h = 540) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8f8f8"/>
      <stop offset="100%" stop-color="#efefef"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-opacity="0.08"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)" rx="16"/>
  ${svgInner}
</svg>`;
}

function card(x, y, w, h, title, lines = [], accent = "#222") {
  const inner = lines
    .map(
      (ln, i) =>
        `<text x="${x + 20}" y="${y + 58 + i * 22}" fill="#666" font-family="system-ui,sans-serif" font-size="13">${ln}</text>`,
    )
    .join("\n  ");
  return `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#ddd" filter="url(#shadow)"/>
  <text x="${x + 20}" y="${y + 32}" fill="${accent}" font-family="system-ui,sans-serif" font-size="14" font-weight="600">${title}</text>
  ${inner}`;
}

const arrow =
  '<path d="M0 0 L50 0" stroke="#666" stroke-width="2"/><polygon points="50,0 42,-4 42,4" fill="#666"/>';

const svgs = {
  "luminis/inconsistent-nav.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Before / After</text>
  ${card(40, 70, 260, 200, "App A", ["Top tabs", "Loose spacing", "Custom modal"])}
  ${card(330, 70, 260, 200, "App B", ["Side rail", "Dense table", "Different forms"])}
  ${card(620, 70, 260, 200, "App C", ["Hybrid nav", "Mixed tokens", "One-off CSS"])}
  <rect x="330" y="310" width="300" height="180" rx="14" fill="#111"/>
  <text x="360" y="350" fill="#fff" font-family="system-ui,sans-serif" font-size="15" font-weight="600">Shared Luminis shell</text>
  <text x="360" y="378" fill="#ccc" font-family="system-ui,sans-serif" font-size="13">One nav model / one table pattern</text>
  <text x="360" y="406" fill="#ccc" font-family="system-ui,sans-serif" font-size="13">Documented forms / token-backed UI</text>`),

  "luminis/pattern-catalog.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">40 composition patterns</text>
  ${card(40, 70, 270, 170, "list-detail", ["Table + drawer", "Keyboard focus path"])}
  ${card(330, 70, 270, 170, "settings-anatomy", ["Sections + save bar", "Validation timing"])}
  ${card(620, 70, 270, 170, "empty-states", ["Icon + action", "Retry on error"])}
  ${card(40, 270, 850, 220, "Pattern contract", ["Components listed in order", "whenToUse / whenNotToUse", "Linked to registry slug JSON"], "#111")}
  <rect x="70" y="360" width="760" height="8" rx="4" fill="#e5e5e5"/>
  <rect x="70" y="360" width="520" height="8" rx="4" fill="#222"/>`),

  "luminis/cursor-rules-flow.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Starter + Cursor rules</text>
  ${card(40, 80, 220, 140, "Cursor rules", [".mdc guardrails", "Pattern names"])}
  <g transform="translate(270,146)">${arrow}</g>
  ${card(340, 80, 220, 140, "Starter kit", ["README runbook", "Token wiring"])}
  <g transform="translate(570,146)">${arrow}</g>
  ${card(640, 80, 280, 140, "New internal app", ["Approved layouts", "No forked nav"])}
  ${card(40, 280, 880, 200, "Outcome", ["Agent-assisted PRs cite the same patterns as humans", "Fewer one-off components in review"], "#111")}`),

  "dataview/bespoke-vs-unified.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Fragmented to unified</text>
  ${card(40, 80, 200, 160, "Team A table", ["Custom sort", "Local CSS"])}
  ${card(260, 80, 200, 160, "Team B grid", ["3rd-party lib", "Token fights"])}
  ${card(480, 80, 200, 160, "Team C markup", ["No a11y path", "No server mode"])}
  <g transform="translate(690,156)">${arrow}</g>
  ${card(750, 80, 170, 160, "DataView", ["One contract", "Server + a11y"], "#111")}
  ${card(40, 290, 880, 190, "Shared capabilities", ["Sort / filter / pin / paginate / sub-rows / bulk actions"], "#111")}`),

  "dataview/performance-chart.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">200-row render path (PR 21060)</text>
  <rect x="120" y="300" width="80" height="120" rx="6" fill="#d4d4d4"/>
  <rect x="280" y="220" width="80" height="200" rx="6" fill="#222"/>
  <line x1="80" y1="380" x2="80" y2="120" stroke="#bbb"/>
  <line x1="80" y1="380" x2="880" y2="380" stroke="#bbb"/>
  <text x="160" y="450" fill="#666" font-family="system-ui,sans-serif" font-size="13" text-anchor="middle">Before</text>
  <text x="320" y="450" fill="#666" font-family="system-ui,sans-serif" font-size="13" text-anchor="middle">After</text>`),

  "mcp/guardrails-comparison.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Agent output</text>
  ${card(40, 70, 400, 400, "Without registry", ["Hand-rolled modal", "Wrong button order", "Raw Figma JSX pasted", "Missing empty state"], "#b45309")}
  ${card(520, 70, 400, 400, "With MCP + contracts", ["Dialog from story skeleton", "Action groups respected", "Token-backed classes", "Registry whenToUse cited"], "#111")}`),

  "mcp/tool-flow.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">resolve_from_figma</text>
  ${card(40, 90, 180, 120, "Figma frame", ["Keywords + copy"])}
  <g transform="translate(230,146)">${arrow}</g>
  ${card(300, 90, 200, 120, "MCP resolve", ["Pattern match", "Story ID"])}
  <g transform="translate(510,146)">${arrow}</g>
  ${card(580, 90, 200, 120, "Storybook CSF", ["Skeleton chrome"])}
  ${card(40, 260, 880, 220, "18 tools / one registry spine", ["get_components / get_global_rules / token inventory / composition patterns"], "#111")}`),

  "component-registry/contract-vs-frame.svg": wrap(`
  ${card(40, 70, 400, 400, "Figma screenshot", ["Static PNG", "Drifts in a quarter", "No whenToUse"], "#b45309")}
  ${card(520, 70, 400, 400, "Registry JSON", ["whenToUse / whenNotToUse", "Props + a11y notes", "Humans + agents + CI"], "#111")}
  <text x="480" y="280" fill="#111" font-family="system-ui,sans-serif" font-size="28" font-weight="700">-&gt;</text>`),

  "component-registry/registry-tree.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">registry/</text>
  ${card(40, 70, 380, 420, "aurora/", ["components/*.json (36)", "composition-patterns/", "global-rules/", "tokens/inventory.json"])}
  ${card(540, 70, 380, 420, "luminis/", ["components/*.json (54)", "composition-patterns/ (40)", "global-rules/"], "#111")}`),

  "component-registry/global-rules.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Global rules</text>
  ${card(40, 80, 860, 90, "action-groups.json", ["Primary right / destructive left"], "#111")}
  ${card(40, 190, 860, 90, "figma-interpretation.json", ["storybook-is-skeleton (blocker)"])}
  ${card(40, 300, 860, 90, "component-usage.json", ["No hand-rolled primitives when export exists"])}
  <rect x="60" y="110" width="72" height="22" rx="11" fill="#fecaca"/><text x="72" y="125" fill="#991b1b" font-family="system-ui,sans-serif" font-size="11" font-weight="600">BLOCKER</text>
  <rect x="60" y="220" width="72" height="22" rx="11" fill="#fecaca"/><text x="72" y="235" fill="#991b1b" font-family="system-ui,sans-serif" font-size="11" font-weight="600">BLOCKER</text>
  <rect x="60" y="330" width="72" height="22" rx="11" fill="#fde68a"/><text x="72" y="345" fill="#92400e" font-family="system-ui,sans-serif" font-size="11" font-weight="600">ADVISORY</text>`),

  "token-pipeline/inverse-surfaces.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Inverse token family (inv-)</text>
  ${card(40, 80, 400, 380, "Default surface", ["--primary", "--primary-hover", "Light canvas + OS dark toggle"])}
  ${card(520, 80, 400, 380, "Dark-native surface", ["--inv-primary", "--inv-primary-hover", "No double-invert"], "#111")}
  <rect x="120" y="200" width="120" height="40" rx="20" fill="#1e3a5f"/><text x="155" y="225" fill="#fff" font-family="system-ui,sans-serif" font-size="13">Button</text>
  <rect x="600" y="200" width="120" height="40" rx="20" fill="#e8eef8"/><text x="635" y="225" fill="#111" font-family="system-ui,sans-serif" font-size="13">Button</text>`),

  "multibrand/theme-swap.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">One component model / twelve theme packages</text>
  <rect x="300" y="120" width="360" height="280" rx="16" fill="#fff" stroke="#ccc" filter="url(#shadow)"/>
  <text x="420" y="170" fill="#111" font-family="system-ui,sans-serif" font-size="14" font-weight="600">Same Button + Card</text>
  <rect x="380" y="200" width="100" height="36" rx="18" fill="#1e3a5f"/><text x="410" y="223" fill="#fff" font-family="system-ui,sans-serif" font-size="12">Action</text>
  ${card(40, 160, 200, 200, "Brand A", ["theme.css", "~40 decisions"])}
  ${card(720, 160, 200, 200, "Brand B", ["theme.css", "Same API"], "#111")}`),

  "aurora-reference/design-develop.svg": wrap(`
  ${card(40, 70, 420, 420, "Design tab", ["Anatomy + do-not", "Variant matrix", "Spacing notes"])}
  ${card(500, 70, 420, 420, "Develop tab", ["Imports + props", "Code samples", "a11y expectations"], "#111")}
  <rect x="200" y="250" width="560" height="120" rx="12" fill="#f5f5f5" stroke="#ddd"/>
  <text x="480" y="320" fill="#444" font-family="system-ui,sans-serif" font-size="14" text-anchor="middle">Shared live preview</text>`),

  "aurora-reference/live-pattern.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">Live pattern page</text>
  <rect x="40" y="80" width="880" height="380" rx="14" fill="#fff" stroke="#ddd" filter="url(#shadow)"/>
  <rect x="60" y="110" width="840" height="48" rx="8" fill="#f3f3f3"/>
  <text x="80" y="140" fill="#444" font-family="system-ui,sans-serif" font-size="13">Filters / Search / Actions</text>
  <rect x="60" y="180" width="840" height="240" rx="8" fill="#fafafa" stroke="#eee"/>
  <text x="80" y="220" fill="#666" font-family="system-ui,sans-serif" font-size="13">Composed from real @ppt/aurora exports</text>
  <rect x="700" y="100" width="180" height="32" rx="16" fill="#111"/>
  <text x="730" y="121" fill="#fff" font-family="system-ui,sans-serif" font-size="12">Live theme swap</text>`),

  "aurora/figma-first.svg": wrap(`
  ${card(40, 90, 250, 140, "1. Figma spec", ["Variants + states", "Dev-mode props"])}
  <g transform="translate(300,156)">${arrow}</g>
  ${card(370, 90, 250, 140, "2. Registry", ["Contract JSON"])}
  <g transform="translate(630,156)">${arrow}</g>
  ${card(700, 90, 220, 140, "3. Code", ["@ppt/aurora"], "#111")}
  ${card(40, 280, 880, 200, "Figma-first delivery", ["Design defines the contract / code proves it / docs ship together"], "#111")}`),

  "aurora/theme-packages.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">theme-packages/</text>
  ${card(40, 70, 260, 400, "brand-a/", ["css/theme.css", "tailwind/theme.css", "@theme block"])}
  ${card(330, 70, 260, 400, "brand-b/", ["css/theme.css", "tailwind/theme.css"])}
  ${card(620, 70, 260, 400, "brand-c/", ["12 packages total"], "#111")}`),

  "interaction-tokens/role-algorithm.svg": wrap(`
  <text x="40" y="44" fill="#111" font-family="system-ui,sans-serif" font-size="18" font-weight="700">12 roles / one algorithm</text>
  <rect x="40" y="80" width="200" height="360" rx="12" fill="#fff" stroke="#ddd"/>
  <text x="60" y="120" fill="#444" font-family="monospace" font-size="12">primary</text>
  <text x="60" y="150" fill="#444" font-family="monospace" font-size="12">cta-1 ... cta-3</text>
  <text x="60" y="180" fill="#444" font-family="monospace" font-size="12">transparent</text>
  <text x="60" y="210" fill="#444" font-family="monospace" font-size="12">nav-transparent</text>
  ${card(280, 80, 300, 360, "Generator", ["Solid: L +/-10 / +/-20", "Transparent: alpha overlay", "inv- mirror per theme"], "#111")}
  ${card(620, 80, 300, 360, "Interaction Builder", ["Live preview", "Workshop URL", "PR 18417"])}`),

  "asset-gallery/pipeline.svg": wrap(`
  ${card(40, 120, 160, 100, "Crawl", ["13 repos"])}
  <g transform="translate(210,166)">${arrow}</g>
  ${card(260, 120, 160, 100, "Dedupe", ["Hash match"])}
  <g transform="translate(430,166)">${arrow}</g>
  ${card(480, 120, 160, 100, "Describe", ["Azure GPT"])}
  <g transform="translate(650,166)">${arrow}</g>
  ${card(700, 120, 160, 100, "Index", ["Semantic search"], "#111")}
  ${card(40, 280, 820, 180, "Gallery UI", ["Filters / provenance / duplicate badges / audit CSV export"], "#111")}`),

  "adoption/dual-tab-docs.svg": wrap(`
  ${card(40, 80, 420, 400, "Design", ["When to use", "Do / do-not gallery", "Anatomy"])}
  ${card(500, 80, 420, 400, "Develop", ["How to import", "Props + a11y", "Migration notes"], "#111")}
  <text x="480" y="340" fill="#666" font-family="system-ui,sans-serif" font-size="13" text-anchor="middle">Same component / same release train</text>`),
};

for (const [rel, content] of Object.entries(svgs)) {
  const path = join(ROOT, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
  console.log("wrote", rel);
}
