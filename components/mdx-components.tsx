import { Install } from '@/components/docs/install'
import { PlainCode } from '@/components/docs/rehype/plain-code'
import { SourceCode } from '@/components/docs/rehype/source-code'
import { useMDXComponent } from '@/lib/hooks/use-mdx'
import Image from 'next/image'
import { Snippet, type SnippetProps } from 'ui'
import { How } from './docs/how'

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <Component
      components={{
        Image,
        Install: Install,
        How: How,
        // pre: SourceCode,
        SourceCode: SourceCode,
        PlainCode: PlainCode,
        Snippet: (props: SnippetProps) => <Snippet {...props} className='bg-[#0e0e10] text-white' />
      }}
    />
  )
}
