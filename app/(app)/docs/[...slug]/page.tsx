import { docs } from '#site/content'
import { DocRefs } from '@/components/doc-refs'
import { MDXContent } from '@/components/mdx-components'
import { Pager } from '@/components/pager'
import { TableOfContents } from '@/components/table-of-contents'
import { siteConfig } from '@/resources/config/site'
import '@/resources/styles/code.css'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Heading, Separator, Toast } from 'ui'

export interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: DocPageProps['params']) {
  const slug = params?.slug?.join('/')
  const doc = docs.find((doc) => doc.slugAsParams === slug)

  return doc
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getPostFromParams(params)

  if (!doc) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', doc.title)

  return {
    title: `${doc.title} / ${siteConfig.name}`,
    description: doc.description,
    applicationName: siteConfig.name,
    category: 'Docs',
    twitter: {
      card: 'summary_large_image',
      title: `${doc.title} / ${siteConfig.name}`,
      description: doc.description
    }
  }
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
  return docs.map((doc) => ({ slug: doc.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: DocPageProps) {
  const doc = await getPostFromParams(params)

  if (!doc || !doc.published) {
    notFound()
  }

  return (
    <>
      {doc.title === 'Toast' && <Toast />}
      <div className="min-w-0 max-w-2xl flex-auto pt-16 pb-32 lg:max-w-none px-4 lg:pl-8 lg:pr-0 xl:px-16">
        <main className="prose prose-pre:p-0 prose-headings:mb-[0.3rem] prose-headings:scroll-mt-24 prose-blue dark:prose-invert max-w-[inherit]">
          <Heading className="mb-2 font-semibold tracking-tighter sm:tracking-tight text-2xl sm:text-3xl">{doc.title}</Heading>
          {doc.description ? <p className="text-xl mt-0 text-muted-foreground">{doc.description}</p> : null}

          <div className="not-prose">
            <div className="flex gap-2 mt-0">{doc.references && doc.references?.length > 0 && <DocRefs references={doc.references} />}</div>
            <Separator className="my-4 lg:my-10 not-prose" />
          </div>
          <TableOfContents className="mt-8 block xl:hidden" items={doc.toc} />
          <MDXContent code={doc.body} />
          <Pager
            doc={{
              title: doc.title,
              slug: doc.slug,
              order: doc.order
            }}
            docs={docs.filter((doc) => doc.slug.startsWith('docs/components')).map((doc) => ({ order: doc.order, slug: doc.slug, title: doc.title }))}
          />
        </main>
      </div>
      <TableOfContents className="hidden xl:block" items={doc.toc} />
    </>
  )
}
