import { Mdx } from "@/components/mdx-components"
import { TableOfContents } from "@/components/table-of-contents"
import { siteConfig } from "@/resources/config/site"
import { goodTitle } from "@/resources/lib/utils"
import dayjs from "dayjs"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blog } from "#site/content"

export interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/")
  const article = blog.find((article) => article.slugAsParams === slug)

  return article
}

const extractSegment = (str: string): string | null => {
  const segments = str.split("/")
  return segments.length === 4 ? goodTitle(segments[2]) : goodTitle(segments[1])
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const params = await props.params
  const article = await getPostFromParams(params)

  if (!article) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set("title", article.title)

  return {
    title: article.title,
    description: article.description,
    applicationName: siteConfig.name,
    category: "Blog",
    keywords: [
      article.title,
      `${article.title} components`,
      `${article.title} component`,
      `${article.title} on React`,
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
      "Justd Inertia",
    ],
  }
}

export async function generateStaticParams(): Promise<{ slug: any }[]> {
  return blog.map((article) => ({ slug: article.slugAsParams.split("/") }))
}

export default async function PostPage(props: DocPageProps) {
  const params = await props.params
  const article = await getPostFromParams(params)

  if (!article || !article.published) {
    notFound()
  }

  return (
    <>
      <div className="flex-auto px-4 pt-16 pb-32 min-w-0 max-w-2xl lg:pr-0 lg:pl-8 lg:max-w-none xl:px-12">
        <main className="prose prose-blue prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0 dark:prose-invert">
          <div className="-mx-4 sm:mx-0">
            <div className="overflow-hidden relative p-4 -mt-8 ring-1 sm:p-10 sm:mt-0 sm:rounded-xl sm:ring-inset not-prose inset-shadow-xs isolate ring-fg/5 dark:ring-fg/10">
              <div
                aria-hidden="true"
                className="overflow-hidden absolute inset-x-0 -top-40 transform-gpu sm:-top-80 -z-10 blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="-translate-x-1/2 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-20"
                />
              </div>
              <div className="font-mono text-xs text-blue-600 uppercase dark:text-blue-400">
                {dayjs(article.published).format("MMMM D, YYYY")}
              </div>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {article.title}
              </h1>
              {article.description ? (
                <p className="mt-2.5 text-base leading-relaxed text-pretty text-fg/60">
                  {article.description}
                </p>
              ) : null}
            </div>
          </div>

          <TableOfContents className="block mt-4 sm:mt-8 xl:hidden" items={article.toc} />
          <Mdx code={article.body} />
        </main>
      </div>
      <TableOfContents className="hidden xl:block" items={article.toc} />
    </>
  )
}
