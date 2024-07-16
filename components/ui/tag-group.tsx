'use client'

import { createContext, useContext } from 'react'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { badgeVariants } from './badge'
import { Description, Label } from './field'

type Variant = keyof typeof badgeVariants.variants.variant
const VariantContext = createContext<Variant>('primary')

const emptyColors = Object.keys(badgeVariants).reduce(
    (acc, key) => {
        acc[key] = ''
        return acc
    },
    {} as Record<string, string>
)
const tagStyles = tv({
    base: [
        badgeVariants.base,
        'cursor-pointer select-none focus:outline-none disabled:cursor-default'
    ],
    variants: {
        variant: {
            ...emptyColors
        },
        shape: {
            ...badgeVariants.variants.shape
        },
        allowsRemoving: {
            true: 'pr-1'
        },
        isSelected: {
            true: 'border-transparent bg-primary text-white'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    },
    defaultVariants: {
        shape: 'square'
    },
    compoundVariants: (Object.keys(badgeVariants) as Variant[]).map((variant) => ({
        isSelected: false,
        variant,
        className: badgeVariants.variants.variant[variant]
    }))
})

export interface TagGroupProps<T>
    extends Omit<Primitive.TagGroupProps, 'children'>,
        Pick<Primitive.TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
    variant?: Variant
    label?: string
    description?: string
    errorMessage?: string
}

export interface TagProps extends Primitive.TagProps {
    variant?: Variant
}

export function TagGroup<T extends object>({
    label,
    description,
    errorMessage,
    items,
    children,
    renderEmptyState,
    ...props
}: TagGroupProps<T>) {
    return (
        <Primitive.TagGroup
            {...props}
            className={cn('flex flex-col gap-1', props.className)}
        >
            <Label>{label}</Label>
            <VariantContext.Provider value={props.variant || 'primary'}>
                <Primitive.TagList
                    items={items}
                    renderEmptyState={renderEmptyState}
                    className='flex flex-wrap gap-1'
                >
                    {children}
                </Primitive.TagList>
            </VariantContext.Provider>
            {description && <Description>{description}</Description>}
            {errorMessage && (
                <Primitive.Text slot='errorMessage' className='text-sm text-danger'>
                    {errorMessage}
                </Primitive.Text>
            )}
        </Primitive.TagGroup>
    )
}

export function Tag({ children, variant, ...props }: TagProps) {
    const textValue = typeof children === 'string' ? children : undefined
    const groupVariant = useContext(VariantContext)
    return (
        <Primitive.Tag
            textValue={textValue}
            {...props}
            className={Primitive.composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tagStyles({
                        ...renderProps,
                        className: cn(
                            'href' in props ? '' : 'focus:ring-1 focus:ring-primary/20',
                            className
                        ),
                        variant: variant || groupVariant
                    })
            )}
        >
            {({ allowsRemoving }) => (
                <>
                    {children}
                    {allowsRemoving && (
                        <Primitive.Button
                            slot='remove'
                            className='flex cursor-default items-center justify-center rounded-full p-0.5 transition-[background-color] hover:bg-foreground/10 pressed:bg-foreground/20'
                        >
                            <X aria-hidden className='h-3 w-3 outline-none' />
                        </Primitive.Button>
                    )}
                </>
            )}
        </Primitive.Tag>
    )
}
