'use client'

import * as React from 'react'

import jsonPreviews from '@/components/docs/generated/previews.json'
import { Code } from '@/components/docs/rehype/code'
import { extractJSX } from '@/resources/lib/utils'

interface AnatomyProps extends React.HTMLAttributes<HTMLDivElement> {
  show: string
  message?: string
  title?: string
  ext?: string
}

function extractImports(code: string) {
  const importRegex = /^(import\s+(?:\{[^}]*}|[^;]+)\s*from\s*['"][^'"]+['"]\s*;?)$/gm
  const matches = code.match(importRegex)
  return matches ? matches.join('\n') : ''
}

export function Anatomy({ title, message, ext = 'tsx', show }: AnatomyProps) {
  const _show = 'anatomies/' + show
  // @ts-ignore
  const actualCode = jsonPreviews[_show].raw as string
  return (
    <section className="my-6 not-prose">
      <p className="mb-4 -mt-2">
        {message
          ? message
          : 'Import the components and use them as shown below, adapting the structure to fit each component.'}
      </p>
      {title && <figcaption data-rehype-pretty-code-title="">{title}</figcaption>}
      <Code
        className="max-h-none [&_[data-line]:last-child]:hidden [&_pre]:overflow-auto"
        code={extractImports(actualCode)}
        lang={ext}
        withImportCopy={false}
      />
      <Code
        className="[&_pre]:max-h-[30rem] max-h-none [&_pre]:overflow-auto"
        code={extractJSX(actualCode) as any}
        lang={ext}
        withImportCopy={false}
      />
    </section>
  )
}
