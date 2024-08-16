"use client"

import {
  DateField as DateFieldPrimitive,
  type DateFieldProps as DateFieldPrimitiveProps,
  DateInput as DateInputPrimitive,
  type DateInputProps,
  DateSegment,
  type DateValue,
  type ValidationResult
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, FieldError, fieldGroupStyles, Label } from "./field"
import { cn, cr, ctr } from "./primitive"

interface DateFieldProps<T extends DateValue> extends DateFieldPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const DateField = <T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) => {
  return (
    <DateFieldPrimitive {...props} className={ctr(props.className, "flex flex-col gap-1")}>
      {label && <Label>{label}</Label>}
      <DateInput />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </DateFieldPrimitive>
  )
}

const segmentStyles = tv({
  base: "inline shrink-0 rounded p-0.5 tracking-wider text-fg caret-transparent outline outline-0 forced-color-adjust-none type-literal:px-0 lg:text-sm forced-colors:text-[ButtonText]",
  variants: {
    isPlaceholder: {
      true: "text-muted-fg"
    },
    isDisabled: {
      true: "text-fg/50 forced-colors:text-[GrayText]"
    },
    isFocused: {
      true: [
        "bg-primary text-primary-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
        "invalid:bg-danger invalid:text-danger-fg"
      ]
    }
  }
})

const DateInput = (props: Omit<DateInputProps, "children">) => {
  return (
    <DateInputPrimitive
      className={cr(props.className, (className, renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          className: cn(
            "min-w-sm block font-mono disabled:bg-secondary uppercase w-full py-2 px-2.5 text-base lg:text-sm/[1.4rem]",
            className
          )
        })
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </DateInputPrimitive>
  )
}

export { DateField, DateInput, segmentStyles, type DateFieldProps }
