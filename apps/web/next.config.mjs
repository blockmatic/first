import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  outputFileTracingIncludes: {
    '/*': ['../../_first/**'],
  },
  redirects: async () => [
    { source: '/spec/design', destination: '/spec/journeys', permanent: true },
    { source: '/articles/design', destination: '/articles/journeys', permanent: true },
    { source: '/spec/pipelines', destination: '/spec/workflow', permanent: true },
    { source: '/articles/pipelines', destination: '/articles/workflow', permanent: true },
  ],
  experimental: {
    useTypeScriptCli: false,
    optimizePackageImports: ['lucide-react'],
  },
}

export default withMDX(config)
