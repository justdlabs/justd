import { Anatomy } from "@/components/code/anatomy"
import { CodeSandbox } from "@/components/code/code-sandbox"
import { EditorText } from "@/components/code/editor-text"
import { PlainCode } from "@/components/code/plain-code"
import { SourceCode } from "@/components/code/source-code"
import { DocComposed } from "@/components/doc-composed"
import { DocNote } from "@/components/doc-note"
import { DocWarningFramer } from "@/components/doc-warning-framer"
import type { InstallationProps } from "@/components/installation"
import { Installation } from "@/components/installation"
import { useMDXComponent } from "@/resources/hooks/use-mdx"
import Image from "next/image"
import { Link, type LinkProps } from "ui"

import { DocHow } from "./code/doc-how"

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <Component
      components={{
        EditorText: (props: React.ComponentProps<typeof EditorText>) => <EditorText {...props} />,
        CodeSandbox: (props: React.ComponentProps<typeof CodeSandbox>) => <CodeSandbox {...props} />,
        WarningFramer: DocWarningFramer,
        Installation: (props: InstallationProps) => <Installation {...props} />,
        Note: DocNote,
        Anatomy: Anatomy,
        Composed: DocComposed,
        Image,
        How: DocHow,
        a: (props: LinkProps) => (
          <Link
            intent="primary"
            {...props}
            className="not-prose xd2432 text-blue-600 dark:text-blue-400 xd2432 data-hovered:underline"
          />
        ),
        SourceCode: SourceCode,
        PlainCode: PlainCode,
        figure: (props: React.ComponentProps<"figure">) => (
          <figure
            className="*:[pre]:max-h-96 *:[pre]:p-4 *:[pre]:inset-ring-1 *:[pre]:rounded-lg *:[pre]:inset-ring-zinc-800 *:[pre]:bg-(--shiki-bg)"
            {...props}
          />
        )
        // Code: (props: CodeProps) => <Code className="[&_.dxcode]:top-2 [&_.dxcode]:right-2" {...props} />
      }}
    />
  )
}
