'use client'

import * as React from 'react'

import jsonPreviews from '@/components/docs/generated/previews.json'
import { Code } from '@/components/docs/rehype/code'
import { Button, Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
    toShow: string | string[]
    message?: string
}

export function SourceCode({ message, toShow, ...props }: SourceCodeProps) {
    const [codeStrings, setCodeStrings] = React.useState<
        { name: string; code: string }[]
    >([])
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
        setIsOpened(
            Object.fromEntries(updatedCodeStrings.map((_, index) => [index, false]))
        )
    }, [toShow])

    const handleOpenChange = (index: number, open: boolean) => {
        setIsOpened((prevState) => ({ ...prevState, [index]: open }))
    }

    if (codeStrings.length === 1) {
        return (
            <section className='not-prose my-6'>
                <p className='-mt-2 mb-4'>
                    {message
                        ? message
                        : 'And next, you can copy the code below and paste it into your dopest component folder.'}
                </p>
                <div className={cn('overflow-hidden rounded-md')}>
                    <div className={'relative overflow-hidden'} {...props}>
                        <div
                            className={cn(
                                'my-0 overflow-hidden transition',
                                !isOpened[0] && 'h-32'
                            )}
                        >
                            <Code code={codeStrings[0]?.code || ''} />
                        </div>
                        <div
                            className={cn(
                                'absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-background',
                                isOpened[0] && 'hidden'
                            )}
                        ></div>
                        <Button
                            className={cn(
                                'sticky bottom-14 left-1/2 right-1/2 -translate-x-1/2 bg-background hover:border-primary hover:bg-background hover:ring-4 hover:ring-primary/40 pressed:bg-background'
                            )}
                            variant='outline'
                            onPress={() => handleOpenChange(0, !isOpened[0])}
                        >
                            {isOpened[0] ? 'Collapse' : 'Expand'}
                        </Button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className='not-prose my-6'>
            <p className='-mt-2 mb-4'>
                {toShow.length > 1
                    ? "All these components are tight, so you gotta use 'em all together."
                    : 'And next, you can copy the code below and paste it into your dopest component folder.'}
            </p>

            <Tabs>
                <Tabs.List>
                    {codeStrings.map((code, index) => (
                        <Tabs.Label key={index} id={`tab-${index}`}>
                            {code.name}.tsx
                        </Tabs.Label>
                    ))}
                </Tabs.List>
                {codeStrings.map((code, index) => (
                    <Tabs.Content key={index} id={`tab-${index}`}>
                        <div className={'relative overflow-hidden'} {...props}>
                            <div
                                className={cn(
                                    'my-0 overflow-hidden transition',
                                    !isOpened[index] && 'h-32'
                                )}
                            >
                                <Code code={code.code} />
                            </div>
                            <div
                                className={cn(
                                    'absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-background',
                                    isOpened[index] && 'hidden'
                                )}
                            ></div>
                            <Button
                                className={cn(
                                    'sticky bottom-4 left-1/2 right-1/2 -translate-x-1/2 bg-background hover:border-primary hover:bg-background hover:ring-4 hover:ring-primary/40 pressed:bg-background'
                                )}
                                variant='outline'
                                onPress={() => handleOpenChange(index, !isOpened[index])}
                            >
                                {isOpened[index] ? 'Collapse' : 'Expand'}
                            </Button>
                        </div>
                    </Tabs.Content>
                ))}
            </Tabs>
        </section>
    )
}
