import { docs } from "#site/content"
import { DocRefs } from "@/components/doc-refs"
import { Mdx } from "@/components/mdx-components"
import { Pager } from "@/components/pager"
import { TableOfContents } from "@/components/table-of-contents"
import { siteConfig } from "@/resources/config/site"
import { goodTitle } from "@/resources/lib/utils"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

export interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/")
  const doc = docs.find((doc) => doc.slugAsParams === slug)

  return doc
}

const extractSegment = (str: string): string | null => {
  const segments = str.split("/")
  return segments.length === 4 ? goodTitle(segments[2]) : goodTitle(segments[1])
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const params = await props.params
  const doc = await getPostFromParams(params)

  if (!doc) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set("title", doc.title)

  return {
    title: doc.title,
    description: doc.description,
    applicationName: siteConfig.name,
    category: "Docs",
    keywords: [
      doc.title,
      `${doc.title} components`,
      `${doc.title} component`,
      `${doc.title} on React`,
      "React",
      "Next.js",
      "Inertia.js",
      "Tailwind CSS",
      "UI Components",
      "UI Kit",
      "UI Library",
      "UI Framework",
      "Justd",
      "React Aria",
      "React Aria Components",
      "Server Components",
      "React Components",
      "Next UI Components",
      "UI Design System",
      "UI for Laravel Inertia",
      "Justd Components",
      "Justd UI Components",
      "Justd UI Kit",
      "Justd UI Library",
      "Justd UI Framework",
      "Justd Laravel Inertia",
      "Justd Laravel",
      "Justd Inertia"
    ]
  }
}

export async function generateStaticParams(): Promise<{ slug: any }[]> {
  return docs.map((doc) => ({ slug: doc.slugAsParams.split("/") }))
}

export default async function PostPage(props: DocPageProps) {
  const params = await props.params
  const doc = await getPostFromParams(params)

  if (!doc || !doc.published) {
    notFound()
  }

  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto pt-16 pb-32 lg:max-w-none px-4 lg:pl-8 lg:pr-0 xl:px-12">
        <main className="prose prose-img:rounded-lg prose-pre:p-0 prose-headings:mb-[0.3rem] prose-headings:scroll-mt-24 prose-blue dark:prose-invert max-w-[inherit]">
          <div className="-mx-4 sm:mx-0">
            <div className="not-prose -mt-8 sm:mt-0 p-4 sm:p-10 sm:rounded-xl inset-shadow-xs ring-fg/5 dark:ring-fg/10 ring-1 sm:ring-inset relative isolate overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                  }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-15 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
              </div>
              <div className="font-mono text-xs uppercase text-blue-600 dark:text-blue-400">
                {extractSegment(doc.slug)}
              </div>
              <h1 className="font-semibold tracking-tight text-2xl mt-2 sm:text-3xl">{doc.title}</h1>
              {doc.description ? (
                <p className="text-base mt-2.5 leading-relaxed text-fg/60 text-pretty">{doc.description}</p>
              ) : null}

              {doc.references && doc.references?.length > 0 && <DocRefs references={doc.references} />}
            </div>
          </div>

          <TableOfContents className="mt-4 sm:mt-8 block xl:hidden" items={doc.toc} />
          <Mdx code={doc.body} />
          <Pager
            doc={{
              title: doc.title,
              slug: doc.slug,
              order: doc.order
            }}
            docs={docs
              .filter((doc) => doc.slug.startsWith("docs/components"))
              .map((doc) => ({ order: doc.order, slug: doc.slug, title: doc.title }))}
          />
        </main>
      </div>
      <TableOfContents className="hidden xl:block" items={doc.toc} />
    </>
  )
}
