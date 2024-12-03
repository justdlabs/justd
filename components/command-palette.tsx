"use client"

import React from "react"

import sidebar from "@/resources/lib/sidebar.json"
import { useCommandState } from "cmdk"
import {
  IconBrandJustd,
  IconChartBar,
  IconColors,
  IconColorSwatch,
  IconCube,
  IconHashtag,
  IconHome,
  IconLayoutAlignTop,
  IconNotes,
  IconSidebar
} from "justd-icons"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { CommandMenu, useMediaQuery } from "ui"
import { useDebounce } from "use-debounce"

export interface OpenCloseProps {
  openCmd: boolean
  setOpen?: (isOpen: boolean) => void
}

interface SidebarItem {
  title: string
  slug?: string
  status?: string
  children?: SidebarItem[]
  toc?: {
    title: string
    url: string
    depth: number
  }[]
}

export function CommandPalette({ openCmd, setOpen }: OpenCloseProps) {
  const router = useRouter()
  const pathname = usePathname()
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        // @ts-ignore
        setOpen((open: boolean) => !open)
      }
    }

    document.addEventListener("keydown", down)

    return () => document.removeEventListener("keydown", down)
  }, [pathname, setOpen])

  React.useEffect(() => {
    if (setOpen) {
      setOpen(false)
    }
  }, [pathname, setOpen])

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const [loading, setLoading] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [debouncedSearch] = useDebounce(search, 300)

  function searchSidebar(items: SidebarItem[], query: string): SidebarItem[] {
    return items
      .map((item) => {
        const matchesTitle = item.title.toLowerCase().includes(query.toLowerCase())

        const filteredChildren = item.children?.length ? searchSidebar(item.children, query) : []

        const filteredToc =
          item.toc
            ?.filter(
              (t, index, self) =>
                t.title.toLowerCase().includes(query.toLowerCase()) &&
                self.findIndex((tt) => tt.title === t.title) === index
            )
            ?.slice(0, 5) || []

        const hasMatches = matchesTitle || filteredChildren.length > 0 || filteredToc.length > 0

        if (hasMatches) {
          return {
            ...item,
            children: matchesTitle ? item.children : filteredChildren,
            toc: filteredToc
          }
        }

        return null
      })
      .filter(Boolean) as SidebarItem[]
  }

  const filteredItems = React.useMemo(() => {
    if (!debouncedSearch) return []

    return searchSidebar(sidebar[3].children as any, debouncedSearch)
  }, [debouncedSearch, sidebar])

  React.useEffect(() => {
    if (debouncedSearch) {
      setLoading(true)
      const timeout = setTimeout(() => setLoading(false), 100)
      return () => clearTimeout(timeout)
    } else {
      setLoading(false)
    }
  }, [debouncedSearch])

  return (
    <CommandMenu classNames={{ content: "backdrop-blur-2xl bg-overlay/50" }} isOpen={openCmd} onOpenChange={setOpen}>
      <CommandMenu.Input
        className="text-sm"
        isPending={loading}
        value={search}
        onValueChange={setSearch}
        autoFocus={isDesktop}
        placeholder="Eg. Colors, Date, Chart, etc."
      />
      <CommandMenu.List>
        <CommandMenu.Section>
          <CommandMenu.Item value="home" asChild>
            <Link href="/">
              <IconHome /> Home
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="documenation" asChild>
            <Link href="/docs/getting-started/installation">
              <IconNotes /> Docs
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="components" asChild>
            <Link href="/components">
              <IconCube /> Components
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="colors" asChild>
            <Link href="/colors">
              <IconColors /> Colors
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="icons" asChild>
            <Link href="/icons">
              <IconBrandJustd /> Icons
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="themes" asChild>
            <Link href="/themes">
              <IconColorSwatch /> Themes
            </Link>
          </CommandMenu.Item>
          {!debouncedSearch && <CommandMenu.Separator className="my-2" />}
          <CommandMenu.Item value="sidebar" asChild>
            <Link href="/docs/components/layouts/sidebar">
              <IconSidebar /> Sidebar
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="navbar" asChild>
            <Link href="/docs/components/layouts/navbar">
              <IconLayoutAlignTop /> Navbar
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="chart" asChild>
            <Link href="/docs/components/charts/setup">
              <IconChartBar /> Chart
            </Link>
          </CommandMenu.Item>
        </CommandMenu.Section>
        {debouncedSearch && (
          <>
            {filteredItems.map((item, i) => (
              <CommandMenu.Section key={`${item.slug}-${i}-${item.title}`} heading={item.title}>
                {item.children?.map((child) => (
                  <React.Fragment key={`${item.slug}-${item.title}-${child.slug}-${child.title}`}>
                    <SubItem value={`${item.title}-${child.title}`} onSelect={() => router.push(`/${child.slug}`)}>
                      <IconCube />
                      {child.title}
                    </SubItem>
                    {child.toc?.map((tocItem) => (
                      <SubItem
                        key={`toc-${child.slug || child.title}-${tocItem.url}`}
                        value={`toc-${child.title}-${tocItem.title}-${tocItem.url}`}
                        onSelect={() => router.push(`/${child.slug}${tocItem.url}`)}
                      >
                        <IconHashtag />
                        {tocItem.title}
                        <CommandMenu.Description>{child.title}</CommandMenu.Description>
                      </SubItem>
                    ))}
                  </React.Fragment>
                ))}
              </CommandMenu.Section>
            ))}
          </>
        )}

        {/*{sidebar*/}
        {/*  .filter((item) => item.title !== "Components")*/}
        {/*  .map((item) => (*/}
        {/*    <CommandMenu.Section key={item.slug || item.title} heading={item.title}>*/}
        {/*      {item.children?.map((child: SidebarItem) => (*/}
        {/*        <CommandMenu.Item*/}
        {/*          value={child.title}*/}
        {/*          className="pl-[2rem] flex justify-between items-center"*/}
        {/*          key={child.slug || child.title}*/}
        {/*          onSelect={() => router.push(`/${child.slug}`)}*/}
        {/*        >*/}
        {/*          {child.title}*/}
        {/*        </CommandMenu.Item>*/}
        {/*      ))}*/}
        {/*    </CommandMenu.Section>*/}
        {/*  ))}*/}

        {/*{sidebar[3].children.map((item: SidebarItem) => (*/}
        {/*  <CommandMenu.Section key={item.slug || item.title} heading={item.title}>*/}
        {/*    {item.children?.map((child: SidebarItem) => (*/}
        {/*      <CommandMenu.Item*/}
        {/*        value={child.title}*/}
        {/*        className="pl-[2rem] flex justify-between items-center"*/}
        {/*        key={child.slug || child.title}*/}
        {/*        onSelect={() => router.push(`/${child.slug}`)}*/}
        {/*      >*/}
        {/*        {child.title}*/}
        {/*        {child.status && (*/}
        {/*          <CommandMenu.Description className="uppercase text-[0.65rem]">*/}
        {/*            {child?.status}*/}
        {/*          </CommandMenu.Description>*/}
        {/*        )}*/}
        {/*      </CommandMenu.Item>*/}
        {/*    ))}*/}
        {/*  </CommandMenu.Section>*/}
        {/*))}*/}
      </CommandMenu.List>
    </CommandMenu>
  )
}

const SubItem = (props: React.ComponentProps<typeof CommandMenu.Item>) => {
  const search = useCommandState((state) => state.search)
  if (!search) return null
  return <CommandMenu.Item {...props} />
}
