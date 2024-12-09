"use client"

import * as React from "react"

import {
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandReactjs,
  IconBrandTailwindcss,
  IconBrandTypescript,
  IconFile,
  IconFolderFill,
  IconFolderOpen
} from "justd-icons"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarItem,
  SidebarLabel,
  SidebarRail
} from "ui"

import { folders } from "./folders"
import { SidebarHeader } from "./sidebar-header"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader />
      <SidebarContent className="pb-10">
        <FileTreeView data={folders} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function FileTreeView({ data }: { data: typeof folders }) {
  return (
    <SidebarDisclosureGroup>
      {data.map((item) => (
        <SidebarTree key={item.id} item={item} index={1} />
      ))}
    </SidebarDisclosureGroup>
  )
}

function SidebarTree({ item, index }: { item: (typeof folders)[number]; index: number }) {
  if (!item.files || item.files.length === 0) {
    return (
      <SidebarItem
        isCurrent={item.id === 1212}
        className="pl-[calc(var(--nested-level)*16px)]"
        style={
          {
            "--nested-level": index
          } as React.CSSProperties
        }
      >
        {getFileIcon(item.label)}
        <SidebarLabel>{item.label}</SidebarLabel>
      </SidebarItem>
    )
  }

  return (
    <SidebarDisclosureGroup defaultExpandedKeys={[1, 12, 121, 1212, 6, 61, 611, 62, 621, 6212, 62121, 1211]}>
      <SidebarDisclosure id={item.id}>
        {({ isExpanded }) => (
          <>
            <SidebarDisclosureTrigger
              className="pl-[calc(var(--nested-level)*16px)]"
              style={
                {
                  "--nested-level": index
                } as React.CSSProperties
              }
            >
              {isExpanded ? <IconFolderOpen /> : <IconFolderFill />}
              <SidebarLabel>{item.label}</SidebarLabel>
            </SidebarDisclosureTrigger>
            <SidebarDisclosurePanel>
              {item.files!.map((child) => (
                <SidebarTree key={child.id} item={child} index={index + 1} />
              ))}
            </SidebarDisclosurePanel>
          </>
        )}
      </SidebarDisclosure>
    </SidebarDisclosureGroup>
  )
}

function getFileIcon(label: string) {
  const ext = label.toLowerCase()
  if (ext.endsWith(".blade.php")) {
    return <IconBrandLaravel className="size-4 text-red-500" />
  }

  switch (label.split(".").pop()?.toLowerCase()) {
    case "php":
      return <IconBrandPhp className="size-4 text-indigo-500" />
    case "tsx":
      return <IconBrandReactjs className="size-4 text-cyan-500" />
    case "ts":
      return <IconBrandTypescript className="size-4 text-blue-500" />
    case "css":
      return <IconBrandTailwindcss className="size-4 text-sky-500" />
    default:
      return <IconFile />
  }
}
