'use client'

import { docs } from '#site/content'
import { usePathname } from 'next/navigation'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Grid,
  GridCollection,
  GridItem,
  Link
} from 'ui'

const simplifiedDocs = docs.map(({ title, slug, description }) => ({ title, slug, description }))

export function DocComposed({
  components,
  text
}: {
  components: string[]
  text?: string | React.ReactNode
}) {
  const pathname = usePathname()
  const name = getLatestOfString(pathname)
  const filteredComponents = simplifiedDocs.filter((component) => {
    const lastSegment = component.slug.split('/').pop()
    return components.includes(lastSegment || '')
  })
  return (
    <div className="not-prose">
      {!text ? (
        <>
          <p className="mb-6">
            When you plug this component from the CLI, it autoloads all the composed components. No
            need to toss 'em in one at a time.
          </p>
          <p className="mb-6">
            The <strong className="font-medium lowercase">{name}</strong>'s decked out with several
            components to make it bangin'.
          </p>
        </>
      ) : (
        <p className="mb-4">{text}</p>
      )}
      <Grid
        gap={{
          initial: 2,
          sm: 4
        }}
        columns={{
          initial: filteredComponents.length === 1 ? 1 : 2,
          sm: 2
        }}
      >
        <GridCollection items={filteredComponents}>
          {(item) => (
            <GridItem className="relative" id={item.slug}>
              <Link
                aria-label={`Open ${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
                href={`/${item.slug}`}
                className="absolute inset-0 rounded-lg size-full"
              />
              <Card className="overflow-hidden hover:bg-secondary/40 focus:bg-secondary/40 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="sm:text-lg text-base line-clamp-1 font-medium">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </GridItem>
          )}
        </GridCollection>
      </Grid>
    </div>
  )
}

const getLatestOfString = (path: string): string => {
  const lastSegment = path.split('/').pop() || ''
  return lastSegment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}
