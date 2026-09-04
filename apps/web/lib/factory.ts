import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import { stationBySlug, stations } from './stations'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const factoryRoot = resolve(scriptDir, '../../../_first')

export function readStationFile({
  folder,
  slug,
}: {
  folder: 'articles' | 'principles'
  slug: string
}) {
  const station = stationBySlug(slug)
  if (!station) return null
  const path = resolve(factoryRoot, folder, `${station.file}.md`)
  const raw = readFileSync(path, 'utf8')
  const parsed = matter(raw)
  return {
    station,
    body: parsed.content.replace(/^\s*# .+\n+/, ''),
    title: String(parsed.data.title ?? station.title),
    status: String(parsed.data.status ?? 'draft'),
    description: String(parsed.data.description ?? station.owns),
  }
}

export function listStationFiles({ folder }: { folder: 'articles' | 'principles' }) {
  return stations.map(station => {
    const path = resolve(factoryRoot, folder, `${station.file}.md`)
    const parsed = matter(readFileSync(path, 'utf8'))
    return {
      station,
      title: String(parsed.data.title ?? station.title),
      status: String(parsed.data.status ?? 'draft'),
      description: String(parsed.data.description ?? station.owns),
    }
  })
}

export { factoryRoot }
