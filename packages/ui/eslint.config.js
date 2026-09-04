import { config } from '@repo/eslint-config/react-internal'

export default [
  ...config,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-restricted-imports': 'off',
    },
  },
]
