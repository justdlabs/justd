import { type Docs, docs } from '@/.velite'
import { siteConfig } from '@/resources/config/site'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date()
    },
    {
      url: siteConfig.url + '/components',
      lastModified: new Date()
    },
    {
      url: siteConfig.url + '/colors',
      lastModified: new Date()
    },
    {
      url: siteConfig.url + '/themes',
      lastModified: new Date()
    },
    {
      url: siteConfig.url + '/icons',
      lastModified: new Date()
    },
    ...docs.map((doc: Docs) => ({
      url: `${siteConfig.url}/${doc.slug}`,
      lastModified: new Date()
    }))
  ]
}
