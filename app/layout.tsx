import React from 'react'

import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/app.css'
import { OpenpanelProvider } from '@openpanel/nextjs'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

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

            <footer className="px-4 py-4 sm:py-8 lg:py-10 text-muted-fg [&_a]:text-fg text-center font-mono text-sm">
              D. 2024 - This project is crafted with ♥ by <a href="https://twitter.com/irsyadadl">Irsyad</a>
            </footer>
          </div>
          {process.env.NEXT_PUBLIC_ENV !== 'local' && (
            <OpenpanelProvider
              clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID as string}
              trackScreenViews={true}
              trackAttributes={true}
              trackOutgoingLinks={true}
            />
          )}
        </Providers>
      </body>
    </html>
  )
}
