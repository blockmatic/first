import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  outputFileTracingIncludes: {
    '/*': ['../../_first/**'],
  },
  experimental: {
    useTypeScriptCli: false,
    optimizePackageImports: ['lucide-react'],
  },
}

export default withMDX(config)
