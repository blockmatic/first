# Workflow First

## Principle

Make the path from intent to a validated, deployable change explicit enough that humans, agents, and automation can cooperate without reconstructing the process every time.

## Statement

I want work to move from idea to a shipped, validated change, and I want automation to catch what humans should not have to remember. A green pipeline is not product success. It is evidence that the named checks ran.

## Outcome

Changes flow through a known path. Failures are readable. Deploy is a named path. Skipping hooks is not a workflow.

## Artifacts

- **Fact:** Path: plan (`/plan-feature`) → review → implement (`/exec-push`) → `/git-commit` → PR → CI → `/retro`
- **Fact:** Index: [`../../apps/web/content/docs/development.mdx`](../../apps/web/content/docs/development.mdx)
- **Fact:** Playbooks: `.agents/skills/workflow/` from `blockmatic/basilic-skills`
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
- plan: `/plan-feature` for non-trivial work
- actors: human, agent, CI
- gates: product, security, destructive — ask a human
- validation: `pnpm qa`; learning: `/retro` and durable files
- PR: lint workflow + security workflow
- local: `pnpm validate` for factory files
- deploy: Vercel from `apps/web`

## Recipe

1. Inspect issues, PRs, branch, CI, workflows, and `package.json` scripts.
2. Propose before implementing on non-trivial work.
3. Implement in reviewable chunks. Keep state in the issue or PR.
4. Do not add Basilic e2e, database, or DeepSec jobs here.
5. When a check is added, name it in this file.
6. Stop for human gates.

## Validation

- Work state is visible without asking in chat.
- Consequential decisions are in `_first/` or `/docs`, not only merged code.
- Factory drift fails `pnpm validate` before merge.
- `--no-verify` is forbidden by workflow rules.

## Definition of Done

The change moved through an explicit path. The named checks ran. Deploy path is documented. Durable context reflects what was decided.

## Agent Prompt

Apply Workflow First to this repository. Use basilic-skills playbooks and `/f-workflow`. Never `--no-verify`. Keep CI slim. Factory validation lives here, not in basilic.

## Notes

**Workflow vs Quality:** Quality names the bar. Workflow runs it.

**Navigation:** [Generic spec](../principles/WORKFLOW.md) · [Human essay](../articles/WORKFLOW.md) · [Factory map](../ABOUT.md)
