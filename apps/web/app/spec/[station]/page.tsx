import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { StationDoc } from '@/components/station-doc'
import { readStationFile } from '@/lib/factory'
import { baseOptions } from '@/lib/layout.shared'
import { stations } from '@/lib/stations'

type PageParams = { station: string }

export function generateStaticParams() {
  return stations.map(item => ({ station: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { station } = await params
  const doc = readStationFile({ folder: 'principles', slug: station })
  if (!doc) return {}
  return { title: doc.title, description: doc.description }
}

export default async function SpecPage({ params }: { params: Promise<PageParams> }) {
  const { station } = await params
  const doc = readStationFile({ folder: 'principles', slug: station })
  if (!doc) notFound()

  return (
    <HomeLayout {...baseOptions()}>
      <StationDoc
        kind="spec"
        slug={station}
        title={doc.title}
        description={doc.station.owns}
        body={doc.body}
      />
    </HomeLayout>
  )
}
