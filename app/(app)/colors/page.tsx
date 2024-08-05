import React from 'react'

import { ColorPalette } from '@/app/(app)/colors/(colors)/color-palette'
import { Header } from '@/components/header'
import { siteConfig } from '@/resources/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colors / ' + siteConfig.name,
  description:
    'A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up in 8 slick formats.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name,
  category: 'Colors',
  twitter: {
    card: 'summary_large_image',
    title: 'Colors / ' + siteConfig.name,
    description:
      'A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up in 8 slick formats.'
  }
}

export default async function Page() {
  return (
    <>
      <Header>
        Col
        <span className="text-muted-fg">ors</span>
      </Header>
      <ColorPalette />
    </>
  )
}
