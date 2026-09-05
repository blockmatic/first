# Product First

## Principle

See /f-product.

## Artifacts

- **Fact:** [`../../README.md`](../../README.md) — FIRST factory plus Next.js site
- **Fact:** Two audiences: **adopters** (copy the user pack into `_first/`) and **maintainers** (evolve stations, essays, site)
- **Fact:** Not a billed SaaS. No TAM/LTV. Do not invent a marketplace of personas — that is SoulSpec, not FIRST
- **Fact:** Observed non-goals: no CLI, no `first.json`, no registry, no 13th station ([`../maintainers/IDEAS.md`](../maintainers/IDEAS.md)). `/f` via `npx skills add blockmatic/first` is in.
- **Fact:** Site publishes `articles/` (essays) and `principles/` (operational specs). Instance overlays stay in git, not as a second docs site
- **Fact:** Tokens live in `packages/ui/src/styles/tokens.css`. No Google-format `DESIGN.md` yet
- **Fact:** Distinctive type: Syne (display), Source Serif 4 (body), IBM Plex Mono (file trees). Palette: cool mist paper / violet-slate night, Prussian primary, brass accent. Not basilic teal
- **Unresolved:** GTM (channel, first successful use); success metrics that can fail (not `pnpm qa`); named decision owners
- **Unresolved:** keep / iterate / kill board; custom domain

`pnpm qa` going green is Workflow, not product success.

## Minimum Useful Artifact

- problem: name consequential product concerns before implementation, chat, or a generated UI invents them
- users: adopting teams and factory maintainers
- goal: a portable markdown factory with a public site for essays and specs
- non-goals: listed above
- audience/channel/first use: **unresolved** beyond “copy the pack, read the site”
- metrics: **unmeasured**
- owners: **unresolved**

## Notes

Product names the job. Journeys name how it finishes. Quality names the release bar. Workflow runs `pnpm qa`.

Do not invent TAM, a persona registry, or a CLI. Preserve the copy-in user pack and the `/f` skill as portable spec. Use `frontend-design-v1` for landing work. Do not clone basilic or SoulSpec chrome. Do not invent a second palette.

**Navigation:** [Generic spec](../principles/PRODUCT.md) · [Human essay](../articles/PRODUCT.md) · [Factory map](../ABOUT.md)
