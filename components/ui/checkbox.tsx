'use client'

import { type ReactNode } from 'react'

import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
  type CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  type CheckboxProps as CheckboxPrimitiveProps,
  composeRenderProps,
  type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description, FieldError, Label } from './field'
import { ctr } from './primitive'

interface CheckboxGroupProps extends Omit<CheckboxGroupPrimitiveProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  return (
    <CheckboxGroupPrimitive {...props} className={ctr(props.className, 'flex flex-col gap-2')}>
      <Label>{props.label}</Label>
      <>{props.children}</>
      {props.description && <Description className="block">{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </CheckboxGroupPrimitive>
  )
}

const checkboxStyles = tv({
  base: 'racc group flex items-center gap-2 text-sm transition',
  variants: {
    isDisabled: {
      false: 'opacity-100',
      true: 'opacity-50'
    }
  }
})

const boxStyles = tv({
  base: 'flex size-4 flex-shrink-0 items-center justify-center rounded border text-background transition',
  variants: {
    isSelected: {
      false: 'border-toggle bg-secondary',
      true: [
        'border-primary/70 bg-primary text-primary-fg',
        'group-invalid:border-danger/70 group-invalid:bg-danger group-invalid:text-danger-fg'
      ]
    },
    isFocused: {
      true: [
        'border-primary/70 ring-4 ring-primary/20',
        'group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-danger/20'
      ]
    },
    isInvalid: {
      true: 'border-danger/70 bg-danger/20 text-danger-fg ring-danger/20'
    }
  }
})

interface CheckboxProps extends CheckboxPrimitiveProps {
  description?: string
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className })
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <div className="flex gap-2">
          <div
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              className: props.description ? 'mt-1' : 'mt-0.5',
              ...renderProps
            })}
          >
            {isIndeterminate ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
            ) : isSelected ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : null}
          </div>

          <>{props.children}</>
          {props.description && <Description>{props.description}</Description>}
        </div>
      )}
    </CheckboxPrimitive>
  )
}

export { Checkbox, CheckboxGroup }
