import Link from 'next/link'
import type { Components } from 'react-markdown'
import { stations } from './stations'

const stationFiles = new Map<string, string>(stations.map(station => [station.file, station.slug]))

export function rewriteFactoryHref(href: string): string {
  const [path, hash] = href.split('#')
  const suffix = hash ? `#${hash}` : ''
  const file = path?.split('/').pop() ?? ''
  const stem = file.replace(/\.md$/, '')
  const slug = stationFiles.get(stem)

  if (path?.includes('/principles/') && slug) return `/spec/${slug}${suffix}`
  if (path?.includes('/articles/') && slug) return `/articles/${slug}${suffix}`
  if (file === 'ABOUT.md') return `/#what${suffix}`
  if (file === 'README.md') return `/#start${suffix}`
  if (file === 'FIRST.md') return `/#spec${suffix}`
  if (file === 'AGENTS.md') return `/docs/development${suffix}`
  return href
}

export function markdownComponents(): Components {
  return {
    a({ href, children }) {
      const next = href ? rewriteFactoryHref(href) : undefined
      if (!next) return <a>{children}</a>
      if (next.startsWith('http'))
        return (
          <a href={next} target="_blank" rel="noreferrer">
            {children}
          </a>
        )
      if (next.startsWith('/')) return <Link href={next}>{children}</Link>
      return <a href={next}>{children}</a>
    },
  }
}
