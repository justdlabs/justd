"use client"

import * as React from "react"

import type {
  ColorFieldProps as ColorFieldPrimitiveProps,
  ValidationResult
} from "react-aria-components"
import { ColorField as ColorFieldPrimitive } from "react-aria-components"

import { ColorSwatch } from "./color"
import { ColorPicker } from "./color-picker"
import { Description, FieldError, FieldGroup, fieldGroupPrefixStyles, Input, Label } from "./field"
import { ctr } from "./primitive"

interface ColorFieldProps extends ColorFieldPrimitiveProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  isLoading?: boolean
  enableColorPicker?: boolean
}

const ColorField = ({
  label,
  description,
  errorMessage,
  placeholder,
  prefix,
  suffix,
  isLoading,
  enableColorPicker = true,
  className,
  ...props
}: ColorFieldProps) => {
  const value = props.value ?? props.defaultValue
  return (
    <ColorFieldPrimitive
      {...props}
      aria-label={props["aria-label"] ?? "Color field"}
      className={ctr(className, "group w-full flex flex-col gap-1")}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup
        data-loading={isLoading ? "true" : undefined}
        className={fieldGroupPrefixStyles()}
      >
        {prefix ? <span className="atrs isPfx">{prefix}</span> : null}
        <div className="flex items-center">
          {value && (
            <span>
              {enableColorPicker ? (
                <ColorPicker
                  enableColorField={false}
                  onChange={props.onChange}
                  defaultValue={value}
                  className="size-9 [&_.tcf]:size-9"
                  trigger="color-field"
                />
              ) : (
                <ColorSwatch className="size-6 ml-2" color={value.toString()} />
              )}
            </span>
          )}

          <Input className="px-2.5" placeholder={placeholder} />
        </div>
        {suffix ? <span className="atrs ml-auto isSfx">{suffix}</span> : null}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </ColorFieldPrimitive>
  )
}

export { ColorField }
