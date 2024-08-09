import React from 'react'

import { IconCheck, IconDuplicate } from 'justd-icons'
import { Button, Menu, MenuContent, MenuItem } from 'ui'
import { copyToClipboard } from 'usemods'

type Tool = 'Bun' | 'Yarn' | 'PNPM' | 'NPM'

export function Install() {
  const [isCopied, setIsCopied] = React.useState(false)
  const [command, setCommand] = React.useState('')
  const commandArgs = 'justd-icons'

  const installMap: Record<Tool, string> = {
    Bun: 'bun add',
    Yarn: 'yarn add',
    PNPM: 'pnpm add',
    NPM: 'npm i'
  }

  const handleCopy = (tool: Tool) => {
    const newCommand = `${installMap[tool]} ${commandArgs}`
    setCommand(newCommand)
    copyToClipboard(newCommand).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="pl-3 bg-background font-mono text-sm tracking-tighter border flex items-center justify-between p-1 rounded-lg w-full sm:min-w-72 sm:max-w-72 [&_.xd]:mr-[-0.30rem] [&_.xd]:-mt-px h-10 xd">
      {command || 'npm i justd-icons'}
      <Menu>
        <Button
          size="square-petite"
          appearance="outline"
          className="size-7 rounded-sm"
          aria-label="Copy npm command"
        >
          {isCopied ? <IconCheck /> : <IconDuplicate />}
        </Button>
        <MenuContent showArrow placement="bottom end">
          <MenuItem onAction={() => handleCopy('Bun')}>Bun</MenuItem>
          <MenuItem onAction={() => handleCopy('Yarn')}>Yarn</MenuItem>
          <MenuItem onAction={() => handleCopy('PNPM')}>PNPM</MenuItem>
          <MenuItem onAction={() => handleCopy('NPM')}>NPM</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  )
}
