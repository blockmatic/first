# Operations First

## Principle

See, support, and recover the running system — not only the repository — before incidents invent the runbook.

## Statement

I want to know how the site is hosted, who notices when it is down, and how we recover. This product has no multi-region data plane. It still has a running Next.js app.

## Outcome

Hosting, deploy, and a minimal recovery path are written. SLOs are not invented. Support is GitHub issues.

## Artifacts

- **Fact:** Runtime: Vercel for `apps/web`
- **Fact:** Recovery: redeploy from `main`; preview deploys from PRs
- **Fact:** Support: GitHub issues on `blockmatic/first`
- **Fact:** No APM, no on-call rotation, no error-tracking package in this repo
- **Unresolved:** status page; Sentry; custom domain DNS runbook; named owner for production incidents

## Minimum Useful Artifact

- host: Vercel
- deploy: git push to main
- recover: revert or redeploy
- support: GitHub issues
- SLO: **unresolved** — do not invent one

## Recipe

1. Inspect Vercel project and GitHub repo settings.
2. Do not copy Basilic’s API/ops stack.
3. When a monitor is added, name it here.

## Validation

- A maintainer can say where production runs without asking in chat.
- Missing SLOs are labeled unresolved, not filled with fiction.

## Definition of Done

Hosting and recovery are explicit. Unresolved ops are labeled.

## Agent Prompt

Apply Operations First to this repository. Do not invent SLOs or an on-call chart. Document Vercel and GitHub as the running system.

## Notes

**Operations vs Pipelines:** Pipelines ship. Operations is the running site.

**Navigation:** [Generic spec](../principles/OPERATIONS.md) · [Human essay](../articles/OPERATIONS.md) · [Factory map](../ABOUT.md)
