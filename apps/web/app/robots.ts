import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'

const origin = env.NEXT_PUBLIC_SITE_URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/docs', '/articles', '/spec', '/llms.txt', '/sitemap.xml'],
      disallow: '/api/',
    },
    sitemap: new URL('/sitemap.xml', origin).href,
  }
}
