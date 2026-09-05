---
name: onboard-new-developer
description: Comprehensive onboarding process to get new developer up and running quickly. Use when the user types /onboard-new-developer.
disable-model-invocation: true
---

Comprehensive onboarding for the FIRST factory repo (not Basilic). Docs: `apps/web/content/docs/development.mdx`.

1. **Environment setup**: Node 24, pnpm from `packageManager`, git/SSH
2. **Clone and setup**: `pnpm setup` at repo root
3. **Run the site**: `pnpm dev` (Next.js in `apps/web`)
4. **Validate the factory**: `pnpm validate` when changing `_first/` essays or specs
5. **Verify**: Site loads; `pnpm qa` if you changed code
6. **Project familiarization**: `_first/AGENTS.md` → `_first/ABOUT.md` → `_first/FIRST.md`; do not copy `maintainers/` or `instance/` into product repos
