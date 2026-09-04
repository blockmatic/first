# FIRST

spec: 0.2-draft

This repository’s instance map. Other users of the framework should list only the stations they opted into. Absent files beat empty stubs. Do not copy `instance/` out.

Durable product facts live in `_first/` (factory) and `apps/web/content/docs/` (how to work here). Station files under `instance/` are inspection overlays (Fact, Drift, Unresolved), not a second docs site.

## In

- product: [instance/PRODUCT.md](instance/PRODUCT.md)
- journeys: [instance/JOURNEYS.md](instance/JOURNEYS.md)
- design: [instance/DESIGN.md](instance/DESIGN.md) — landing identity lives in `apps/web`; Google-format `DESIGN.md` not written. When added, use [DESIGN.md Format](https://raw.githubusercontent.com/google-labs-code/design.md/refs/heads/main/docs/spec.md)
- architecture: [instance/ARCHITECTURE.md](instance/ARCHITECTURE.md)
- data: [instance/DATA.md](instance/DATA.md)
- api: [instance/API.md](instance/API.md) — site HTTP routes only; no public product API
- documentation: [instance/DOCUMENTATION.md](instance/DOCUMENTATION.md)
- workflow: [instance/WORKFLOW.md](instance/WORKFLOW.md)
- pipelines: [instance/PIPELINES.md](instance/PIPELINES.md)
- quality: [instance/QUALITY.md](instance/QUALITY.md)
- security: [instance/SECURITY.md](instance/SECURITY.md)
- operations: [instance/OPERATIONS.md](instance/OPERATIONS.md)

## Out

None for this dogfood. A typical adopter omits stations they do not instantiate (for example Design with no UI, Operations before production).
