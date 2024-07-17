'use client'

import { useEffect, useState } from 'react'

import { CopyButton, Menu, MenuContent, MenuItem } from 'ui'

export const snippetClassName =
  'not-prose relative flex items-center justify-between rounded-lg border bg-[#0e0e10] py-2.5 pl-3 pr-2.5 font-mono text-sm [&>svg]:text-zinc-400 [&>svg]:transition [&_svg]:shrink-0'
export interface DocSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}
export function DocSnippet({ text }: DocSnippetProps) {
  const initialCommandArgs = text.split(' ').slice(1).join(' ') // Strip the initial 'npx' or any other prefix
  const [command, setCommand] = useState(text)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCopied) {
      timer = setTimeout(() => setIsCopied(false), 2000) // Reset the copied state after 2 seconds
    }
    return () => clearTimeout(timer) // Cleanup the timeout
  }, [isCopied])

  const copyToClipboard = (textToCopy: string) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true)
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  const handleAction = (tool: string) => {
    const commandMap = {
      Bun: 'bunx',
      Yarn: 'yarn dlx',
      PNPM: 'pnpm dlx',
      NPM: 'npx'
    }
    // @ts-ignore
    const newPrefix: any = commandMap[tool]
    const newCommand = `${newPrefix} ${initialCommandArgs}`
    setCommand(newCommand)
    copyToClipboard(newCommand)
  }

  return (
    <div className={snippetClassName}>
      <code>{command}</code>
      <div className="pl-3">
        <Menu>
          <CopyButton isCopied={isCopied} />
          <MenuContent showArrow placement="bottom end">
            <MenuItem onAction={() => handleAction('Bun')}>Bun</MenuItem>
            <MenuItem onAction={() => handleAction('Yarn')}>Yarn</MenuItem>
            <MenuItem onAction={() => handleAction('PNPM')}>PNPM</MenuItem>
            <MenuItem onAction={() => handleAction('NPM')}>NPM</MenuItem>
          </MenuContent>
        </Menu>
      </div>
    </div>
  )
}
