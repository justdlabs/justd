'use client'

import { IconCalendar } from '@irsyadadl/paranoid'
import {
  DatePicker as DatePickerPrimitive,
  type DatePickerProps as DatePickerPrimitiveProps,
  DateRangePicker as DateRangePickerPrimitive,
  type DateRangePickerProps as DateRangePickerPrimitiveProps,
  type DateValue,
  type ValidationResult
} from 'react-aria-components'
import { Dialog } from './dialog'

import { Button } from './button'
import { Calendar, RangeCalendar } from './calendar'
import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, Label } from './field'
import { PopoverContentPrimitive } from './popover'
import { ctr } from './primitive'

interface DatePickerProps<T extends DateValue> extends DatePickerPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function DatePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DatePickerProps<T>) {
  return (
    <DatePickerPrimitive {...props} className={ctr(props.className, 'group flex flex-col gap-1')}>
      {label && <Label>{label}</Label>}
      <FieldGroup className="min-w-40">
        <DateInput className="w-full px-2 font-mono uppercase min-w-[inherit] text-base lg:text-sm" />
        <Button
          size="square-petite"
          appearance="plain"
          className="group mr-1 h-7 w-8 rounded outline-offset-0 hover:bg-transparent pressed:bg-transparent"
        >
          <IconCalendar aria-hidden className="size-4 text-muted-fg group-open:text-fg" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <PopoverContentPrimitive className="rounded-xl border bg-popover">
        <Dialog>
          <Calendar />
        </Dialog>
      </PopoverContentPrimitive>
    </DatePickerPrimitive>
  )
}

interface DateRangePickerProps<T extends DateValue> extends DateRangePickerPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function DateRangePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DateRangePickerProps<T>) {
  return (
    <DateRangePickerPrimitive {...props} className={ctr(props.className, 'group flex flex-col gap-1')}>
      {label && <Label>{label}</Label>}
      <FieldGroup className="w-auto min-w-[208px]">
        <DateInput slot="start" className="px-2 lg:text-sm font-mono uppercase text-base min-w-[ineherit]" />
        <span
          aria-hidden="true"
          className="text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]"
        >
          –
        </span>
        <DateInput slot="end" className="flex-1 px-2 py-1.5 font-mono uppercase text-base lg:text-sm" />
        <Button
          size="square-petite"
          appearance="plain"
          className="group mr-1 h-7 w-8 rounded outline-offset-0 hover:bg-transparent pressed:bg-transparent"
        >
          <IconCalendar aria-hidden className="size-4 text-muted-fg group-open:text-fg" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <PopoverContentPrimitive className="rounded-xl border bg-popover">
        <Dialog>
          <RangeCalendar />
        </Dialog>
      </PopoverContentPrimitive>
    </DateRangePickerPrimitive>
  )
}

export {
  DatePicker,
  DateRangePicker,
  type DatePickerProps,
  type DateRangePickerProps,
  type DateValue,
  type ValidationResult
}
