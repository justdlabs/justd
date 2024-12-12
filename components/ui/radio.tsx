"use client"

import type {
  RadioGroupProps as RadioGroupPrimitiveProps,
  RadioProps as RadioPrimitiveProps,
  ValidationResult
} from "react-aria-components"
import { Radio as RadioPrimitive, RadioGroup as RadioGroupPrimitive } from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, FieldError, Label } from "./field"
import { composeTailwindRenderProps } from "./primitive"

interface RadioGroupProps extends Omit<RadioGroupPrimitiveProps, "children"> {
  label?: string
  children?: React.ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const RadioGroup = ({ label, description, errorMessage, children, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive
      {...props}
      className={composeTailwindRenderProps(props.className, "group flex flex-col gap-2")}
    >
      {label && <Label>{label}</Label>}
      <div className="flex select-none gap-2 group-data-[orientation=horizontal]:flex-wrap group-data-[orientation=horizontal]:gap-2 sm:group-data-[orientation=horizontal]:gap-4 group-data-[orientation=vertical]:flex-col">
        {children}
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroupPrimitive>
  )
}

const radioStyles = tv({
  base: "size-4 shrink-0 rounded-full border bg-muted transition",
  variants: {
    isSelected: {
      false: "border-input",
      true: "border-[4.5px] border-primary"
    },
    isFocused: {
      true: [
        "border-ring bg-primary/20 ring-4 ring-primary/20",
        "group-data-invalid:border-danger/70 group-data-invalid:bg-danger/20 group-data-invalid:ring-danger/20"
      ]
    },
    isInvalid: {
      true: "border-danger/70 bg-danger/20"
    },
    isDisabled: {
      true: "opacity-50"
    }
  }
})

interface RadioProps extends RadioPrimitiveProps {
  description?: string
}

const Radio = ({ description, ...props }: RadioProps) => {
  return (
    <>
      <RadioPrimitive
        {...props}
        className={composeTailwindRenderProps(
          props.className,
          "group flex items-center gap-2 text-sm text-fg transition disabled:text-fg/50 forced-colors:data-disabled:text-[GrayText]"
        )}
      >
        {(renderProps) => (
          <div className="flex gap-2">
            <div
              className={radioStyles({
                ...renderProps,
                className: "description" in props ? "mt-1" : "mt-0.5"
              })}
            />
            <div className="flex flex-col gap-1">
              {props.children as React.ReactNode}
              {description && <Description className="block">{description}</Description>}
            </div>
          </div>
        )}
      </RadioPrimitive>
    </>
  )
}

export { Radio, RadioGroup, radioStyles }
