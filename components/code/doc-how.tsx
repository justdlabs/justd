"use client"

import React from "react"

import generated from "@/__registry__/generated"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { TabsList } from "@/components/code/code-sandbox"
import { CopyButton } from "@/components/code/copy-button"
import { cn } from "@/resources/lib/utils"
import type { RegistryItem } from "@/resources/types"
import { Group } from "react-aria-components"
import { Loader, Tabs } from "ui"

const registry = generated as Record<string, RegistryItem>

type HowProps = {
  toUse: string

  minW72?: boolean
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
  src?: string
}

export const DocHow = ({
  toUse,
  className,
  minW72 = false,
  isCenter = true,
  withNoPadding = false,
  src,
  ...props
}: HowProps) => {
  const [rawSourceCode, setRawSourceCode] = React.useState<string | null>(null)

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

  const processedSourceCode = React.useMemo(() => {
    if (!rawSourceCode) return null

    /*
     * Rename the default export to a named export.
     * Use regex to match `export default function <name>()`
     * Replace with `export function Component()`
     */
    const defaultExportRegex = /export\s+default\s+function\s+([a-zA-Z0-9_$]+)\s*\(/
    return rawSourceCode.replace(defaultExportRegex, "export function Component(")
  }, [rawSourceCode])

  React.useEffect(() => {
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
        <TabsList src={src} />
        <Tabs.Panel className="w-full" id="preview">
          <div
            className={cn(
              !withNoPadding && "relative gap-4 rounded-lg border bg-overlay p-6",
              isCenter && "flex min-h-56 lg:min-h-80 items-center justify-center py-6 preview sm:py-24 overflow-x-auto"
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
              <div className={cn(minW72 && "min-w-72", "not-prose", className)}>
                <Component />
              </div>
            </React.Suspense>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="code">
          {processedSourceCode ? (
            <Group className="relative group">
              <CopyButton text={processedSourceCode} className="absolute top-0 right-0" />
              <CodeHighlighter removeLastLine code={processedSourceCode} />
            </Group>
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
