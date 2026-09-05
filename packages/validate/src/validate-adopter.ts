import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { isAbsolute, relative, resolve } from 'node:path'
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

  const entries = parseInEntries({ inBody, errors })
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
    const overlayPath = containedOverlayPath({ root, href })
    if (!overlayPath) {
      errors.push(`overlay path escapes pack root: ${href}`)
      continue
    }
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

function parseInEntries({ inBody, errors }: { inBody: string; errors: string[] }) {
  const items = [...inBody.matchAll(/^- (.+)$/gm)].map(match => match[1] ?? '')
  if (items.length === 0) {
    errors.push('FIRST.md In list has no station keys')
    return []
  }

  return items.flatMap(item => {
    const parsed = item.match(/^([a-z][a-z0-9-]*): (.+)$/)
    if (!parsed) {
      errors.push(`malformed In entry: ${item}`)
      return []
    }
    return [{ key: parsed[1] ?? '', rest: parsed[2] ?? '' }]
  })
}

function overlayHref(rest: string) {
  const linked = rest.match(/\(([^)]+)\)/)
  if (linked?.[1]) return linked[1]
  return rest.split(/\s+—/)[0]?.trim().split(/\s/)[0] ?? ''
}

function containedOverlayPath({ root, href }: { root: string; href: string }) {
  if (isAbsolute(href)) return undefined
  const overlayPath = resolve(root, href)
  const rel = relative(root, overlayPath)
  if (rel === '' || rel.startsWith('..') || isAbsolute(rel)) return undefined
  return overlayPath
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
  if (skillsRoot !== undefined) {
    if (!existsSync(skillsRoot) || !statSync(skillsRoot).isDirectory()) {
      errors.push(`skills root is not a directory: ${skillsRoot}`)
      return
    }
    checkLeftoverFolders({ skillsDir: skillsRoot, errors })
    return
  }

  const inferred = resolve(root, '../.agents/skills/f')
  if (!existsSync(inferred)) return
  checkLeftoverFolders({ skillsDir: inferred, errors })
}

function checkLeftoverFolders({ skillsDir, errors }: { skillsDir: string; errors: string[] }) {
  for (const folder of leftoverSkillFolders)
    if (existsSync(resolve(skillsDir, folder))) errors.push(`leftover skill folder: ${folder}`)
}
