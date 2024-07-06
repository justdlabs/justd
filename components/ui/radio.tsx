'use client'

import { type ReactNode } from 'react'
import {
  RadioGroup as RadioGroupPrimitive,
  Radio as RadioPrimitive,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps,
  type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Description, FieldError, Label } from './field'
import { ctr } from './primitive'

interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const RadioGroup = (props: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive {...props} className={ctr(props.className, 'group flex flex-col gap-2')}>
      <Label>{props.label}</Label>
      <div className="flex gap-2 group-orientation-horizontal:gap-4 group-orientation-vertical:flex-col">
        {props.children}
      </div>
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RadioGroupPrimitive>
  )
}

const radioStyles = tv({
  base: 'size-4 rounded-full border bg-secondary transition',
  variants: {
    isSelected: {
      false: 'border-toggle',
      true: 'border-[4.5px] border-primary'
    },
    isFocused: {
      true: [
        'border-primary bg-primary/20 ring-4 ring-primary/20',
        'group-invalid:border-danger/70 group-invalid:bg-danger/20 group-invalid:ring-danger/20'
      ]
    },
    isInvalid: {
      true: 'border-danger/70 bg-danger/20'
    },
    isDisabled: {
      true: 'opacity-50'
    }
  }
})

const Radio = (props: RadioProps) => {
  return (
    <RadioPrimitive
      {...props}
      className={ctr(
        props.className,
        'group flex items-center gap-2 text-sm text-fg transition disabled:text-fg/50 forced-colors:disabled:text-[GrayText]'
      )}
    >
      {(renderProps) => (
        <>
          <div className={radioStyles(renderProps)} />
          {props.children}
        </>
      )}
    </RadioPrimitive>
  )
}

export { Radio, RadioGroup, radioStyles }
