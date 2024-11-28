import { type Docs, docs } from "#site/content"
import * as fs from "fs"

const groupDocs = (docs: Docs[]) => {
  const groups: any = {
    "dark-mode": [],
    "getting-started": [],
    prologue: [],
    components: {}
  }

  docs.forEach((doc) => {
    const { slug, title } = doc
    if (slug.startsWith("docs/dark-mode/")) {
      groups["dark-mode"].push({ title, slug, children: [] })
    } else if (slug.startsWith("docs/getting-started/")) {
      groups["getting-started"].push({ title, slug, children: [] })
    } else if (slug.startsWith("docs/prologue/")) {
      groups["prologue"].push({ title, slug, children: [] })
    } else if (slug.startsWith("docs/components/")) {
      const parts = slug.split("/")
      const category = parts[2] // e.g., buttons, charts
      const componentSlug = parts.slice(3).join("/") // The rest of the slug is the component name

      if (!groups["components"][category]) {
        groups["components"][category] = []
      }

      groups["components"][category].push({
        title,
        slug: `docs/components/${category}/${componentSlug}`,
        children: []
      })
    }
  })

  return [
    {
      title: "Prologue",
      slug: "docs/prologue/prologue",
      children: groups["prologue"]
    },
    {
      title: "Getting Started",
      slug: "docs/getting-started/getting-started",
      children: groups["getting-started"]
    },
    {
      title: "Dark Mode",
      slug: "docs/dark-mode/dark-mode",
      children: groups["dark-mode"]
    },
    {
      title: "Components",
      slug: "docs/components/components",
      children: Object.entries(groups["components"]).map(([category, items]) => ({
        title: category.charAt(0).toUpperCase() + category.slice(1),
        children: items
      }))
    }
  ]
}

const generateSidebarJson = () => {
  return groupDocs(docs)
}

const sidebarJson = generateSidebarJson()
fs.writeFileSync("resources/lib/sidebar.json", JSON.stringify(sidebarJson, null, 2))

console.log("✅ sidebar.json generated successfully.")
