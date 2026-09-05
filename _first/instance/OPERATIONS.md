# Operations First

## Principle

See /f-operations.

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

## Notes

Workflow ships. Operations is the running site. Do not invent SLOs or an on-call chart. Do not copy another adopter’s API/ops stack.

**Navigation:** [Generic spec](../principles/OPERATIONS.md) · [Human essay](../articles/OPERATIONS.md) · [Factory map](../ABOUT.md)
