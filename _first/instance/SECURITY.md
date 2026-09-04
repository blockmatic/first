# Security First

## Principle

Name what we are trusting, protecting, exposing, and allowing — including the agent as a principal — before features accumulate implicit trust.

## Statement

I treat trust as a design decision. Secrets, public surfaces, and agent permissions should be explicit. This site has no user accounts; the threat model is still real: leaked tokens, prompt injection via markdown, and over-broad agent write access.

## Outcome

Public vs private is clear. Secrets stay in Vercel/GitHub. Agents have human gates for destructive and trust-boundary edits. Factory markdown is treated as executable instruction for adopters’ agents.

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

## Recipe

1. Inspect workflows, Vercel env, and AGENTS.md gates.
2. Do not add auth to complete this template.
3. Treat principle/article edits as security-relevant instruction changes.

## Validation

- No committed secrets.
- Human gates remain in factory AGENTS.md even if SECURITY.md is unread.

## Definition of Done

Trust boundaries match what shipped. Agent permissions are the markdown + site, not production data.

## Agent Prompt

Apply Security First to this repository. There is no session cookie. Do not port Basilic auth. Review factory markdown as agent instructions.

## Notes

**Security vs API:** Security owns who may. API owns how denial would appear — here, it does not; routes are public.

**Navigation:** [Generic spec](../principles/SECURITY.md) · [Human essay](../articles/SECURITY.md) · [Factory map](../ABOUT.md)
