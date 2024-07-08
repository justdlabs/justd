'use client'

import { Code } from '@/components/docs/rehype/code'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import * as React from 'react'
import { Button } from 'ui'

interface PlainCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  lang?: string
  withImportCopy?: boolean
}

export function PlainCode({ withImportCopy = false, lang = 'tsx', code, ...props }: PlainCodeProps) {
  const [isOpened, setIsOpened] = React.useState(false)
  return (
    <section className="my-6 not-prose">
      <div className={cn('overflow-hidden rounded-md')}>
        <Collapsible open={isOpened} onOpenChange={setIsOpened}>
          <div className={'relative overflow-hidden'} {...props}>
            <CollapsibleContent forceMount className={cn('overflow-hidden', !isOpened && 'h-32')}>
              <div
                className={cn(
                  '[&_pre]:my-0 [&_pre]:max-h-[32rem] [&_pre]:pb-[120px]',
                  !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]'
                )}
              >
                <Code withImportCopy={withImportCopy} lang={lang} code={code} />
              </div>
            </CollapsibleContent>
            <div
              className={cn(
                'absolute flex items-center justify-center bg-gradient-to-b from-[#0e0e10]/50 to-black',
                isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0'
              )}
            >
              <CollapsibleTrigger asChild>
                <Button intent="secondary" size="small">
                  {isOpened ? 'Collapse' : 'Expand'}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </Collapsible>
      </div>
    </section>
  )
}
