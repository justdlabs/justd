import { type Docs, docs } from '@/.velite'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://cleon-ui.vercel.app',
            lastModified: new Date()
        },
        ...docs.map((doc: Docs) => ({
            url: `https://cleon-ui.vercel.app/${doc.slug}`,
            lastModified: new Date()
        }))
    ]
}
