'use client'

import { IconBrandJustd, IconBrandLaravel, IconBrandNextjs, IconBrandParanoid } from 'justd-icons'
import {
  Badge,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Grid,
  GridCollection,
  GridItem,
  Heading,
  Link
} from 'ui'

const resources = [
  {
    icon: IconBrandNextjs,
    name: 'Next.js Starter Kit',
    url: 'https://justd-nsk.vercel.app/',
    description:
      "A Next.js starter kit with Justd installed. You don't need to set up anything, just run clone it and you're good to go!",
    label: 'Starter Kit'
  },
  {
    icon: IconBrandLaravel,
    name: 'Laravel Starter Kit',
    url: 'https://github.com/irsyadadl/inertia.ts',
    description:
      'A Laravel starter kit with Justd installed. It includes a authentication system out of the box.',
    label: 'Starter Kit'
  }
]

export function Resources() {
  return (
    <>
      <section id="starter-kit" className="mb-12">
        <Heading level={2} className="mb-6">
          Starter Kit
        </Heading>
        <Grid
          columns={{
            initial: 1,
            sm: 2
          }}
          gap={2}
          aria-label="Resources"
        >
          <GridCollection items={resources}>
            {(item) => (
              <GridItem
                aria-label={item.name}
                id={item.name.toLowerCase().replaceAll(' ', '-')}
                className="relative focus:outline-none p-4 lg:p-6 h-full flex flex-col w-full focus-visible:outline-none focus-visible:outline-primary rounded-xl bg-tertiary shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
              >
                <Link
                  aria-label={`Open ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                  className="absolute inset-0 size-full"
                />
                <div className="flex-1">
                  <div className="px-6 pt-6">
                    <item.icon className="size-7" />
                  </div>
                  <CardHeader>
                    <CardTitle level={3}>{item.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                  </CardHeader>
                </div>
                <CardFooter>
                  <Badge>{item.label}</Badge>
                </CardFooter>
              </GridItem>
            )}
          </GridCollection>
        </Grid>
      </section>
      <section id="icons" className="mb-12">
        <Heading level={2} className="mb-6">
          Icons
        </Heading>
        <Grid
          columns={{
            initial: 1,
            sm: 2
          }}
          gap={2}
          aria-label="Icons"
        >
          <GridItem
            aria-label="Paranoid icons"
            id="paranoid-icons"
            className="relative focus:outline-none p-4 lg:p-6 h-full flex flex-col w-full focus-visible:outline-none focus-visible:outline-primary rounded-xl bg-tertiary shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
          >
            <Link
              aria-label={`Paranoid icons`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://paranoid.irsyad.co"
              className="absolute inset-0 size-full"
            />
            <div className="flex-1">
              <div className="px-6 pt-6">
                <IconBrandJustd className="size-7" />
              </div>
              <CardHeader>
                <CardTitle level={3}>Icons</CardTitle>
                <CardDescription className="line-clamp-2">
                  A library of beautifully crafted react icons, perfect for enhancing the visual
                  appeal and user experience of your web applications.{' '}
                </CardDescription>
              </CardHeader>
            </div>
            <CardFooter>
              <Badge>icons</Badge>
            </CardFooter>
          </GridItem>
        </Grid>
      </section>
    </>
  )
}
