# Security First

## Principle

See /f-security.

## Artifacts

- **Fact:** Public: entire site and the `_first/` user pack
- **Fact:** Secrets: GitHub Actions (`TURBO_TOKEN`, `GITLEAKS_LICENSE` if set), Vercel env (`NEXT_PUBLIC_SITE_URL`)
- **Fact:** No auth cookies, no PII store, no user identity
- **Fact:** Agent as principal: can edit markdown and the site; must stop for product scope, secrets, destructive git
- **Fact:** Scanners: gitleaks on PR; pre-commit Biome only (no DeepSec in this repo)
- **Fact:** Factory files are prompts. Maintainers review essay/spec changes as instruction changes
- **Unresolved:** supply-chain pinning beyond pnpm lockfile; CSP headers on Vercel

## Minimum Useful Artifact

- trust: public markdown + public site
- secrets: none required to read; deploy tokens in the host
- agent: human gates in `_first/AGENTS.md`
- classification: factory = public; `.env.local` = private

## Notes

Security owns who may. API owns how denial would appear — here it does not; routes are public. There is no session cookie. Do not port Basilic auth. Treat principle/article edits as instruction changes.

**Navigation:** [Generic spec](../principles/SECURITY.md) · [Human essay](../articles/SECURITY.md) · [Factory map](../ABOUT.md)
