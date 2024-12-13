import * as fs from "node:fs"
import { type Docs, docs } from "#site/content"

const groupDocs = (docs: Docs[]) => {
  const groups: any = {
    "dark-mode": [],
    "getting-started": [],
    prologue: [],
    components: {},
  }

  docs.forEach((doc) => {
    const { slug, title, order, toc } = doc
    if (slug.startsWith("docs/dark-mode/")) {
      groups["dark-mode"].push({ title, slug, order, children: [], toc })
    } else if (slug.startsWith("docs/getting-started/")) {
      groups["getting-started"].push({ title, slug, order, children: [], toc })
    } else if (slug.startsWith("docs/prologue/")) {
      groups.prologue.push({ title, slug, order, children: [], toc })
    } else if (slug.startsWith("docs/components/")) {
      const parts = slug.split("/")
      const category = parts[2]
      const componentSlug = parts.slice(3).join("/")

      if (!groups.components[category]) {
        groups.components[category] = []
      }

      groups.components[category].push({
        title,
        slug: `docs/components/${category}/${componentSlug}`,
        status: doc.status,
        order,
        children: [],
        toc,
      })
    }
  })

  Object.keys(groups).forEach((key) => {
    if (key === "components") {
      Object.keys(groups.components).forEach((category) => {
        groups.components[category].sort((a: any, b: any) => a.order - b.order)
      })
    } else {
      groups[key].sort((a: any, b: any) => a.order - b.order)
    }
  })

  return [
    {
      title: "Prologue",
      slug: "docs/prologue/prologue",
      children: groups.prologue,
    },
    {
      title: "Getting Started",
      slug: "docs/getting-started/getting-started",
      children: groups["getting-started"],
    },
    {
      title: "Dark Mode",
      slug: "docs/dark-mode/dark-mode",
      children: groups["dark-mode"],
    },
    {
      title: "Components",
      slug: "docs/components/components",
      children: Object.entries(groups.components).map(([category, items]) => ({
        title: category.charAt(0).toUpperCase() + category.slice(1),
        children: items,
      })),
    },
  ]
}

const generateSidebarJson = () => {
  return groupDocs(docs)
}

const sidebarJson = generateSidebarJson()
fs.writeFileSync("resources/lib/sidebar.json", JSON.stringify(sidebarJson, null, 2))

console.info("✅ sidebar.json generated successfully.")
