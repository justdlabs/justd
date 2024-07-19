import { DocComposed } from '@/components/doc-composed'
import { DocNote } from '@/components/doc-note'
import type { DocSnippetProps } from '@/components/doc-snippet'
import { DocSnippet } from '@/components/doc-snippet'
import { PlainCode } from '@/components/docs/rehype/plain-code'
import { SourceCode } from '@/components/docs/rehype/source-code'
import type { InstallCommandProps } from '@/components/install-command'
import { InstallCommand } from '@/components/install-command'
import { useMDXComponent } from '@/lib/hooks/use-mdx'
import Image from 'next/image'
import {
  Card,
  Link,
  type LinkProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  type TableProps,
  TableRow
} from 'ui'

import { DocHow } from './doc-how'

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <Component
      components={{
        InstallCommand: (props: InstallCommandProps) => <InstallCommand {...props} />,
        table: (props: TableProps) => (
          <Card className="not-prose">
            <Table {...props} />
          </Card>
        ),
        Note: DocNote,
        Composed: DocComposed,
        thead: TableHeader,
        tbody: TableBody,
        th: TableColumn,
        tr: TableRow,
        td: TableCell,
        Image,
        How: DocHow,
        a: (props: LinkProps) => (
          <Link target="_blank" intent="primary" {...props} className="not-prose xd2432 font-medium hover:underline" />
        ),
        SourceCode: SourceCode,
        PlainCode: PlainCode,
        Snippet: (props: DocSnippetProps) => <DocSnippet {...props} />
      }}
    />
  )
}
