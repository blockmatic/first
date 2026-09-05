# @repo/validate

Structural checks for the FIRST source tree: ten essay/spec pairs, `/f` skill catalog and spec sync, headings, front matter, principle parity, station order, and local links.

```bash
pnpm validate
pnpm --filter @repo/validate test
```

Does not lint factory `instance/` headings. Adopter packs use a separate opt-in:

```bash
pnpm --filter @repo/validate validate:adopter -- <path-to-_first>
pnpm --filter @repo/validate validate:adopter -- <path-to-_first> --skills <path-to-.agents/skills/f>
```

The adopter check reads `FIRST.md` In keys (the ten stations only), overlay paths and headings, forbids cloned spec headings, and fails leftover `f-designer` / `f-pipelines` folders when a skills tree is present.
