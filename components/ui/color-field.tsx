'use client'

import * as React from 'react'

import type {
  ColorFieldProps as ColorFieldPrimitiveProps,
  ValidationResult
} from 'react-aria-components'
import { ColorField as ColorFieldPrimitive } from 'react-aria-components'

import { ColorPicker } from './color-picker'
import { ColorSwatch } from './color-swatch'
import { Description, FieldError, FieldGroup, fieldGroupPrefixStyles, Input, Label } from './field'
import { ctr } from './primitive'

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
      aria-label={props['aria-label'] ?? 'Color field'}
      className={ctr(
        className,
        '[&_[data-slot=color-swatch]]:ml-2 group w-full flex flex-col gap-y-1'
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup
        data-loading={isLoading ? 'true' : undefined}
        className={fieldGroupPrefixStyles()}
      >
        {prefix ? <span className="atrs isPfx">{prefix}</span> : null}
        <div className="flex items-center">
          {value && (
            <span>
              {enableColorPicker ? (
                <ColorPicker onChange={props.onChange} defaultValue={value} />
              ) : (
                <ColorSwatch className="size-6" color={value.toString('hex')} />
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
