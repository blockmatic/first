import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'
import { source } from '@/lib/source'
import { stations } from '@/lib/stations'

export const revalidate = false

const origin = env.NEXT_PUBLIC_SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = source.getPages().map(page => ({
    url: new URL(page.url, origin).href,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  const factory = stations.flatMap(station => [
    {
      url: new URL(`/articles/${station.slug}`, origin).href,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: new URL(`/spec/${station.slug}`, origin).href,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ])
  return [
    { url: new URL('/', origin).href, changeFrequency: 'monthly', priority: 1 },
    { url: new URL('/articles', origin).href, changeFrequency: 'weekly', priority: 0.9 },
    { url: new URL('/spec', origin).href, changeFrequency: 'weekly', priority: 0.9 },
    ...factory,
    ...docs,
  ]
}
