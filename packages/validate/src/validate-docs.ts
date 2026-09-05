import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  articleHeadings,
  maintainerFiles,
  nestedSkillFolders,
  principleHeadings,
  productTemplateHeadings,
  rootFiles,
  skillFolderByStation,
  stations,
  templateHeadings,
} from './stations.ts'

const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g

export function section(text: string, heading: string): string | null {
  const pattern = new RegExp(`(?:^|\\n)## ${escapeRegExp(heading)}\\n\\n([\\s\\S]+?)(?=\\n## |$)`)
  const match = text.match(pattern)
  return match?.[1]?.trim() ?? null
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function fileNames(dir: string): Set<string> {
  return new Set(readdirSync(dir).filter(name => name.endsWith('.md')))
}

function titleFor(name: string): string {
  if (name === 'API') return 'API First'
  return `${name.at(0)}${name.slice(1).toLowerCase()} First`
}

function pushMissing(errors: string[], path: string, label: string) {
  if (!existsSync(path)) errors.push(label)
}

function checkRequiredFiles({ root, errors }: { root: string; errors: string[] }) {
  for (const name of rootFiles)
    pushMissing(errors, resolve(root, name), `missing root file: ${name}`)
  for (const name of maintainerFiles)
    pushMissing(errors, resolve(root, name), `missing maintainer file: ${name}`)
}

function checkStationPairs({ root, errors }: { root: string; errors: string[] }) {
  const expected = new Set(stations.map(name => `${name}.md`))
  for (const folder of ['articles', 'principles'] as const) {
    const actual = fileNames(resolve(root, folder))
    for (const name of [...expected].toSorted())
      if (!actual.has(name)) errors.push(`missing ${folder} pair: ${folder}/${name}`)

    for (const name of [...actual].toSorted())
      if (!expected.has(name)) errors.push(`unexpected station file: ${folder}/${name}`)
  }
}

function checkArticleFrontMatter({
  article,
  name,
  errors,
}: {
  article: string
  name: string
  errors: string[]
}) {
  const metadataMatch = article.match(/^---\n([\s\S]+?)\n---\n/)
  if (!metadataMatch) {
    errors.push(`missing front matter: articles/${name}.md`)
    return
  }
  const metadata = metadataMatch[1] ?? ''
  for (const key of ['title', 'status', 'description'])
    if (!new RegExp(`^${key}:\\s+.+$`, 'm').test(metadata))
      errors.push(`missing front-matter key ${key}: articles/${name}.md`)

  const titleMatch = metadata.match(/^title:\s+(.+)$/m)
  const statusMatch = metadata.match(/^status:\s+(.+)$/m)
  if (titleMatch && titleMatch[1] !== titleFor(name))
    errors.push(`wrong title: articles/${name}.md`)
  if (statusMatch && !['draft', 'stable'].includes(statusMatch[1] ?? ''))
    errors.push(`invalid status: articles/${name}.md`)
}

function checkStationFiles({ root, errors }: { root: string; errors: string[] }) {
  for (const name of stations) {
    const articlePath = resolve(root, 'articles', `${name}.md`)
    const principlePath = resolve(root, 'principles', `${name}.md`)
    if (!existsSync(articlePath) || !existsSync(principlePath)) continue

    const article = readFileSync(articlePath, 'utf8')
    const principle = readFileSync(principlePath, 'utf8')
    checkArticleFrontMatter({ article, name, errors })

    for (const heading of articleHeadings)
      if (section(article, heading) === null)
        errors.push(`missing heading '${heading}': articles/${name}.md`)

    for (const heading of principleHeadings)
      if (section(principle, heading) === null)
        errors.push(`missing heading '${heading}': principles/${name}.md`)

    if (section(article, 'Principle') !== section(principle, 'Principle'))
      errors.push(`principle mismatch: ${name}.md`)
    if (!article.includes(`../principles/${name}.md`))
      errors.push(`missing operational-spec link: articles/${name}.md`)
    if (!principle.includes(`../articles/${name}.md`))
      errors.push(`missing human-essay link: principles/${name}.md`)
  }
}

function listedStations({ text, name }: { text: string; name: string }): string[] {
  const catalog = section(text, 'The ten') ?? ''
  if (name === 'README.md')
    return [...catalog.matchAll(/^\|\s*\d+\s*\|\s*([^|]+?)\s*\|/gm)].map(match =>
      (match[1] ?? '').trim().toUpperCase(),
    )
  return [...catalog.matchAll(/^\d+\.\s+\*\*([^*]+)\*\*/gm)].map(match =>
    (match[1] ?? '').trim().toUpperCase(),
  )
}

function checkCanonicalOrder({ root, errors }: { root: string; errors: string[] }) {
  for (const name of ['README.md', 'ABOUT.md'] as const) {
    const path = resolve(root, name)
    if (!existsSync(path)) continue
    const listed = listedStations({ text: readFileSync(path, 'utf8'), name })
    if (listed.join() !== stations.join())
      errors.push(`canonical station list or order is wrong: ${name}`)
  }
}

function isRemoteHref(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('#') ||
    href.startsWith('mailto:')
  )
}

