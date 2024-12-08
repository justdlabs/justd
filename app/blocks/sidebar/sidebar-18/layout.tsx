import React from "react"

import { IconBrandPhp, IconX } from "justd-icons"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "ui"

import AppSidebar from "./app-sidebar"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarProvider className="[--sidebar-width:19rem]">
        <AppSidebar closeButton={false} intent="fleet" />
        <SidebarInset>
          <div className="flex items-center w-full bg-sidebar border-b px-4 h-12 justify-between">
            <SidebarTrigger className="-ml-2 sm:hidden" />
            <div className="flex items-center">
              <IconBrandPhp className="w-8 text-indigo-500" />
              <span className="text-muted-fg font-mono text-xs">Controller.php</span>
            </div>
            <IconX />
          </div>
          <div>{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
