const files = [
  {
    name: 'FIRST.md',
    role: 'Instance map. Which stations are in, which are out — the project’s passport.',
  },
  {
    name: 'ABOUT.md',
    role: 'Canonical map of stations, loops, and boundaries. Shared by humans and agents.',
  },
  {
    name: 'overlays',
    role: 'Deltas for stations listed as In. Fact, Drift, Unresolved — not a second copy of /f-*.',
  },
  {
    name: '/f-*',
    role: 'Installed skills. Operational specs for each station, refreshable without touching instance files.',
  },
]

export function What() {
  return (
    <section id="what" className="border-b border-border px-6 py-20">
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">What</p>
      <h2 className="font-display mt-3 text-3xl md:text-4xl">
        A spec-to-code factory you run first
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        AGENTS.md in your repo says how agents work on your code. FIRST says which product concerns
        must exist as files before those agents fill the gaps.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {files.map(file => (
          <li key={file.name} className="border border-border bg-card p-5">
            <p className="font-mono text-sm text-brass">{file.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{file.role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
