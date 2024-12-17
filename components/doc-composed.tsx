"use client"

import { usePathname } from "next/navigation"
import { Card, Grid, Link } from "ui"
import { docs } from "#site/content"

const simplifiedDocs = docs.map(({ title, slug, description }) => ({ title, slug, description }))

export function DocComposed({
  components,
  text,
}: { components: string[]; text?: string | React.ReactNode }) {
  const pathname = usePathname()
  const name = getLatestOfString(pathname)
  const filteredComponents = simplifiedDocs.filter((component) => {
    const lastSegment = component.slug.split("/").pop()
    return components.includes(lastSegment || "")
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
          sm: 4,
        }}
        columns={{
          initial: filteredComponents.length === 1 ? 1 : 2,
          sm: 2,
        }}
      >
        {filteredComponents.map((item) => (
          <Grid.Item className="relative" key={item.slug}>
            <Link
              aria-label={`Open ${item.title}`}
              rel="noopener noreferrer"
              href={`/${item.slug}`}
              className="absolute inset-0 rounded-lg peer size-full"
            />
            <Card className="overflow-hidden transition-colors peer-hover:bg-secondary/30">
              <Card.Header className="p-4">
                <Card.Title className="text-base font-medium sm:text-lg line-clamp-1">
                  {item.title}
                </Card.Title>
                <Card.Description className="text-xs sm:text-sm line-clamp-2">
                  {item.description}
                </Card.Description>
              </Card.Header>
            </Card>
          </Grid.Item>
        ))}
      </Grid>
    </div>
  )
}

const getLatestOfString = (path: string): string => {
  const lastSegment = path.split("/").pop() || ""
  return lastSegment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}
