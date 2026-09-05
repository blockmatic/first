# Packaging

How FIRST is laid out on disk, who edits which files, and which external formats we borrow. Not a thirteenth station. Users of the framework do not copy this file.

## Two people

- **User** — adopting FIRST in a product repo. Installs `npx skills add blockmatic/first`. Copies the user pack into `_first/`, edits `FIRST.md` and writes overlays for stations that are In, merges a pointer into root `AGENTS.md`.
- **Maintainer** — evolving FIRST itself. Work lives in this folder, `../../packages/validate/`, `../articles/`, `../principles/`, and `../../skills/f/`.

Human vs agent is a second axis: `README.md` and `articles/` for humans; `AGENTS.md` and installed `/f-*` skills for agents; `ABOUT.md` for both.

## Format references

Borrow shape, not identity.

- **Packaging** — [SoulSpec](https://soulspec.org/): one folder, a short manifest, required core plus opt-in files, markdown until a tool needs JSON. FIRST is not a persona spec. Do not add `SOUL.md`, `IDENTITY.md`, or `HEARTBEAT.md`.
- **Design artifact** — [DESIGN.md Format](https://raw.githubusercontent.com/google-labs-code/design.md/refs/heads/main/docs/spec.md) ([google-labs-code/design.md](https://github.com/google-labs-code/design.md), alpha): optional `_first/DESIGN.md` with YAML tokens plus markdown rationale. The Google file is how visual identity is written down, parallel to OpenAPI versus API First. It is not a station.

## Three layers

1. **Harness** — root `AGENTS.md` (this repo also has `CLAUDE.md` pointing at it). Project commands, skills, rules. Merge a FIRST pointer. Do not replace the file.
2. **Factory spec (installed skill)** — `.agents/skills/f/` from `npx skills add blockmatic/first`. Refreshable. Generic Recipe and Agent Prompt live here, not in the adopter overlay.
3. **Instance** — `_first/FIRST.md` plus filled station files for stations that are In. Never overwritten by skill refresh. Overlay headings live in [ABOUT.md](../ABOUT.md).

The human pack (`README.md`, `articles/` on the site) is optional for adopters. `principles/` stays in this factory repo as the canonical spec the site `/spec` and skill `references/spec.md` copy. Adopters do not copy `principles/`.

## Folder

`_first/` sorts first in listings. Do not rename to `first/`.

```text
repo/
  AGENTS.md                 # USER harness stub
  .agents/skills/f/         # installed from blockmatic/first
  _first/                   # USER pack
    README.md
    AGENTS.md
    ABOUT.md
    FIRST.md                # USER instance map
    instance/               # this repo’s dogfood overlays only
    maintainers/            # MAINTAINER — do not copy
    articles/               # factory source; site publishes; do not copy
    principles/             # factory source; do not copy
```

Copy for a new user repo: `AGENTS.md`, `ABOUT.md`, and this README if they want the human door. They add `FIRST.md` and write overlays only for stations listed as In. Skip `maintainers/`, `instance/`, `principles/`, and `articles/`. Install `npx skills add blockmatic/first`.

## Why root AGENTS.md points in

[AGENTS.md](https://agents.md/) at the repository root is the portable always-on hook. Nested `_first/AGENTS.md` applies when editing files under `_first/`, not when editing `apps/web/`. The factory rules live in `_first/AGENTS.md`. Root `AGENTS.md` points at it in a few lines.

SoulSpec’s Cursor install writes `.cursor/rules/` for the same reason. FIRST uses root `AGENTS.md` instead so Codex, Copilot, and Windsurf get the hook without a Cursor-only copy. This factory also keeps a root [ABOUT.md](https://github.com/blockmatic/first/blob/main/ABOUT.md) stub so a clone finds the map without opening `_first/` first. Adopters do not copy that stub.

## Load order

1. Root `AGENTS.md`
2. `_first/AGENTS.md`
3. `_first/ABOUT.md`
4. `_first/FIRST.md`
5. The repository’s own instructions and skills (these override generic FIRST)
6. Installed `/f-<station>` skill (`.agents/skills/f/f-<name>/`) for the primary station
7. The instance path listed in `FIRST.md`

Do not load `maintainers/` on a product task.

## FIRST.md

Markdown analogue of SoulSpec’s `soul.json`. Lists which stations are in (path to the artifact), which are out (one-line reason). Paths may point outside `_first/` when the project already has a canonical doc.

Absent files beat unused overlays. Write a station file only when it is listed as In. Human gates (product scope, security-sensitive changes, destructive operations) still apply when `SECURITY.md` is absent — they stay in factory `AGENTS.md`.

When the project has a visual identity file, point at one `DESIGN.md`, not a station. Prefer `_first/DESIGN.md`. Lint with an explicit path: `npx @google/design.md lint _first/DESIGN.md`. A root `DESIGN.md` only if existing tooling requires it; then `FIRST.md` points at that one file. Never two palettes.

Google `DESIGN.md` may omit sections via YAML `omitted` with a reason. Unknown headings are preserved: use them for interface states, copy, motion, and accessibility beyond contrast.

## Overlay as delta

Instance files (`instance/` here, `_first/<product>/` in an adopter) are **deltas**: Fact, Drift, Unresolved, and pointers to canonical docs. Headings: Principle (`See /f-<station>`), Artifacts, Minimum Useful Artifact, Notes. They do **not** clone the generic Recipe, Agent Prompt, or Statement. Product may add Brief, Feature map, and Roadmap after Notes when the overlay is also the canonical brief.

`FIRST.md` may point at existing docs in the adopting repository instead of a long overlay.

## Sync matrix (adopter vendor)

Replace from this repo after reviewing the diff. Never overwrite the adopter’s instance map or overlays. Refresh `/f` with the skills CLI.

| Path in adopter | From this repo | On upstream update |
|---|---|---|
| `_first/AGENTS.md` | `_first/AGENTS.md` | Replace |
| `_first/ABOUT.md` | `_first/ABOUT.md` | Replace |
| `.agents/skills/f/` | `skills/f/` via `npx skills add blockmatic/first` | Refresh |
| `_first/README.md` | `_first/README.md` | Optional replace |
| `_first/articles/` | — | Do not copy; GitHub / site |
| `_first/principles/` | — | Do not copy; live in `/f-*` `references/spec.md` |
| `_first/FIRST.md` | — | **Never overwrite** |
| Instance folder (`instance/`, `_first/basilic/`, …) | — | **Never overwrite** |
| Root `AGENTS.md` | pointer lines only | Merge pointer; never replace the file |
| Root `ABOUT.md` (this factory stub) | — | Adopters skip; not part of the user pack |

## Scratch graduation

`__dev/` (gitignored) and chat are scratch. A note **graduates** when the next session would rediscover it: write the Fact into the canonical docs, an ADR, or the overlay in the same change. Scratch is not the backlog and not Documentation Fact.

## Copy, edit, replace

| File | Who | Update from upstream |
|---|---|---|
| `_first/AGENTS.md`, `ABOUT.md` | User copies; maintainer authors | Replace after reviewing the diff |
| `.agents/skills/f/` | User installs | Refresh via skills CLI |
| `_first/FIRST.md`, opted-in station files | User edits | Never overwrite |
| Root `AGENTS.md` | User merges a pointer | Never overwrite the rest |
| `maintainers/`, `packages/validate`, `principles/`, `articles/` | Maintainer only | Not copied out |

## Rejected

- **`first/` without the underscore** — loses listing order.
- **`.agents/_first`** — hidden; sits next to the skills CLI overwrite target; nested `AGENTS.md` still would not load for app work.
- **A FIRST skill that mixes spec and instance** — refresh would clobber product facts. The `/f` skill is the portable spec only. Instance files stay in `_first/`.
- **Root `PRODUCT.md` … `OPERATIONS.md`** — ten optional files pollute the root. The folder is the package.
- **`first.json`** — SoulSpec’s JSON exists for CLI and registry. Skip until those exist.
- **Cursor-only `.cursor/rules` as the spec hook** — not portable. A one-line always-on pointer in this repo is optional; the spec hook is `AGENTS.md`.
- **Persona files** — not FIRST’s job. Visual work uses `frontend-design-v1`, not a persona spec.

## Related

- User doors: [../README.md](../README.md), [../ABOUT.md](../ABOUT.md), [../AGENTS.md](../AGENTS.md), [../FIRST.md](../FIRST.md)
- Parking lot: [IDEAS.md](IDEAS.md)
- Review: [FEEDBACK.md](FEEDBACK.md)
