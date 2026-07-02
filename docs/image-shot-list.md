# Image shot list

Drop files under `public/portfolio-placeholders/` (or any `public/` path) and set `src` (and optional `alt`) on each `images[]` entry in the case study module. Until `src` is set, the case study page renders a labeled placeholder frame.

| Study | Section | Aspect | Label |
| --- | --- | --- | --- |
| **aurora** | Figma first, then code | wide | Figma button sheet — variant matrix, states, and dev-mode metadata before implementation |
| **aurora** | Figma first, then code | figure | Figma library analytics — 50,000+ button inserts per year, low detach rate |
| **aurora** | What I shipped | figure | Theme packages folder structure — css/ and tailwind/ per brand |
| **aurora** | What I shipped | pair | Theme package picker on the reference site — twelve brands, one component model |
| **aurora** | What I shipped | pair | Doc analytics — top component pages and search queries (directional adoption proxy) |
| **luminis** | The problem was not components | pair | Before/after: three internal apps with different nav and density |
| **luminis** | WAVE as the honest pilot | wide | WAVE production screen using Luminis table and filter pattern |
| **luminis** | CRM — arriving with five percent of the context | figure | CRM settings page built from Luminis patterns |
| **luminis** | CRM — arriving with five percent of the context | figure | Figma dev-mode props aligned to React component API |
| **luminis** | Patterns over primitives | wide | Pattern catalog: list-detail, settings anatomy, empty states |
| **luminis** | Starters and Cursor rules | pair | Cursor rules snippet and resulting component usage in a new app |
| **dataview** | Every team was building the same table | pair | Side-by-side: three bespoke table implementations vs DataView |
| **dataview** | Six months of deliberate scope | wide | DataView with pinned columns, active filters, and bulk action bar |
| **dataview** | The 200-row problem | figure | Profiler before/after PR 21060 at 200 rows |
| **dataview** | Registry and agent guardrails | figure | Registry contract excerpt: whenToUse / whenNotToUse for DataView |
| **mcp** | Agents without guardrails recreate the mess faster | pair | Agent output without vs with registry lookup — side by side |
| **mcp** | Eighteen tools, one spine | wide | MCP tool list and resolve_from_figma flow diagram |
| **mcp** | Three roles, three contexts | pair | MCP demo: napkin-sketch dialog → built responsive Aurora dialog (modal desktop / drawer mobile) |
| **mcp** | Registry as the machine-readable law | figure | Global rules response showing blocker vs advisory entries |
| **token-pipeline** | Inverse tokens (inv-) | pair | Side-by-side: default surface vs inv- surface with the same Button component |
| **interaction-tokens** | Interaction Builder (PR 18417) | wide | Interaction Builder on the reference site — live hover/active preview per role |
| **multibrand** | ~40 decisions per brand | wide | Theme switcher: Base vs SlotsParadise vs Contigo on the same component page |
| **aurora-reference-website** | Documentation that eats its own cooking | wide | Reference site home with theme switcher and component search |
| **aurora-reference-website** | Design tab and Develop tab | pair | Component page: Design tab vs Develop tab on the same preview |
| **aurora-reference-website** | Living prototype, not a screenshot museum | wide | Pattern page composing multiple Aurora components with live theme swap |
| **component-registry** | Storybook tells humans, not machines | pair | Figma screenshot vs registry contract for the same Button variant |
| **component-registry** | Thirty-six Aurora, fifty-four Luminis | wide | Registry folder structure: aurora/components, luminis/composition-patterns |
| **component-registry** | Global rules with teeth | figure | Global rules JSON with blocker severity tags |

## Secondary studies (no section placeholders yet)

These cards are light-touch refreshes. Add `images` to sections when you have captures:

- **adoption** — doc surface Design/Develop tabs, starter kit README
- **audit** — inventory spreadsheet excerpt, tier burndown chart
- **asset-gallery** — semantic search UI, cross-repo dedupe view
- **propper** — hackathon demo UI, audit report sample

## Suggested file naming

```
public/portfolio-placeholders/{slug}/{section-slug}-{index}.webp
```

Example: `public/portfolio-placeholders/dataview/six-months-scope-0.webp` → set `src: "/portfolio-placeholders/dataview/six-months-scope-0.webp"` on the matching `images[]` entry.
