import { cn } from "@/resources/lib/utils"
import type { TextProps } from "react-aria-components"
import { Note, type NoteProps } from "ui"

interface DocsNoteProps extends NoteProps {
  children: TextProps["children"]
}

export function DocNote({ intent = "info", children }: DocsNoteProps) {
  return (
    <div className="not-prose">
      <Note
        className={cn(
          "[&_span[data-line]]:font-medium",
          intent === "warning" &&
            "dark:[&_span[data-line]>span]:!text-amber-400 [&_span[data-line]>span]:!text-amber-950 [&_span[data-line]>span]:bg-amber-400/10 text-[0.6rem] [&_span[data-line]>span]:inline [&_span[data-line]>span]:rounded-sm [&_span[data-line]>span]:!px-1 [&_span[data-line]>span]:py-0.5",
          intent === "primary" &&
            "dark:[&_span[data-line]>span]:!text-primary-40 [&_span[data-line]>span]:!text-primary-600 [&_span[data-line]>span]:bg-primary-400/10 text-[0.6rem] [&_span[data-line]>span]:inline [&_span[data-line]>span]:rounded-sm [&_span[data-line]>span]:!px-1 [&_span[data-line]>span]:py-0.5"
        )}
        intent={intent}
      >
        {children}
      </Note>
    </div>
  )
}
