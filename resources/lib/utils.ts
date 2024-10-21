import { type Docs } from "@/.velite"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import titlePrimitive from "title"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortDocs(docs: Array<Docs>) {
  return docs.sort((a, b) => a.order - b.order)
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
  const match = code.match(/return\s*(\([^]*?\)|.*?);?\s*}/)
  if (match && match[1]) {
    const jsx = match[1].replace(/^\(|\)$/g, "").trim()
    const lines = jsx.split("\n")

    if (lines.length === 1) {
      return jsx
    }

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

export function extractImports(code: string) {
  const importRegex = /^(import\s+(?:\{[^}]*}|[^;]+)\s*from\s*['"][^'"]+['"]\s*;?)$/gm
  const matches = code.match(importRegex)
  return matches ? matches.join("\n") : ""
}
