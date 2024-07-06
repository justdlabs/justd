'use client'

import jsonPreviews from '@/components/docs/generated/previews.json'
import { Code } from '@/components/docs/rehype/code'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import * as React from 'react'
import { Button } from 'ui'

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  toShow: string
  message?: string
}

export function SourceCode({ message,toShow, ...props }: SourceCodeProps) {
  const [codeString, setCodeString] = React.useState('')
  const [isOpened, setIsOpened] = React.useState(false)
  React.useMemo(() => {
    // @ts-ignore
    const componentData = jsonPreviews[toShow]
    if (componentData) {
      const updatedRawContent = componentData.raw.replace(
        /export default function \w+\(\) \{/g,
        'export default function App() {'
      )
      setCodeString(updatedRawContent)
    } else {
      console.error('Component not found:', toShow)
    }
  }, [toShow])
  return (
    <section className="my-6 not-prose">
      <p className="mb-4 -mt-2">
        {message ? message : 'And next, you can copy the code below and paste it into your dopest component folder.'}
      </p>
      <div className={cn('overflow-hidden rounded-md')}>
        <Collapsible open={isOpened} onOpenChange={setIsOpened}>
          <div className={'relative overflow-hidden'} {...props}>
            <CollapsibleContent forceMount className={cn('overflow-hidden', !isOpened && 'h-32')}>
              <div
                className={cn(
                  '[&_pre]:my-0 [&_pre]:max-h-[32rem] [&_pre]:pb-[100px]',
                  !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]'
                )}
              >
                <Code code={codeString} />
              </div>
            </CollapsibleContent>
            <div
              className={cn(
                'absolute flex items-center justify-center bg-gradient-to-b from-[#0e0e10]/50 to-black',
                isOpened ? 'inset-x-0 bottom-0 h-16' : 'inset-0'
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
