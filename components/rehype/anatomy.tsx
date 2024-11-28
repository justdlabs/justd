"use client"

import React from "react"

import { Code } from "@/components/rehype/code"
import { extractImports, extractJSX } from "@/resources/lib/utils"

interface AnatomyProps extends React.HTMLAttributes<HTMLDivElement> {
  show: string
  message?: string
  title?: string
  ext?: string
}

export const Anatomy = ({ show, ...props }: AnatomyProps) => {
  const [rawSourceCode, setRawSourceCode] = React.useState<string | null>(null)
  const processedSourceCode = React.useMemo(() => rawSourceCode || null, [rawSourceCode])

  React.useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        const response = await fetch(`/registry/anatomies/${show}.json`)
        if (response.ok) {
          const registryEntry = await response.json()
          setRawSourceCode(registryEntry.files?.[0]?.content || null)
        } else {
          console.error("Failed to fetch registry file:", response.status)
        }
      } catch (error) {
        console.error("Error loading source code:", error)
      }
    }

    fetchSourceCode()
  }, [show])
  if (processedSourceCode) {
    return (
      <section className="my-6 not-prose">
        <p className="mb-4 -mt-2">
          {props.message
            ? props.message
            : "Import the components and use them as shown below, adapting the structure to fit each component."}
        </p>
        {props.title && <figcaption data-rehype-pretty-code-title="">{props.title}</figcaption>}
        {processedSourceCode && (
          <>
            <Code
              className="max-h-none **:data-line:last:hidden [&_pre]:overflow-auto"
              code={extractImports(processedSourceCode as string)}
              lang={props.ext}
              withImportCopy={false}
            />
            <Code
              className="[&_pre]:max-h-[30rem] max-h-none mt-4 [&_pre]:overflow-auto"
              code={extractJSX(processedSourceCode as string) as any}
              lang={props.ext}
              withImportCopy={false}
            />
          </>
        )}
      </section>
    )
  }
}
