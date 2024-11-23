"use client"

import React from "react"

import { docs } from "#site/content"
import { ThumbnailWrapper } from "@/app/(app)/components/partials/thumbnail-wrapper"
import { goodTitle } from "@/resources/lib/utils"
import { slug } from "github-slugger"
import Link from "next/link"
import { Description, Grid, Heading } from "ui"

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
        published: item.published
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
          <Heading
            tracking="tight"
            level={2}
            id={category}
            className="mb-4 scroll-mt-28 font-medium text-fg"
          >
            {goodTitle(category)}
          </Heading>
          <Grid
            aria-label="Components"
            gap={2}
            columns={{
              initial: 1,
              sm: 3
            }}
          >
            <Grid.Collection items={components}>
              {(component) => (
                <Link
                  id={component.slug}
                  href={component.slug}
                  className="relative focus:outline-hidden p-1 h-full flex flex-col w-full focus-visible:outline-hidden focus-visible:outline-primary rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
                  aria-label={component.title}
                >
                  <div className="flex-1">
                    <ThumbnailWrapper thumbnail={slug(component.title)} />

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
