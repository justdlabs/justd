import type { TextProps } from 'react-aria-components'
import { Note, type NoteProps } from 'ui'

interface DocsNoteProps extends NoteProps {
  children: TextProps['children']
}

export function DocsNote({ intent, title, children }: DocsNoteProps) {
  return (
    <div className="not-prose">
      <Note intent={intent}>{children}</Note>
    </div>
  )
}
