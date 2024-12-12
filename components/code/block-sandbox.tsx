"use client"

import { cache, memo, useCallback, useEffect, useState } from "react"

import generated from "@/__registry__/generated"
import { BrandIcon } from "@/components/brand-icon"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/copy-button"
import { IconDeviceDesktop, IconDeviceIpad, IconDevicePhone } from "@/components/icon-device"
import quotes from "@/resources/json/quotes.json"
import type { RegistryItem } from "@/resources/types"
import { clsx } from "clsx"
import {
  IconCube,
  IconFolderFill,
  IconFolderOpen,
  IconFullscreen,
  IconLayoutAlignLeft,
  IconLayoutAlignTop,
  IconX
} from "justd-icons"
import type { Key } from "react-aria-components"
import { Tab, TabList, ToggleButton } from "react-aria-components"
import {
  Button,
  buttonStyles,
  cn,
  Link,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarLabel,
  SidebarNav,
  SidebarProvider,
  Tabs,
  ToggleGroup
} from "ui"

const registry = generated as Record<string, RegistryItem>
interface FolderStructure {
  [key: string]: string | FolderStructure
}

type Props = {
  title: string
  defaultSelected: string
  preview: string
  fullscreen?: string
  expandKeys: string[]
  initialRegistry: string
  folders: FolderStructure
  isIframe?: boolean
}

