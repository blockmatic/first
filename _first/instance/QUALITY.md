# Quality First

## Principle

See /f-quality.

## Artifacts

- **Fact:** Factory bar: `@repo/validate` (ten essay/spec pairs, headings, front matter, principle parity, order, local links)
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

## Notes

Quality gates a release. Product names success after use. Do not treat `pnpm qa` as product success. Do not add Basilic e2e or API coverage.

**Navigation:** [Generic spec](../principles/QUALITY.md) · [Human essay](../articles/QUALITY.md) · [Factory map](../ABOUT.md)
