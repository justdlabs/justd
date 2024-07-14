'use client'

import * as React from 'react'

import { CodeCollapsible, CodeCollapsibleRoot } from '@/components/docs/rehype/code'

interface PlainCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  lang?: string
  title?: string
  withImportCopy?: boolean
}

export function PlainCode({ title, withImportCopy = false, lang = 'tsx', code, ...props }: PlainCodeProps) {
  const [isOpened, setIsOpened] = React.useState(false)
  return (
    <section className="my-4 not-prose">
      {title && <figcaption data-rehype-pretty-code-title="">{title}</figcaption>}
      <CodeCollapsibleRoot>
        <CodeCollapsible
          isOpened={isOpened}
          onOpenChange={setIsOpened}
          withImportCopy={withImportCopy}
          lang={lang}
          code={code}
        />
      </CodeCollapsibleRoot>
    </section>
  )
}
