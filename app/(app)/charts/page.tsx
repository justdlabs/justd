import React from "react"

import { Charts } from "@/app/(app)/charts/partials/charts"
import { Header } from "@/components/header"
import { siteConfig } from "@/resources/config/site"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Charts",
  description:
    "Charts are a great way to display data in a visually appealing and easy-to-understand format. They are ideal for presenting information in a clear and concise manner.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name,
  keywords: [
    "Charts",
    "Chart",
    "Area Chart",
    "Pie Chart",
    "Line Chart",
    "Radial Chart",
    "Radar Chart",
    "Components",
    "Justd Components",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Justd",
    "Next.js 15",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
    "Laravel Inertia UI",
    "Laravel Inertia Components",
    "Laravel Inertia UI Components",
    "Laravel Inertia UI Kit",
    "Laravel Inertia UI Library",
    "Laravel Inertia UI Framework",
    "Laravel Inertia Justd",
    "Laravel Justd",
    "Justd Components",
    "Justd UI Components",
    "Justd UI Kit",
    "Justd UI Library",
    "Justd UI Framework",
    "Justd Laravel Inertia",
    "Justd Laravel",
    "Justd Inertia"
  ]
}

export default function Page() {
  return (
    <div>
      <Header>
        <span className="text-fg">Cha</span>
        <span className="text-muted-fg">rts</span>
      </Header>
      <Charts />
    </div>
  )
}
