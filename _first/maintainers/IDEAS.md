# Ideas

Parking lot for FIRST itself. Not a roadmap. Decided layout lives in [PACKAGING.md](PACKAGING.md). `/f` (nested station skills) shipped; install with `npx skills add blockmatic/first`.

## Later

- **CLI** that asks opt-in questions (UI? public API? production?) and writes `FIRST.md` plus only the chosen instance files. Until then, users edit markdown.
- **`first.json`** when a CLI or site must parse a package. Markdown `FIRST.md` is enough until then.
- **Adopter-pack validator** that checks only files listed in `FIRST.md`. The current `@repo/validate` package is for this source tree (ten essay/spec pairs plus maintainer files).
- **Registry / example adoptions** beyond this repo and basilic.

The public site (What / Why / Spec / Get started) is `apps/web` in this repository.

## Not now

- Renaming `_first/` to `first/`.
- Shipping a FIRST CLI, `first.json`, or a skill that mixes spec and instance (refresh would clobber product facts). `/f` as a portable spec is in.
