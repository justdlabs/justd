'use client'

import { Check } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

const dropdownItemStyles = tv({
    base: [
        'group flex cursor-default select-none items-center gap-x-1.5 rounded-md py-2 pl-2.5 pr-1 text-base outline outline-0 lg:text-sm',
        '[&_[data-slot=avatar]]:-mr-0.5 [&_[data-slot=avatar]]:size-6 sm:[&_[data-slot=avatar]]:size-5',
        '[&_svg]:size-4',
        'has-submenu:open:data-[danger=true]:bg-danger has-submenu:open:data-[danger=true]:text-danger',
        'has-submenu:open:bg-primary has-submenu:open:text-primary-foreground'
    ],
    variants: {
        isDisabled: {
            false: 'text-foreground',
            true: 'text-muted-foreground'
        },
        isFocused: {
            false: 'data-[danger=true]:text-danger',
            true: [
                'bg-primary text-primary-foreground',
                'data-[danger=true]:bg-danger data-[danger=true]:text-danger-foreground'
            ]
        }
    },
    compoundVariants: [
        {
            isFocused: false,
            isOpen: true,
            className: 'bg-background/60'
        }
    ]
})

const DropdownSection = <T extends object>(props: DropdownSectionProps<T>) => {
    return (
        <Primitive.Section className="after:block after:h-[5px] after:content-[''] first:-mt-[5px]">
            <Primitive.Header className='dsh mb-0.5 px-2 text-sm text-muted-foreground'>
                {props.title}
            </Primitive.Header>
            <Primitive.Collection items={props.items}>
                {props.children}
            </Primitive.Collection>
        </Primitive.Section>
    )
}

const DropdownItem = (props: Primitive.ListBoxItemProps) => {
    const textValue =
        props.textValue ||
        (typeof props.children === 'string' ? props.children : undefined)
    return (
        <Primitive.ListBoxItem
            {...props}
            textValue={textValue}
            className={Primitive.composeRenderProps(
                props.className,
                (className, renderProps) =>
                    dropdownItemStyles({ ...renderProps, className })
            )}
        >
            {Primitive.composeRenderProps(props.children, (children, { isSelected }) => (
                <>
                    <span className='flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold'>
                        {children}
                    </span>
                    <span className='flex w-5 items-center'>
                        {isSelected && <Check className='h-4 w-4' />}
                    </span>
                </>
            ))}
        </Primitive.ListBoxItem>
    )
}

interface DropdownSectionProps<T> extends Primitive.SectionProps<T> {
    title?: string
}

// Note: This is not exposed component, but it's used in other components to render dropdowns.
export { DropdownItem, dropdownItemStyles, DropdownSection, type DropdownSectionProps }
