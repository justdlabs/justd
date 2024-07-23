import { type Docs, docs } from '@/.velite'
import { siteConfig } from '@/config/site'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date()
    },
    ...docs.map((doc: Docs) => ({
      url: `${siteConfig.url}/${doc.slug}`,
      lastModified: new Date()
    }))
  ]
}
