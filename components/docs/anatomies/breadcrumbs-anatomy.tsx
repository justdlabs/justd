import { Breadcrumb, Breadcrumbs } from "ui"

export default function BreadcrumbsAnatomy() {
  return (
    <Breadcrumbs onAction={() => {}}>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">Design System</Breadcrumb>
      <Breadcrumb>Collections</Breadcrumb>
    </Breadcrumbs>
  )
}
