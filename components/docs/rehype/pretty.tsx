'use client'

import React, { useEffect, useState } from 'react'

import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

interface PrettyProps {
  code: string
  lang?: string
}

const Pretty: React.FC<PrettyProps> = ({ lang = 'tsx', code }) => {
  const [formattedCode, setFormattedCode] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const processCode = async () => {
      try {
        const file = await unified()
          .use(remarkParse)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypePrettyCode, {
            keepBackground: false,
            theme: 'vesper',
            defaultLang: {
              block: lang,
              inline: 'plaintext'
            }
          })
          .use(rehypeStringify, { allowDangerousHtml: true })
          .process(`\`\`\`${lang}\n${code}\n\`\`\``)
        setFormattedCode(String(file))
      } catch (err) {
        setError('Failed to process code. Please check the configuration.')
        console.error(err)
      }
    }

    processCode()
  }, [code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
}

export { Pretty }
