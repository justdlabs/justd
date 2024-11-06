import * as React from "react"

import { Header } from "@/components/header"
import { siteConfig } from "@/resources/config/site"
import type { Metadata } from "next"
import { Container, Loader } from "ui"

import { IconsList } from "./partials/icons-list"

export const metadata: Metadata = {
  title: "Justd Icons",
  description:
    " A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications. ",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name,
  keywords: [
    "Justd Icons",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Justd",
    "Next.js 15",
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
  authors: [
    {
      name: "irsyadadl",
      url: "https://x.com/irsyadadl"
    }
  ]
}

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{
    query: string
    t: "solid" | "regular"
  }>
}) {
  const { query, t } = await searchParams
  return (
    <>
      <Header>
        Ico
        <span className="text-muted-fg">ns</span>
      </Header>
      <div className="py-4 sm:py-16">
        <Container>
          <React.Suspense
            fallback={
              <div className="flex justify-center items-center min-h-96">
                <Loader />
              </div>
            }
          >
            <IconsList searchParams={{ query, t }} />
          </React.Suspense>
        </Container>
      </div>
    </>
  )
}
