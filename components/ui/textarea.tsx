"use client"

import * as React from "react"

import {
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
  type ValidationResult
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, FieldError, Label } from "./field"
import { cr, ctr, focusStyles } from "./primitive"

const textareaStyles = tv({
  extend: focusStyles,
  base: "w-full min-w-0 rounded-md border border-input bg-bg px-2.5 py-2 text-base shadow-sm outline-none transition duration-200 disabled:bg-secondary disabled:opacity-50 sm:text-sm"
})

interface TextareaProps extends TextFieldPrimitiveProps {
  autoSize?: boolean
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  className?: string
}

const Textarea = ({
  className,
  placeholder,
  label,
  description,
  errorMessage,
  ...props
}: TextareaProps) => {
  return (
    <TextFieldPrimitive {...props} className={ctr(className, "group flex flex-col gap-1")}>
      {label && <Label>{label}</Label>}
      <TextAreaPrimitive
        placeholder={placeholder}
        className={cr(className, (className, renderProps) =>
          textareaStyles({
            ...renderProps,
            className
          })
        )}
      />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}

export { Textarea, type TextareaProps }
