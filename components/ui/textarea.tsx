'use client'

import {
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
  TextFieldProps as TextFieldPrimitiveProps,
  ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Description, FieldError, Label } from './field'
import { ctr, focusStyles } from './primitive'

export interface TextareaProps extends TextFieldPrimitiveProps {
  autoSize?: boolean
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const textAriaStyles = tv({
  extend: focusStyles,
  base: 'w-full min-w-0 rounded-md border border-input bg-background px-2.5 py-2 text-base shadow-sm outline-none transition duration-200 disabled:bg-secondary disabled:opacity-50 sm:text-sm'
})

export function Textarea({ placeholder, label, description, errorMessage, ...props }: TextareaProps) {
  return (
    <TextFieldPrimitive {...props} className={ctr(props.className, 'group flex flex-col gap-1')}>
      {label && <Label>{label}</Label>}
      <TextAreaPrimitive placeholder={placeholder} className={textAriaStyles} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}
