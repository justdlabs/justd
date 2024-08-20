import React from "react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Providers } from "@/components/providers"
import { siteConfig } from "@/resources/config/site"
import { cn } from "@/resources/lib/utils"
import "@/resources/styles/app.css"
import { OpenpanelProvider } from "@openpanel/nextjs"
import type { Metadata, Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"
import localFont from "next/font/local"
import { Toast } from "ui"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  title: {
    default: `${siteConfig.name} - Modern and Customizable React Components`,
    template: `%s / ${siteConfig.name} - Modern and Customizable React Components`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "./"
  },
  openGraph: {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    images: [
      {
        url: "https://getjustd.com/opengraph-image.png?v=1",
        width: 1200,
        height: 630,
        alt: "Justd"
      }
    ]
  },
  keywords: [
    "React",
    "Next.js",
    "Inertia.js",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Justd",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
    "Laravel Inertia UI",
    "Laravel Inertia Components",
    "Laravel Inertia UI Components",
    "Laravel Inertia UI Kit",
    "Laravel Inertia UI Library",
    "Laravel Inertia UI Framework",
    "Laravel Inertia Justd",
    "Laravel Justd",
    "Justd Components",
    "Justd UI Components",
    "Justd UI Kit",
    "Justd UI Library",
    "Justd UI Framework",
    "Justd Laravel Inertia",
    "Justd Laravel",
    "Justd Inertia"
  ],
  manifest: "/manifest.json",
  authors: [
    {
      name: "irsyadadl",
      url: "https://x.com/irsyadadl"
    }
  ],
  creator: "irsyadadl"
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1
}

const fontSans = localFont({
  src: [{ path: "./fonts/Inter.woff2" }],
  variable: "--font-sans"
})

const fontMono = localFont({
  src: [{ path: "./fonts/GeistMonoVF.woff" }, { path: "./fonts/GeistMonoVF.woff2" }],
  variable: "--font-mono"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <ViewTransitions>
        <body
          className={cn(
            "min-h-svh [max-width:1850px] mx-auto bg-bg font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-dvh flex-col bg-bg">
              <Navbar />
              <main className="flex-1">{children}</main>

              <Footer />
              <Toast />
            </div>
            {process.env.NODE_ENV === "production" && (
              <OpenpanelProvider
                url={process.env.ANALYTICS_CLIENT_URL as string}
                clientSecret={process.env.ANALYTICS_CLIENT_SECRET as string}
                clientId={process.env.ANALYTICS_CLIENT_ID as string}
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
