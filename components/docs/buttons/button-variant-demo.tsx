'use client'

import { Button, buttonVariants } from '@/components/ui'

type Variant = keyof typeof buttonVariants.variants.variant

export default function ButtonVariantDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            {Object.keys(buttonVariants.variants.variant).map((variant) => (
                <div key={variant}>
                    <Button variant={variant as Variant}>{variant}</Button>
                </div>
            ))}
        </div>
    )
}
