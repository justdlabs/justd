'use client'

import React, { useEffect, useState } from 'react'

import { trackEvent } from '@openpanel/nextjs'
import { CopyButton, Link, Menu, MenuContent, MenuItem } from 'ui'

export interface InstallCommandProps {
  isAdd?: boolean
  isInstall?: boolean
  isInit?: boolean
  isManual?: boolean
  items?: string[]
  isInDocsComponent?: boolean
}

const InstallCommand: React.FC<InstallCommandProps> = ({
  items = [],
  isAdd = false,
  isInstall = false,
  isManual = false,
  isInDocsComponent = true,
  isInit = false
}) => {
  const addCommand = 'justd-cli@latest add'
  const initCommand = 'justd-cli@latest init'
  const commandArgs = items.join(' ')
  const defaultCommand = isAdd
    ? `npx ${addCommand} ${commandArgs}`
    : isInit
      ? `npx ${initCommand}`
      : `npm i ${commandArgs}`

  const [command, setCommand] = useState(defaultCommand)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCopied) {
      timer = setTimeout(() => setIsCopied(false), 2000)
    }
    return () => clearTimeout(timer)
  }, [isCopied])

  const copyToClipboard = (textToCopy: string) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        trackEvent('cli pressed', { copy: textToCopy })
        setIsCopied(true)
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  const handleAction = (tool: string) => {
    let newCommand = ''
    if (isAdd) {
      const addMap = {
        Bun: 'bunx',
        Yarn: 'yarn dlx',
        PNPM: 'pnpm dlx',
        NPM: 'npx'
      }
      // @ts-ignore
      newCommand = `${addMap[tool]} ${addCommand} ${commandArgs}`
    } else if (isInit) {
      const initMap = {
        Bun: 'bunx',
        Yarn: 'yarn dlx',
        PNPM: 'pnpm dlx',
        NPM: 'npx'
      }
      // @ts-ignore
      newCommand = `${initMap[tool]} ${initCommand}`
    } else if (isInstall) {
      const installMap = {
        Bun: 'bun add',
        Yarn: 'yarn add',
        PNPM: 'pnpm add',
        NPM: 'npm i'
      }
      // @ts-ignore
      newCommand = `${installMap[tool]} ${commandArgs}`
    }
    setCommand(newCommand)
    copyToClipboard(newCommand)
  }

  return (
    <>
      {isAdd && isInDocsComponent && (
        <p>
          If you hit any snags, make sure you peep the installation guide{' '}
          <Link
            className="not-prose font-medium"
            intent="primary"
            href="/docs/getting-started/installation"
            target="_blank"
            rel="noreferrer"
          >
            here
          </Link>
          .
        </p>
      )}
      {isManual && (
        <p>
          Sometimes, using the CLI is the way to roll, so make sure you install the necessary dependencies for the
          components you wanna use.
        </p>
      )}
      <div className="not-prose relative flex items-center justify-between rounded-lg border bg-[#0e0e10] py-2.5 pl-4 pr-2.5 text-white font-mono text-sm [&>svg]:text-zinc-400 [&>svg]:transition [&_svg]:shrink-0">
        <code>{command}</code>
        <div className="pl-3">
          <Menu>
            <CopyButton className="rounded-sm" ariaLabel={command} isCopied={isCopied} />
            <MenuContent showArrow placement="bottom end">
              <MenuItem onAction={() => handleAction('Bun')}>Bun</MenuItem>
              <MenuItem onAction={() => handleAction('Yarn')}>Yarn</MenuItem>
              <MenuItem onAction={() => handleAction('PNPM')}>PNPM</MenuItem>
              <MenuItem onAction={() => handleAction('NPM')}>NPM</MenuItem>
            </MenuContent>
          </Menu>
        </div>
      </div>
    </>
  )
}

export { InstallCommand }
