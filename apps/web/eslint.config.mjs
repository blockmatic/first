import { nextJsConfig } from '@repo/eslint-config/next-js'

export default [
  ...nextJsConfig,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', '.source/**', 'next-env.d.ts'],
  },
  {
    files: ['**/app/**/icon.tsx', '**/app/robots.ts', '**/app/sitemap.ts', '**/source.config.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
