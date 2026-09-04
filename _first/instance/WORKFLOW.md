# Workflow First

## Principle

Make the path from intent to validated change explicit enough that humans, agents, and automation can cooperate without reconstructing the process every time.

## Statement

I care less about which methodology name is on the wall and more about whether work can move from idea to shipped, validated change. Who decides what? Where does state live? When does a human approve? If the path is only in people's heads, agents cannot help and humans cannot scale.

## Outcome

Work flows through a recognizable path: idea → plan → implement → review → pipeline signals → approval → release → learning. Handoffs have inputs and outputs. Work state lives in issues, tasks, or PRs — not only in chat. Human approval is explicit for destructive, security-sensitive, or product-consequential changes.

## Artifacts

- **Fact:** Path: plan (`/plan-feature`) → review → implement (`/exec-push`) → `/git-commit` → PR → CI → `/retro`
- **Fact:** Index: [`../../apps/web/content/docs/development.mdx`](../../apps/web/content/docs/development.mdx)
- **Fact:** Playbooks: `.agents/skills/workflow/` from `blockmatic/basilic-skills`
- **Fact:** Work state: GitHub issues and pull requests on `blockmatic/first`
- **Fact:** Git: default global user; Conventional Commits; never `--no-verify`; never Co-authored-by trailers
- **Fact:** Human gates: product scope, secrets/trust boundaries, destructive ops ([`../AGENTS.md`](../AGENTS.md))
- **Fact:** Models: Grok 4.6 plan/implement; Sol long-horizon; Composer 2.5 mechanical

## Minimum Useful Artifact

- intent, owner, visible state: issue or PR
- plan: `/plan-feature` for non-trivial work
- actors: human, agent, CI
- gates: product, security, destructive — ask a human
- validation: `pnpm qa`; learning: `/retro` and durable files

## Recipe

1. Inspect issues, PRs, branch, and CI.
2. Propose before implementing on non-trivial work.
3. Implement in reviewable chunks. Keep state in the issue or PR.
4. Stop for human gates.

## Validation

- Work state is visible without asking in chat.
- Consequential decisions are in `_first/` or `/docs`, not only merged code.

## Definition of Done

The change moved through an explicit path. Durable context reflects what was decided.

## Agent Prompt

Apply Workflow First to this repository. Use basilic-skills playbooks. Never `--no-verify`. Do not invent a FIRST skill.

## Notes

**Workflow vs Pipelines:** Workflow is how actors respond. Pipelines are the automated checks.

**Navigation:** [Generic spec](../principles/WORKFLOW.md) · [Human essay](../articles/WORKFLOW.md) · [Factory map](../ABOUT.md)
