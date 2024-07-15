'use client'

import * as React from 'react'

import jsonPreviews from '@/components/docs/generated/previews.json'
import {
  Code,
  CodeCollapsible,
  CodeCollapsibleRoot,
  CodeContainer,
  CodeExpandButton
} from '@/components/docs/rehype/code'
import { Collapsible } from '@radix-ui/react-collapsible'
import { Tab, TabList, TabPanel, Tabs } from 'ui'

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  toShow: string | string[]
  message?: string
  title?: string
}

export function SourceCode({ title, message, toShow, ...props }: SourceCodeProps) {
  const [codeStrings, setCodeStrings] = React.useState<{ name: string; code: string }[]>(
    []
  )
  const [isOpened, setIsOpened] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    const toShowArray = Array.isArray(toShow) ? toShow : [toShow]
    const updatedCodeStrings = toShowArray.map((show) => {
      // @ts-ignore
      const componentData = jsonPreviews[show]
      if (componentData) {
        return {
          name: show,
          code: componentData.raw.replace(
            /export default function \w+\(\) \{/g,
            'export default function App() {'
          )
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
          {message
            ? message
            : 'And next, you can copy the code below and paste it into your dopest component folder.'}
        </p>
        {title && <figcaption data-rehype-pretty-code-title="">{title}</figcaption>}
        <CodeCollapsibleRoot>
          <CodeCollapsible
            isOpened={isOpened[0]}
            onOpenChange={(open) => handleOpenChange(0, open)}
            code={codeStrings[0]?.code || ''}
          />
        </CodeCollapsibleRoot>
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
        <TabList className="overflow-x-auto no-scrollbar">
          {codeStrings.map((code, index) => (
            <Tab className="whitespace-nowrap" key={index} id={`tab-${index}`}>
              {code.name}.tsx
            </Tab>
          ))}
        </TabList>
        {codeStrings.map((code, index) => (
          <TabPanel key={index} id={`tab-${index}`}>
            <Collapsible
              open={isOpened[index]}
              onOpenChange={(open) => handleOpenChange(index, open)}
            >
              <div
                className={
                  'relative rounded-lg border border-zinc-800 bg-[#0e0e10] overflow-hidden'
                }
                {...props}
              >
                <CodeContainer isOpened={isOpened[index]}>
                  <Code code={code.code} />
                </CodeContainer>
                <CodeExpandButton isOpened={isOpened[index]} />
              </div>
            </Collapsible>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  )
}
