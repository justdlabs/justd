'use client'

import * as React from 'react'
import { useId } from 'react'

import { previews } from '@/components/docs/generated/previews'
import jsonPreviews from '@/components/docs/generated/previews.json'
import { Code } from '@/components/docs/rehype/code'
import { cn } from '@/lib/utils'
import { IconLoader } from '@irsyadadl/paranoid'
import { LayoutGroup, motion } from 'framer-motion'
import { Button } from 'react-aria-components'

interface HowProps extends React.HTMLAttributes<HTMLDivElement> {
  toUse: string
  minW72?: boolean
  align?: 'center' | 'start' | 'end'
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
}

export function DocHow({
  toUse,
  children,
  className,
  minW72 = false,
  isCenter = true,
  align = 'center',
  description,
  withNoPadding = false,
  ...props
}: HowProps) {
  const Preview = previews[toUse] ? previews[toUse].component : null

  // @ts-ignore
  const codeString = jsonPreviews[toUse].raw ?? ''
  const tabs = [
    { id: 'preview', label: 'Preview' },
    { id: 'code', label: 'Code' }
  ]
  const [activeTab, setActiveTab] = React.useState(tabs[0].id)
  const id = useId()
  return (
    <div className={cn('not-prose relative my-4', className)} {...props}>
      <LayoutGroup id={`xk342j-${id}`}>
        <div className="flex gap-x-5 border-b mb-4">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onPress={() => setActiveTab(tab.id)}
              className={cn(
                activeTab === tab.id ? 'text-fg' : 'text-muted-fg hover:text-fg',
                'relative focus-visible:text-fg flex cursor-default pb-2.5 items-center rounded-full text-sm font-medium outline-none transition forced-color-adjust-none hover:text-fg'
              )}
              style={{
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  className="absolute rounded bg-fg inset-x-0 -bottom-px h-0.5 w-full"
                  layoutId="current-selected"
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
              {tab.label}
            </Button>
          ))}
        </div>
      </LayoutGroup>
      {activeTab == 'preview' && (
        <div className="w-full">
          <div
            className={cn(
              !withNoPadding && 'relative gap-4 rounded-lg border bg-popover p-6',
              isCenter && 'flex min-h-56 lg:min-h-80 items-center justify-center py-6 preview sm:py-24'
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <IconLoader className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              <div className={cn(minW72 && 'min-w-72', 'not-prose', className)}>
                <Preview />
              </div>
            </React.Suspense>
          </div>
        </div>
      )}
      {activeTab === 'code' && (
        <div>
          <Code
            className="border [&_pre_span[data-line]:last-of-type]:hidden [&_pre]:!border-0 border-zinc-800 bg-[#0e0e10] rounded-lg"
            code={codeString}
          />
        </div>
      )}
    </div>
  )
}
