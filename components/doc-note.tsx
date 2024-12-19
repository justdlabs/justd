import { cn } from "@/utils/classes"
import type { TextProps } from "react-aria-components"
import { Note, type NoteProps } from "ui"

interface DocsNoteProps extends NoteProps {
  children: TextProps["children"]
}

export function DocNote({ intent = "info", children }: DocsNoteProps) {
  return (
    <div className="mt-4 not-prose">
      <Note
        className={cn(
          "[&_span[data-line]]:font-medium p-4 sm:p-6 **:data-[slot=icon]:size-7 **:data-[slot=icon]:mr-3 sm:**:data-[slot=icon]:mr-4 **:data-[slot=icon]:mt-2",
          intent === "warning" &&
            "text-[0.6rem] [&_span[data-line]>span]:inline [&_span[data-line]>span]:rounded-sm [&_span[data-line]>span]:bg-amber-400/10 [&_span[data-line]>span]:px-1! [&_span[data-line]>span]:py-0.5 [&_span[data-line]>span]:text-amber-950! dark:[&_span[data-line]>span]:text-amber-400!",
          "[&_a]:font-semibold dark:[&_a]:text-sky-400 dark:[&_a]:text-sky-600",
        )}
        intent={intent}
      >
        {children}
      </Note>
    </div>
  )
}
