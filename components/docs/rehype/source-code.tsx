"use client"

import * as React from "react"

import jsonPreviews from "@/components/docs/generated/previews.json"
import { CodeCollapsible, CodeCollapsibleRoot } from "@/components/docs/rehype/code"

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  toShow: string
  message?: string
  title?: string
  ext?: string
}

export function SourceCode({ title, message, ext = "tsx", toShow, ...props }: SourceCodeProps) {
  const [codeString, setCodeString] = React.useState<{ name: string; code: string } | null>(null)
  const [isOpened, setIsOpened] = React.useState<boolean>(false)

  React.useEffect(() => {
    // @ts-expect-error
    const componentData = jsonPreviews[toShow]
    if (componentData) {
      setCodeString({
        name: toShow,
        code: componentData.raw.replace(
          /export default function \w+\(\) \{/g,
          "export default function App() {"
        )
      })
    } else {
      console.error("Component not found:", toShow)
      setCodeString(null)
    }
  }, [toShow])

  const handleOpenChange = (open: boolean) => {
    setIsOpened(open)
  }

  if (codeString) {
    return (
      <section {...props} className="my-6 not-prose">
        <p className="mb-4 -mt-2">
          {message
            ? message
            : "And next, you can copy the code below and paste it into your component folder."}
        </p>
        {title && <figcaption data-rehype-pretty-code-title="">{title}</figcaption>}
        <CodeCollapsibleRoot>
          <CodeCollapsible
            lang={ext}
            isOpened={isOpened}
            onOpenChange={handleOpenChange}
            code={codeString.code}
            withImportCopy={false}
          />
        </CodeCollapsibleRoot>
      </section>
    )
  }

  return null
}
