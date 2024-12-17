import { Note } from "ui"

const notes = ["info", "default", "warning", "danger", "success"] as const

export default function NoteIntentDemo() {
  return (
    <div className="space-y-2 max-w-md">
      {notes.map((it) => (
        <Note key={it} intent={it}>
          We hook you up with top-tier migration services in our startup plan. Wanna roll with it?
          Hit us up here.
        </Note>
      ))}
    </div>
  )
}
