'use client'

import { docs } from '#site/content'
import { usePathname } from 'next/navigation'
import { Card, CardDescription, CardHeader, CardTitle, Grid, GridItem } from 'ui'

const simplifiedDocs = docs.map(({ title, slug, description }) => ({ title, slug, description }))

export function DocComposed({ components, text }: { components: string[]; text?: string | React.ReactNode }) {
  const pathname = usePathname()
  const name = getLatestOfString(pathname)
  const filteredComponents = simplifiedDocs.filter((component) => {
    const lastSegment = component.slug.split('/').pop()
    return components.includes(lastSegment || '')
  })
  return (
    <div className="not-prose">
      {!text ? (
        <p className="mb-6">
          A <strong className="font-medium">{name}</strong> packs these dope components that can vibe solo or squad up
          in other parts of your project.
        </p>
      ) : (
        <p className="mb-4">{text}</p>
      )}
      <Grid
        gap={{
          initial: 2,
          sm: 4,
          lg: 6
        }}
        columns={{
          initial: filteredComponents.length === 1 ? 1 : 2,
          sm: filteredComponents.length === 1 ? 1 : 2
        }}
        items={filteredComponents}
      >
        {(item) => (
          <GridItem id={item.slug} href={`/${item.slug}`}>
            <Card>
              <CardHeader className="sm:p-6 p-4">
                <CardTitle className="sm:text-lg text-base line-clamp-1 font-medium">{item.title}</CardTitle>
                <CardDescription className="line-clamp-2">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </GridItem>
        )}
      </Grid>
    </div>
  )
}

const getLatestOfString = (path: string): string => {
  const lastSegment = path.split('/').pop() || ''
  return lastSegment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}
