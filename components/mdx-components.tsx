import { DocInstallation } from '@/components/doc-installation'
import { PlainCode } from '@/components/docs/rehype/plain-code'
import { SourceCode } from '@/components/docs/rehype/source-code'
import { useMDXComponent } from '@/lib/hooks/use-mdx'
import Image from 'next/image'
import type { LinkProps } from 'react-aria-components'
import { Link, Snippet, type SnippetProps } from 'ui'

import { DocHow } from './doc-how'

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return (
        <Component
            components={{
                Image,
                Install: DocInstallation,
                How: DocHow,
                a: (props: LinkProps) => (
                    <Link
                        target='_blank'
                        {...props}
                        className='not-prose font-medium text-accent hover:underline'
                    />
                ),
                SourceCode: SourceCode,
                PlainCode: PlainCode,
                Snippet: (props: SnippetProps) => (
                    <Snippet {...props} className='bg-[#0e0e10] text-white' />
                )
            }}
        />
    )
}
