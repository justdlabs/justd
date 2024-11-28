"use client"

import React, { useEffect, useMemo, useState } from "react"

import generated from "@/__registry__/generated"
import { Code } from "@/components/rehype/code"
import { cn } from "@/resources/lib/utils"
import { IconFullscreen } from "justd-icons"
import { LayoutGroup } from "motion/react"
import { Loader, Tabs } from "ui"

type RegistryItem = {
  component: React.LazyExoticComponent<any>
  files: string[]
  [key: string]: any
}

const registry = generated as Record<string, RegistryItem>

type HowProps = {
  toUse: string

  minW72?: boolean
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
  fullscreenUrl?: string
}

export const DocHow = ({ className, toUse, ...props }: HowProps) => {
  const [rawSourceCode, setRawSourceCode] = useState<string | null>(null)

  /*
   * Prepend the `demo/` prefix to the provided `toUse` prop
   * to construct the registry key dynamically.
   */
  const registryKey = `demo/${toUse}`

  /*
   * Retrieve the component from the registry using the dynamic key.
   * This ensures that the correct component is loaded via React.lazy.
   */
  const Component = registry[registryKey]?.component

  const processedSourceCode = useMemo(() => {
    if (!rawSourceCode) return null

    /*
     * Rename the default export to a named export.
     * Use regex to match `export default function <name>()`
     * Replace with `export function Component()`
     */
    const defaultExportRegex = /export\s+default\s+function\s+([a-zA-Z0-9_$]+)\s*\(/
    return rawSourceCode.replace(defaultExportRegex, "export function Component(")
  }, [rawSourceCode])

  useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        /*
         * Fetch the source code content from the appropriate JSON file.
         * The JSON file is located at `/public/registry/demo/{toUse}.json`.
         */
        const response = await fetch(`/registry/demo/${toUse}.json`)
        if (response.ok) {
          const registryEntry = await response.json()

          /*
           * Extract the source code from the registry entry.
           * The content is located in the first file of the `files` array.
           */
          setRawSourceCode(registryEntry.files?.[0]?.content || null)
        } else {
          console.error("Failed to fetch registry file:", response.status)
        }
      } catch (error) {
        /*
         * Log any errors that occur during the source code fetch process.
         * This ensures debugging information is available if the fetch fails.
         */
        console.error("Error loading source code:", error)
      }
    }

    fetchSourceCode()
  }, [toUse])

  if (!Component) {
    /*
     * Display a fallback message if the component is not found in the registry.
     */
    return <p>Component "{toUse}" not found in the registry.</p>
  }
  const divProps = { ...props } as React.HTMLProps<HTMLDivElement>
  return (
    <div className={cn("not-prose forced-color-adjust-non relative my-4", className)} {...divProps}>
      <Tabs aria-label="Packages">
        <TabsList fullscreenUrl={props.fullscreenUrl} />
        <Tabs.Panel className="w-full" id="preview">
          <div
            className={cn(
              !props.withNoPadding && "relative gap-4 rounded-lg border bg-overlay p-6",
              props.isCenter &&
                "flex min-h-56 lg:min-h-80 items-center justify-center py-6 preview sm:py-24 overflow-x-auto"
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex py-6 justify-center items-center text-sm text-muted-fg">
                  <Loader variant="spin" />
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <div className={cn(props.minW72 && "min-w-72", "not-prose", className)}>
                <Component />
              </div>
            </React.Suspense>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="code">
          {processedSourceCode ? (
            <Code
              className="border [&_pre_span[data-line]:last-of-type]:hidden [&_pre]:border-0! border-zinc-800 bg-[#0e0e10] rounded-lg"
              code={processedSourceCode}
            />
          ) : (
            /*
             * Display a loading message while the source code is being fetched.
             */
            <p>Loading source code...</p>
          )}
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
