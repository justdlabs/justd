"use client"

import * as React from "react"

import jsonPreviews from "@/components/docs/generated/previews.json"
import { Code } from "@/components/docs/rehype/code"
import { extractImports, extractJSX } from "@/resources/lib/utils"

interface AnatomyProps extends React.HTMLAttributes<HTMLDivElement> {
  show: string
  message?: string
  title?: string
  ext?: string
}

export function Anatomy({ title, message, ext = "tsx", show }: AnatomyProps) {
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
      <Code
        className="max-h-none **:data-line:last:hidden [&_pre]:overflow-auto"
        code={extractImports(actualCode)}
        lang={ext}
        withImportCopy={false}
      />
      <Code
        className="[&_pre]:max-h-[30rem] max-h-none mt-4 [&_pre]:overflow-auto"
        code={extractJSX(actualCode) as any}
        lang={ext}
        withImportCopy={false}
      />
    </section>
  )
}
