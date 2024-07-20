import React from 'react'

import { Colors } from '@/app/(app)/colors/colors'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colors / ' + siteConfig.name,
  description:
    'Over 154 colors are available for copying in your preferred format, plus it supports 8 different format options.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name,
  category: 'Colors',
  twitter: {
    card: 'summary_large_image',
    title: 'Colors / ' + siteConfig.name,
    description:
      'Over 154 colors are available for copying in your preferred format, plus it supports 8 different format options.'
  }
}

export default function Page() {
  return <Colors />
}
