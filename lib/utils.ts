import { type Docs } from '#site/content'
import { type ClassValue, clsx } from 'clsx'
import { slug } from 'github-slugger'
import { twMerge } from 'tailwind-merge'
import titlePrimitive from 'title'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function sortDocs(docs: Array<Docs>) {
  return docs.sort((a, b) => a.order - b.order)
}

export function getAllRefs(docs: Array<Docs>) {
  const references: Record<string, number> = {}
  docs.forEach((doc) => {
    if (doc.published) {
      doc.references?.forEach((tag) => {
        references[tag] = (references[tag] ?? 0) + 1
      })
    }
  })

  return references
}

export function sortReferencesByCount(references: Record<string, number>) {
  return Object.keys(references).sort((a, b) => references[b] - references[a])
}

export function getDocsByTagReferences(docs: Array<Docs>, tag: string) {
  return docs.filter((doc) => {
    if (!doc.references) return false
    const slugifiedTags = doc.references.map((tag) => slug(tag))
    return slugifiedTags.includes(tag)
  })
}

export function goodTitle(str: string) {
  return titlePrimitive(str.replaceAll('-', ' '))
}

export function toTitleCase(input: string): string {
  return input
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    )
    .replace(/^[a-z]/, (group) => group.toUpperCase())
}

export function wait(number: number) {
  return new Promise((resolve) => setTimeout(resolve, number))
}

export function extractAndFormat(url: string): string {
  const match = url.match(/\/([^\/]+)\.html/)
  if (match) {
    return match[1].replace(/([a-z])([A-Z])/g, '$1 $2')
  }
  return ''
}
