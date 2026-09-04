# Design First

## Principle

Decide how the interface behaves and communicates before implementation, a component library, or a generated UI invents the experience.

## Statement

I treat the interface as a product decision: states, copy, motion, and what “done” looks like on screen. Tokens and components are how that decision is expressed, not a substitute for it. A generated layout is not a design.

## Outcome

Interface behavior, copy, and verification are inspectable. Visual identity has one source. Browser verification covers the jobs that matter. Tokens do not silently become a second product.

## Artifacts

- **Fact:** Landing IA follows SoulSpec’s What / Why / Spec / Get started — not SoulSpec branding or persona files
- **Fact:** Distinctive type: Syne (display), Source Serif 4 (body), IBM Plex Mono (file trees)
- **Fact:** Palette: cool mist paper / violet-slate night, Prussian primary, brass accent. Not basilic teal
- **Fact:** Signature: twelve-station rail on the spec index (sequence is real)
- **Fact:** Chrome primitives in `@repo/ui` (button, tokens). Marketing sections live in `apps/web/components/landing`
- **Fact:** No Google-format `DESIGN.md` yet. Tokens in `packages/ui/src/styles/tokens.css`
- **Unresolved:** motion guidelines; copy patterns beyond landing headlines; Google-format `_first/DESIGN.md`

## Minimum Useful Artifact

- jobs on screen: understand FIRST, read an essay, copy a template, follow get-started
- states: default, narrow viewport, missing station (404)
- verification: browser pass of home, one article, one spec, docs
- one palette: `tokens.css`

## Recipe

1. Inspect the running landing and spec/article pages.
2. Do not add a second palette in fumadocs chrome without updating tokens.
3. Verify in the browser, not only screenshots.
4. When Design is in as a Google file, lint with an explicit path.

## Validation

- One visual identity. Station rail encodes sequence, not decoration.
- Copy does not claim a registry, CLI, or persona spec.

## Definition of Done

The interface jobs are visible and verified. Tokens match what shipped.

## Agent Prompt

Apply Design First to this repository. Use `frontend-design-v1` for landing work. Do not clone basilic or SoulSpec chrome. Do not invent a second palette.

## Notes

**Design vs Journeys:** Journeys own the job. Design owns how the interface expresses it.

**Navigation:** [Generic spec](../principles/DESIGN.md) · [Human essay](../articles/DESIGN.md) · [Factory map](../ABOUT.md)
