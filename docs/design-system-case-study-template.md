# Design system case study template

Use these headings in order (or merge subsections) so hiring managers can scan for operational proof.

## At a glance (summary block)

- **Role**
- **Scope**
- **Team / partners**
- **Timeline**
- **Platforms**
- **Outcomes** (measurable or labeled _estimate_ / _directional_ / _proxy_)

## Artifacts strip

For each: label, status (public / private), link or placeholder, caption explaining what the artifact proves.

- Tokens (export, JSON, CSS vars)
- Component spec (Figma / props)
- Doc surface (site / Storybook)
- Governance / contribution (flow or policy)
- Metrics (dashboard or proxy)
- Code (repo / package)

---

## Context

- Org / product context, scale, platforms
- Why a system (or audit) was needed
- Your role + collaborators (design, eng, PM, content, a11y)
- Timeframe and constraints

## Problem and goals

- Concrete problems (duplication, inconsistency, slow delivery, theme parity, a11y debt)
- Goals as outcomes (e.g. reduce duplicate components, increase adoption, improve a11y compliance)

## Audit and baseline

- Inventory method (screens, components, variance)
- Baseline metrics (directional / estimated OK if labeled)
- Insights that shaped scope  
  _Skip or shorten if the case study is not audit-first._

## Foundations and tokens

- Taxonomy (primitives → semantic → component)
- Naming conventions
- Theming / modes (light, dark, brand)
- Example token table + sample JSON or CSS variables
- Accessibility constraints (contrast, focus, reduced motion)

## Components

- At least one deep dive: anatomy, variants, states matrix, keyboard, responsive rules, a11y notes, API (props / slots)
- Screenshots: Figma properties, Storybook (or doc site), product usage — or placeholders

## Patterns

- At least one pattern: when to use / not use, recipe, edge cases, example flows

## Documentation

- Where docs live, how maintained
- Template sections (usage, style, code, a11y)
- Examples: do/don’t, snippets, troubleshooting

## Governance and contribution

- Intake: issue → triage → design → build → docs → release
- Decision rights, review gates
- Lifecycle + deprecation / migration
- Exceptions (“snowflakes”)

## Tooling and pipeline

- Stack (Figma variables, Token Studio, export, Storybook/MDX, CI, lint)
- Diagram: source → build → library → adoption

## Adoption and enablement

- Onboarding, office hours, training, comms
- Migration / rollout
- FAQs / playbooks

## Metrics and outcomes

- Adoption signals (usage, requests, migration progress)
- Efficiency (time saved, less rework) — estimate if needed
- Quality (variance down, fewer bugs) — proxy if needed
- Accessibility (checks, coverage)

## Reflections

- Tradeoffs
- What failed
- What you’d do differently
- Next steps
