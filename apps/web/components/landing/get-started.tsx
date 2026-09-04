import Link from 'next/link'

export function GetStarted() {
  return (
    <section id="start" className="px-6 py-20">
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
        Get started
      </p>
      <h2 className="font-display mt-3 text-3xl md:text-4xl">
        Copy the pack. Do not install a skill.
      </h2>
      <ol className="mt-10 max-w-2xl list-decimal space-y-4 pl-5 text-muted-foreground">
        <li>
          Copy <code>AGENTS.md</code>, <code>ABOUT.md</code>, and <code>principles/</code> into{' '}
          <code>_first/</code> at your repository root.
        </li>
        <li>
          Create <code>FIRST.md</code> listing stations in (path) and out (one-line reason). Absent
          files beat empty stubs.
        </li>
        <li>
          Merge a pointer into root <code>AGENTS.md</code>. Never overwrite that file.
        </li>
      </ol>
      <pre className="mt-8 max-w-2xl overflow-x-auto border border-border bg-card p-5 font-mono text-xs">
        {
          '- FIRST: `_first/AGENTS.md` then `_first/FIRST.md`; then `_first/principles/X.md` and the instance path listed in FIRST.md'
        }
      </pre>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/articles" className="border border-border px-5 py-3 font-display text-sm">
          Read the essays
        </Link>
        <Link href="/docs" className="border border-border px-5 py-3 font-display text-sm">
          Maintainer docs
        </Link>
        <a
          href="https://github.com/blockmatic/first"
          className="bg-primary px-5 py-3 font-display text-sm text-primary-foreground"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
