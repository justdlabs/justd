'use client'

import { IconBrandLaravel, IconBrandNextjs } from '@irsyadadl/paranoid'
import { Badge, CardDescription, CardFooter, CardHeader, CardTitle, Grid, GridItem } from 'ui'

const resources = [
  {
    icon: IconBrandNextjs,
    name: 'Next.js Starter Kit',
    url: 'https://justd-nsk.vercel.app/',
    description: 'A Next.js starter kit with Justd installed.',
    label: 'Starter Kit'
  },
  {
    icon: IconBrandLaravel,
    name: 'Laravel Starter Kit',
    url: 'https://github.com/irsyadadl/inertia.ts',
    description: 'A Laravel starter kit with Justd installed.',
    label: 'Starter Kit'
  }
  // {
  //   icon: IconBrandParanoid,
  //   name: 'Paranoid',
  //   url: 'https://paranoid.irsyad.co/',
  //   description:
  //     ' A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications. ',
  //   label: 'React Icons'
  // },
]

export function Resources() {
  return (
    <section id="Starter Kit" className="mb-12">
      <h2 className="text-2xl mb-6 font-bold">Starter Kit</h2>
      <Grid
        columns={{
          initial: 1,
          sm: 2
        }}
        gap={{
          initial: 4,
          lg: 8
        }}
        items={resources}
        aria-label="Resources"
      >
        {(item) => (
          <GridItem
            aria-label={item.name}
            id={item.name.toLowerCase().replaceAll(' ', '-')}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-md border focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-colors hover:bg-tertiary bg-tertiary/80"
          >
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
      </Grid>
    </section>
  )
}
