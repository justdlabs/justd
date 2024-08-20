import { Header } from "@/components/header"
import { siteConfig } from "@/resources/config/site"
import type { Metadata } from "next"

export default function Page() {
  return (
    <div>
      <Header>
        <span className="text-fg">Them</span>
        <span className="text-muted-fg">es</span>
      </Header>

      {/*<Themes />*/}
    </div>
  )
}

export const metadata: Metadata = {
  title: "Themes",
  description:
    "Curated themes, carefully selected just for you, ready to be copied, pasted, and seamlessly integrated into your apps, giving your projects a polished and custom vibe without the hassle.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  applicationName: siteConfig.name,
  category: "Themes",
  twitter: {
    card: "summary_large_image",
    title: "Themes / " + siteConfig.name,
    description:
      "Curated themes, carefully selected just for you, ready to be copied, pasted, and seamlessly integrated into your apps, giving your projects a polished and custom vibe without the hassle."
  },
  openGraph: {
    title: "Themes / " + siteConfig.name,
    images: [
      {
        url: "https://getjustd.com/themes/opengraph-image.png?v=1",
        width: 1200,
        height: 630,
        alt: "Justd Themes"
      }
    ],
    description:
      "Curated themes, carefully selected just for you, ready to be copied, pasted, and seamlessly integrated into your apps, giving your projects a polished and custom vibe without the hassle.",
    url: "https://getjustd.com/themes",
    type: "website"
  },
  keywords: [
    "Themes",
    "Justd Themes",
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
