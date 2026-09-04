# Data First

## Principle

Define canonical domain concepts, ownership, lifecycle, and change rules before stores, schemas, and events proliferate competing truths.

## Statement

I treat data as durable product state with meaning, ownership, and a lifecycle—not as columns left behind by features. Before several stores or consumers encode the same concept differently, I want to know what the concept means, which system is authoritative, how identity works, how it changes, how long it lives, and how it is removed.

## Outcome

Core domain concepts have shared names and definitions. Each important dataset has an owner and authoritative source. Identity, constraints, retention, deletion, lineage, and schema evolution are explicit at the level the product needs. Migrations preserve or deliberately transform meaning. Copies do not silently become competing sources of truth.

## Artifacts

- **Fact:** Domain: twelve **stations**; each has an essay (`articles/X.md`) and a spec (`principles/X.md`)
- **Fact:** Identity: uppercase filename `PRODUCT.md` … `OPERATIONS.md`. Site slugs are lowercase `product`
- **Fact:** Owner of factory meaning: this git repository’s `_first/` tree
- **Fact:** Derived copy: HTML on `apps/web` — rebuilds from markdown, must not diverge in wording
- **Fact:** Instance overlays: `instance/X.md` — inspection notes, not a second essay
- **Fact:** No database. No user records
- **Unresolved:** retention of published essay revisions beyond git; translation copies

## Minimum Useful Artifact

- name: station
- identity: filename stem in the canonical twelve-name list
- owner: `_first/` maintainers
- writers: humans (and agents) on PRs; readers: site, adopters, agents
- derived copies: Next.js pages
- evolution: paired article + principle change in the same PR; `pnpm validate`

## Recipe

1. Inspect `_first/articles`, `principles`, and site loaders.
2. Do not add a CMS or database to complete this template.
3. When a station is renamed, update validator, site slugs, and indexes together.

## Validation

- Essay and spec Principle sections match.
- Site pages are generated from factory files, not a pasted fork.

## Definition of Done

Station meaning has one owner. The site is a derived copy.

## Agent Prompt

Apply Data First to this repository. Do not invent a user table. The domain is stations, essays, specs, and instance maps.

## Notes

**Data vs Documentation:** Data owns meaning. Documentation owns what must stay discoverable.

**Navigation:** [Generic spec](../principles/DATA.md) · [Human essay](../articles/DATA.md) · [Factory map](../ABOUT.md)
