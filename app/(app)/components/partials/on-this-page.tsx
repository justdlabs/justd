"use client"

import React from "react"

import { groupedComponents } from "@/app/(app)/components/partials/card-list-box"
import { useActiveItem } from "@/components/table-of-contents"
import { goodTitle } from "@/resources/lib/utils"
import { ListBox, ListBoxItem, type ListBoxItemProps } from "react-aria-components"
import { cn, Heading } from "ui"

const navigations = Object.keys(groupedComponents).map((x) => {
  return {
    text: x,
    href: `#${x}`,
    id: x
  }
})

export function OnThisPage() {
  const activeId = useActiveItem(navigations.map((x) => x.href.split("#")[1]))
  return (
    <div className="w-40 pl-2 pt-0 pb-16 shrink-0 sticky top-28">
      <Heading level={2} className="mb-3 font-medium">
        On this Page
      </Heading>
      <ListBox aria-label="On this page">
        {navigations.map(({ text, href, id }) => (
          <AsideLink key={id} id={id} activeId={activeId || ""} text={text} href={href} />
        ))}
      </ListBox>
    </div>
  )
}

interface AsideLinkProps extends ListBoxItemProps {
  activeId: string
  text: string
  href: string
}

export function AsideLink({ text, href, activeId }: AsideLinkProps) {
  return (
    <ListBoxItem
      className={cn(
        "data-focused:outline-hidden data-focus-visible:font-medium data-focus-visible:text-fg py-1.5 block hover:text-fg",
        href.split("#")[1] === activeId ? "text-fg font-medium" : "text-muted-fg"
      )}
      href={href}
    >
      {goodTitle(text)}
    </ListBoxItem>
  )
}
