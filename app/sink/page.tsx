import BreadcrumbsCollectionsDemo from "@/components/docs/navigation/breadcrumbs/breadcrumbs-collections-demo"
import BreadcrumbsDemo from "@/components/docs/navigation/breadcrumbs/breadcrumbs-demo"
import BreadcrumbsMenuDemo from "@/components/docs/navigation/breadcrumbs/breadcrumbs-menu-demo"
import BreadcrumbsSeparatorDemo from "@/components/docs/navigation/breadcrumbs/breadcrumbs-separator-demo"
import { Card } from "ui"

export default function Page() {
  return (
    <div className="p-10 grid grid-cols-3 gap-6">
      <Card className="h-56 flex items-center justify-center">
        <BreadcrumbsDemo />
      </Card>
      <Card className="h-56 flex items-center justify-center">
        <BreadcrumbsSeparatorDemo />
      </Card>
      <Card className="h-56 flex items-center justify-center">
        <BreadcrumbsMenuDemo />
      </Card>
      <Card className="h-56 flex items-center justify-center">
        <BreadcrumbsCollectionsDemo />
      </Card>
    </div>
  )
}
