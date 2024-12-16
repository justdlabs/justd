import { DocComposed } from "@/components/doc-composed"
import { DocNote } from "@/components/doc-note"
import { Anatomy } from "@/components/docs/rehype/anatomy"
import type { CodeProps } from "@/components/docs/rehype/code"
import { Code } from "@/components/docs/rehype/code"
import { PlainCode } from "@/components/docs/rehype/plain-code"
import { SourceCode } from "@/components/docs/rehype/source-code"
import type { InstallationProps } from "@/components/installation"
import { Installation } from "@/components/installation"
import { useMDXComponent } from "@/resources/hooks/use-mdx"
import Image from "next/image"
import { Link, type LinkProps } from "ui"

import { DocHow } from "./doc-how"

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <Component
      components={{
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
            className="not-prose xd2432 font-medium hover:underline"
          />
        ),
        SourceCode: SourceCode,
        PlainCode: PlainCode,
        Code: (props: CodeProps) => (
          <Code className="[&_.dxcode]:top-2 [&_.dxcode]:right-2" {...props} />
        )
      }}
    />
  )
}
