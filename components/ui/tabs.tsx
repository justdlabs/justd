'use client'

import { useId } from 'react'

import { cn } from '@/lib/utils'
import { LayoutGroup, motion } from 'framer-motion'
import * as Primitive from 'react-aria-components'
import { tv } from 'tailwind-variants'

const tabsStyles = tv({
    base: 'group flex gap-4',
    variants: {
        orientation: {
            horizontal: 'flex-col',
            vertical: 'w-[800px] flex-row'
        }
    }
})

function Tabs(props: Primitive.TabsProps) {
    return (
        <Primitive.Tabs
            {...props}
            className={Primitive.composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tabsStyles({
                        ...renderProps,
                        className
                    })
            )}
        />
    )
}

const tabListStyles = tv({
    base: 'flex',
    variants: {
        orientation: {
            horizontal: 'flex-row gap-x-5 border-b',
            vertical: 'flex-col items-start gap-y-4 border-l'
        }
    }
})

function TabList<T extends object>(props: Primitive.TabListProps<T>) {
    const id = useId()
    return (
        <LayoutGroup id={id}>
            <Primitive.TabList
                {...props}
                className={Primitive.composeRenderProps(
                    props.className,
                    (className, renderProps) =>
                        tabListStyles({ ...renderProps, className })
                )}
            />
        </LayoutGroup>
    )
}

const tabProps = tv({
    base: [
        'relative flex cursor-default items-center rounded-full text-sm font-medium outline-none transition hover:text-foreground',
        // hor
        'group-orientation-vertical:w-full group-orientation-vertical:py-0',
        // ver
        'group-orientation-horizontal:pb-3 group-orientation-vertical:pl-4 group-orientation-vertical:pr-2'
    ],
    variants: {
        isSelected: {
            false: 'text-muted-foreground',
            true: 'text-foreground'
        },
        isFocused: { false: 'ring-0', true: 'text-foreground' },
        isDisabled: {
            true: 'text-muted-foreground/50'
        }
    }
})

function Tab({ children, ...props }: Primitive.TabProps) {
    return (
        <Primitive.Tab
            {...props}
            className={Primitive.composeRenderProps(
                props.className,
                (_className, renderProps) =>
                    tabProps({
                        ...renderProps,
                        className: cn('href' in props && 'cursor-pointer', _className)
                    })
            )}
        >
            {({ isSelected }) => (
                <>
                    {children}
                    {isSelected && (
                        <motion.span
                            className={cn(
                                'absolute rounded bg-foreground',
                                // horizontal
                                'group-orientation-horizontal:inset-x-0 group-orientation-horizontal:-bottom-px group-orientation-horizontal:h-0.5 group-orientation-horizontal:w-full',
                                // vertical
                                'group-orientation-vertical:left-0 group-orientation-vertical:h-[calc(100%-10%)] group-orientation-vertical:w-0.5 group-orientation-vertical:transform'
                            )}
                            layoutId='current-selected'
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                    )}
                </>
            )}
        </Primitive.Tab>
    )
}

const tabPanelStyles = tv({
    base: 'flex-1 text-sm text-foreground'
})

function TabPanel(props: Primitive.TabPanelProps) {
    return (
        <Primitive.TabPanel
            {...props}
            className={Primitive.composeRenderProps(
                props.className,
                (className, renderProps) => tabPanelStyles({ ...renderProps, className })
            )}
        />
    )
}

Tabs.Content = TabPanel
Tabs.Label = Tab
Tabs.List = TabList

export { Tab, TabList, TabPanel, Tabs }
