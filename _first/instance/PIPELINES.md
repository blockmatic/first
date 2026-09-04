# Pipelines First

## Principle

Make the automated path from change to a validated, deployable artifact explicit, fast to interpret, and hard to skip.

## Statement

I want automation to catch what humans should not have to remember: format, types, tests, and the structural invariants of this factory. A green pipeline is not product success. It is evidence that the named checks ran.

## Outcome

Every change runs a known set of checks. Failures are readable. Deploy is a named path. Skipping hooks is not a workflow.

## Artifacts

- **Fact:** [`../../.github/workflows/lint.yml`](../../.github/workflows/lint.yml) — `pnpm validate`, `pnpm lint`, `checktypes`
- **Fact:** [`../../.github/workflows/security.yml`](../../.github/workflows/security.yml) — gitleaks
- **Fact:** Local: `pnpm qa` = validate + lint + types
- **Fact:** Pre-commit: Biome on staged files (`simple-git-hooks`)
- **Fact:** Deploy: Vercel Git integration for `apps/web` (preview on PR, production on main)
- **Unresolved:** Turbo remote cache tokens; preview-deploy URL in README

## Minimum Useful Artifact

- PR: lint workflow + security workflow
- local: `pnpm validate` for factory files
- deploy: Vercel from `apps/web`

## Recipe

1. Inspect workflows and `package.json` scripts.
2. Do not add Basilic e2e, database, or DeepSec jobs here.
3. When a check is added, name it in this file.

## Validation

- Factory drift fails `pnpm validate` before merge.
- `--no-verify` is forbidden by workflow rules.

## Definition of Done

The named checks ran. Deploy path is documented.

## Agent Prompt

Apply Pipelines First to this repository. Keep CI slim. Factory validation lives here, not in basilic.

## Notes

**Pipelines vs Quality:** Pipelines run the bar. Quality names the bar.

**Navigation:** [Generic spec](../principles/PIPELINES.md) · [Human essay](../articles/PIPELINES.md) · [Factory map](../ABOUT.md)
