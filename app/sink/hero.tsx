'use client'

import { buttonVariants, Heading } from '@/components/ui'
import { Rocket } from 'lucide-react'
import { Header, Link, Text } from 'react-aria-components'

export function Hero() {
    return (
        <div className='pt-10 pb-6 lg:py-16 border-b'>
            <div className='container'>
                <Header>
                    <Heading
                        level={1}
                        className='max-w-xl text-2xl lg:text-5xl mb-2 lg:mb-6'
                    >
                        CLEON UI
                    </Heading>
                    <Text className='text-base lg:text-xl max-w-2xl block leading-relaxed text-muted-fg'>
                        This UI Design is basically built on top of{' '}
                        <strong className='text-fg'>React Aria Components</strong>, all
                        about keeping the web accessible. Easy to customize and just copy
                        & paste into your React projects.
                    </Text>
                </Header>
                <div className='mt-6'>
                    <Link
                        className={buttonVariants({ size: 'lg' })}
                        href='/docs/getting-started/installation'
                    >
                        <Rocket />
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    )
}
