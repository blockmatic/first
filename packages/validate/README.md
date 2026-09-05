# @repo/validate

Structural checks for the FIRST source tree: twelve essay/spec pairs, templates, `/f` skill catalog and spec sync, headings, front matter, principle parity, station order, and local links.

```bash
pnpm validate
pnpm --filter @repo/validate test
```

Does not lint `instance/` headings. Adopter packs are not this validator’s job.
