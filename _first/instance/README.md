# FIRST instances

Operational overlays for applying FIRST to this factory-and-site repository. Not a second factory. Durable facts live in `_first/` (user pack) and `apps/web/content/docs/`.

This folder is this repository’s adoption pack. When copying FIRST into another repo, skip this directory and `maintainers/`. Copy `README.md`, `ABOUT.md`, and `AGENTS.md` into `_first/`. Add `FIRST.md`. Write overlays only for stations listed as In. Install `npx skills add blockmatic/first`. Overlay headings: [`../ABOUT.md`](../ABOUT.md) (Overlay contract).

## Load order

1. [`../AGENTS.md`](../AGENTS.md)
2. [`../ABOUT.md`](../ABOUT.md)
3. [`../FIRST.md`](../FIRST.md)
4. Repo instructions ([`../../AGENTS.md`](../../AGENTS.md), `.cursor/rules`, `.agents/skills`) — these override generic FIRST
5. Installed `/f-<station>` then `X.md` in this folder

Use `/f-*` for the operational spec. Essays stay on the site.

## Discovery loop

1. Name one primary station. Load a secondary spec only if the change crosses that station’s boundary.
2. Read the generic spec, then this instance.
3. Inspect implementation and `apps/web`. Distinguish facts, inferences, assumptions, questions.
4. Propose the smallest useful update: portable factory wording, this instance, or a durable project file.
5. Implement against that contract.
6. Validate with this repo’s checks (`pnpm qa`). Run `pnpm validate` when generic FIRST files changed.
7. Update this instance if a real path or check was learned. Update `../principles/X.md` only if the portable recipe was wrong.

## Format sync

Required overlay `##` headings (see [`../ABOUT.md`](../ABOUT.md)):

`Principle` · `Artifacts` · `Minimum Useful Artifact` · `Notes`

Product may add `Brief` · `Feature map` · `Roadmap` after Notes. Do **not** paste Recipe, Statement, Outcome, Validation, Definition of Done, or Agent Prompt from `../principles/X.md`. Do not teach this folder to `@repo/validate`.

Filenames match the ten stations in order: PRODUCT, JOURNEYS, ARCHITECTURE, DATA, API, DOCUMENTATION, WORKFLOW, QUALITY, SECURITY, OPERATIONS.

## Link convention

From a station file in this folder:

- Generic spec: `../principles/X.md`
- Essay: `../articles/X.md`
- Instance map: `../FIRST.md`
- Factory map: `../ABOUT.md`
- Site docs: `../../apps/web/content/docs/`
- Repo root: `../../README.md`

## Stations

| # | Station | Instance |
|---:|---|---|
| 1 | Product | [PRODUCT.md](PRODUCT.md) |
| 2 | Journeys | [JOURNEYS.md](JOURNEYS.md) |
| 3 | Architecture | [ARCHITECTURE.md](ARCHITECTURE.md) |
| 4 | Data | [DATA.md](DATA.md) |
| 5 | API | [API.md](API.md) |
| 6 | Documentation | [DOCUMENTATION.md](DOCUMENTATION.md) |
| 7 | Workflow | [WORKFLOW.md](WORKFLOW.md) |
| 8 | Quality | [QUALITY.md](QUALITY.md) |
| 9 | Security | [SECURITY.md](SECURITY.md) |
| 10 | Operations | [OPERATIONS.md](OPERATIONS.md) |

Do not invent TAM, event taxonomies, or SLOs to complete an overlay. Label **Fact**, **Drift**, and **Unresolved** under Artifacts.

## Overlay as delta

Keep the overlay headings. Fill Artifacts with pointers and facts. If the durable brief already lives in `apps/web/content/docs/`, the overlay points there.
