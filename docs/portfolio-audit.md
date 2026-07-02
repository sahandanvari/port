# Portfolio audit

**Repo:** `Port` (Vite + React + TypeScript + Tailwind v3)  
**Date:** 2026-03-16

## Where content lives

| Area                     | Location                          | Format                                      |
| ------------------------ | --------------------------------- | ------------------------------------------- |
| Case studies             | `src/content/case-studies/*.ts`   | TypeScript modules (`CaseStudy` shape)      |
| Writing posts            | `src/content/writing/posts.ts`    | TypeScript                                  |
| Site meta / about        | `src/content/meta.ts`, `about.ts` | TS                                          |
| Post inventory (offline) | `Recording/POSTS.md`              | Markdown (not built into site)              |
| Conference notes         | `Recording/ExportBlock-*/`        | Markdown export (not built into site)       |
| Media                    | `public/`                         | favicon, optional `portfolio-placeholders/` |

## Routes (current)

| Path              | Purpose                                               |
| ----------------- | ----------------------------------------------------- |
| `/`               | Home: overview, case studies, writing, about, contact |
| `/work/:slug`     | Case study detail                                     |
| `/writing`        | Writing index                                         |
| `/writing/:slug`  | Post detail                                           |
| `/design-systems` | Design systems scope + artifacts (added in upgrade)   |
| `/resume`         | Resume highlights + level variants (added)            |
| `/artifacts`      | Gallery of placeholder/screenshot slots (added)       |

## Capabilities

- **Mermaid:** Yes — `src/components/MermaidDiagram.tsx`, charts in `src/content/case-studies/diagrams.ts`.
- **Code blocks:** Case studies can include fenced code in section `body` (rendered as `<pre>` if we parse — currently plain paragraphs). Snippets added via optional `codeSnippets` on case study (rendered in `CaseStudyPage`).
- **Screenshots:** Use `PortfolioFigure` + `public/portfolio-placeholders/`; many links marked **Private — available on request**.

## Gaps addressed (this upgrade)

1. Dedicated **Design Systems** landing page with scope, how I work, artifacts grid, case study links.
2. Case studies restructured to a **shared DS template** (headings) + **At a glance** + **Artifacts** strip.
3. Three **Mermaid** diagrams: gated contribution flow, token layering, delivery timeline (wired per study).
4. **`docs/design-system-case-study-template.md`** and **`docs/design-system-portfolio-checklist.md`** for reuse.
5. **Resume** page with highlights + collapsible bullets by seniority.
6. **Artifacts gallery** page for consolidated screenshot slots.

## Priority follow-ups (you)

- [ ] Add real screenshots under `public/portfolio-placeholders/` (Figma, Storybook, docs, metrics).
- [ ] Replace `[ADD LINK]` / private placeholders with sanitized links where allowed.
- [ ] Drop `public/resume.pdf` when ready; update `/resume` CTA.
- [ ] Fill **directional** metrics with real numbers when available.

## Files touched (upgrade pass)

- `docs/portfolio-audit.md` (this file), `docs/design-system-case-study-template.md`, `docs/design-system-portfolio-checklist.md`
- `src/content/case-studies/types.ts` — `AtAGlance`, `CaseStudyArtifact`, `codeSnippets`
- `src/content/case-studies/*.ts` — all four case studies rewritten to template headings
- `src/content/case-studies/diagrams.ts` — `contributionFlowGated`, `tokenLayeringFlow`, `designSystemDeliveryTimeline`
- `src/content/designSystemsPage.ts`, `src/content/resumePage.ts`
- `src/components/CaseStudyAtAGlance.tsx`, `CaseStudyArtifacts.tsx`, `CodeSnippetsBlock.tsx`, `PortfolioFigure.tsx`
- `src/pages/CaseStudyPage.tsx`, `DesignSystemsPage.tsx`, `ResumePage.tsx`, `ArtifactsGalleryPage.tsx`
- `src/App.tsx`, `src/components/SiteHeader.tsx`, `src/sections/Footer.tsx`, `src/sections/Overview.tsx`
- `public/portfolio-placeholders/README.md`
