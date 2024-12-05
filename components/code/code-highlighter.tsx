import React from "react"

import { cn } from "@/utils/classes"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export interface CodeHighlighterProps {
  plain?: boolean
  lang?: string
  code: string
  max96?: boolean
  className?: string
  removeLastLine?: boolean
}

export const CodeHighlighter = ({
  max96 = true,
  removeLastLine = false,
  plain = false,
  lang = "tsx",
  code,
  className,
  ...props
}: CodeHighlighterProps) => {
  const [loading, setLoading] = React.useState(false)
  const [formattedCode, setFormattedCode] = React.useState("")
  const [error, setError] = React.useState("")

  React.useEffect(() => {
    setLoading(true)
    const processCode = async () => {
      try {
        const file = await unified()
          .use(remarkParse)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypePrettyCode, {
            keepBackground: false,
            theme: "vesper",
            defaultLang: {
              block: lang,
              inline: "plaintext"
            }
          })
          .use(rehypeStringify, { allowDangerousHtml: true })
          .process(`\`\`\`${lang}\n${code}\n\`\`\``)
        setFormattedCode(String(file))
      } catch (err) {
        setError("Failed to process code. Please check the configuration.")
        console.error(err)
      }
    }

    processCode().then(() => setLoading(false))
  }, [code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return loading ? (
    <div className="text-sm font-mono tracking-tight px-4"> Loading...</div>
  ) : (
    <div
      {...props}
      className={cn(
        "not-prose overflow-auto text-sm font-mono",
        max96 && "max-h-96",
        !plain && "p-4 inset-ring-1 rounded-lg inset-ring-zinc-800 bg-(--shiki-bg)",
        removeLastLine && "**:data-rehype-pretty-code-figure:*:[pre]:*:[code]:*:data-line:last:hidden",
        className
      )}
      dangerouslySetInnerHTML={{ __html: formattedCode }}
    />
  )
}
