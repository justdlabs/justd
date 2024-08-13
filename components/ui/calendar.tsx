'use client'

import { IconChevronLgLeft, IconChevronLgRight } from 'justd-icons'
import {
  Calendar as CalendarPrimitive,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarHeaderCell,
  type CalendarProps as CalendarPrimitiveProps,
  composeRenderProps,
  type DateValue,
  Heading,
  Text,
  useLocale
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Button } from './button'
import { ctr, focusRing } from './primitive'

const cellStyles = tv({
  extend: focusRing,
  base: 'flex size-10 sm:size-9 cursor-default items-center justify-center font-medium rounded-full lg:text-sm forced-color-adjust-none',
  variants: {
    isSelected: {
      false:
        'text-fg hover:bg-zinc-100 pressed:bg-zinc-200 dark:hover:bg-zinc-700 dark:pressed:bg-zinc-600',
      true: 'bg-primary text-primary-fg invalid:bg-danger invalid:text-danger-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:invalid:bg-[Mark]'
    },
    isDisabled: {
      true: 'text-zinc-400 dark:text-zinc-600 forced-colors:text-[GrayText]'
    }
  }
})

interface CalendarProps<T extends DateValue>
  extends Omit<CalendarPrimitiveProps<T>, 'visibleDuration'> {
  errorMessage?: string
  className?: string
}

const Calendar = <T extends DateValue>({ errorMessage, className, ...props }: CalendarProps<T>) => {
  return (
    <CalendarPrimitive className={ctr(className, 'max-w-[17.5rem] sm:max-w-[15.8rem]')} {...props}>
      <CalendarHeader />
      <CalendarGrid className="[&_td]:border-collapse [&_td]:px-0">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={composeRenderProps(className, (className, renderProps) =>
                cellStyles({
                  ...renderProps,
                  className
                })
              )}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </CalendarPrimitive>
  )
}

const calendarHeaderStyles = tv({
  slots: {
    base: 'flex w-full justify-center items-center gap-1 px-1 pb-5 sm:pb-4',
    heading: 'mx-2 flex-1 text-center text-base font-medium text-fg',
    calendarGridHeaderCell: 'text-sm lg:text-xs font-semibold text-muted-fg'
  }
})

const { base, heading, calendarGridHeaderCell } = calendarHeaderStyles()

const CalendarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { direction } = useLocale()

  return (
    <header className={base({ className })} {...props}>
      <Button
        size="square-petite"
        className="[&_[data-slot=icon]]:text-fg"
        appearance="outline"
        slot="previous"
      >
        {direction === 'rtl' ? <IconChevronLgRight /> : <IconChevronLgLeft aria-hidden />}
      </Button>
      <Heading className={heading()} />
      <Button
        size="square-petite"
        className="[&_[data-slot=icon]]:text-fg"
        appearance="outline"
        slot="next"
      >
        {direction === 'rtl' ? <IconChevronLgLeft /> : <IconChevronLgRight />}
      </Button>
    </header>
  )
}

const CalendarGridHeader = () => {
  return (
    <CalendarGridHeaderPrimitive>
      {(day) => <CalendarHeaderCell className={calendarGridHeaderCell()}>{day}</CalendarHeaderCell>}
    </CalendarGridHeaderPrimitive>
  )
}

Calendar.Header = CalendarHeader
Calendar.GridHeader = CalendarGridHeader
export { Calendar }
