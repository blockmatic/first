# API First

## Principle

Define the capability and its boundary before consumers couple to an accidental implementation.

## Statement

I treat the capability and its boundary as a design decision, not an implementation leftover. Before a second consumer depends on a shape, I want to know what goes in, what comes out, what fails, which Security-owned authorization requirement applies, and how denial appears. That contract might be HTTP, a typed module, an event, a CLI, or an agent tool. The format matters less than making the boundary explicit on purpose.

## Outcome

Meaningful boundaries have explicit inputs, outputs, errors, and references to applicable authorization requirements. Implementations enforce those requirements and conform, or the contract is updated deliberately. Agent tools have the same explicitness as HTTP routes. A second consumer can be written without reading the handler.

## Artifacts

- **Fact:** No public product API and no OpenAPI. This station covers **site HTTP routes** only
- **Fact:** Routes: `/`, `/articles`, `/articles/[station]`, `/spec`, `/spec/[station]`, `/docs`, `/llms.txt`, `/api/search`, `/sitemap.xml`, `/robots.txt`
- **Fact:** Unknown station slug → `notFound()` (HTTP 404)
- **Fact:** Search is Fumadocs `/api/search` over `/docs` (and indexed factory pages where wired)
- **Fact:** Adopter “API” is the markdown pack: copy files, not HTTP
- **Unresolved:** versioned HTTP for the factory; MCP server (parked in IDEAS)

Who may call is Security. These routes are public. There are no credentials.

## Minimum Useful Artifact

- operations: GET pages listed above
- errors: 404 for unknown slugs
- auth: none
- compatibility: stable paths `/articles/{station}` and `/spec/{station}` lowercase

## Recipe

1. Inspect `apps/web/app`.
2. Do not add Fastify to complete this template.
3. When a route changes, update this file, sitemap, and robots.

## Validation

- A second consumer (curl, LLM via `/llms.txt`) can find essays without reading React components.
- 404 is real for unknown stations.

## Definition of Done

Site boundaries are explicit. No accidental RPC from a Server Action.

## Agent Prompt

Apply API First to this repository. There is no Fastify app. Do not generate OpenAPI. Document site routes and the copy-pack boundary.

## Notes

**API vs Architecture:** Architecture names `apps/web`. API names the URLs and the pack copy contract.

**Navigation:** [Generic spec](../principles/API.md) · [Human essay](../articles/API.md) · [Factory map](../ABOUT.md)
