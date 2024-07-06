'use client'

import jsonPreviews from '@/components/docs/generated/previews.json'
import { Code } from '@/components/docs/rehype/code'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import * as React from 'react'
import { Button, Tab, TabList, TabPanel, Tabs } from 'ui'

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  toShow: string | string[]
  message?: string
}

export function SourceCode({ message, toShow, ...props }: SourceCodeProps) {
  const [codeStrings, setCodeStrings] = React.useState<{ name: string; code: string }[]>([])
  const [isOpened, setIsOpened] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    const toShowArray = Array.isArray(toShow) ? toShow : [toShow]
    const updatedCodeStrings = toShowArray.map((show) => {
      // @ts-ignore
      const componentData = jsonPreviews[show]
      if (componentData) {
        return {
          name: show,
          code: componentData.raw.replace(/export default function \w+\(\) \{/g, 'export default function App() {')
        }
      } else {
        console.error('Component not found:', show)
        return { name: show, code: '' }
      }
    })
    setCodeStrings(updatedCodeStrings)
    setIsOpened(Object.fromEntries(updatedCodeStrings.map((_, index) => [index, false])))
  }, [toShow])

  const handleOpenChange = (index: number, open: boolean) => {
    setIsOpened((prevState) => ({ ...prevState, [index]: open }))
  }

  if (codeStrings.length === 1) {
    return (
      <section className="my-6 not-prose">
        <p className="mb-4 -mt-2">
          {message ? message : 'And next, you can copy the code below and paste it into your dopest component folder.'}
        </p>
        <div className={cn('overflow-hidden rounded-md')}>
          <Collapsible open={isOpened[0]} onOpenChange={(open) => handleOpenChange(0, open)}>
            <div className={'relative overflow-hidden'} {...props}>
              <CollapsibleContent forceMount className={cn('overflow-hidden', !isOpened[0] && 'h-32')}>
                <div
                  className={cn(
                    '[&_pre]:my-0 [&_pre]:max-h-[32rem] [&_pre]:pb-[100px]',
                    !isOpened[0] ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]'
                  )}
                >
                  <Code code={codeStrings[0]?.code || ''} />
                </div>
              </CollapsibleContent>
              <div
                className={cn(
                  'absolute flex items-center justify-center bg-gradient-to-b from-[#0e0e10]/50 to-black',
                  isOpened[0] ? 'inset-x-0 bottom-0 h-16' : 'inset-0'
                )}
              >
                <CollapsibleTrigger asChild>
                  <Button intent="secondary" size="small">
                    {isOpened[0] ? 'Collapse' : 'Expand'}
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
          </Collapsible>
        </div>
      </section>
    )
  }

  return (
    <section className="my-6 not-prose">
      <p className="mb-4 -mt-2">
        {toShow.length > 1
          ? "All these components are tight, so you gotta use 'em all together."
          : 'And next, you can copy the code below and paste it into your dopest component folder.'}
      </p>

      <Tabs>
        <TabList>
          {codeStrings.map((code, index) => (
            <Tab key={index} id={`tab-${index}`}>
              {code.name}.tsx
            </Tab>
          ))}
        </TabList>
        {codeStrings.map((code, index) => (
          <TabPanel key={index} id={`tab-${index}`}>
            <Collapsible open={isOpened[index]} onOpenChange={(open) => handleOpenChange(index, open)}>
              <div className={'relative overflow-hidden'} {...props}>
                <CollapsibleContent forceMount className={cn('overflow-hidden', !isOpened[index] && 'h-32')}>
                  <div
                    className={cn(
                      '[&_pre]:my-0 [&_pre]:max-h-[32rem] [&_pre]:pb-[100px]',
                      !isOpened[index] ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]'
                    )}
                  >
                    <Code code={code.code} />
                  </div>
                </CollapsibleContent>
                <div
                  className={cn(
                    'absolute flex items-center justify-center bg-gradient-to-b from-[#0e0e10]/50 to-black',
                    isOpened[index] ? 'inset-x-0 bottom-0 h-16' : 'inset-0'
                  )}
                >
                  <CollapsibleTrigger asChild>
                    <Button intent="secondary" size="small">
                      {isOpened[index] ? 'Collapse' : 'Expand'}
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </div>
            </Collapsible>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  )
}
