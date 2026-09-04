export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border px-6 py-24 md:py-32">
      <p className="font-mono text-xs tracking-[0.35em] text-brass uppercase">
        v0.2-draft — Open Factory
      </p>
      <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight md:text-7xl">
        FIRST
        <span className="mt-3 block text-3xl font-normal text-muted-foreground md:text-4xl">
          The open factory for agent-first products
        </span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
        A structured, portable set of markdown files that name identity, personality of the work,
        and operational specs — before implementation, chat, or a generated UI invents them.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#spec"
          className="bg-primary px-5 py-3 font-display text-sm font-medium text-primary-foreground"
        >
          Read the spec
        </a>
        <a href="#start" className="border border-border px-5 py-3 font-display text-sm">
          Get started
        </a>
      </div>
    </section>
  )
}
