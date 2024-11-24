"use client"

import React from "react"

import { type Docs, docs } from "#site/content"
import { goodTitle, sortDocs } from "@/resources/lib/utils"
import { LayoutGroup, motion } from "framer-motion"
import { IconChevronRight, IconCircleHalf, IconCube, IconHighlight, IconLayers } from "justd-icons"
import { usePathname } from "next/navigation"
import type { LinkProps } from "react-aria-components";
import { Link } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { Badge, cn, Disclosure, DisclosureGroup } from "ui"

export interface Doc {
  slug: string
  title: string
  status?: "wip" | "new" | "beta" | "help" | "primitive" | "alpha"
}

export interface HierarchyNode {
  [key: string]: HierarchyNode | Doc
}

export const createHierarchy = (docs: Array<Docs>): HierarchyNode => {
  const hierarchy: HierarchyNode = {}

  sortDocs(docs).forEach((doc) => {
    const parts = doc.slug.split("/").slice(1)
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
    const order = ["prologue", "getting-started", "dark-mode", "components"]
    return order.indexOf(a) - order.indexOf(b)
  })
  return (
    <DisclosureGroup
      hideBorder
      hideIndicator
      allowsMultipleExpanded
      defaultExpandedKeys={["getting-started", "components"]}
      className="w-full [&_.dk32xd]:p-0 flex flex-col gap-y-0.5 [&_.zwx3ai]:p-0 [&_.zwx3ai]:border-none"
    >
      {filteredNodeEntries.map(([key, value]) => (
        <Disclosure className={({ isExpanded }) => twJoin(isExpanded && "pb-0")} key={key} id={key}>
          <Trigger className="[&_.jr131]:size-4 pl-2.5 pr-1 text-fg groud-data-[open]:text-muted-fg [&_.jr131]:text-muted-fg [&_.jr131]:fill-muted-fg/10 dark:[&_.jr131]:fill-muted-fg/30">
            {key === "getting-started" ? (
              <IconLayers className="jr131" />
            ) : key === "prologue" ? (
              <IconHighlight className="jr131" />
            ) : key === "dark-mode" ? (
              <IconCircleHalf className="jr131" />
            ) : (
              <IconCube className="jr131" />
            )}
            {goodTitle(key)}
          </Trigger>
          <Disclosure.Panel>
            <DisclosureGroup
              allowsMultipleExpanded
              hideBorder
              hideIndicator
              defaultExpandedKeys={defaultValues}
              className="w-full relative"
            >
              <div className="h-full absolute left-0 bg-zinc-200 dark:bg-zinc-800 w-px ml-4" />
              {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                typeof subValue === "object" && "title" in subValue ? (
                  <AsideLink
                    className="pl-[2.1rem] flex justify-between items-center"
                    key={subKey}
                    href={`/${subValue.slug}`}
                  >
                    {(subValue as Doc).title}
                    {subValue.status && (
                      <Badge
                        intent={
                          subValue?.status === "wip"
                            ? "warning"
                            : subValue?.status === "alpha"
                              ? "danger"
                              : subValue.status === "beta"
                                ? "warning"
                                : subValue.status === "help"
                                  ? "warning"
                                  : subValue.status === "primitive"
                                    ? "secondary"
                                    : "info"
                        }
                        className="uppercase h-5 text-[0.5rem]"
                      >
                        {subValue?.status as Doc["status"]}
                      </Badge>
                    )}
                  </AsideLink>
                ) : (
                  <Disclosure
                    className={({ isExpanded }) => twJoin(isExpanded && "pb-0")}
                    key={subKey}
                    id={subKey}
                  >
                    {/* Trigger components: buttons, controls, etc. */}
                    <Trigger className="[--trigger-padding-left:2.2rem] pl-(--trigger-padding-left) pr-1">
                      {goodTitle(subKey)}
                    </Trigger>
                    <Disclosure.Panel>
                      {Object.entries(subValue as HierarchyNode).map(([childKey, childValue]) =>
                        typeof childValue === "object" && "title" in childValue ? (
                          <AsideLink
                            className={cn(
                              "ml-[-0rem] flex justify-between h-9 items-center pl-[2.2rem] pr-2",
                              defaultValues.length > 0 && "jf320s"
                            )}
                            key={childKey}
                            href={`/${childValue.slug}`}
                            indicatorClassName=""
                          >
                            {(childValue as Doc).title === "Disclosure Group aka Accordion"
                              ? "Disclosure Group"
                              : (childValue as Doc).title === "Disclosure aka Collapsible"
                                ? "Disclosure"
                                : goodTitle((childValue as Doc).title)}
                            {childValue.status && (
                              <Badge
                                intent={
                                  childValue?.status === "wip"
                                    ? "primary"
                                    : childValue.status === "beta"
                                      ? "warning"
                                      : childValue.status === "alpha"
                                        ? "primary"
                                        : childValue.status === "help"
                                          ? "warning"
                                          : childValue.status === "primitive"
                                            ? "secondary"
                                            : "info"
                                }
                                className="capitalize h-5 text-[0.65rem]"
                              >
                                {childValue?.status as Doc["status"]}
                              </Badge>
                            )}
                          </AsideLink>
                        ) : null
                      )}
                    </Disclosure.Panel>
                  </Disclosure>
                )
              )}
            </DisclosureGroup>
          </Disclosure.Panel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  )
}

export const Aside = () => {
  const pathname = usePathname()
  const id = React.useId()
  const hierarchicalDocs = createHierarchy(docs)

  const computeDefaultValuesFromURL = (): string[] => {
    const pathParts = pathname.split("/").filter(Boolean)
    const relevantKey = pathParts[2]
    if (relevantKey) {
      return [relevantKey]
    }
    return []
  }

  const defaultValues = computeDefaultValuesFromURL()

  React.useEffect(() => {
    const activeElement = document.querySelector(".jf320s")

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
  }, [pathname])
  return (
    <LayoutGroup id={id}>
      <aside>{renderHierarchy(hierarchicalDocs, defaultValues)}</aside>
    </LayoutGroup>
  )
}

const Trigger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <Disclosure.Trigger
      className={cn(
        "group data-hovered:text-fg data-hovered:bg-muted/60 py-1.5 data-pressed:text-fg aria-expanded:text-fg",
        className
      )}
    >
      {children}
      <IconChevronRight className="ml-auto group-aria-expanded:rotate-90 transition shrink-0 duration-300" />
    </Disclosure.Trigger>
  )
}

interface AsideLinkProps extends LinkProps {
  active?: boolean
  children: React.ReactNode
  className?: string
  indicatorClassName?: string
}

const asideLinkStyles = tv({
  base: "relative block group data-focused:outline-hidden data-focus-visible:bg-muted/50 data-focus-visible:ring-inset data-focus-visible:ring-1 data-focus-visible:ring-primary rounded-lg pl-2.5 h-9 text-base transition-colors data-hovered:bg-muted/60 data-hovered:text-fg lg:text-sm",
  variants: {
    isActive: {
      false: "text-muted-fg forced-colors:text-[Gray] data-hovered:text-fg",
      true: "text-fg forced-colors:text-[LinkText]"
    }
  }
})

function AsideLink({ indicatorClassName, className, children, ...props }: AsideLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <Link className={asideLinkStyles({ isActive, className })} {...props}>
      {children}
      {isActive && (
        <motion.span
          layoutId="current-indicator-sidebar"
          className={cn(
            "absolute inset-y-1 left-[1rem] w-0.5 rounded-full bg-fg forced-colors:bg-[Highlight]",
            indicatorClassName
          )}
        />
      )}
    </Link>
  )
}
