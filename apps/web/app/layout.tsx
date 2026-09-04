import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Source_Serif_4, Syne } from 'next/font/google'
import type { ReactNode } from 'react'
import { env } from '@/lib/env'
import './global.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: 'FIRST — The Open Factory for Agent-First Products',
    template: '%s | FIRST',
  },
  description:
    'A structured, portable markdown factory for naming product, design, architecture, and operations concerns before implementation invents them.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSerif.variable} ${plexMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-serif">
        <RootProvider theme={{ defaultTheme: 'dark' }} search={{ options: { api: '/api/search' } }}>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
