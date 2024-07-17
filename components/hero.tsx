'use client'

import { siteConfig } from '@/config/site'
import { IconBrandD, IconCube } from '@irsyadadl/paranoid'
import Link from 'next/link'
import { Header, Text } from 'react-aria-components'
import { buttonStyles, Container, Heading } from 'ui'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-56"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-lime-500 to-primary-500 opacity-10 dark:opacity-[0.17] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <svg
        aria-hidden="true"
        className="absolute sm:block hidden inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-gray-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="pt-10 pb-6 sm:py-16 md:py-20 lg:py-24 border-b">
        <Container>
          <Header>
            <Heading className="max-w-xl text-2xl font-bold tracking-tight lg:text-5xl mb-2 lg:mb-6">
              Making your site accessible ain't rocket science.
            </Heading>
            <Text
              slot="description"
              className="text-base [&_strong]:font-medium lg:text-xl max-w-2xl block leading-relaxed text-muted-fg"
            >
              <strong className="text-fg">{siteConfig.name}</strong> is a chill set of
              React components, built on top of{' '}
              <strong className="text-fg">React Aria Components</strong>, all about
              keeping the web accessible. Easy to customize and just copy & paste into
              your React projects. Plus, it includes{' '}
              <strong className="text-fg">Tailwind CSS</strong> for sleek styling right
              out of the box.
            </Text>
          </Header>
          <div className="mt-6 space-x-2">
            <Link
              className={buttonStyles({
                size: 'large'
              })}
              href="/docs/getting-started/installation"
            >
              <IconBrandD />
              Get started
            </Link>
            <Link
              className={buttonStyles({
                size: 'large',
                intent: 'light'
              })}
              href="/components"
            >
              <IconCube />
              Components
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
