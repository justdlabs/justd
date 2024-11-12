"use client"

import * as React from "react"

import type {
  FieldErrorProps,
  GroupProps,
  InputProps,
  LabelProps,
  TextFieldProps as TextFieldPrimitiveProps,
  TextProps,
  ValidationResult
} from "react-aria-components"
import {
  FieldError as FieldErrorPrimitive,
  Group,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  Text
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cr, ctr } from "./primitive"

interface FieldProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  "aria-label"?: TextFieldPrimitiveProps["aria-label"]
  "aria-labelledby"?: TextFieldPrimitiveProps["aria-labelledby"]
}

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
    "has-[[data-slot=prefix]]:-mx-0.5 has-[[data-slot=suffix]]:-mx-0.5",
    "[&_button]:h-8 [&_button]:rounded-md [&_button]:px-2.5 [&_button]:before:rounded-[calc(theme(borderRadius.md)-1px)] [&_button]:after:rounded-[calc(theme(borderRadius.md)-1px)] dark:[&_button]:after:rounded-md",
    "[&>[role=progressbar]]:mr-2.5 [&>[data-slot=prefix]]:ml-2.5 [&>[data-slot=prefix]]:text-muted-fg [&>[data-slot=prefix]>button]:ml-[-7px]",
    "[&>[data-slot=suffix]]:mr-2.5 [&>[data-slot=suffix]]:text-muted-fg [&>[data-slot=suffix]>button]:mr-[-7px]"
  ]
})

const fieldStyles = tv({
  slots: {
    description: "text-pretty text-base/6 text-muted-fg sm:text-sm/6",
    label: "w-fit cursor-default font-medium text-secondary-fg text-sm",
    fieldError: "text-sm/6 text-danger forced-colors:text-[Mark]",
    input: [
      "w-full min-w-0 [&::-ms-reveal]:hidden bg-transparent py-2 px-2.5 text-base text-fg placeholder-muted-fg outline-none focus:outline-none lg:text-sm"
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
    "group [&>[data-slot=icon]]:shrink-0 flex h-10 items-center overflow-hidden rounded-lg border border-input bg-bg transition forced-colors:bg-[Field]"
  ],
  variants: {
    isDisabled: {
      true: "opacity-50 bg-secondary"
    },
    isInvalid: {
      false: "focus-within:border-ring/85 focus-within:ring-4 focus-within:ring-ring/20",
      true: "border-danger focus-within:border-danger focus-within:ring-4 focus-within:ring-danger/20"
    }
  }
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
