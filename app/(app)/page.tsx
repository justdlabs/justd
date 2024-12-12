import { BlockSandbox } from "@/components/code/block-sandbox"
import { Cta } from "@/components/cta"
import { Hero } from "@/components/hero"
import { Resources } from "@/components/resources"
import { Container } from "ui"

export default function Page() {
  return (
    <>
      <Hero />
      <Container className="py-6 space-y-16 sm:py-16">
        <BlockSandbox
          {...{
            title: "Navbar",
            defaultSelected: "navbar.tsx",
            preview: "/blocks/navbar/navbar-00",
            expandKeys: ["components", "ui", "app"],
            initialRegistry: "ui/navbar",
            folders: {
              components: {
                ui: {
                  "primitive.tsx": "ui/primitive",
                  "button.tsx": "ui/button",
                  "sheet.tsx": "ui/sheet",
                  "navbar.tsx": "ui/navbar"
                },
                "app-navbar.tsx": "blocks/navbar/navbar-00/app-navbar"
              },
              app: {
                "global.css": "docs/installation/main.css",
                "page.tsx": "blocks/navbar/navbar-00/page",
                "layout.tsx": "blocks/navbar/navbar-00/layout"
              }
            }
          }}
        />

        <BlockSandbox
          {...{
            title: "Sidebar",
            defaultSelected: "app-sidebar.tsx",
            preview: "/blocks/sidebar/sidebar-01",
            expandKeys: ["components", "app"],
            initialRegistry: "ui/sidebar",
            folders: {
              components: {
                ui: {
                  "badge.tsx": "ui/badge",
                  "separator.tsx": "ui/separator",
                  "sheet.tsx": "ui/sheet",
                  "tooltip.tsx": "ui/tooltip",
                  "primitive.tsx": "ui/primitive",
                  "button.tsx": "ui/button",
                  "sidebar.tsx": "ui/sidebar"
                },

                "app-sidebar.tsx": "blocks/sidebar/sidebar-01/app-sidebar"
              },
              app: {
                "page.tsx": "blocks/sidebar/sidebar-01/page",
                "layout.tsx": "blocks/sidebar/sidebar-01/layout",
                "global.css": "docs/installation/main.css"
              }
            }
          }}
        />
        <Resources />
      </Container>
      <Cta />
    </>
  )
}
