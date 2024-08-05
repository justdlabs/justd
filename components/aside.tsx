'use client'

import React from 'react'

import { type Docs, docs } from '#site/content'
import { goodTitle, sortDocs } from '@/resources/lib/utils'
import { IconCircleHalf, IconCube, IconHighlight, IconLayers } from '@irsyadadl/paranoid'
import { LayoutGroup, motion } from 'framer-motion'
import { Link as NextLink } from 'next-view-transitions'
import type { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { tv } from 'tailwind-variants'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, cn } from 'ui'

export interface Doc {
  slug: string
  title: string
  status?: 'wip' | 'new' | 'beta' | 'help' | 'primitive' | 'rc'
}

export interface HierarchyNode {
  [key: string]: HierarchyNode | Doc
}

export const createHierarchy = (docs: Array<Docs>): HierarchyNode => {
  const hierarchy: HierarchyNode = {}

  sortDocs(docs).forEach((doc) => {
    const parts = doc.slug.split('/').slice(1)
    let currentLevel = hierarchy

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // @ts-ignore
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

const renderHierarchy = (node: HierarchyNode, defaultValues: string[]) => {
  const filteredNodeEntries = Object.entries(node).sort(([a], [b]) => {
    const order = ['prologue', 'getting-started', 'dark-mode', 'components']
    return order.indexOf(a) - order.indexOf(b)
  })
  return (
    <Accordion defaultExpandedKeys={['getting-started', 'components']} className="w-full [&_.dk32xd]:p-0 [&_.zwx3ai]:p-0 [&_.zwx3ai]:border-none">
      {filteredNodeEntries.map(([key, value]) => (
        <AccordionItem key={key} currentId={key}>
          <Trigger className="[&_.jr131]:size-4 text-fg groud-data-[open]:text-muted-fg [&_.jr131]:text-primary [&_.jr131]:fill-primary/10 dark:[&_.jr131]:fill-primary/30">
            {key === 'getting-started' ? <IconLayers className="jr131" /> : key === 'prologue' ? <IconHighlight className="jr131" /> : key === 'dark-mode' ? <IconCircleHalf className="jr131" /> : <IconCube className="jr131" />}
            {goodTitle(key)}
          </Trigger>
          <AccordionContent className="py-0">
            {typeof value === 'object' && 'title' in value ? (
              <AsideLink href={`/${(value as Doc).slug}`}>{goodTitle((value as Doc).title)}</AsideLink>
            ) : (
              <Accordion defaultExpandedKeys={defaultValues} className="w-full relative">
                <div className="h-full absolute left-0 bg-zinc-200 dark:bg-zinc-800 w-px ml-4" />
                {Object.entries(value as HierarchyNode).map(([subKey, subValue], xi) =>
                  typeof subValue === 'object' && 'title' in subValue ? (
                    <AsideLink className="pl-[2rem] flex justify-between items-center" key={subKey} href={`/${subValue.slug}`}>
                      {(subValue as Doc).title}
                      {subValue.status && (
                        <Badge intent={subValue?.status === 'wip' ? 'warning' : subValue?.status === 'rc' ? 'primary' : subValue.status === 'beta' ? 'warning' : subValue.status === 'help' ? 'warning' : subValue.status === 'primitive' ? 'secondary' : 'info'} className="uppercase h-5 text-[0.5rem]">
                          {subValue?.status as Doc['status']}
                        </Badge>
                      )}
                    </AsideLink>
                  ) : (
                    <AccordionItem key={subKey} currentId={subKey} className="[&[data-open]_.ex]:text-red-500">
                      <Trigger className="pl-[2rem]">{goodTitle(subKey)}</Trigger>
                      <AccordionContent className="py-0">
                        {Object.entries(subValue as HierarchyNode).map(([childKey, childValue]) =>
                          typeof childValue === 'object' && 'title' in childValue ? (
                            <AsideLink className={cn('ml-[-0rem] flex justify-between items-center pl-[3rem]', defaultValues.length > 0 && 'jf320s')} key={childKey} href={`/${childValue.slug}`} indicatorClassName="">
                              {goodTitle((childValue as Doc).title)}
                              {childValue.status && (
                                <Badge intent={childValue?.status === 'wip' ? 'primary' : childValue.status === 'beta' ? 'warning' : childValue.status === 'help' ? 'warning' : childValue.status === 'primitive' ? 'secondary' : 'info'} className="uppercase h-5 text-[0.5rem]">
                                  {childValue?.status as Doc['status']}
                                </Badge>
                              )}
                            </AsideLink>
                          ) : null
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

export const Aside = () => {
  const pathname = usePathname()
  const id = React.useId()
  const hierarchicalDocs = createHierarchy(docs)

  const computeDefaultValuesFromURL = (): string[] => {
    const pathParts = pathname.split('/').filter(Boolean)
    const relevantKey = pathParts[2]
    if (relevantKey) {
      return [relevantKey]
    }
    return []
  }

  const defaultValues = computeDefaultValuesFromURL()

  React.useEffect(() => {
    const activeElement = document.querySelector('.jf320s')

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, [])
  return (
    <LayoutGroup id={id}>
      <aside>{renderHierarchy(hierarchicalDocs, defaultValues)}</aside>
    </LayoutGroup>
  )
}

const Trigger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <AccordionTrigger className={cn('pt-0 py-1.5 focus-visible:ring-1 focus-visible:ring-primary ring-inset outline-0 outline-offset-0 font-normal hover:bg-secondary/70 focus-visible:bg-secondary/70 rounded-lg px-2 lg:text-sm', className)}>{children}</AccordionTrigger>
}

interface AsideLinkProps extends NextLinkProps {
  active?: boolean
  children: React.ReactNode
  className?: string
  indicatorClassName?: string
}

const asideLinkStyles = tv({
  base: 'relative block focus:outline-none focus-visible:bg-secondary/70 focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-primary rounded-md px-2.5 py-2 text-base transition-colors hover:bg-secondary/70 hover:text-fg lg:text-sm',
  variants: {
    isActive: {
      true: 'font-medium text-fg',
      false: 'text-muted-fg'
    }
  }
})

function AsideLink({ indicatorClassName, className, children, active, ...props }: AsideLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <NextLink className={asideLinkStyles({ isActive, className })} {...props}>
      {children}
      {isActive && <motion.span layoutId="current-indicator-sidebar" className={cn('absolute inset-y-1 left-[1rem] w-0.5 rounded-full bg-fg', indicatorClassName)} />}
    </NextLink>
  )
}
