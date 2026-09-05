import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { Metadata } from 'next'
import Link from 'next/link'
import { listStationFiles } from '@/lib/factory'
import { baseOptions } from '@/lib/layout.shared'

export const metadata: Metadata = {
  title: 'Spec',
  description: 'Operational specs for each FIRST station.',
}

export default function SpecIndexPage() {
  const items = listStationFiles({ folder: 'principles' })
  return (
    <HomeLayout {...baseOptions()}>
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Spec</p>
        <h1 className="font-display mt-3 text-4xl">Operational specs for each station</h1>
        <p className="mt-4 text-muted-foreground">
          Factory <code>principles/</code> published here. Agents apply them as <code>/f-*</code>.
          Do not encode one product’s facts into the specs. Adopters do not copy this folder.
        </p>
        <ol className="mt-10 space-y-4">
          {items.map((item, index) => (
            <li key={item.station.slug} className="border-b border-border pb-4">
              <Link href={`/spec/${item.station.slug}`} className="block">
                <span className="font-mono text-xs text-brass">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 block font-display text-xl">{item.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {item.station.owns}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </HomeLayout>
  )
}
