import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  foldedInKeys,
  forbiddenOverlayHeadings,
  inStationKeys,
  overlayHeadings,
} from './stations.ts'
import { section } from './validate-docs.ts'

const leftoverSkillFolders = ['f-designer', 'f-pipelines'] as const
const foldedKeySet = new Set<string>(foldedInKeys)
const inKeySet = new Set(inStationKeys)

export function validateAdopterPack({
  root,
  skillsRoot,
}: {
  root: string
  skillsRoot?: string
}): string[] {
  const errors: string[] = []
  const firstPath = resolve(root, 'FIRST.md')
  if (!existsSync(firstPath)) {
    errors.push('missing root file: FIRST.md')
    return errors
  }

  const first = readFileSync(firstPath, 'utf8')
  const inBody = section(first, 'In')
  if (inBody === null) {
    errors.push("missing heading 'In': FIRST.md")
    return errors
  }

  const entries = [...inBody.matchAll(/^- ([a-z][a-z0-9-]*): (.+)$/gm)].map(match => ({
    key: match[1] ?? '',
    rest: match[2] ?? '',
  }))

  if (entries.length === 0) errors.push('FIRST.md In list has no station keys')

  for (const { key, rest } of entries) {
    if (foldedKeySet.has(key)) {
      errors.push(`folded station must not be an In key: ${key}`)
      continue
    }
    if (!inKeySet.has(key)) {
      errors.push(`unknown In key: ${key}`)
      continue
    }
    const href = overlayHref(rest)
    if (!href) {
      errors.push(`missing overlay path: ${key}`)
      continue
    }
    const overlayPath = resolve(root, href)
    if (!existsSync(overlayPath)) {
      errors.push(`missing overlay: ${href}`)
      continue
    }
    checkOverlayFile({ overlayPath, href, errors })
  }

  checkForbiddenStationFiles({ packRoot: root, errors })
  checkLeftoverSkills({ root, skillsRoot, errors })
  return errors
}

function overlayHref(rest: string) {
  const linked = rest.match(/\(([^)]+)\)/)
  if (linked?.[1]) return linked[1]
  return rest.split(/\s+—/)[0]?.trim().split(/\s/)[0] ?? ''
}

function checkOverlayFile({
  overlayPath,
  href,
  errors,
}: {
  overlayPath: string
  href: string
  errors: string[]
}) {
  const text = readFileSync(overlayPath, 'utf8')
  for (const heading of overlayHeadings)
    if (section(text, heading) === null) errors.push(`missing heading '${heading}': ${href}`)
  for (const heading of forbiddenOverlayHeadings)
    if (section(text, heading) !== null)
      errors.push(`spec heading '${heading}' must not appear: ${href}`)
}

function checkForbiddenStationFiles({ packRoot, errors }: { packRoot: string; errors: string[] }) {
  if (existsSync(resolve(packRoot, 'PIPELINES.md')))
    errors.push('station overlay must not exist: PIPELINES.md')

  for (const name of readdirSync(packRoot)) {
    const path = resolve(packRoot, name)
    if (!statSync(path).isDirectory()) continue
    if (existsSync(resolve(path, 'PIPELINES.md')))
      errors.push(`station overlay must not exist: ${name}/PIPELINES.md`)
    if (existsSync(resolve(path, 'DESIGN.md')))
      errors.push(`station overlay must not exist: ${name}/DESIGN.md`)
  }
}

function checkLeftoverSkills({
  root,
  skillsRoot,
  errors,
}: {
  root: string
  skillsRoot?: string
  errors: string[]
}) {
  const inferred = resolve(root, '../.agents/skills/f')
  const skillsDir = skillsRoot ?? (existsSync(inferred) ? inferred : undefined)
  if (!skillsDir) return
  for (const folder of leftoverSkillFolders)
    if (existsSync(resolve(skillsDir, folder))) errors.push(`leftover skill folder: ${folder}`)
}
