import type React from "react"

import { IconBrandPhp, IconX } from "justd-icons"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "ui"

import AppSidebar from "./app-sidebar"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarProvider className="[--sidebar-width:19rem]">
        <AppSidebar closeButton={false} intent="fleet" />
        <SidebarInset>
          <div className="flex justify-between items-center px-4 w-full h-12 border-b bg-sidebar">
            <SidebarTrigger className="-ml-2 sm:hidden" />
            <div className="flex items-center">
              <IconBrandPhp className="w-8 text-indigo-500" />
              <span className="font-mono text-xs text-muted-fg">Controller.php</span>
            </div>
            <IconX />
          </div>
          <div>{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
