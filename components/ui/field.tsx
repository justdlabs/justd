"use client"

import * as React from "react"

import {
  FieldError as FieldErrorPrimitive,
  type FieldErrorProps,
  Group,
  type GroupProps,
  Input as InputPrimitive,
  type InputProps,
  Label as LabelPrimitive,
  type LabelProps,
  Text,
  type TextFieldProps as TextFieldPrimitiveProps,
  type TextProps,
  type ValidationResult
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cr, ctr } from "./primitive"

// primitive styles

interface FieldProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  "aria-label"?: TextFieldPrimitiveProps["aria-label"]
  "aria-labelledby"?: TextFieldPrimitiveProps["aria-labelledby"]
}

// primitive styles
const fieldBorderStyles = tv({
  base: "group-focus-within:border-ring/85 forced-colors:border-[Highlight]",
  variants: {
    isInvalid: {
      true: "border-danger/70 group-focus-within:border-danger/70 forced-colors:border-[Mark]"
    }
  }
})

const fieldGroupPrefixStyles = tv({
  base: [
    "flex group-invalid:border-danger group-disabled:bg-secondary group-disabled:opacity-50 items-center group-invalid:focus-within:ring-danger/20",
    "[&>.x2e2>.kbt32x]:size-7 [&>.x2e2>.kbt32x]:rounded-sm [&>.x2e2:has(.kbt32x)]:size-9 [&>.x2e2:has(.kbt32x)]:grid [&>.x2e2:has(.kbt32x)]:place-items-center",
    "[&>.x2e2>.kbt32x]:before:rounded-[calc(theme(borderRadius.sm)-1px)] [&>.x2e2>.kbt32x]:after:rounded-[calc(theme(borderRadius.sm)-1px)] dark:[&>.x2e2>.kbt32x]:after:rounded-sm",
    "[&>.isSfx:has(.kbt32x)]:-mr-2 [&>.isPfx:has(.kbt32x)]:-ml-2 [&>.isSfx>.kbt32x]:mr-0.5 [&>.isPfx>.kbt32x]:ml-0.5"
  ]
})

const fieldStyles = tv({
  slots: {
    description: "text-pretty text-base/6 text-muted-fg sm:text-sm/6",
    label: "w-fit cursor-default font-medium text-secondary-fg text-sm",
    fieldError: "text-sm text-danger forced-colors:text-[Mark]",
    input: [
      "w-full min-w-0 bg-transparent p-2 text-base text-fg placeholder-muted-fg outline-none focus:outline-none lg:text-sm"
    ]
  }
})

const { description, label, fieldError, input } = fieldStyles()

const Label = ({ className, ...props }: LabelProps) => {
  return <LabelPrimitive {...props} className={label({ className })} />
}

interface DescriptionProps extends TextProps {
  isWarning?: boolean
}

const Description = ({ className, ...props }: DescriptionProps) => {
  const isWarning = props.isWarning ?? false
  return (
    <Text
      {...props}
      slot="description"
      className={description({ className: isWarning ? "text-warning" : className })}
    />
  )
}

const FieldError = ({ className, ...props }: FieldErrorProps) => {
  return <FieldErrorPrimitive {...props} className={ctr(className, fieldError())} />
}

const fieldGroupStyles = tv({
  base: [
    "group flex h-10 items-center overflow-hidden rounded-lg border border-input bg-bg transition disabled:opacity-50 disabled:bg-secondary forced-colors:bg-[Field]",
    "focus-within:border-ring/85 focus-within:ring-4 focus-within:ring-ring/20",
    "focus-within:invalid:border-danger focus-within:invalid:ring-4 focus-within:invalid:ring-danger/20",
    "invalid:border-danger",
    "has-[.isPfx]:pl-2.5 has-[.isSfx]:pr-2.5 [&_[data-slot=icon]]:size-4 has-[.atrs]:shrink-0 has-[.atrs]:text-muted-fg"
  ]
})

const FieldGroup = ({ className, ...props }: GroupProps) => {
  return (
    <Group
      {...props}
      className={cr(className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className })
      )}
    />
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <InputPrimitive ref={ref} {...props} className={ctr(className, input())} />
})
Input.displayName = "Input"

export {
  Description,
  fieldBorderStyles,
  FieldError,
  FieldGroup,
  fieldGroupPrefixStyles,
  fieldGroupStyles,
  Input,
  InputPrimitive,
  Label,
  type FieldProps
}
