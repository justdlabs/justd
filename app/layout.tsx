import React from 'react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'
import { siteConfig } from '@/resources/config/site'
import { cn } from '@/resources/lib/utils'
import '@/resources/styles/app.css'
import { OpenpanelProvider } from '@openpanel/nextjs'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import localFont from 'next/font/local'
import { Toast } from 'ui'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
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
        <body className={cn('min-h-svh [max-width:1850px] mx-auto bg-background font-sans antialiased', geistSans.variable, geistMono.variable)} suppressHydrationWarning>
          <Providers>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <Navbar />
              <main className="flex-1">{children}</main>

              <Footer />
              <Toast />
            </div>
            {process.env.NODE_ENV === 'production' && (
              <OpenpanelProvider url={process.env.ANALYTICS_CLIENT_URL as string} clientSecret={process.env.ANALYTICS_CLIENT_SECRET as string} clientId={process.env.ANALYTICS_CLIENT_ID as string} trackScreenViews={true} trackAttributes={true} trackOutgoingLinks={true} />
            )}
          </Providers>
        </body>
      </ViewTransitions>
    </html>
  )
}
