# API First

## Principle

See /f-api.

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

## Notes

Architecture names `apps/web`. API names the URLs and the pack copy contract. Do not generate OpenAPI.

**Navigation:** [Generic spec](../principles/API.md) · [Human essay](../articles/API.md) · [Factory map](../ABOUT.md)
