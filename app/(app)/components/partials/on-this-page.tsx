"use client"

import { groupedComponents } from "@/app/(app)/components/partials/card-list-box"
import { useActiveItem } from "@/components/table-of-contents"
import { goodTitle } from "@/resources/lib/utils"
import { ListBox, ListBoxItem, type ListBoxItemProps } from "react-aria-components"
import { Heading, cn } from "ui"

const navigations = Object.keys(groupedComponents).map((x) => {
  return {
    text: x,
    href: `#${x}`,
    id: x,
  }
})

export function OnThisPage() {
  const activeId = useActiveItem(navigations.map((x) => x.href.split("#")[1]))
  return (
    <div className="sticky top-28 w-40 shrink-0 pt-0 pb-16 pl-2">
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
        "block py-1.5 hover:text-fg data-focus-visible:font-medium data-focus-visible:text-fg data-focused:outline-hidden",
        href.split("#")[1] === activeId ? "font-medium text-fg" : "text-muted-fg",
      )}
      href={href}
    >
      {goodTitle(text)}
    </ListBoxItem>
  )
}
