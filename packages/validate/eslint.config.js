import { config } from '@repo/eslint-config/library'

export default [
  ...config,
  {
    files: ['**/*.ts'],
    rules: {
      'no-restricted-properties': 'off',
    },
  },
]
