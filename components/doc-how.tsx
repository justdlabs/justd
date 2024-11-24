"use client"

import * as React from "react"

import { previews } from "@/components/docs/generated/previews"
import jsonPreviews from "@/components/docs/generated/previews.json"
import { Code } from "@/components/docs/rehype/code"
import { cn } from "@/resources/lib/utils"
import { LayoutGroup } from "framer-motion"
import { IconFullscreen } from "justd-icons"
import { Loader, Tabs } from "ui"

interface HowProps extends React.HTMLAttributes<HTMLDivElement> {
  toUse: string
  minW72?: boolean
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
  fullscreenUrl?: string
}

export function DocHow({
  toUse,
  className,
  minW72 = false,
  isCenter = true,
  withNoPadding = false,
  fullscreenUrl,
  ...props
}: HowProps) {
  const Preview = previews[toUse] ? previews[toUse].component : null

  // @ts-ignore
  let codeString = jsonPreviews[toUse].raw ?? ""

  codeString = codeString.replace(/function\s+\w+\s*\(/g, "function App(")
  const divProps = { ...props } as React.HTMLProps<HTMLDivElement>
  return (
    <div className={cn("not-prose forced-color-adjust-non relative my-4", className)} {...divProps}>
      <Tabs aria-label="Packages">
        <TabsList fullscreenUrl={fullscreenUrl} />
        <Tabs.Panel className="w-full" id="preview">
          <div
            className={cn(
              !withNoPadding && "relative gap-4 rounded-lg border bg-overlay p-6",
              isCenter &&
                "flex min-h-56 lg:min-h-80 items-center justify-center py-6 preview sm:py-24",
              "overflow-x-auto"
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex py-6 justify-center items-center text-sm text-muted-foreground">
                  <Loader variant="spin" />
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <div className={cn(minW72 && "min-w-72", "not-prose", className)}>
                <Preview />
              </div>
            </React.Suspense>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="code">
          <Code
            className="border [&_pre_span[data-line]:last-of-type]:hidden [&_pre]:border-0! border-zinc-800 bg-[#0e0e10] rounded-lg"
            code={codeString}
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

const TabsList = ({ fullscreenUrl }: { fullscreenUrl?: string }) => {
  const id = React.useId()
  return (
    <div>
      <LayoutGroup id={id}>
        <Tabs.List>
          <Tabs.Tab id="preview">Preview</Tabs.Tab>
          <Tabs.Tab id="code">Code</Tabs.Tab>
          {fullscreenUrl && (
            <Tabs.Tab className="ml-auto flex items-center" target="_blank" href={fullscreenUrl}>
              <IconFullscreen />
              Fullscreen
            </Tabs.Tab>
          )}
        </Tabs.List>
      </LayoutGroup>
    </div>
  )
}
