'use client'

import * as React from 'react'

import { Code } from '@/components/docs/rehype/code'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface PlainCodeProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string
    lang?: string
}

export function PlainCode({ lang = 'javascript', code, ...props }: PlainCodeProps) {
    const [isOpened, setIsOpened] = React.useState(false)
    return (
        <section className='not-prose my-6'>
            <div className={cn('overflow-hidden rounded-md')}>
                <div className='relative overflow-visible' {...props}>
                    <div
                        className={cn(
                            'my-0 overflow-hidden transition',
                            !isOpened && 'h-32'
                        )}
                    >
                        <Code lang={lang} code={code} />
                    </div>
                    <div
                        className={cn(
                            'absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-background to-background',
                            isOpened && 'hidden'
                        )}
                    ></div>
                    <Button
                        className={cn(
                            'sticky bottom-4 left-1/2 right-1/2 -translate-x-1/2 bg-background hover:border-primary hover:bg-background hover:ring-4 hover:ring-primary/40 pressed:bg-background'
                        )}
                        variant='outline'
                        onPress={() => setIsOpened(!isOpened)}
                    >
                        {isOpened ? 'Collapse' : 'Expand'}
                    </Button>
                </div>
            </div>
        </section>
    )
}
