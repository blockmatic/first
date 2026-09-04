# Agent instructions

This repository uses **Cursor-native** AI workflows. Do not run a parallel process.

- `.cursor/rules/` — constraints (override skills)
- `.agents/skills/` — tech patterns (`<topic>-v<major>/`) and slash playbooks under `workflow/`; install/refresh via `pnpm dlx skills@latest add blockmatic/basilic-skills` (see [Cursor Skills](apps/web/content/docs/development.mdx))
- `apps/web/content/docs/` — how to work in this repo
- FIRST: `_first/AGENTS.md` then `_first/FIRST.md`; then `_first/principles/X.md` and the instance path listed in FIRST.md

This repo **is** the FIRST factory. Do not encode adopter-product facts into `principles/`. Basilic and other products vendor the user pack and keep their own instance files.
