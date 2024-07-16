import React from 'react'

import type { Docs } from '#site/content'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export function useMediaQuery(query: string) {
    const [value, setValue] = React.useState(false)

    React.useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }

        const result = matchMedia(query)
        result.addEventListener('change', onChange)
        setValue(result.matches)

        return () => result.removeEventListener('change', onChange)
    }, [query])

    return value
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
            doc.references?.forEach((tag: string) => {
                references[tag] = (references[tag] ?? 0) + 1
            })
        }
    })

    return references
}

export function sortReferencesByCount(references: Record<string, number>) {
    return Object.keys(references).sort((a, b) => references[b] - references[a])
}

export function slugify(string: string) {
    return string
        .normalize('NFKD')
        .replace(/[^a-z0-9 ]/gi, '')
        .trim()
        .replace(/\s+/g, '-')
}

export function getDocsByTagReferences(docs: Array<Docs>, tag: string) {
    return docs.filter((doc) => {
        if (!doc.references) return false
        const slugifiedTags = doc.references.map((tag: string) => slugify(tag))
        return slugifiedTags.includes(tag)
    })
}

export function titleCase(input: string): string {
    return input
        .replace(/([-_][a-z])/g, (group) =>
            group.toUpperCase().replace('-', ' ').replace('_', ' ')
        )
        .replace(/^[a-z]/, (group) => group.toUpperCase())
}

export function wait(number: number = 1000) {
    return new Promise((resolve) => setTimeout(resolve, number))
}
