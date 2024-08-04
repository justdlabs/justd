import { DocComposed } from '@/components/doc-composed'
import { DocNote } from '@/components/doc-note'
import type { CodeProps } from '@/components/docs/rehype/code'
import { Code } from '@/components/docs/rehype/code'
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
  type TableColumnProps,
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
            <Table aria-label="Table" {...props} />
          </Card>
        ),
        Note: DocNote,
        Composed: DocComposed,
        thead: TableHeader,
        tbody: TableBody,
        th: (props: TableColumnProps) => <TableColumn isRowHeader {...props} />,
        tr: TableRow,
        td: TableCell,
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
