'use client'

import { IconLoader } from '@irsyadadl/paranoid'
import * as React from 'react'
import {
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
  type ValidationResult
} from 'react-aria-components'
import { Description, FieldError, FieldGroup, Input, Label } from './field'
import { ctr } from './primitive'

interface TextFieldProps extends TextFieldPrimitiveProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  isLoading?: boolean
  indicatorPlace?: 'prefix' | 'suffix'
}

const TextField = ({
  label,
  description,
  errorMessage,
  placeholder,
  prefix,
  suffix,
  isLoading,
  indicatorPlace,
  ...props
}: TextFieldProps) => {
  return (
    <TextFieldPrimitive {...props} className={ctr(props.className, 'group flex flex-col gap-1')}>
      {label && <Label>{label}</Label>}
      <FieldGroup
        data-loading={isLoading ? 'true' : undefined}
        className="flex group-invalid:border-danger group-disabled:bg-secondary group-disabled:opacity-50 items-center group-invalid:focus-within:ring-danger/20"
      >
        {isLoading && indicatorPlace === 'prefix' ? (
          <IconLoader className="animate-spin isPfx" />
        ) : prefix ? (
          <span className="atrs isPfx">{prefix}</span>
        ) : null}
        <Input className="px-2.5" placeholder={placeholder} />
        {isLoading && indicatorPlace === 'suffix' ? (
          <IconLoader className="animate-spin isSfx" />
        ) : suffix ? (
          <span className="atrs isSfx">{suffix}</span>
        ) : null}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}

export { TextField, TextFieldPrimitive }
export type { TextFieldProps }
