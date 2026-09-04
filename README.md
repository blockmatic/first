# FIRST

The open markdown factory for agent-first products. Twelve stations. Essays for humans. Specs for agents. A Next.js site that publishes both.

## Layout

```text
_first/           factory markdown + this repo’s instance overlays
apps/web          landing, articles, spec, maintainer docs
packages/ui       tokens and primitives
packages/validate structural checks for the factory
tools/            eslint and typescript config
```

## Setup

Node **24.x** (see `.nvmrc`). pnpm **11.24.0**.

```bash
pnpm i
pnpm dev
```

The site defaults to [http://localhost:3000](http://localhost:3000).

```bash
pnpm validate    # factory documentation
pnpm lint
pnpm checktypes
pnpm qa
```

## Adopt

Copy `AGENTS.md`, `ABOUT.md`, and `principles/` from `_first/` into `_first/` of your product repo. Add `FIRST.md`. Skip `instance/` and `maintainers/`. Details: [Packaging](https://github.com/blockmatic/first/blob/main/_first/maintainers/PACKAGING.md) and `/docs` on the site.

## Links

- [Development](apps/web/content/docs/development.mdx)
- [SoulSpec](https://soulspec.org/) — packaging inspiration only; FIRST is not a persona spec
