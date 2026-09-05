# FIRST

spec: 0.3-draft

This repository’s instance map. Other users of the framework should list only the stations they opted into. Absent files beat empty stubs. Do not copy `instance/` out.

Durable product facts live in `_first/` (factory) and `apps/web/content/docs/` (how to work here). Station files under `instance/` are inspection overlays (Fact, Drift, Unresolved), not a second docs site.

## In

- product: [instance/PRODUCT.md](instance/PRODUCT.md)
- journeys: [instance/JOURNEYS.md](instance/JOURNEYS.md) — landing identity lives in `apps/web`; Google-format `DESIGN.md` not written. When added, it is a Journeys artifact ([DESIGN.md Format](https://raw.githubusercontent.com/google-labs-code/design.md/refs/heads/main/docs/spec.md)), not a station
- architecture: [instance/ARCHITECTURE.md](instance/ARCHITECTURE.md)
- data: [instance/DATA.md](instance/DATA.md)
- api: [instance/API.md](instance/API.md) — site HTTP routes only; no public product API
- documentation: [instance/DOCUMENTATION.md](instance/DOCUMENTATION.md)
- workflow: [instance/WORKFLOW.md](instance/WORKFLOW.md)
- quality: [instance/QUALITY.md](instance/QUALITY.md)
- security: [instance/SECURITY.md](instance/SECURITY.md)
- operations: [instance/OPERATIONS.md](instance/OPERATIONS.md)

Optional `_first/DESIGN.md` is not a station and is not written yet. Tokens live in `packages/ui`. When added, use [DESIGN.md Format](https://raw.githubusercontent.com/google-labs-code/design.md/refs/heads/main/docs/spec.md).

## Out

None for this dogfood. A typical adopter omits stations they do not instantiate (for example Operations before production).
