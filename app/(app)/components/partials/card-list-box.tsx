"use client"

import { goodTitle } from "@/resources/lib/utils"
import Link from "next/link"
import { Description, Grid, Heading } from "ui"
import { docs } from "#site/content"

type GroupedComponents = {
  [category: string]: {
    slug: string
    title: string
    order: number
    description: number
    published: boolean
  }[]
}

const groupByCategory = (data: any[]): GroupedComponents => {
  return data.reduce((acc: GroupedComponents, item) => {
    const parts = item.slug.split("/")
    if (parts[1] === "components") {
      const category = parts[2]
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push({
        slug: item.slug,
        title: item.title,
        order: item.order,
        description: item.description,
        published: item.published,
      })
    }
    return acc
  }, {})
}

export const groupedComponents = groupByCategory(docs.sort((a, b) => a.order - b.order))

export function CardListBox() {
  return (
    <div className="space-y-10 w-full">
      {Object.entries(groupedComponents).map(([category, components]) => (
        <div key={category}>
          <Heading tracking="tight" level={2} id={category} className="mb-4 font-medium scroll-mt-28 text-fg">
            {goodTitle(category)}
          </Heading>
          <Grid
            aria-label="Components"
            gap={2}
            columns={{
              initial: 1,
              sm: 3,
            }}
          >
            <Grid.Collection items={components}>
              {(component) => (
                <Link
                  id={component.slug}
                  href={component.slug}
                  className="p-1 rounded-lg inset-ring-1 inset-ring-border bg-muted/30"
                  aria-label={component.title}
                >
                  <div className="flex-1">
                    <div className="p-4">
                      <Heading tracking="tight" level={3}>
                        {component.title}
                      </Heading>
                      <Description className="block mt-2">{component.description}</Description>
                    </div>
                  </div>
                </Link>
              )}
            </Grid.Collection>
          </Grid>
        </div>
      ))}
    </div>
  )
}
