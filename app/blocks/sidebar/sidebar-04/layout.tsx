import { SidebarInset, SidebarProvider } from "ui"

import AppSidebar from "../app-sidebar"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar intent="floating" />
        <SidebarInset>
          <div className="p-4 lg:p-6">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
