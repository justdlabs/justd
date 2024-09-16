"use client"

import * as React from "react"

import jsonPreviews from "@/components/docs/generated/previews.json"
import { Code } from "@/components/docs/rehype/code"
import { extractJSX } from "@/resources/lib/utils"

interface AnatomyProps extends React.HTMLAttributes<HTMLDivElement> {
  show: string
  message?: string
  title?: string
  ext?: string
}

function extractImports(code: string) {
  const importRegex = /^import.*?$/gm
  const imports = code.match(importRegex)
  return imports ? imports.join("\n") : ""
}

export function Anatomy({ title, message, ext = "tsx", show, ...props }: AnatomyProps) {
  const _show = "anatomies/" + show
  // @ts-ignore
  const actualCode = jsonPreviews[_show].raw as string
  return (
    <section className="my-6 not-prose">
      <p className="mb-4 -mt-2">
        {message
          ? message
          : "Import the components and use them as shown below, adapting the structure to fit each component."}
      </p>
      {title && <figcaption data-rehype-pretty-code-title="">{title}</figcaption>}
      {/* I don't know why this not by default. Otherwise, you get extra new line which weird */}
      <Code
        className="max-h-none [&_pre]:overflow-auto"
        code={extractImports(actualCode as any)}
        lang={ext}
        withImportCopy={false}
      />
      <Code
        className="max-h-none [&_pre]:overflow-auto"
        code={extractJSX(actualCode) as any}
        lang={ext}
        withImportCopy={false}
      />
    </section>
  )
}