function checkLocalLinks({ root, errors }: { root: string; errors: string[] }) {
  const markdownFiles = [
    ...rootFiles.map(name => resolve(root, name)),
    ...stations.map(name => resolve(root, 'articles', `${name}.md`)),
    ...stations.map(name => resolve(root, 'principles', `${name}.md`)),
    ...maintainerFiles.map(name => resolve(root, name)),
  ]
  for (const path of markdownFiles) {
    if (!existsSync(path)) continue
    const text = readFileSync(path, 'utf8')
    const relative = path.slice(root.length + 1)
    for (const match of text.matchAll(linkPattern)) {
      const href = match[1] ?? ''
      if (isRemoteHref(href)) continue
      const targetText = href.split('#')[0] ?? ''
      const target = resolve(path, '..', targetText)
      if (!existsSync(target)) errors.push(`broken local link in ${relative}: ${href}`)
    }
  }
}

function checkTemplates({ root, errors }: { root: string; errors: string[] }) {
  const dir = resolve(root, 'templates')
  if (!existsSync(dir)) {
    errors.push('missing templates/')
    return
  }
  for (const name of stations) {
    const path = resolve(dir, `${name}.md`)
    if (!existsSync(path)) {
      errors.push(`missing template: templates/${name}.md`)
      continue
    }
    const text = readFileSync(path, 'utf8')
    const headings = name === 'PRODUCT' ? productTemplateHeadings : templateHeadings
    for (const heading of headings)
      if (section(text, heading) === null)
        errors.push(`missing heading '${heading}': templates/${name}.md`)
  }
}

function parseSkillFrontmatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const block = match[1] ?? ''
  return {
    name: block.match(/^name:\s*(.+)$/m)?.[1]?.trim(),
    description: block.match(/^description:\s*(.+)$/m)?.[1]?.trim(),
    disableModelInvocation: block.match(/^disable-model-invocation:\s*(true|false)\s*$/m)?.[1],
  }
}

function checkSkillsCatalog({
  repoRoot,
  firstRoot,
  errors,
}: {
  repoRoot: string
  firstRoot: string
  errors: string[]
}) {
  const catalogPath = resolve(repoRoot, 'skills.sh.json')
  if (!existsSync(catalogPath)) {
    errors.push('missing skills.sh.json')
    return
  }
  const catalog = JSON.parse(readFileSync(catalogPath, 'utf8')) as {
    groupings?: { skills?: string[] }[]
  }
  const grouped = catalog.groupings?.flatMap(group => group.skills ?? []) ?? []
  if (!grouped.includes('f') || grouped.length !== 1)
    errors.push('skills.sh.json must group only the installable skill f')

  const parentPath = resolve(repoRoot, 'skills/f/SKILL.md')
  if (!existsSync(parentPath)) {
    errors.push('missing skills/f/SKILL.md')
    return
  }
  const parent = parseSkillFrontmatter(readFileSync(parentPath, 'utf8'))
  if (!parent) errors.push('missing YAML frontmatter: skills/f/SKILL.md')
  else {
    if (parent.name !== 'f') errors.push('name must equal folder: skills/f/SKILL.md')
    if (parent.disableModelInvocation !== 'true')
      errors.push('disable-model-invocation must be true: skills/f/SKILL.md')
    if (!parent.description) errors.push('missing description: skills/f/SKILL.md')
  }

  if (!existsSync(resolve(repoRoot, 'skills/f/references/analyst.md')))
    errors.push('missing skills/f/references/analyst.md')

  for (const folder of nestedSkillFolders) {
    const skillPath = resolve(repoRoot, 'skills/f', folder, 'SKILL.md')
    if (!existsSync(skillPath)) {
      errors.push(`missing skills/f/${folder}/SKILL.md`)
      continue
    }
    const frontmatter = parseSkillFrontmatter(readFileSync(skillPath, 'utf8'))
    if (!frontmatter) {
      errors.push(`missing YAML frontmatter: skills/f/${folder}/SKILL.md`)
      continue
    }
    if (frontmatter.name !== folder)
      errors.push(`name must equal folder: skills/f/${folder}/SKILL.md`)
    if (frontmatter.disableModelInvocation !== 'true')
      errors.push(`disable-model-invocation must be true: skills/f/${folder}/SKILL.md`)
    if (!frontmatter.description?.includes(`/${folder}`))
      errors.push(`description must mention /${folder}: skills/f/${folder}/SKILL.md`)
  }

  const aiSpec = resolve(repoRoot, 'skills/f/f-ai-expert/references/spec.md')
  if (existsSync(aiSpec)) errors.push('f-ai-expert must not have references/spec.md')

  for (const name of stations) {
    const folder = skillFolderByStation[name]
    const specPath = resolve(repoRoot, 'skills/f', folder, 'references/spec.md')
    const principlePath = resolve(firstRoot, 'principles', `${name}.md`)
    if (!existsSync(specPath)) {
      errors.push(`missing skills/f/${folder}/references/spec.md`)
      continue
    }
    if (!existsSync(principlePath)) continue
    const spec = readFileSync(specPath, 'utf8')
    const principle = readFileSync(principlePath, 'utf8')
    if (spec !== principle)
      errors.push(`spec drift: skills/f/${folder}/references/spec.md !== principles/${name}.md`)
  }
}

export function validateDocs({ root, repoRoot }: { root: string; repoRoot?: string }): string[] {
  const errors: string[] = []
  checkRequiredFiles({ root, errors })
  checkStationPairs({ root, errors })
  checkStationFiles({ root, errors })
  checkCanonicalOrder({ root, errors })
  checkLocalLinks({ root, errors })
  checkTemplates({ root, errors })
  if (repoRoot) checkSkillsCatalog({ repoRoot, firstRoot: root, errors })
  return errors
}
