# Documentation First

## Principle

Keep the context that must survive a conversation in files that humans and agents can find, trust, and update.

## Statement

I do not treat chat as the system of record. If a decision, constraint, or how-to must still be true next week, it belongs in a durable file with an owner and a way to notice drift. Documentation that cannot be wrong is decoration.

## Outcome

Project knowledge has a home. Agents load a known order. Humans can find the argument and the spec without reconstructing them from the UI. When behavior changes, the durable files change in the same work.

## Artifacts

- **Fact:** Factory: `_first/` — README (humans), AGENTS.md (agents), ABOUT.md (map), articles (essays), principles (specs)
- **Fact:** This repo’s instance: `_first/FIRST.md` + `_first/instance/`
- **Fact:** How to work: `apps/web/content/docs/` and root README
- **Fact:** Site is a projection of articles/principles plus maintainer docs
- **Fact:** Load order: root `AGENTS.md` → `_first/AGENTS.md` → ABOUT → FIRST → principles/X → instance path
- **Drift:** Essays remain `status: draft` until publication review ([`../maintainers/FEEDBACK.md`](../maintainers/FEEDBACK.md))

## Minimum Useful Artifact

- human door: `_first/README.md` and the public site
- agent door: root `AGENTS.md` pointer
- maintainer door: `/docs` and `maintainers/`
- update rule: same change as the code or the factory wording

## Recipe

1. Inspect `_first/`, `/docs`, and README.
2. Do not put basilic product facts into principles.
3. When factory wording changes, update the site by leaving markdown where it is.

## Validation

- A new agent can load FIRST without a custom skill.
- Chat is not the system of record for station definitions.

## Definition of Done

Durable context is findable and was updated with the change.

## Agent Prompt

Apply Documentation First to this repository. Factory files are canonical. Site pages must not become a forked copy of essays.

## Notes

**Documentation vs Workflow:** Workflow says when files are written. Documentation says which files must last.

**Navigation:** [Generic spec](../principles/DOCUMENTATION.md) · [Human essay](../articles/DOCUMENTATION.md) · [Factory map](../ABOUT.md)
