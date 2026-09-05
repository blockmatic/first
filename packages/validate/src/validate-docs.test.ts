import { cpSync, mkdtempSync, readFileSync, rmSync, unlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { validateDocs } from './validate-docs.ts'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const sourceRoot = resolve(scriptDir, '../../../_first')

describe('validateDocs', () => {
  let fixtureRoot = ''

  beforeEach(() => {
    fixtureRoot = mkdtempSync(resolve(tmpdir(), 'first-docs-'))
    for (const name of ['README.md', 'ABOUT.md', 'AGENTS.md', 'FIRST.md'])
      cpSync(resolve(sourceRoot, name), resolve(fixtureRoot, name))
    for (const name of ['articles', 'principles', 'maintainers', 'instance'])
      cpSync(resolve(sourceRoot, name), resolve(fixtureRoot, name), { recursive: true })
  })

  afterEach(() => {
    rmSync(fixtureRoot, { recursive: true, force: true })
  })

  function replace({
    relativePath,
    old,
    next,
  }: {
    relativePath: string
    old: string
    next: string
  }) {
    const path = resolve(fixtureRoot, relativePath)
    const text = readFileSync(path, 'utf8')
    expect(text).toContain(old)
    writeFileSync(path, text.replace(old, next))
  }

  it('accepts the source tree', () => {
    expect(validateDocs({ root: sourceRoot, repoRoot: resolve(sourceRoot, '..') })).toEqual([])
  })

  it('accepts a copied valid set', () => {
    expect(validateDocs({ root: fixtureRoot })).toEqual([])
  })

  it('detects a missing pair', () => {
    unlinkSync(resolve(fixtureRoot, 'articles/DATA.md'))
    expect(
      validateDocs({ root: fixtureRoot }).some(item => item.includes('missing articles pair')),
    ).toBe(true)
  })

  it('detects a principle mismatch', () => {
    replace({
      relativePath: 'articles/DATA.md',
      old: '## Principle',
      next: '## Principle\n\nDifferent principle.',
    })
    expect(validateDocs({ root: fixtureRoot })).toContain('principle mismatch: DATA.md')
  })

  it('detects a missing heading', () => {
    replace({
      relativePath: 'principles/DATA.md',
      old: '## Minimum Useful Artifact',
      next: '## Example',
    })
    expect(
      validateDocs({ root: fixtureRoot }).some(item =>
        item.includes("missing heading 'Minimum Useful Artifact'"),
      ),
    ).toBe(true)
  })

  it('detects a broken local link', () => {
    replace({ relativePath: 'articles/DATA.md', old: '../ABOUT.md', next: '../MISSING.md' })
    expect(
      validateDocs({ root: fixtureRoot }).some(item => item.includes('broken local link')),
    ).toBe(true)
  })

  it('detects an invalid status', () => {
    replace({ relativePath: 'articles/DATA.md', old: 'status: draft', next: 'status: unknown' })
    expect(validateDocs({ root: fixtureRoot }).some(item => item.includes('invalid status'))).toBe(
      true,
    )
  })

  it('detects canonical order drift', () => {
    replace({ relativePath: 'README.md', old: '| 3 | Architecture |', next: '| 3 | Data |' })
    expect(validateDocs({ root: fixtureRoot })).toContain(
      'canonical station list or order is wrong: README.md',
    )
  })

  it('detects spec drift when repoRoot is set', () => {
    const repoRoot = resolve(sourceRoot, '..')
    const specPath = resolve(repoRoot, 'skills/f/f-analyst/references/spec.md')
    const original = readFileSync(specPath, 'utf8')
    writeFileSync(specPath, `${original}\n`)
    try {
      expect(
        validateDocs({ root: sourceRoot, repoRoot }).some(item => item.includes('spec drift')),
      ).toBe(true)
    } finally {
      writeFileSync(specPath, original)
    }
  })

  it('detects a missing FIRST.md', () => {
    unlinkSync(resolve(fixtureRoot, 'FIRST.md'))
    expect(validateDocs({ root: fixtureRoot })).toContain('missing root file: FIRST.md')
  })

  it('detects a missing maintainer file', () => {
    unlinkSync(resolve(fixtureRoot, 'maintainers/PACKAGING.md'))
    expect(validateDocs({ root: fixtureRoot })).toContain(
      'missing maintainer file: maintainers/PACKAGING.md',
    )
  })
})
