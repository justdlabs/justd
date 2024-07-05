'use client'

import {
  composeRenderProps,
  FieldError as FieldErrorPrimitive,
  type FieldErrorProps,
  Group,
  type GroupProps,
  Input as InputPrimitive,
  type InputProps,
  Label as LabelPrimitive,
  type LabelProps,
  Text,
  type TextProps
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { ctr } from './primitive'

const fieldBorderStyles = tv({
  base: 'group-focus-within:border-primary forced-colors:border-[Highlight]',
  variants: {
    isInvalid: {
      true: 'border-danger/70 group-focus-within:border-danger/70 forced-colors:border-[Mark]'
    }
  }
})

const Label = (props: LabelProps) => {
  return (
    <LabelPrimitive
      {...props}
      className={twMerge('w-fit cursor-default font-medium text-secondary-fg text-sm', props.className)}
    />
  )
}

const Description = (props: TextProps) => {
  return <Text {...props} slot="description" className={twMerge('text-sm text-muted-fg', props.className)} />
}

const FieldError = (props: FieldErrorProps) => {
  return (
    <FieldErrorPrimitive {...props} className={ctr(props.className, 'text-sm text-danger forced-colors:text-[Mark]')} />
  )
}

const fieldGroupStyles = tv({
  base: [
    'group flex h-10 items-center overflow-hidden rounded-lg border border-input bg-background transition disabled:opacity-50 disabled:bg-secondary forced-colors:bg-[Field]',
    'focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20',
    'focus-within:invalid:border-danger focus-within:invalid:ring-4 focus-within:invalid:ring-danger/20',
    'invalid:border-danger',
    'has-[.isPfx]:pl-2.5 has-[.isSfx]:pr-2.5 [&_[data-slot=icon]]:size-4 has-[.atrs]:shrink-0 has-[.atrs]:text-muted-fg'
  ]
})

const FieldGroup = (props: GroupProps) => {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className })
      )}
    />
  )
}

const Input = (props: InputProps) => {
  return (
    <InputPrimitive
      {...props}
      className={ctr(
        props.className,
        'w-full min-w-0 bg-transparent p-2 text-base text-fg placeholder-muted-fg focus:outline-none lg:text-sm'
      )}
    />
  )
}

export { Description, fieldBorderStyles, FieldError, FieldGroup, fieldGroupStyles, Input, InputPrimitive, Label }
