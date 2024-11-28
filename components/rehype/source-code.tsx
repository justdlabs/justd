"use client"

import React from "react"

import generated from "@/__registry__/generated"
import { Code } from "@/components/rehype/code"
import { IconBrandReactjs } from "justd-icons"

type RegistryItem = {
  component: React.LazyExoticComponent<any>
  files: string[]
  [key: string]: any
}

const registry = generated as Record<string, RegistryItem>

type SourceCodeProps = {
  toShow: string
  message?: string
  title?: string
  ext?: string
}

export const SourceCode = ({ toShow, ...props }: SourceCodeProps) => {
  const [rawSourceCode, setRawSourceCode] = React.useState<string | null>(null)

  /*
   * Prepend the `ui/` prefix to the provided `toShow` prop
   * to construct the registry key dynamically.
   */
  const registryKey = `ui/${toShow}`

  /*
   * Retrieve the component from the registry using the dynamic key.
   * This ensures that the correct component is loaded via React.lazy.
   */
  const Component = registry[registryKey]?.component

  const processedSourceCode = React.useMemo(() => {
    if (!rawSourceCode) return null

    return rawSourceCode
  }, [rawSourceCode])

  React.useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        /*
         * Fetch the source code content from the appropriate JSON file.
         * The JSON file is located at `/public/registry/demo/{toShow}.json`.
         */
        const response = await fetch(`/registry/ui/${toShow}.json`)
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
  }, [toShow])

  if (!Component) {
    /*
     * Display a fallback message if the component is not found in the registry.
     */
    return <p>Component "{toShow}" not found in the registry.</p>
  }

  if (processedSourceCode) {
    return (
      <section {...props} className="my-6 not-prose">
        <p className="mb-4 -mt-2">
          {props.message
            ? props.message
            : "And next, you can copy the code below and paste it into your component folder."}
        </p>
        {props.title && <figcaption data-rehype-pretty-code-title="">{props.title}</figcaption>}
        <Code
          title={`${toShow}.tsx`}
          icon={IconBrandReactjs}
          code={processedSourceCode}
          lang={props.ext}
          withImportCopy={false}
        />
      </section>
    )
  }
}
