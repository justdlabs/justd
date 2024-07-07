'use client'

import {
  TimeField as TimeFieldPrimitive,
  type TimeFieldProps as TimeFieldPrimitiveProps,
  type TimeValue,
  type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { DateInput } from './date-field'
import { Description, FieldError, fieldGroupStyles, Label } from './field'
import { ctr } from './primitive'

export interface TimeFieldProps<T extends TimeValue> extends TimeFieldPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const timeFieldStyles = tv({
  extend: fieldGroupStyles,
  base: 'flex w-fit font-mono min-w-28 justify-around whitespace-nowrap p-2 lg:text-sm'
})

export function TimeField<T extends TimeValue>({ label, description, errorMessage, ...props }: TimeFieldProps<T>) {
  return (
    <TimeFieldPrimitive {...props} className={ctr(props.className, 'flex flex-col gap-1')}>
      <Label>{label}</Label>
      <DateInput className={timeFieldStyles} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TimeFieldPrimitive>
  )
}
