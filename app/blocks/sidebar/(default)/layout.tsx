import * as React from "react"

import { AppSidebar } from "@/app/blocks/sidebar/(default)/app-sidebar"
import { AppSidebarNav } from "@/app/blocks/sidebar/(default)/app-sidebar-nav"
import { SidebarInset, SidebarProvider } from "ui"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppSidebarNav />
        <div className="p-4 lg:p-6 overflow-hidden">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
