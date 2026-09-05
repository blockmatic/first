import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateDocs } from './validate-docs.ts'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(scriptDir, '../../..')
const root = resolve(repoRoot, '_first')
const errors = validateDocs({ root, repoRoot })

if (errors.length > 0) {
  console.error('FIRST documentation validation failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(
  'FIRST documentation validation passed: 12 essay/spec pairs, templates, /f skill catalog, FIRST.md, maintainer files, required structure, parity, order, and local links.',
)
