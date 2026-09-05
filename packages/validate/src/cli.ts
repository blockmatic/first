import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { stations } from './stations.ts'
import { validateAdopterPack } from './validate-adopter.ts'
import { validateDocs } from './validate-docs.ts'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(scriptDir, '../../..')
const argv = process.argv.slice(2).filter(arg => arg !== '--')
const adopterIdx = argv.indexOf('--adopter')

if (adopterIdx !== -1) {
  const packRootArg = argv[adopterIdx + 1]
  if (!packRootArg) {
    console.error(
      'usage: validate --adopter <path-to-_first> [--skills <path-to-.agents/skills/f>]',
    )
    process.exit(1)
  }
  const skillsIdx = argv.indexOf('--skills')
  const skillsArg = skillsIdx === -1 ? undefined : argv[skillsIdx + 1]
  const root = resolve(repoRoot, packRootArg)
  const skillsRoot = skillsArg ? resolve(repoRoot, skillsArg) : undefined
  const errors = validateAdopterPack({ root, skillsRoot })
  if (errors.length > 0) {
    console.error('FIRST adopter pack validation failed:')
    for (const error of errors) console.error(`- ${error}`)
    process.exit(1)
  }
  console.log(`FIRST adopter pack validation passed: ${root}`)
  process.exit(0)
}

const root = resolve(repoRoot, '_first')
const errors = validateDocs({ root, repoRoot })

if (errors.length > 0) {
  console.error('FIRST documentation validation failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(
  `FIRST documentation validation passed: ${stations.length} essay/spec pairs, /f skill catalog, FIRST.md, maintainer files, required structure, parity, order, and local links.`,
)
