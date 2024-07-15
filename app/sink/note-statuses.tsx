import { CardSink } from '@/app/sink/card-sink'
import { Note, NoteDescription, NoteTitle } from 'ui'

export function NoteStatuses() {
  return (
    <CardSink>
      <Note intent="success">
        <NoteTitle>New Feature</NoteTitle>
        <NoteDescription>
          Check out the new dark mode feature available in your settings.
        </NoteDescription>
      </Note>
    </CardSink>
  )
}
