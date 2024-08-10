'use client'

import * as React from 'react'

import { IconLoader } from 'justd-icons'
import {
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps
} from 'react-aria-components'

import type { FieldProps } from './field'
import { Description, FieldError, FieldGroup, fieldGroupPrefixStyles, Input, Label } from './field'
import { ctr } from './primitive'

interface TextFieldProps extends TextFieldPrimitiveProps, FieldProps {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  isLoading?: boolean
  indicatorPlace?: 'prefix' | 'suffix'
}

const TextField = ({
  placeholder,
  label,
  description,
  errorMessage,
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
        className={fieldGroupPrefixStyles()}
      >
        {isLoading && indicatorPlace === 'prefix' ? (
          <IconLoader className="animate-spin isPfx" />
        ) : prefix ? (
          <span className="atrs isPfx x2e2">{prefix}</span>
        ) : null}
        <Input className="px-2.5" placeholder={placeholder} />
        {isLoading && indicatorPlace === 'suffix' ? (
          <IconLoader className="animate-spin isSfx" />
        ) : suffix ? (
          <span className="atrs isSfx x2e2">{suffix}</span>
        ) : null}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}

export { TextField, TextFieldPrimitive, type TextFieldProps }
