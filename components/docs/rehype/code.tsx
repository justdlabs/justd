'use client'

import { IconCircleInfo } from '@irsyadadl/paranoid'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { cn, CopyButton } from 'ui'
import { copyToClipboard } from 'usemods'

function Code({
  lang = 'tsx',
  code,
  withImportCopy = true
}: {
  lang?: string
  code: string
  withImportCopy?: boolean
}) {
  const [copied, setCopied] = React.useState<string>('')

  function copyImportsToClipboard(): void {
    const importRegex = /import[\s\S]+?from\s+['"][\s\S]+?['"];?\n*/g
    const _imports = code.match(importRegex) || []
    const imports = _imports.map((importStatement: string) => importStatement.trim()).join('\n')
    copyToClipboard(imports)
      .then(() => {
        setCopied('imports')
        setTimeout(() => setCopied(''), 2000)
      })
      .catch((err) => console.error('Copy failed: ', err))
  }

  return (
    <div className="dfakdpxe2941 not-prose group relative max-h-96 overflow-y-auto rounded-lg [&_pre]:!bg-[#0e0e10] [&_pre_code]:!leading-loose [&_pre]:!m-0 [&_pre]:!p-4 border-zinc-800 border font-mono text-sm">
      <div className={cn('absolute z-20 bottom-auto right-3 top-3 flex gap-1.5')}>
        {withImportCopy && (
          <CopyButton
            ariaLabel="Copy imports statement"
            initialIcon={<IconCircleInfo />}
            isCopied={copied === 'imports'}
            onPress={copyImportsToClipboard}
          />
        )}
        <CopyRawButton code={code} />
      </div>
      <SyntaxHighlighter language={lang} style={theme}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export function CopyRawButton({ code }: { className?: string; code: any }) {
  const [copied, setCopied] = React.useState<string>('')
  const copyRaw = () => {
    copyToClipboard(code)
      .then(() => {
        setCopied('raw')
        setTimeout(() => setCopied(''), 2000)
      })
      .catch((err) => {
        console.error('Copy failed: ', err)
      })
  }
  return <CopyButton ariaLabel="Copy raw code" isCopied={copied === 'raw'} onPress={copyRaw} />
}

export { Code }
