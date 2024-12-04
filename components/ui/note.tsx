import * as React from "react"

import { tv, type VariantProps } from "tailwind-variants"

const noteStyles = tv({
  base: [
    "my-4 px-4 leading-relaxed text-pretty text-sm py-4 leading-4 overflow-hidden rounded-lg inset-ring-1 inset-ring-current/10 [&_strong]:font-semibold",
    "**:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0 [&_a]:underline data-hovered:[&_a]:underline"
  ],
  variants: {
    intent: {
      default: [
        "border-border [&_a]:text-secondary-fg text-secondary-fg bg-secondary/50 **:data-[slot=icon]:text-secondary-fg",
        "dark:[&_a]:text-secondary-fg dark:**:data-[slot=icon]:text-secondary-fg"
      ],
      info: [
        "bg-sky-500/15 text-sky-700 group-data-[hover]:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-data-[hover]:bg-sky-500/20"
      ],
      warning:
        "bg-amber-400/20 text-amber-700 group-data-[hover]:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-data-[hover]:bg-amber-400/15",
      danger:
        "bg-red-500/15 text-red-700 group-data-[hover]:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-data-[hover]:bg-red-500/20",
      success: [
        "border-emerald-500/20 [&_a]:text-emerald-600 text-emerald-900 bg-emerald-50/50 **:data-[slot=icon]:text-emerald-600 leading-4",
        "dark:bg-emerald-500/10 dark:text-emerald-200 dark:[&_a]:text-emerald-50 dark:**:data-[slot=icon]:text-emerald-400"
      ]
    }
  },
  defaultVariants: {
    intent: "default"
  }
})

interface NoteProps extends React.HtmlHTMLAttributes<HTMLDivElement>, VariantProps<typeof noteStyles> {}

const Note = ({ intent, className, ...props }: NoteProps) => {
  return (
    <div className={noteStyles({ intent, className })} {...props}>
      {props.children}
    </div>
  )
}

export { Note, type NoteProps }
