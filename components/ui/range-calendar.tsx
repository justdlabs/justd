"use client"

import type { DateValue, RangeCalendarProps as RangeCalendarPrimitiveProps } from "react-aria-components"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  RangeCalendar as RangeCalendarPrimitive,
  Text
} from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { tv } from "tailwind-variants"

import { Calendar } from "./calendar"
import { composeTailwindRenderProps, focusRing } from "./primitive"

const cellRangeStyles = tv({
  extend: focusRing,
  base: "flex h-full w-full items-center tabular-nums justify-center rounded-full forced-color-adjust-none",
  variants: {
    selectionState: {
      none: "group-data-hovered:bg-secondary-fg/15 group-data-pressed:bg-secondary-fg/20 forced-colors:group-data-pressed:bg-[Highlight]",
      middle: [
        "group-data-hovered:bg-subtle forced-colors:group-data-hovered:bg-[Highlight]",
        "group-data-pressed:bg-subtle forced-colors:text-[HighlightText] forced-colors:group-data-pressed:bg-[Highlight]",
        "group-data-invalid:group-data-pressed:bg-red-300 dark:group-data-invalid:group-data-pressed:bg-red-800 forced-colors:group-data-invalid:group-data-pressed:bg-[Mark]",
        "group-data-invalid:group-data-hovered:bg-red-200 group-data-invalid:text-red-500 dark:group-data-invalid:group-data-hovered:bg-red-900 forced-colors:group-data-invalid:group-data-hovered:bg-[Mark]"
      ],
      cap: "bg-primary text-primary-fg group-data-invalid:bg-danger group-data-invalid:text-danger-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:group-data-invalid:bg-[Mark]"
    },
    isDisabled: {
      true: "opacity-50 forced-colors:text-[GrayText]"
    }
  }
})

interface RangeCalendarProps<T extends DateValue> extends Omit<RangeCalendarPrimitiveProps<T>, "visibleDuration"> {
  errorMessage?: string
}

const RangeCalendar = <T extends DateValue>({ errorMessage, className, ...props }: RangeCalendarProps<T>) => {
  return (
    <RangeCalendarPrimitive
      className={composeTailwindRenderProps(className, "max-w-[17.5rem] sm:max-w-[15.8rem]")}
      {...props}
    >
      <Calendar.Header />
      <CalendarGrid className="[&_td]:border-collapse [&_td]:px-0">
        <Calendar.GridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={twJoin([
                "group size-10 lg:size-9 cursor-default lg:text-sm outline outline-0 outside-month:text-muted-fg data-selection-start:rounded-s-full data-selection-end:rounded-e-full",
                "data-selected:bg-subtle/70 dark:data-selected:bg-subtle/35 data-selected:text-subtle-fg",
                "[td:first-child_&]:rounded-s-full [td:last-child_&]:rounded-e-full",
                "data-invalid:data-selected:bg-red-100 dark:data-invalid:data-selected:bg-red-700/30",
                "forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText] forced-colors:data-invalid:data-selected:bg-[Mark]"
              ])}
            >
              {({ formattedDate, isSelected, isSelectionStart, isSelectionEnd, ...renderProps }) => (
                <span
                  className={cellRangeStyles({
                    ...renderProps,
                    selectionState:
                      isSelected && (isSelectionStart || isSelectionEnd) ? "cap" : isSelected ? "middle" : "none"
                  })}
                >
                  {formattedDate}
                </span>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-danger">
          {errorMessage}
        </Text>
      )}
    </RangeCalendarPrimitive>
  )
}

export { RangeCalendar }
