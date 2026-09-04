# Ideas

Parking lot for FIRST itself. Not a roadmap. Decided layout lives in [PACKAGING.md](PACKAGING.md).

## Later

- **CLI** that asks opt-in questions (UI? public API? production?) and writes `FIRST.md` plus only the chosen instance files. Until then, users edit markdown.
- **`first.json`** when a CLI or site must parse a package. Markdown `FIRST.md` is enough until then.
- **Adopter-pack validator** that checks only files listed in `FIRST.md`. The current `@repo/validate` package is for this source tree (twelve essay/spec pairs plus maintainer files).
- **Registry / example adoptions** beyond this repo and basilic.

The public site (What / Why / Spec / Get started) is `apps/web` in this repository.

## Not now

- Generating a Basilic Google-format `DESIGN.md` from `packages/ui` tokens. `tokens.css` remains source of truth until a real file is written on purpose.
- Renaming `_first/` to `first/`.
- Shipping FIRST as a Cursor skill or under `.agents/`.
