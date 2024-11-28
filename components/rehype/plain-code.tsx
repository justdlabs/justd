"use client"

import * as React from "react"

import { Code } from "@/components/rehype/code"

interface PlainCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  lang?: string
  title?: string
  withImportCopy?: boolean
}

export function PlainCode({ title, withImportCopy = false, lang = "tsx", code }: PlainCodeProps) {
  return (
    <section className="my-4 not-prose">
      {title && <figcaption data-rehype-pretty-code-title="">{title}</figcaption>}
      <Code code={code} lang={lang} withImportCopy={withImportCopy} />
    </section>
  )
}
