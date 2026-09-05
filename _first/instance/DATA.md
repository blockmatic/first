# Data First

## Principle

See /f-analyst.

## Artifacts

- **Fact:** Domain: ten **stations**; each has an essay (`articles/X.md`) and a spec (`principles/X.md`)
- **Fact:** Identity: uppercase filename `PRODUCT.md` … `OPERATIONS.md`. Site slugs are lowercase `product`
- **Fact:** Owner of factory meaning: this git repository’s `_first/` tree
- **Fact:** Derived copy: HTML on `apps/web` — rebuilds from markdown, must not diverge in wording
- **Fact:** Instance overlays: `instance/X.md` — inspection notes, not a second essay
- **Fact:** No database. No user records
- **Unresolved:** retention of published essay revisions beyond git; translation copies

## Minimum Useful Artifact

- name: station
- identity: filename stem in the canonical ten-name list
- owner: `_first/` maintainers
- writers: humans (and agents) on PRs; readers: site, adopters, agents
- derived copies: Next.js pages
- evolution: paired article + principle change in the same PR; `pnpm validate`

## Notes

Data owns meaning. Documentation owns what must stay discoverable. Do not invent a user table.

**Navigation:** [Generic spec](../principles/DATA.md) · [Human essay](../articles/DATA.md) · [Factory map](../ABOUT.md)
