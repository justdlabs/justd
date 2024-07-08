'use client'

import React from 'react'
import { Snippet, Tab, TabList, TabPanel, Tabs } from 'ui'

interface InstallProps {
  items?: string[]
}

const DefaultInstallation: React.FC<InstallProps> = ({ items = ['react-aria-components'] }) => {
  const getInstallCommand = (packageManager: string) => {
    switch (packageManager) {
      case 'bun':
        return `bunx @irsyadadl/d@latest add --component ${items.join(' ')}`
      case 'yarn':
        return `npx @irsyadadl/d@latest add --component ${items.join(' ')}`
      case 'pnpm':
        return `pnpm dlx @irsyadadl/d@latest add --component ${items.join(' ')}`
      case 'npm':
      default:
        return `npx @irsyadadl/d@latest add --component ${items.join(' ')}`
    }
  }

  return (
    <div>
      <Tabs className="mt-4" aria-label="Packages">
        <TabList>
          <Tab className="font-mono" id="bun">
            bun
          </Tab>
          <Tab className="font-mono" id="yarn">
            yarn
          </Tab>
          <Tab className="font-mono" id="pnpm">
            pnpm
          </Tab>
          <Tab className="font-mono" id="npm">
            npm
          </Tab>
        </TabList>
        <TabPanel id="bun">
          <Snippet className="bg-[#0e0e10] text-zinc-200" text={getInstallCommand('bun')} />
        </TabPanel>
        <TabPanel id="yarn">
          <Snippet className="bg-[#0e0e10] text-zinc-200" text={getInstallCommand('yarn')} />
        </TabPanel>
        <TabPanel id="pnpm">
          <Snippet className="bg-[#0e0e10] text-zinc-200" text={getInstallCommand('pnpm')} />
        </TabPanel>
        <TabPanel id="npm">
          <Snippet className="bg-[#0e0e10] text-zinc-200" text={getInstallCommand('npm')} />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export { DefaultInstallation }
