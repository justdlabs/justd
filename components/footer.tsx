'use client'

import React from 'react'

import { siteConfig } from '@/config/site'
import { Container, Link } from 'ui'

export function Footer() {
  return (
    <footer className="px-4 lg:[&_p]:mt-1 [&_strong]:font-medium [&_a]:font-medium border-t py-4 sm:py-8 lg:py-10 [&_strong]:text-fg [&_a]:text-fg text-muted-fg text-xs text-center lg:text-left lg:text-sm">
      <Container>
        <p>
          <strong>{siteConfig.name} &trade; 2024</strong> - This project’s crafted with{' '}
          <span className="font-[ui-sans-serif,-apple-system,system-ui] text-pink-500">♥</span> by{' '}
          <Link href="https://twitter.com/irsyadadl">Irsyad</Link>. Peep the Source Code on{' '}
          <Link href="https://github.com/irsyadadl/d.">GitHub</Link>.
        </p>

        <p>
          Cooked up with <strong>Next.js</strong>,{' '}
          <Link href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </Link>
          , and{' '}
          <Link href="https://react-spectrum.adobe.com/react-aria/components.html" target="_blank">
            RAC
          </Link>
          .
        </p>
        <p>
          Hosted on{' '}
          <Link href="https://vercel.com" target="_blank">
            Vercel
          </Link>
          . The source code's got the <Link href="https://github.com/irsyadadl/d./blob/main/LICENSE">MIT</Link> license.
        </p>
      </Container>
    </footer>
  )
}
