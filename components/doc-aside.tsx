'use client'
import { Docs, docs } from '@/.velite'
import { goodTitle, sortDocs } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { LayoutGroup, motion } from 'framer-motion'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from 'ui'

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

    parts.forEach((part, index) => {
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
  return (
    <Accordion type="multiple" defaultValue={['getting-started', 'prologue', 'components']} className="w-full">
      {Object.entries(node).map(([key, value]) => (
        <AccordionItem key={key} value={key}>
          <Trigger>{goodTitle(key)}</Trigger>
          <AccordionContent className="pl-5">
            {typeof value === 'object' && 'title' in value ? (
              <AsideLink href={`/${(value as Doc).slug}`}>{goodTitle((value as Doc).title)}</AsideLink>
            ) : (
              <Accordion type="multiple" className="w-full">
                {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                  typeof subValue === 'object' && 'title' in subValue ? (
                    <AsideLink key={subKey} href={`/${subValue.slug}`}>
                      {goodTitle((subValue as Doc).title)}
                    </AsideLink>
                  ) : (
                    <AccordionItem key={subKey} value={subKey}>
                      <Trigger>{goodTitle(subKey)}</Trigger>
                      <AccordionContent className="pl-5">
                        {Object.entries(subValue as HierarchyNode).map(([childKey, childValue]) =>
                          typeof childValue === 'object' && 'title' in childValue ? (
                            <AsideLink key={childKey} href={`/${childValue.slug}`}>
                              {goodTitle((childValue as Doc).title)}
                            </AsideLink>
                          ) : (
                            <AccordionItem key={childKey} value={childKey}>
                              <Trigger>{goodTitle(childKey)}</Trigger>
                              <AccordionContent>
                                {renderHierarchy(childValue as HierarchyNode, level + 1)}
                              </AccordionContent>
                            </AccordionItem>
                          )
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const DocAside = () => {
  const id = React.useId()
  const hierarchicalDocs = createHierarchy(docs)
  return (
    <LayoutGroup id={id}>
      <aside>{renderHierarchy(hierarchicalDocs)}</aside>
    </LayoutGroup>
  )
}

export { DocAside }

export function Trigger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <AccordionTrigger
      className={cn(
        'relative block w-full focus:outline-none focus-visible:ring-1 focus-visible:bg-secondary focus-visible:ring-primary-500 rounded-md px-2.5 py-2 text-left text-base transition-colors hover:bg-secondary hover:text-fg lg:text-sm',
        className
      )}
    >
      {children}
    </AccordionTrigger>
  )
}

interface AsideLinkProps extends LinkProps {
  active?: boolean
  children: React.ReactNode
}

function AsideLink({ children, active, ...props }: AsideLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <Link
      className={cn(
        'relative block focus:outline-none focus-visible:bg-secondary focus-visible:ring-1 focus-visible:ring-primary-500 rounded-md px-2.5 py-2 text-base font-medium transition-colors hover:bg-secondary hover:text-fg lg:text-sm',
        isActive ? 'font-semibold text-fg' : 'text-muted-fg'
      )}
      {...props}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="current-indicator-sidebar"
          className="absolute inset-y-2 -left-2 w-0.5 rounded-full bg-fg"
        />
      )}
    </Link>
  )
}
