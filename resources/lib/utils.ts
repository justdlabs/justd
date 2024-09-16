import { type Docs } from "@/.velite"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import titlePrimitive from "title"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}

export function sortDocs(docs: Array<Docs>) {
  return docs.sort((a, b) => a.order - b.order)
}

export function getAllRefs(docs: Array<Docs>) {
  const references: Record<string, number> = {}
  docs.forEach((doc) => {
    if (doc.published) {
      doc.references?.forEach((tag: string | number) => {
        references[tag] = (references[tag] ?? 0) + 1
      })
    }
  })

  return references
}

export function goodTitle(str: string) {
  return titlePrimitive(str.replaceAll("-", " "))
}

export function wait(number: number) {
  return new Promise((resolve) => setTimeout(resolve, number))
}

export function extractAndFormat(url: string): string {
  const match = url.match(/\/([^/]+)\.html/)
  if (match) {
    return match[1].replace(/([a-z])([A-Z])/g, "$1 $2")
  }
  return ""
}

export function extractJSX(code: string) {
  const match = code.match(/return\s*\(\s*([\s\S]*?)\s*\);?\s*}/)
  if (match && match[1]) {
    const jsx = match[1]
    const lines = jsx.split("\n")

    return lines
      .map((line) => {
        // @ts-ignore
        const indent = line.match(/^\s*/)[0]
        return indent.slice(4) + line.trim()
      })
      .join("\n")
      .trim()
  }
  return null
}

// export function extractJSX(code: string) {
//   const match = code.match(/return\s*\(\s*([\s\S]*?)\s*\);?\s*}/)
//   if (match && match[1]) {
//     const jsx = match[1]
//     const lines = jsx
//       .split("\n")
//       .map((line) => line.trim())
//       .filter((line) => line)
//
//     let indent = 0
//     const result = lines.map((line, index) => {
//       if (line.startsWith("</")) {
//         indent = Math.max(0, indent - 1)
//       }
//
//       const safeIndent = Math.max(0, indent)
//       let indentedLine = "  ".repeat(safeIndent) + line
//
//       const openTags = (line.match(/<[^/][^>]*>/g) || []).length
//       const closeTags = (line.match(/<\/[^>]+>/g) || []).length
//
//       indent += openTags - closeTags
//
//       indent = Math.max(0, indent)
//
//       return indentedLine
//     })
//
//     return result.join("\n")
//   }
//   return null
// }
