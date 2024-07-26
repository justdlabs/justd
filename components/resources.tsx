'use client'

import { CardDescription, CardHeader, CardTitle, Grid, GridItem } from 'ui'
import { IconBrandLaravel, IconBrandNextjs, IconBrandParanoid } from '@irsyadadl/paranoid'

const resources = [
  {
    icon: IconBrandNextjs,
    name: 'Just D Next.js Starter Kit',
    url: 'https://justd-nsk.vercel.app/',
    description: 'A Next.js starter kit with Justd installed.',
  },
  {
    icon: IconBrandLaravel,
    name: 'Just D Laravel Starter Kit',
    url: 'https://github.com/irsyadadl/inertia.ts',
    description: 'A Laravel starter kit with Justd installed.',
  },
  {
    icon: IconBrandParanoid,
    name: 'Paranoid Icons',
    url: 'https://github.com/irsyadadl/paranoid',
    description: 'A collection of icons for your design system.',
  }
]

export function Resources() {
  return (
    <Grid columns={{
      initial: 1,
      sm: 2,
      lg: 3,
    }} gap={{
      initial: 4,
      lg: 6,
    }} items={resources} aria-label='Resources'>
      {(item) => (
        <GridItem
          id={item.name.toLowerCase().replaceAll(' ', '-')}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 rounded-md border transition-colors hover:bg-muted/10 dark:hover:bg-muted/20'
        >
          <div className="p-6">
            <item.icon/>
          </div>
          <CardHeader>
            <CardTitle level={3}>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
        </GridItem>
      )}
    </Grid>
  )
}
