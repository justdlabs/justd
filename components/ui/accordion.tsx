'use client'

import React, { createContext, useContext, useState } from 'react'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from 'react-aria-components'

interface AccordionContext {
    isActive: boolean
    index: number
    onChangeIndex: (index: number) => void
    className?: string
}

const AccordionContext = createContext<AccordionContext>({
    isActive: false,
    index: 0,
    onChangeIndex: () => {},
    className: ''
})
const useAccordion = () => useContext(AccordionContext)

interface AccordionProps {
    children: React.ReactNode
    multiple?: boolean
    defaultValue?: any
    className?: string
}

function Accordion({ className, children, multiple, defaultValue }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState(
        defaultValue !== undefined ? defaultValue : 0
    )

    function onChangeIndex(index: any) {
        setActiveIndex((currentActiveIndex: any) => {
            if (!multiple && typeof index === 'number') {
                return index === activeIndex ? -1 : index
            }

            if (Array.isArray(currentActiveIndex) && currentActiveIndex.includes(index)) {
                return currentActiveIndex.filter((i) => i !== index)
            }

            if (Array.isArray(currentActiveIndex)) {
                return currentActiveIndex.concat(index)
            }

            return [index as any]
        })
    }

    return React.Children.map(children, (child, index) => {
        const isActive =
            multiple && Array.isArray(activeIndex)
                ? activeIndex.includes(index)
                : activeIndex === index
        return (
            <AccordionContext.Provider
                value={{ isActive, index, onChangeIndex, className }}
            >
                {child}
            </AccordionContext.Provider>
        )
    })
}

interface AccordionItemProps {
    children: React.ReactNode
    className?: string
}

function AccordionItem({ className, children, ...props }: AccordionItemProps) {
    const { isActive } = useAccordion()
    return (
        <div
            data-state={isActive ? 'open' : 'closed'}
            className={cn('relative w-full overflow-hidden border-b', className)}
            {...props}
        >
            {children}
        </div>
    )
}

interface AccordionTriggerProps {
    children: React.ReactNode
    className?: string
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
    const { isActive, index, onChangeIndex } = useAccordion()

    return (
        <Button
            data-state={isActive ? 'open' : 'closed'}
            className={cn(
                'flex w-full flex-1 items-center justify-between rounded-md py-4 text-base font-medium outline-none transition-all',
                className
            )}
            onPress={() => onChangeIndex(index)}
            {...props}
        >
            <span className='flex items-center gap-2'>{children}</span>
            <svg
                className={`${isActive ? 'rotate-180' : 'rotate-0'} ms-auto size-4 transition`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
            >
                <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m6 9l6 6l6-6'
                ></path>
            </svg>
        </Button>
    )
}

interface AccordionContentProps {
    children: React.ReactNode
    className?: string
    active?: boolean
}

function AccordionContent({
    className,
    active,
    children,
    ...props
}: AccordionContentProps) {
    const { isActive } = useAccordion()

    const open = isActive || active

    return (
        <AnimatePresence initial={open}>
            {open && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
                >
                    <div
                        className={cn(
                            'overflow-hidden pb-4 text-sm transition-all',
                            className
                        )}
                        {...props}
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

export { Accordion }
