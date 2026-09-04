import { env } from '@/lib/env'
import { listStationFiles } from '@/lib/factory'
import { source } from '@/lib/source'

export const revalidate = false

export function GET(): Response {
  const origin = env.NEXT_PUBLIC_SITE_URL
  const docs = source.getPages().map(page => {
    const url = new URL(page.url, origin).href
    return `- [${page.data.title}](${url}): ${page.data.description}`
  })
  const articles = listStationFiles({ folder: 'articles' }).map(item => {
    const url = new URL(`/articles/${item.station.slug}`, origin).href
    return `- [${item.title}](${url}): ${item.description}`
  })
  const specs = listStationFiles({ folder: 'principles' }).map(item => {
    const url = new URL(`/spec/${item.station.slug}`, origin).href
    return `- [${item.title}](${url}): ${item.station.owns}`
  })
  const body = `# FIRST

${docs.join('\n')}

## Articles

${articles.join('\n')}

## Spec

${specs.join('\n')}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
