"use client"

import type { CSSProperties } from "react"
import { cache, memo, useCallback, useEffect, useState } from "react"

import { BrandIcon } from "@/components/brand-icon"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { IconDeviceDesktop, IconDeviceIpad, IconDevicePhone } from "@/components/icon-device"
import { clsx } from "clsx"
import { IconCube, IconFolderFill, IconFolderOpen, IconFullscreen, IconSidebarFill, IconX } from "justd-icons"
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

interface FolderStructure {
  [key: string]: string | FolderStructure
}

type Props = {
  title: string
  defaultSelected: string
  preview: string
  expandKeys: string[]
  initialRegistry: string
  folders: FolderStructure
}

function Component({ folders, title, ...props }: Props) {
  const [device, setDevice] = useState(new Set<Key>(["desktop"]))

  const [selectedKey, setSelectedKey] = useState(props.defaultSelected)
  const [code, setCode] = useState("")
  const [registryKey, setRegistryKey] = useState(props.initialRegistry)
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
            style={{ "--nested-level": nestedLevel } as CSSProperties}
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
  return (
    <div className="flex relative isolate border min-h-160 rounded-xl max-h-160 overflow-hidden">
      <Tabs className="w-full gap-0 p-1 h-full">
        <div className="flex bg-navbar mb-1 rounded-lg overflow-hidden ring-1 ring-fg/10 items-center justify-between">
          <h2 className="text-sm ml-3.5 font-medium inline-flex items-center gap-x-1">
            {title === "Sidebar" ? <IconSidebarFill /> : <IconCube />}
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
            <ToggleGroup className="items-center" selectedKeys={device} onSelectionChange={setDevice}>
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
              <Separator orientation="vertical" className="mx-2 h-6" />
              <Link
                href={props.preview}
                target="_blank"
                className={buttonStyles({ appearance: "plain", size: "square-petite" })}
              >
                <IconFullscreen />
              </Link>
            </ToggleGroup>
          </div>
        </div>
        <Tabs.Panel id="preview">
          <div className="flex items-center justify-center">
            <iframe
              src={props.preview}
              className={cn(
                "min-h-160 border rounded-lg overflow-hidden w-full",
                [...device].join(", ") === "phone" && "max-w-sm",
                [...device].join(", ") === "ipad" && "max-w-3xl",
                [...device].join(", ") === "desktop" && "max-w-none"
              )}
            />
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="code">
          <div className="border rounded-lg overflow-hidden">
            <SidebarProvider>
              <Sidebar className="min-w-56 min-h-160 max-h-120 h-full shrink-0" intent="fleet" collapsible="none">
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
                      setCode("// Select a component to show its code.")
                    }}
                    className="-mr-2"
                    size="square-petite"
                    appearance="plain"
                  >
                    <IconX />
                  </Button>
                </SidebarNav>
                <CodeHighlighter
                  max96={false}
                  plain
                  className="p-6 bg-zinc-950 ring-1 ring-zinc-950 dark:ring-zinc-800 pb-24 min-h-160 overflow-y-auto max-h-160"
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

export const BlockSandbox = memo(Component)
