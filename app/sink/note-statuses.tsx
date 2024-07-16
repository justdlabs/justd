import { CardSink } from '@/app/sink/card-sink'
import { Note } from 'ui'

export function NoteStatuses() {
  return (
    <CardSink>
      <Note intent="success">
        Check out the new dark mode feature available in your settings.
      </Note>
    </CardSink>
  )
}
