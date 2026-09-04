import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { Metadata } from 'next'
import Link from 'next/link'
import { listStationFiles } from '@/lib/factory'
import { baseOptions } from '@/lib/layout.shared'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Human essays for each FIRST station.',
}

export default function ArticlesPage() {
  const items = listStationFiles({ folder: 'articles' })
  return (
    <HomeLayout {...baseOptions()}>
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Articles
        </p>
        <h1 className="font-display mt-3 text-4xl">Essays argue. Specs operate.</h1>
        <p className="mt-4 text-muted-foreground">
          Read these for the case. Apply the matching template when you do the work.
        </p>
        <ol className="mt-10 space-y-4">
          {items.map((item, index) => (
            <li key={item.station.slug} className="border-b border-border pb-4">
              <Link href={`/articles/${item.station.slug}`} className="block">
                <span className="font-mono text-xs text-brass">
                  {String(index + 1).padStart(2, '0')} · {item.status}
                </span>
                <span className="mt-1 block font-display text-xl">{item.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.description}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </HomeLayout>
  )
}
