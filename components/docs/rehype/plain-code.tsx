'use client'

import * as React from 'react'

import { CodeCollapsible, CodeCollapsibleRoot } from '@/components/docs/rehype/code'

interface PlainCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  lang?: string
  withImportCopy?: boolean
}

export function PlainCode({ withImportCopy = false, lang = 'tsx', code, ...props }: PlainCodeProps) {
  const [isOpened, setIsOpened] = React.useState(false)
  return (
    <section className="my-4 not-prose">
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
