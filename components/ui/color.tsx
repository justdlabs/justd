'use client'

import { ctr } from '@/components/ui/primitive'
import * as React from 'react'
import {
  ColorArea as ColorAreaPrimitive,
  type ColorAreaProps as ColorAreaPrimitiveProps,
  ColorField as ColorFieldPrimitive,
  type ColorFieldProps as ColorFieldPrimitiveProps,
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerProps as ColorPickerPrimitiveProps,
  ColorThumb as ColorThumbPrimitive,
  type ColorThumbProps as ColorThumbPrimitiveProps,
  ColorWheel as ColorWheelPrimitive,
  type ColorWheelProps as ColorWheelPrimitiveProps,
  ColorWheelTrack as ColorWheelTrackPrimitive,
  type ColorWheelTrackProps as ColorWheelTrackPrimitiveProps,
  composeRenderProps,
  type ValidationResult
} from 'react-aria-components'

import { tv } from 'tailwind-variants'
import { Description, FieldError, FieldGroup, fieldGroupPrefixStyles, Input, Label } from './field'

interface ColorFieldProps extends ColorFieldPrimitiveProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  isLoading?: boolean
}

const ColorField = ({
  label,
  description,
  errorMessage,
  placeholder,
  prefix,
  suffix,
  isLoading,
  ...props
}: ColorFieldProps) => {
  return (
    <ColorFieldPrimitive {...props} className={ctr(props.className, 'group flex flex-col gap-1')}>
      {label && <Label>{label}</Label>}
      <FieldGroup data-loading={isLoading ? 'true' : undefined} className={fieldGroupPrefixStyles()}>
        {prefix ? <span className="atrs isPfx">{prefix}</span> : null}
        <Input className="px-2.5" placeholder={placeholder} />
        {suffix ? <span className="atrs isSfx">{suffix}</span> : null}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </ColorFieldPrimitive>
  )
}

interface ColorAreaProps extends ColorAreaPrimitiveProps {}

const colorAreaStyles = tv({
  base: 'size-48 rounded-lg border border-background shrink-0'
})

const ColorArea = (props: ColorAreaProps) => {
  return <ColorAreaPrimitive className={colorAreaStyles()} {...props} />
}

interface ColorThumbProps extends ColorThumbPrimitiveProps {}

const colorThumbStyles = tv({
  base: 'size-5 shadow duration-200 rounded-full ring-1 ring-inset ring-offset-2 ring-fg/50 border border-fg/50',
  variants: {
    isFocusVisible: {
      true: 'size-6'
    }
  }
})

const ColorThumb = ({ className, ...props }: ColorThumbProps) => {
  return (
    <ColorThumbPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        colorThumbStyles({
          ...renderProps,
          className
        })
      )}
      {...props}
    />
  )
}

interface ColorWheelProps extends ColorWheelPrimitiveProps {}

const ColorWheel = (props: ColorWheelProps) => {
  return <ColorWheelPrimitive {...props} />
}

interface ColorWheelTrackProps extends ColorWheelTrackPrimitiveProps {}

const ColorWheelTrack = ({ className, ...props }: ColorWheelTrackProps) => {
  return <ColorWheelTrackPrimitive {...props} />
}

interface ColorPickerProps extends ColorPickerPrimitiveProps {}

const ColorPicker = (props: ColorPickerProps) => {
  return <ColorPickerPrimitive {...props} />
}

export { ColorArea, ColorField, ColorPicker, ColorThumb, ColorWheel, ColorWheelTrack }
