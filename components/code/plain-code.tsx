"use client"

import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/copy-button"
import { IconBrandReactjs } from "justd-icons"
import { Group } from "react-aria-components"

interface PlainCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  lang?: string
  title?: string
}

export function PlainCode({ title, lang = "tsx", code }: PlainCodeProps) {
  return (
    <Group className="my-4 not-prose group relative">
      {title && (
        <figcaption data-rehype-pretty-code-title="" className="inline-flex items-center gap-x-1">
          {title.includes(".tsx") ? <IconBrandReactjs className="text-sky-500 size-4" /> : null}
          {title}
        </figcaption>
      )}
      <CopyButton text={code} className="absolute top-0 right-0" />
      <CodeHighlighter removeLastLine code={code} lang={lang} />
    </Group>
  )
}
