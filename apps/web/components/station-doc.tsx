import Link from 'next/link'
import { FactoryMarkdown } from '@/components/factory-markdown'
import { stationBySlug, stations } from '@/lib/stations'

export function StationDoc({
  kind,
  slug,
  title,
  description,
  status,
  body,
}: {
  kind: 'articles' | 'spec'
  slug: string
  title: string
  description: string
  status?: string
  body: string
}) {
  const station = stationBySlug(slug)
  const other = kind === 'articles' ? `/spec/${slug}` : `/articles/${slug}`
  const otherLabel = kind === 'articles' ? 'Operational spec' : 'Human essay'
  const indexHref = kind === 'articles' ? '/articles' : '/spec'

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase">
        {station?.file} {status ? `· ${status}` : ''}
      </p>
      <h1 className="font-display mt-3 text-4xl">{title}</h1>
      <p className="mt-3 text-muted-foreground">{description}</p>
      <p className="mt-6 flex gap-4 font-display text-sm">
        <Link href={indexHref} className="underline underline-offset-4">
          All {kind === 'articles' ? 'essays' : 'specs'}
        </Link>
        <Link href={other} className="underline underline-offset-4">
          {otherLabel}
        </Link>
      </p>
      {kind === 'spec' ? (
        <p className="mt-6 border border-border bg-card p-4 text-sm text-muted-foreground">
          Copy this file into <code>{`_first/principles/${station?.file}.md`}</code> with the rest
          of the user pack. Put product facts in <code>FIRST.md</code> and instance files, not in
          the template.
        </p>
      ) : null}
      <div className="mt-10">
        <FactoryMarkdown body={body} />
      </div>
      <nav className="mt-16 grid gap-2 font-mono text-xs md:grid-cols-3">
        {stations.map(item => (
          <Link key={item.slug} href={`/${kind === 'spec' ? 'spec' : 'articles'}/${item.slug}`}>
            {item.file}
          </Link>
        ))}
      </nav>
    </article>
  )
}
