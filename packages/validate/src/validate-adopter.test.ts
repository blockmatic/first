import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { validateAdopterPack } from './validate-adopter.ts'

const thinOverlay = `# Product First

## Principle

See /f-product.

## Artifacts

- **Fact:** starter

## Minimum Useful Artifact

- goal: ship

## Notes

Product names the job.
`

function writeFirst({ dir, extraIn = '' }: { dir: string; extraIn?: string }) {
  writeFileSync(
    resolve(dir, 'FIRST.md'),
    `# FIRST

spec: 0.3-draft

## In

- product: PRODUCT.md
${extraIn}
## Out

- operations — not in production
`,
  )
  writeFileSync(resolve(dir, 'PRODUCT.md'), thinOverlay)
}

describe('validateAdopterPack', () => {
  let fixtureRoot = ''

  beforeEach(() => {
    fixtureRoot = mkdtempSync(resolve(tmpdir(), 'first-adopter-'))
  })

  afterEach(() => {
    rmSync(fixtureRoot, { recursive: true, force: true })
  })

  it('accepts a thin ten-station-key pack', () => {
    writeFirst({ dir: fixtureRoot })
    expect(validateAdopterPack({ root: fixtureRoot })).toEqual([])
  })

  it('rejects pipelines as an In key', () => {
    writeFirst({ dir: fixtureRoot, extraIn: '- pipelines: PIPELINES.md\n' })
    writeFileSync(resolve(fixtureRoot, 'PIPELINES.md'), thinOverlay)
    expect(validateAdopterPack({ root: fixtureRoot })).toContain(
      'folded station must not be an In key: pipelines',
    )
  })

  it('rejects leftover skill folders', () => {
    writeFirst({ dir: fixtureRoot })
    const skillsRoot = resolve(fixtureRoot, 'skills')
    mkdirSync(resolve(skillsRoot, 'f-pipelines'), { recursive: true })
    expect(validateAdopterPack({ root: fixtureRoot, skillsRoot })).toContain(
      'leftover skill folder: f-pipelines',
    )
  })

  it('rejects Recipe heading on an overlay', () => {
    writeFirst({ dir: fixtureRoot })
    writeFileSync(
      resolve(fixtureRoot, 'PRODUCT.md'),
      `${thinOverlay}\n## Recipe\n\nDo not clone the spec.\n`,
    )
    expect(validateAdopterPack({ root: fixtureRoot })).toContain(
      "spec heading 'Recipe' must not appear: PRODUCT.md",
    )
  })

  it('rejects a station PIPELINES overlay file', () => {
    writeFirst({ dir: fixtureRoot })
    mkdirSync(resolve(fixtureRoot, 'basilic'))
    writeFileSync(resolve(fixtureRoot, 'basilic/PIPELINES.md'), thinOverlay)
    expect(validateAdopterPack({ root: fixtureRoot })).toContain(
      'station overlay must not exist: basilic/PIPELINES.md',
    )
  })

  it('allows Google-format DESIGN.md at the pack root', () => {
    writeFirst({ dir: fixtureRoot })
    writeFileSync(resolve(fixtureRoot, 'DESIGN.md'), '# Design\n')
    expect(validateAdopterPack({ root: fixtureRoot })).toEqual([])
  })
})
