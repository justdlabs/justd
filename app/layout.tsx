import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/app.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import React from 'react'

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  variable: '--font-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-svh [max-width:1850px] mx-auto bg-background font-sans antialiased',
          satoshi.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
