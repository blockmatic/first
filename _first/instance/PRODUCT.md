# Product First

## Principle

Define what you are building, for whom, why it is worth building, and how you will know — before implementation becomes the specification.

## Statement

I do not let the codebase become the product brief. Before I change meaningful behavior, I want a file that names the problem, who has it, why it is worth building, what we are not building, how it reaches people, and how we will know. Implementation can reveal a better option. It should not invent the goal.

## Outcome

The project has an inspectable answer to what, why, and how we will know. Non-goals, GTM, success metrics, and the tracking plan are written or explicitly unresolved. Named metrics have events, or are marked unmeasured. When the product is a business, market size and unit economics are stated as measured or as hypotheses.

## Artifacts

- **Fact:** [`../../README.md`](../../README.md) — FIRST factory plus Next.js site
- **Fact:** Two audiences: **adopters** (copy the user pack into `_first/`) and **maintainers** (evolve stations, essays, site)
- **Fact:** Not a billed SaaS. No TAM/LTV. Do not invent a marketplace of personas — that is SoulSpec, not FIRST
- **Fact:** Observed non-goals: no CLI, no `first.json`, no registry, no 13th station ([`../maintainers/IDEAS.md`](../maintainers/IDEAS.md)). `/f` via `npx skills add blockmatic/first` is in.
- **Fact:** Site publishes `articles/` (essays) and `principles/` (templates). Instance overlays stay in git, not as a second docs site
- **Unresolved:** GTM (channel, first successful use); success metrics that can fail (not `pnpm qa`); named decision owners
- **Unresolved:** keep / iterate / kill board; custom domain

`pnpm qa` going green is Quality/Pipelines, not product success.

## Minimum Useful Artifact

- problem: name consequential product concerns before implementation, chat, or a generated UI invents them
- users: adopting teams and factory maintainers
- goal: a portable markdown factory with a public site for essays and templates
- non-goals: listed above
- audience/channel/first use: **unresolved** beyond “copy the pack, read the site”
- metrics: **unmeasured**
- owners: **unresolved**

## Recipe

1. Inspect README, this file, the running site, and claimed metrics.
2. Understand shipped vs claimed (factory vs site vs adopter experience).
3. Identify missing users, missing goal, success that cannot fail.
4. Propose the smallest useful update to a durable product artifact — not a parallel fake PRD.
5. Make decisions explicit, or name them unresolved.
6. When a change can move a metric, ship the event in the same work — or mark unmeasured.
7. After use, compare metric to target — when metrics exist.
8. Update durable artifacts and this instance if the bet changed.

## Validation

- A new contributor can answer what we are building from README + this file.
- Success metrics can fail. They are not CI green. Currently unmeasured.
- GTM is named at the level the product needs, or marked unresolved.

## Definition of Done

Product intent is documented or explicitly deferred with named owners. Implementation aligns with stated goals and non-goals, or the docs were updated.

## Agent Prompt

Apply Product First to this repository.

Read README, this instance, the site, and maintainer notes before proposing features. Do not invent TAM, a persona registry, or a CLI. Preserve the copy-in user pack and the `/f` skill as portable spec. If the bet changes, update durable project files.

## Notes

**Product vs Journeys:** Product names what, why, and how we will know. Journeys name how someone finishes.

**Navigation:** [Generic spec](../principles/PRODUCT.md) · [Human essay](../articles/PRODUCT.md) · [Factory map](../ABOUT.md)
