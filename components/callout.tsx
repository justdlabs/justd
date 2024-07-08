import { Note, NoteDescription, NoteTitle } from 'ui'

interface CalloutProps {
  icon?: string
  title?: string
  children?: React.ReactNode
}

export function Callout({ title, children, icon, ...props }: CalloutProps) {
  return (
    <Note {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <NoteTitle>{title}</NoteTitle>}
      <NoteDescription>{children}</NoteDescription>
    </Note>
  )
}
