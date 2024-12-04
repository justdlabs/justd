import { IconTriangleInfo } from "justd-icons"
import { Note } from "ui"

export default function NoteVisualDemo() {
  return (
    <Note className="flex gap-x-1 items-center" intent="warning">
      <IconTriangleInfo />
      Your account is not safe!
    </Note>
  )
}
