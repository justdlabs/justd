import { transformerNotationDiff } from '@shikijs/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/')
})

const docs = defineCollection({
    name: 'Docs',
    pattern: '**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            description: s.string().max(999).optional(),
            order: s.number(),
            published: s.boolean().default(true),
            references: s.array(s.string()).optional(),
            body: s.mdx(),
            toc: s.toc(),
            status: s.string().optional()
        })
        .transform(computedFields)
})

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true
    },
    collections: { docs },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    transformers: [transformerNotationDiff()],
                    theme: 'vesper',
                    defaultLang: {
                        block: 'tsx',
                        inline: 'plaintext'
                    }
                }
            ],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                    properties: {
                        className: ['not-prose subheading-anchor'],
                        ariaLabel: 'Link to section'
                    }
                }
            ]
        ],
        remarkPlugins: []
    }
})
