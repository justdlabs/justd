'use client'

import React from 'react'

import { Container, Link } from 'ui'

export function Footer() {
  return (
    <footer className="px-4 [&_strong]:font-medium border-t py-4 sm:py-8 lg:py-10 [&_strong]:text-fg [&_a]:text-fg text-muted-fg text-center text-sm">
      <Container>
        <p>
          <strong>D. 2024</strong> - This project’s made with{' '}
          <span className="font-[ui-sans-serif,-apple-system,system-ui]">♥</span> by{' '}
          <Link href="https://twitter.com/irsyadadl">Irsyad</Link>. Check out the Source Code on{' '}
          <Link href="https://github.com/irsyadadl/d.">GitHub</Link>.
        </p>

        <p>
          Created with Next.js, Tailwind CSS, and Hosted on Vercel. The source code is licensed under{' '}
          <Link href="https://github.com/irsyadadl/d./blob/main/LICENSE">MIT</Link>.
        </p>
      </Container>
    </footer>
  )
}
