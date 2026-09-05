import Link from 'next/link'
import { stations } from '@/lib/stations'

export function StationRail() {
  return (
    <section className="border-b border-border px-6 py-16">
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
        Ten stations
      </p>
      <h2 className="font-display mt-3 text-3xl">Not a waterfall. One factory line.</h2>
      <ol className="mt-10 flex gap-2 overflow-x-auto pb-4">
        {stations.map((station, index) => (
          <li key={station.slug} className="min-w-36 shrink-0">
            <Link href={`/spec/${station.slug}`} className="block border border-border bg-card p-3">
              <span className="font-mono text-xs text-brass">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-2 block font-display text-sm">{station.file}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
