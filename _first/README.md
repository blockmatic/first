# First Principles

Some decisions are too consequential to become afterthoughts. This folder is a markdown factory for building software products with humans and agents in the loop.

It is agent-first, not agent-autonomous. Humans still decide product scope, security-sensitive changes, and anything that cannot be recovered from the repository.

## Who this is for

- **Users of the framework** — you. Install `npx skills add blockmatic/first`. Copy the user pack into `_first/` in your repo. Edit [FIRST.md](FIRST.md) and write overlays only for stations listed as In. Start with this README, then [ABOUT.md](ABOUT.md).
- **Maintainers of the framework** — people evolving FIRST itself. Go to [maintainers/README.md](maintainers/README.md). Do not copy `maintainers/` or `instance/` into a product repo.

## How to read this

Start with the essays in `articles/`. Each one argues why a concern has to be named before implementation, chat, or a generated UI invents it. Essays are for humans. They do not contain an agent prompt.

When you want to apply that concern to a real project, invoke the matching `/f-*` skill (install with `npx skills add blockmatic/first`). In this factory repo the same spec also lives in `principles/` for the site `/spec`. Same filename as the essay. The spec is the working recipe: artifacts, steps, validation, and — last — an agent prompt you can skip if you are doing the work yourself.

The ten are stations, not a waterfall and not competing religions. Read them in order the first time. After that, open the station the work is actually touching.

Same filename in both folders: `articles/API.md` argues; `principles/API.md` operates. Do not merge those jobs. Do not look for `articles/index.md`. Adopters install `/f`; they do not copy `principles/`.

When a station is in scope, read the essay for the argument, then the spec if you are going to apply it. An agent skips the essay unless a human asked for the argument.

## The ten

Each station has a human essay and an operational spec. Read the essay to understand the argument; use the spec to do the work.

| # | Station | Human essay | Operational spec | Owns |
|---:|---|---|---|---|
| 1 | Product | [Read](articles/PRODUCT.md) | [Apply](principles/PRODUCT.md) | What, why, audience, GTM, and how we will know |
| 2 | Journeys | [Read](articles/JOURNEYS.md) | [Apply](principles/JOURNEYS.md) | Actors, states, permissions, errors, completion, and interface expression |
| 3 | Architecture | [Read](articles/ARCHITECTURE.md) | [Apply](principles/ARCHITECTURE.md) | System boundaries, dependency direction, and deployment shape |
| 4 | Data | [Read](articles/DATA.md) | [Apply](principles/DATA.md) | Canonical domain concepts, ownership, lifecycle, and evolution |
| 5 | API | [Read](articles/API.md) | [Apply](principles/API.md) | Capability and contract boundaries |
| 6 | Documentation | [Read](articles/DOCUMENTATION.md) | [Apply](principles/DOCUMENTATION.md) | Durable, accurate, discoverable context |
| 7 | Workflow | [Read](articles/WORKFLOW.md) | [Apply](principles/WORKFLOW.md) | Actors, handoffs, work state, gates, and automated delivery |
| 8 | Quality | [Read](articles/QUALITY.md) | [Apply](principles/QUALITY.md) | Acceptance, tests, evals, and budgets |
| 9 | Security | [Read](articles/SECURITY.md) | [Apply](principles/SECURITY.md) | Trust, authorization, secrets, and agent permissions |
| 10 | Operations | [Read](articles/OPERATIONS.md) | [Apply](principles/OPERATIONS.md) | Runtime health, support, and recovery |

The map of stations, loops, and boundaries is [ABOUT.md](ABOUT.md). That file is for both audiences. It is not another essay.

This is not a methodology to install. It is not a waterfall. New stations need a distinctive decision they own; a shared theme or a new tool is not enough. Events remain Product, external contracts remain API, eval datasets remain Quality, telemetry remains Operations, and the commit-stage build remains Workflow.

## Using FIRST in another repository

Install the skill, then copy the user pack into `_first/` at the repository root (the folder name sorts first in listings):

```bash
npx skills add blockmatic/first
```

- [AGENTS.md](AGENTS.md)
- [ABOUT.md](ABOUT.md)
- this README if you want the human door

Skip `principles/`, `articles/`, `maintainers/`, and `instance/`. Essays live on the site.

Add [FIRST.md](FIRST.md) listing which stations are in (path to the artifact) and which are out (one-line reason). Merge a pointer into the existing root `AGENTS.md`. Do not overwrite that file. Do not copy `ABOUT.md` into the repository root as a loose file. Overlay headings: [ABOUT.md](ABOUT.md) (Overlay contract).

```markdown
- FIRST: `_first/AGENTS.md` then `_first/ABOUT.md` then `_first/FIRST.md`; then `/f-*` and the instance path listed in FIRST.md
```

Keep project-specific facts in `FIRST.md` and opted-in station files, or in docs those files point at. Do not edit the generic specs to encode one project's choices. Absent files beat empty stubs. Do not generate ten skeletons.

Example `FIRST.md`:

```markdown
# FIRST
spec: 0.3-draft

## In
- product: _first/PRODUCT.md
- journeys: _first/JOURNEYS.md
- architecture: docs/architecture.md

## Out
- operations — not in production
```

When Journeys includes a visual identity file, that artifact follows [DESIGN.md Format](https://raw.githubusercontent.com/google-labs-code/design.md/refs/heads/main/docs/spec.md). Prefer `_first/DESIGN.md`. Lint with an explicit path if you use the Google CLI. Never two palettes. It is a Journeys artifact, not a station.

The target repository's instructions override generic FIRST guidance. Adopt upstream FIRST changes by replacing factory files (`AGENTS.md`, `ABOUT.md`, this README if you vendored it) and refreshing `/f` after reviewing the diff. Never overwrite `FIRST.md` or instance files.

Complete structural validation is for this source tree, not a drop-in copy. From the repository root:

```sh
pnpm validate
pnpm --filter @repo/validate test
```

The lint workflow runs `pnpm validate` on pull requests. Structural validation is not a substitute for the publication review described in [ABOUT.md](ABOUT.md).

## Agents

If you are setting up a coding agent to apply this factory, start at [AGENTS.md](AGENTS.md). Essays are optional for the agent. Specs ship as `/f-*`. Install `npx skills add blockmatic/first`.
