import Link from 'next/link'

const tree = `repo/
  AGENTS.md              ← harness pointer
  _first/
    FIRST.md             ← instance map (required)
    AGENTS.md            ← load order + gates
    ABOUT.md             ← station map + overlay contract
    PRODUCT.md           ← opted-in overlay (example)`

const firstMd = `# FIRST
spec: 0.3-draft

## In
- product: _first/PRODUCT.md
- journeys: _first/JOURNEYS.md
- architecture: docs/architecture.md

## Out
- operations — not in production`

export function Spec() {
  return (
    <section id="spec" className="border-b border-border px-6 py-20">
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Spec</p>
      <h2 className="font-display mt-3 text-3xl md:text-4xl">
        Markdown. No build step for the pack.
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Copy the user pack. Skip <code>instance/</code> and <code>maintainers/</code>. Edit FIRST.md
        and only the stations you opted into.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <pre className="overflow-x-auto border border-border bg-card p-5 font-mono text-xs leading-relaxed">
          {tree}
        </pre>
        <pre className="overflow-x-auto border border-border bg-card p-5 font-mono text-xs leading-relaxed">
          {firstMd}
        </pre>
      </div>
      <p className="mt-6">
        <Link href="/spec" className="font-display text-sm underline underline-offset-4">
          Browse all ten templates
        </Link>
      </p>
    </section>
  )
}
