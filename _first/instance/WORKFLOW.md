# Workflow First

## Principle

See /f-workflow.

## Artifacts

- **Fact:** Path: plan (`/b-plan-feature`) → review → `/b-build` → `/b-git-commit` → PR → CI → `/b-retro`. Use `/b-exec-push` only when the full implementation-to-PR path is requested.
- **Fact:** Index: [`../../apps/web/content/docs/development.mdx`](../../apps/web/content/docs/development.mdx)
- **Fact:** Playbooks: `.agents/skills/b/` — `/b` dispatcher and `/b-*` children; local preview from basilic-skills until the catalog publish
- **Fact:** Work state: GitHub issues and pull requests on `blockmatic/first`
- **Fact:** Git: default global user; Conventional Commits; never `--no-verify`; never Co-authored-by trailers
- **Fact:** Human gates: product scope, secrets/trust boundaries, destructive ops ([`../AGENTS.md`](../AGENTS.md))
- **Fact:** Models: Grok 4.6 plan/implement; Sol long-horizon; Composer 2.5 mechanical
- **Fact:** [`../../.github/workflows/lint.yml`](../../.github/workflows/lint.yml) — `pnpm validate`, `pnpm lint`, `checktypes`
- **Fact:** [`../../.github/workflows/security.yml`](../../.github/workflows/security.yml) — gitleaks
- **Fact:** Local: `pnpm qa` = validate + lint + types
- **Fact:** Pre-commit: Biome on staged files (`simple-git-hooks`)
- **Fact:** Deploy: Vercel Git integration for `apps/web` (preview on PR, production on main)
- **Unresolved:** Turbo remote cache tokens; preview-deploy URL in README

## Minimum Useful Artifact

- intent, owner, visible state: issue or PR
- plan: `/b-plan-feature` for non-trivial work
- actors: human, agent, CI
- gates: product, security, destructive — ask a human
- validation: `pnpm qa`; learning: `/b-retro` and durable files
- PR: lint workflow + security workflow
- local: `pnpm validate` for factory files
- deploy: Vercel from `apps/web`

## Notes

Quality names the bar. Workflow runs it. Never `--no-verify`. Keep CI slim. Factory validation lives here, not in an adopter repo. Do not add Basilic e2e, database, or DeepSec jobs here.

**Navigation:** [Generic spec](../principles/WORKFLOW.md) · [Human essay](../articles/WORKFLOW.md) · [Factory map](../ABOUT.md)
