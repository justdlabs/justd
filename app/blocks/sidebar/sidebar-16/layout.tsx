import { SidebarInset, SidebarProvider } from "ui"

import AppSidebar from "../app-sidebar"
import AppSidebarNav from "../app-sidebar-nav"
import RightSidebar from "../sidebar-10/app-sidebar"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppSidebarNav />
          <div className="p-4 lg:p-6">{children}</div>
        </SidebarInset>
        <RightSidebar side="right" />
      </SidebarProvider>
    </>
  )
}
