"use client"

import * as React from "react"

import { Code } from "@/components/rehype/code"
import { IconBrandReactjs } from "justd-icons"

interface PlainCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  lang?: string
  title?: string
  withImportCopy?: boolean
}

export function PlainCode({ title, withImportCopy = false, lang = "tsx", code }: PlainCodeProps) {
  return (
    <section className="my-4 not-prose">
      {title && (
        <figcaption data-rehype-pretty-code-title="" className="inline-flex items-center gap-x-1">
          {title.includes(".tsx") ? <IconBrandReactjs className="text-sky-500 size-4" /> : null}
          {title}
        </figcaption>
      )}
      <Code code={code} lang={lang} withImportCopy={withImportCopy} />
    </section>
  )
}
