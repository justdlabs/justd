import React from 'react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/app.css'
import { OpenpanelProvider } from '@openpanel/nextjs'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
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
      <ViewTransitions>
        <body
          className={cn(
            'min-h-svh [max-width:1850px] mx-auto bg-background font-sans antialiased',
            satoshi.variable,
            geistMono.variable
          )}
          suppressHydrationWarning
        >
          <Providers>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <Navbar />
              <main className="flex-1">{children}</main>

              <Footer />
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
      </ViewTransitions>
    </html>
  )
}
