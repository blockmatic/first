import { config } from '@repo/eslint-config/library'

export default [
  ...config,
  {
    ignores: ['apps/**', 'packages/**', 'node_modules/**'],
  },
]
