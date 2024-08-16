import React from "react"

import { Header } from "@/components/header"
import { siteConfig } from "@/resources/config/site"
import type { Metadata } from "next"
import { Container } from "ui"

import type { SearchParamsProps } from "./partials/icons-list"
import { IconsList } from "./partials/icons-list"

export const metadata: Metadata = {
  title: "Justd Icons / " + siteConfig.name,
  description:
    " A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications. ",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name
}

export default function Page({ searchParams }: SearchParamsProps) {
  return (
    <>
      <Header>
        Ico
        <span className="text-muted-fg">ns</span>
      </Header>
      <div className="py-4 sm:py-16">
        <Container>
          <IconsList searchParams={searchParams} />
        </Container>
      </div>
    </>
  )
}