function Component({ folders, fullscreen, isIframe = false, title, ...props }: Props) {
  const [device, setDevice] = useState(new Set<Key>(["desktop"]))

  const [selectedKey, setSelectedKey] = useState(props.defaultSelected)
  const [code, setCode] = useState("")
  const [registryKey, setRegistryKey] = useState(props.initialRegistry)
  const Component = registry[props.preview]?.component
  useEffect(() => {
    if (!registryKey) return
    fetchCode(registryKey).then(setCode)
  }, [registryKey])
  const renderTree = useCallback(
    (tree: FolderStructure, nestedLevel = 1) =>
      Object.entries(tree).map(([key, value]) => {
        const isString = typeof value === "string"
        return isString ? (
          <SidebarItem
            key={key}
            className="pl-[calc(var(--nested-level)*16px)]"
            style={{ "--nested-level": nestedLevel } as React.CSSProperties}
            onPress={() => {
              setRegistryKey(value)
              setSelectedKey(key)
            }}
            isCurrent={key === selectedKey}
          >
            <BrandIcon label={key} />
            <SidebarLabel>{key}</SidebarLabel>
          </SidebarItem>
        ) : (
          <DisclosureGroup
            key={key}
            defaultExpandedKeys={props.expandKeys!}
            id={key}
            element={({ isExpanded }) => (
              <>
                <SidebarDisclosureTrigger
                  className="pl-[calc(var(--nested-level)*16px)]"
                  style={{ "--nested-level": nestedLevel } as React.CSSProperties}
                >
                  {isExpanded ? <IconFolderOpen /> : <IconFolderFill />}
                  <SidebarLabel>{key}</SidebarLabel>
                </SidebarDisclosureTrigger>
                <SidebarDisclosurePanel>{renderTree(value, nestedLevel + 1)}</SidebarDisclosurePanel>
              </>
            )}
          />
        )
      }),
    [registryKey]
  )
  if (!Component && !isIframe) {
    return <p>Component "{props.preview}" not found in the registry.</p>
  }
  return (
    <div className="flex overflow-hidden relative isolate border rounded-xl">
      <Tabs className="w-full gap-0 p-1">
        <div className="flex bg-navbar mb-1 rounded-lg overflow-hidden ring-1 ring-fg/10 items-center justify-between">
          <h2 className="text-sm ml-3.5 font-medium inline-flex items-center **:data-[slot=icon]:text-muted-fg gap-x-1.5">
            {title.includes("Sidebar") ? (
              <IconLayoutAlignLeft />
            ) : title.includes("Navbar") ? (
              <IconLayoutAlignTop />
            ) : (
              <IconCube />
            )}
            {title}
          </h2>
          <div className="flex rounded-s-lg ring-1 ring-transparent dark:ring-border bg-bg shadow-sm items-center px-2 py-1">
            <TabList className="flex items-center text-xs">
              <Tab
                className={({ isSelected }) =>
                  clsx(
                    "px-2.5 cursor-pointer py-1.5 rounded-sm outline-hidden",
                    isSelected && "bg-primary text-primary-fg"
                  )
                }
                id="preview"
              >
                Preview
              </Tab>
              <Tab
                className={({ isSelected }) =>
                  clsx(
                    "px-2.5 cursor-pointer py-1.5 rounded-sm outline-hidden",
                    isSelected && "bg-primary text-primary-fg"
                  )
                }
                id="code"
              >
                Code
              </Tab>
            </TabList>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <ToggleGroup className="items-center sm:flex hidden" selectedKeys={device} onSelectionChange={setDevice}>
              <ToggleButton
                aria-label="Switch to phone display"
                className={({ isSelected }) =>
                  clsx(
                    "*:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 p-1 outline-hidden data-focus-visible:inset-ring-1 data-focus-visible:inset-ring-primary",
                    isSelected ? "text-fg" : "text-muted-fg/70"
                  )
                }
                id="phone"
              >
                <IconDevicePhone />
              </ToggleButton>
              <ToggleButton
                aria-label="Switch to ipad/tablet display"
                className={({ isSelected }) =>
                  clsx(
                    "*:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 p-1 outline-hidden data-focus-visible:inset-ring-1 data-focus-visible:inset-ring-primary",
                    isSelected ? "text-fg" : "text-muted-fg/70"
                  )
                }
                id="ipad"
              >
                <IconDeviceIpad />
              </ToggleButton>
              <ToggleButton
                aria-label="Switch to desktop / large screen display"
                className={({ isSelected }) =>
                  clsx(
                    "*:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 p-1 outline-hidden data-focus-visible:inset-ring-1 data-focus-visible:inset-ring-primary",
                    isSelected ? "text-fg" : "text-muted-fg/70"
                  )
                }
                id="desktop"
              >
                <IconDeviceDesktop />
              </ToggleButton>
            </ToggleGroup>
            <Separator orientation="vertical" className="mx-2 sm:block hidden h-6" />
            {fullscreen && (
              <Link
                href={fullscreen}
                target="_blank"
                className={buttonStyles({ appearance: "plain", size: "square-petite" })}
              >
                <IconFullscreen />
              </Link>
            )}
          </div>
        </div>
        <Tabs.Panel id="preview">
          <div className="flex items-center justify-center">
            {isIframe ? (
              <iframe
                src={props.preview}
                className={cn(
                  "min-h-160 border rounded-lg overflow-hidden w-full",
                  [...device].join(", ") === "phone" && "max-w-sm",
                  [...device].join(", ") === "ipad" && "max-w-3xl",
                  [...device].join(", ") === "desktop" && "max-w-none"
                )}
              />
            ) : (
              <div
                className={cn(
                  "min-h-140 border rounded-lg overflow-hidden w-full",
                  [...device].join(", ") === "phone" && "max-w-sm",
                  [...device].join(", ") === "ipad" && "max-w-3xl",
                  [...device].join(", ") === "desktop" && "max-w-none"
                )}
              >
                <Component />
              </div>
            )}
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="code">
          <div className="border rounded-lg [--height:85vh]  min-h-(--height) max-h-(--height) overflow-hidden flex">
            <SidebarProvider className="min-h-full">
              <Sidebar intent="fleet" className="h-full" collapsible="none">
                <SidebarHeader className="bg-gradient-to-b py-0 h-12 flex items-center justify-between flex-row border-b">
                  <Link
                    className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
                    href="/docs/components/layouts/sidebar"
                  >
                    <IconFolderFill className="size-4.5" />
                    <SidebarLabel className="font-medium text-sm">getjustd.com</SidebarLabel>
                  </Link>
                </SidebarHeader>
                <SidebarContent className="pb-10">{renderTree(folders)}</SidebarContent>
              </Sidebar>
              <SidebarInset className="overflow-hidden">
                <SidebarNav className="h-12 bg-sidebar flex justify-between shrink-0">
                  <div className="flex flex-1 items-center">
                    <BrandIcon label={selectedKey} />
                    <strong className="font-medium ml-2 text-xs">{selectedKey}</strong>
                  </div>
                  <Button
                    onPress={() => {
                      setCode(`/**
* "${randomQuote.quote}"
* - ${randomQuote.name}
*/
                      `)
                    }}
                    className="-mr-2 **:data-[slot=icon]:text-muted-fg data-hovered:**:data-[slot=icon]:rotate-90 **:data-[slot=icon]:duration-200 data-hovered:bg-transparent"
                    size="square-petite"
                    appearance="plain"
                  >
                    <IconX />
                  </Button>
                  <CopyButton
                    alwaysVisible
                    className="text-zinc-600 data-hovered:text-zinc-70 dark:text-zinc-400 dark:data-hovered:text-zinc-50"
                    text={code}
                  />
                </SidebarNav>
                <CodeHighlighter
                  max96={false}
                  plain
                  className={"p-6 bg-zinc-950 text-white overflow-y-auto"}
                  code={code}
                />
              </SidebarInset>
            </SidebarProvider>
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

function DisclosureGroup(props: {
  defaultExpandedKeys: string[]
  id: string
  element: ({ isExpanded }: { isExpanded: any }) => React.ReactNode
}) {
  return (
    <SidebarDisclosureGroup defaultExpandedKeys={props.defaultExpandedKeys}>
      <SidebarDisclosure id={props.id}>{props.element}</SidebarDisclosure>
    </SidebarDisclosureGroup>
  )
}

const fetchCode = cache(async (registryKey: string) => {
  const response = await fetch(`/registry/${registryKey}.json`)
  const registryEntry = await response.json()
  return registryEntry?.files?.[0]?.content || ""
})

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

export const BlockSandbox = memo(Component)
