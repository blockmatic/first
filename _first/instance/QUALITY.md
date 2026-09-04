# Quality First

## Principle

Say what “good” means — tests, evals, budgets — before anyone optimizes toward an undefined target.

## Statement

A change can be complete in the author’s head and still be wrong. I want a bar that can fail: structural validation of the factory, lint, types, and browser verification of the site jobs. CI green is not the product outcome.

## Outcome

Acceptance criteria exist. Factory pairs cannot silently drift. The site jobs are checked in a browser when UI changes.

## Artifacts

- **Fact:** Factory bar: `@repo/validate` (12 pairs, headings, front matter, principle parity, order, local links)
- **Fact:** Regression tests: `packages/validate/src/validate-docs.test.ts`
- **Fact:** Lint: Biome + ESLint. Types: `pnpm checktypes`
- **Fact:** UI: browser verification of home, article, spec, docs — no Playwright suite yet
- **Fact:** No eval datasets. No coverage gate
- **Unresolved:** Playwright for landing IA; visual regression; essay editorial “stable” promotion bar beyond FEEDBACK.md

## Minimum Useful Artifact

- factory: `pnpm validate` must pass
- code: lint + types
- site: manual browser pass for UI changes
- explicit: no evals yet

## Recipe

1. Inspect validate tests and CI.
2. Do not treat `pnpm qa` as product success (Product).
3. When adding a check, name the failure it is meant to catch.

## Validation

- Principle mismatch fails CI.
- Missing station pair fails CI.

## Definition of Done

The named bar ran. Editorial stability is still a human review (FEEDBACK.md).

## Agent Prompt

Apply Quality First to this repository. Do not add Basilic e2e or API coverage. Keep the factory validator honest.

## Notes

**Quality vs Product:** Quality gates a release. Product names success after use.

**Navigation:** [Generic spec](../principles/QUALITY.md) · [Human essay](../articles/QUALITY.md) · [Factory map](../ABOUT.md)
