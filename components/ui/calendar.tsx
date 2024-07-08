'use client'

import { IconChevronLeft, IconChevronLgLeft, IconChevronRight } from '@irsyadadl/paranoid'
import {
  Calendar as AriaCalendar,
  CalendarGridHeader as AriaCalendarGridHeader,
  type CalendarProps as AriaCalendarProps,
  RangeCalendar as AriaRangeCalendar,
  type RangeCalendarProps as AriaRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  type DateValue,
  Heading,
  Text,
  useLocale
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Button } from './button'
import { focusRing } from './primitive'

const cellStyles = tv({
  extend: focusRing,
  base: 'flex size-9 cursor-default items-center justify-center rounded-full text-sm forced-color-adjust-none',
  variants: {
    isSelected: {
      false: 'text-fg hover:bg-gray-100 pressed:bg-gray-200 dark:hover:bg-zinc-700 dark:pressed:bg-zinc-600',
      true: 'bg-primary text-primary-fg invalid:bg-danger invalid:text-danger-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:invalid:bg-[Mark]'
    },
    isDisabled: {
      true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]'
    }
  }
})

interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string
}

function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>) {
  return (
    <AriaCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid>
        <CalendarGridHeader />
        <CalendarGridBody>{(date) => <CalendarCell date={date} className={cellStyles} />}</CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  )
}

function CalendarHeader() {
  const { direction } = useLocale()

  return (
    <header className="flex w-full items-center gap-1 px-1 pb-4">
      <Button size="square-petite" className="[&_[data-slot=icon]]:text-fg" appearance="outline" slot="previous">
        {direction === 'rtl' ? <IconChevronRight aria-hidden /> : <IconChevronLeft aria-hidden />}
      </Button>
      <Heading className="mx-2 flex-1 text-center text-base font-medium text-fg" />
      <Button size="square-petite" className="[&_[data-slot=icon]]:text-fg" appearance="outline" slot="next">
        {direction === 'rtl' ? <IconChevronLgLeft aria-hidden /> : <IconChevronRight aria-hidden />}
      </Button>
    </header>
  )
}

function CalendarGridHeader() {
  return (
    <AriaCalendarGridHeader>
      {(day) => <CalendarHeaderCell className="text-xs font-semibold text-gray-500">{day}</CalendarHeaderCell>}
    </AriaCalendarGridHeader>
  )
}

interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string
}

const cell = tv({
  extend: focusRing,
  base: 'flex h-full w-full items-center justify-center rounded-full text-zinc-900 forced-color-adjust-none dark:text-zinc-200',
  variants: {
    selectionState: {
      none: 'group-hover:bg-gray-100 group-pressed:bg-gray-200 dark:group-hover:bg-zinc-700 dark:group-pressed:bg-zinc-600',
      middle: [
        'group-hover:bg-primary-200 dark:group-hover:bg-primary-900 forced-colors:group-hover:bg-[Highlight]',
        'group-invalid:group-hover:bg-red-200 dark:group-invalid:group-hover:bg-red-900 forced-colors:group-invalid:group-hover:bg-[Mark]',
        'group-pressed:bg-primary-300 dark:group-pressed:bg-primary-800 forced-colors:text-[HighlightText] forced-colors:group-pressed:bg-[Highlight]',
        'group-invalid:group-pressed:bg-red-300 dark:group-invalid:group-pressed:bg-red-800 forced-colors:group-invalid:group-pressed:bg-[Mark]'
      ],
      cap: 'bg-primary text-primary-fg group-invalid:bg-danger group-invalid:text-danger-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:group-invalid:bg-[Mark]'
    },
    isDisabled: {
      true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]'
    }
  }
})

function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: RangeCalendarProps<T>) {
  return (
    <AriaRangeCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid className="[&_td]:px-0">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className="group size-9 cursor-default text-sm outline outline-0 outside-month:text-gray-300 selected:bg-primary-100 invalid:selected:bg-red-100 selection-start:rounded-s-full selection-end:rounded-e-full dark:selected:bg-primary-700/30 dark:invalid:selected:bg-red-700/30 forced-colors:selected:bg-[Highlight] forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full [td:last-child_&]:rounded-e-full"
            >
              {({ formattedDate, isSelected, isSelectionStart, isSelectionEnd, isDisabled }) => (
                <span
                  className={cell({
                    selectionState:
                      isSelected && (isSelectionStart || isSelectionEnd) ? 'cap' : isSelected ? 'middle' : 'none',
                    isDisabled
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
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  )
}

export { Calendar, CalendarGridHeader, CalendarHeader, RangeCalendar, type RangeCalendarProps }
