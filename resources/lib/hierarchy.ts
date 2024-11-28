import type { Docs } from "@/.velite"
import { sortDocs } from "@/resources/lib/utils"

export interface Doc {
  slug: string
  title: string
  status?: "wip" | "new" | "beta" | "help" | "primitive" | "alpha"
}

export interface HierarchyNode {
  [key: string]: HierarchyNode | Doc
}

export const createHierarchy = (docs: Array<Docs>): HierarchyNode => {
  const hierarchy: HierarchyNode = {}

  sortDocs(docs).forEach((doc) => {
    const parts = doc.slug.split("/").slice(1)
    let currentLevel = hierarchy

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // @ts-ignore
        currentLevel[part] = doc
      } else {
        if (!currentLevel[part]) {
          currentLevel[part] = {}
        }
        currentLevel = currentLevel[part] as HierarchyNode
      }
    })
  })

  return hierarchy
}
