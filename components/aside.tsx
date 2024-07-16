'use client'

import React from 'react'

import { type Docs, docs } from '@/.velite'
import { cn, sortDocs, titleCase } from '@/lib/utils'
import { LayoutGroup, motion } from 'framer-motion'
import { Boxes, Eclipse, KeyRound } from 'lucide-react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { Accordion } from 'ui'

interface Doc {
    slug: string
    title: string
}

interface HierarchyNode {
    [key: string]: HierarchyNode | Doc
}

const createHierarchy = (docs: Array<Docs>): HierarchyNode => {
    const hierarchy: HierarchyNode = {}

    sortDocs(docs).forEach((doc) => {
        const parts = doc.slug.split('/').slice(1) // Remove the 'docs' part
        let currentLevel = hierarchy

        parts.forEach((part: any, index: number) => {
            if (index === parts.length - 1) {
                currentLevel[part] = doc
            } else {
                if (!currentLevel[part]) {
                    currentLevel[part] = {}
                }
                currentLevel = currentLevel[part] as HierarchyNode
            }
        })
    })

    return hierarchy
}

const renderHierarchy = (node: HierarchyNode, level: number = 0) => {
    const filteredNodeEntries = Object.entries(node).sort(([a], [b]) => {
        const order = ['getting-started', 'dark-mode', 'components']
        return order.indexOf(a) - order.indexOf(b)
    })

    return (
        <>
            <Accordion multiple defaultValue={[0, 2]}>
                {filteredNodeEntries.map(([key, value], index: number) => (
                    <Accordion.Item key={index} className='border-0'>
                        <Trigger className='[&_svg]:size-4'>
                            {key === 'getting-started' ? (
                                <KeyRound />
                            ) : key === 'dark-mode' ? (
                                <Eclipse />
                            ) : (
                                <Boxes />
                            )}
                            {titleCase(key)}
                        </Trigger>
                        <Accordion.Content className='overflow-hidden text-sm transition-all'>
                            {typeof value === 'object' && 'title' in value ? (
                                <AsideLink href={`/${(value as Doc).slug}`}>
                                    {titleCase((value as Doc).title)}
                                </AsideLink>
                            ) : (
                                <>
                                    <div className='absolute left-4 h-full w-px bg-secondary'></div>
                                    <Accordion multiple>
                                        {Object.entries(value as HierarchyNode).map(
                                            ([subKey, subValue], index: number) =>
                                                typeof subValue === 'object' &&
                                                'title' in subValue ? (
                                                    <AsideLink
                                                        className='pl-[2rem]'
                                                        key={index}
                                                        href={`/${subValue.slug}`}
                                                    >
                                                        {titleCase(
                                                            (subValue as Doc).title
                                                        )}
                                                    </AsideLink>
                                                ) : (
                                                    <Accordion.Item
                                                        className='group border-0'
                                                        key={index}
                                                    >
                                                        <Trigger className='pl-[2rem] text-foreground group-data-[state=open]:text-primary'>
                                                            {titleCase(subKey)}
                                                        </Trigger>
                                                        <Accordion.Content className='relative overflow-hidden text-sm transition-all'>
                                                            {Object.entries(
                                                                subValue as HierarchyNode
                                                            ).map(
                                                                (
                                                                    [
                                                                        childKey,
                                                                        childValue
                                                                    ],
                                                                    index: number
                                                                ) =>
                                                                    typeof childValue ===
                                                                        'object' &&
                                                                    'title' in
                                                                        childValue ? (
                                                                        <AsideLink
                                                                            className='ml-[-0rem] pl-[3rem]'
                                                                            key={index}
                                                                            href={`/${childValue.slug}`}
                                                                            indicatorClassName=''
                                                                        >
                                                                            {titleCase(
                                                                                (
                                                                                    childValue as Doc
                                                                                ).title
                                                                            )}
                                                                        </AsideLink>
                                                                    ) : (
                                                                        <Accordion.Item
                                                                            className='border-0'
                                                                            key={index}
                                                                        >
                                                                            <Trigger className='text-foreground group-data-[state=open]:text-primary'>
                                                                                {titleCase(
                                                                                    childKey
                                                                                )}
                                                                            </Trigger>
                                                                            <Accordion.Content className='overflow-hidden text-sm transition-all'>
                                                                                {renderHierarchy(
                                                                                    childValue as HierarchyNode,
                                                                                    level +
                                                                                        1
                                                                                )}
                                                                            </Accordion.Content>
                                                                        </Accordion.Item>
                                                                    )
                                                            )}
                                                        </Accordion.Content>
                                                    </Accordion.Item>
                                                )
                                        )}
                                    </Accordion>
                                </>
                            )}
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    )
}

const Aside = () => {
    const id = React.useId()
    const hierarchicalDocs = createHierarchy(docs)
    return (
        <LayoutGroup id={id}>
            <aside>{renderHierarchy(hierarchicalDocs)}</aside>
        </LayoutGroup>
    )
}

export { Aside }

export function Trigger({
    children,
    className,
    ...props
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <Accordion.Trigger
            {...props}
            className={cn(
                'group relative flex w-full items-center gap-x-2 rounded-md px-2.5 py-2 text-left text-base text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:text-primary lg:text-sm',
                className
            )}
        >
            {children}
        </Accordion.Trigger>
    )
}

interface AsideLinkProps extends LinkProps {
    active?: boolean
    children: React.ReactNode
    className?: string
    indicatorClassName?: string
}

function AsideLink({
    indicatorClassName,
    className,
    children,
    active,
    ...props
}: AsideLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === props.href
    return (
        <Link
            data-active={isActive}
            className={cn(
                'relative block rounded-md px-2.5 py-2 text-base font-medium transition-colors hover:text-primary focus:outline-none focus-visible:text-primary lg:text-sm',
                isActive ? 'text-primary' : 'text-foreground',
                className
            )}
            {...props}
        >
            {children}
            {isActive && (
                <motion.span
                    layoutId='current-indicator-sidebar'
                    className={cn(
                        'absolute inset-y-0 left-4 w-0.5 rounded-full bg-accent',
                        indicatorClassName
                    )}
                />
            )}
        </Link>
    )
}
