'use client'

import { IconSearch, IconX } from '@irsyadadl/paranoid'
import {
  SearchField as SearchFieldPrimitive,
  type SearchFieldProps as SearchFieldPrimitiveProps,
  type ValidationResult
} from 'react-aria-components'

import { Button } from './button'
import { Description, FieldError, FieldGroup, Input, Label } from './field'
import { ctr } from './primitive'

export interface SearchFieldProps extends SearchFieldPrimitiveProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function SearchField({ placeholder = 'Search', label, description, errorMessage, ...props }: SearchFieldProps) {
  return (
    <SearchFieldPrimitive {...props} className={ctr(props.className, 'group flex min-w-[40px] flex-col gap-1')}>
      {label && <Label>{label}</Label>}
      <FieldGroup>
        <IconSearch
          aria-hidden
          className="ml-2 size-4 shrink-0 text-muted-fg group-disabled:text-muted-fg/50 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
        />
        <Input placeholder={placeholder} className="[&::-webkit-search-cancel-button]:hidden" />
        <Button
          size="square-petite"
          appearance="plain"
          className="mr-1 size-8 text-muted-fg group-empty:invisible hover:bg-transparent pressed:text-fg"
        >
          <IconX aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </SearchFieldPrimitive>
  )
}
