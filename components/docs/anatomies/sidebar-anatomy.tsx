import { IconCreditCard, IconShoppingBag } from "justd-icons"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarNav,
  SidebarProvider,
  SidebarRail,
  SidebarSection
} from "ui"

export default function SidebarAnatomy() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarNav isSticky />
        </SidebarHeader>
        <SidebarContent>
          <SidebarSection>
            <SidebarItem />
            <SidebarItem />
          </SidebarSection>
          <SidebarSection title="Projects">
            <SidebarItem icon={IconShoppingBag} />
            <SidebarItem icon={IconCreditCard} />
          </SidebarSection>
          <SidebarSection collapsible title="Team">
            <SidebarItem />
          </SidebarSection>
        </SidebarContent>
        <SidebarFooter />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>{/* your main content */}</SidebarInset>
    </SidebarProvider>
  )
}
