import type { TextProps } from 'react-aria-components'
import { Note, NoteDescription, type NoteProps, NoteTitle } from 'ui'

interface DocsNoteProps extends NoteProps {
  children: TextProps['children']
}

export function DocsNote({ intent, title, children }: DocsNoteProps) {
  return (
    <div className="not-prose">
      <Note intent={intent}>
        <NoteTitle>{title}</NoteTitle>
        <NoteDescription>{children}</NoteDescription>
      </Note>
    </div>
  )
}
