import { docs } from '#site/content'
import { DocRefs } from '@/components/doc-refs'
import { MDXContent } from '@/components/mdx-components'
import { TableOfContents } from '@/components/table-of-contents'
import { siteConfig } from '@/config/site'
import '@/styles/code.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Separator } from 'ui'

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
        title: `Docs: ${doc.title} / ${siteConfig.name}`,
        description: doc.description,
        openGraph: {
            title: doc.title,
            description: doc.description,
            type: 'article',
            url: doc.slug,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: doc.title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: doc.title,
            description: doc.description,
            images: [`/api/og?${ogSearchParams.toString()}`]
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
            <div className='min-w-0 max-w-2xl flex-auto px-4 pb-56 pt-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
                <main className='prose prose-blue max-w-[inherit] dark:prose-invert prose-headings:mb-[0.3rem] prose-headings:scroll-mt-24 prose-code:text-accent prose-pre:p-0'>
                    <h1 className='mb-2'>{doc.title}</h1>
                    {doc.description ? (
                        <p className='mt-0 text-xl text-foreground/70'>
                            {doc.description}
                        </p>
                    ) : null}

                    <div className='not-prose'>
                        <div className='mt-0 flex gap-2'>
                            {doc.references && doc.references?.length > 0 && (
                                <DocRefs references={doc.references} />
                            )}
                        </div>
                        <Separator className='not-prose my-4 lg:my-10' />
                    </div>
                    <TableOfContents className='mt-8 block xl:hidden' items={doc.toc} />
                    <MDXContent code={doc.body} />
                </main>
            </div>
            <TableOfContents className='hidden xl:block' items={doc.toc} />
        </>
    )
}
