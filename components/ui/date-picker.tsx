'use client'

import * as React from 'react'

import { IconCalendarDays } from '@irsyadadl/paranoid'
import {
  DatePicker as DatePickerPrimitive,
  type DatePickerProps as DatePickerPrimitiveProps,
  type DateValue,
  type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Button } from './button'
import { Calendar, RangeCalendar } from './calendar'
import { DateInput } from './date-field'
import { Dialog } from './dialog'
import type { DynamicOverlayProps } from './dynamic-overlay'
import { DynamicOverlay } from './dynamic-overlay'
import { Description, FieldError, FieldGroup, Label } from './field'
import { ctr } from './primitive'

const datePickerStyles = tv({
  slots: {
    base: 'group flex flex-col gap-1',
    dynamicOverlay: 'min-w-full grid p-0 overflow-hidden sm:w-fit sm:min-w-fit',
    datePickerIcon:
      'group mr-1 h-7 dark:[&>[data-slot=icon]]:text-zinc-400 [&>[data-slot=icon]]:text-zinc-800 w-8 rounded outline-offset-0 hover:bg-transparent pressed:bg-transparent',
    calendarIcon: 'size-4 text-muted-fg group-open:text-fg',
    datePickerInput: 'w-full px-2 font-mono uppercase text-base lg:text-sm',
    dateRangePickerInputStart: 'px-2 lg:text-sm font-mono uppercase text-base',
    dateRangePickerInputEnd: 'flex-1 px-2 py-1.5 font-mono uppercase text-base lg:text-sm',
    dateRangePickerDash:
      'text-zinc-800 group-disabled:text-zinc-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]'
  }
})

const { base, dynamicOverlay, datePickerIcon, calendarIcon, datePickerInput } = datePickerStyles()

interface DatePickerOverlayProps extends DynamicOverlayProps {
  range?: boolean
}

const DatePickerOverlay = ({ range, ...props }: DatePickerOverlayProps) => {
  return (
    <DynamicOverlay {...props} className={dynamicOverlay()}>
      <Dialog>{range ? <RangeCalendar /> : <Calendar />}</Dialog>
    </DynamicOverlay>
  )
}

const DatePickerIcon = () => (
  <Button size="square-petite" appearance="plain" className={datePickerIcon()}>
    <IconCalendarDays aria-hidden className={calendarIcon()} />
  </Button>
)

interface DatePickerProps<T extends DateValue> extends DatePickerPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const DatePicker = <T extends DateValue>({
  label,
  className,
  description,
  children,
  errorMessage,
  ...props
}: DatePickerProps<T>) => {
  return (
    <DatePickerPrimitive {...props} className={ctr(className, base())}>
      {label && <Label>{label}</Label>}
      <FieldGroup className="min-w-40">
        <DateInput className={datePickerInput()} />
        <DatePickerIcon />
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <DatePickerOverlay />
    </DatePickerPrimitive>
  )
}

export {
  DatePicker,
  DatePickerIcon,
  DatePickerOverlay,
  type DatePickerProps,
  type DateValue,
  type ValidationResult
}
