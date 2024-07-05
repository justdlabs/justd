'use client'

import { Form as FormPrimitive, FormProps as FormPrimitiveProps } from 'react-aria-components'

interface FormProps extends FormPrimitiveProps {
  onSubmit(): void
}

function Form({ onSubmit, ...props }: FormProps) {
  const action = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }
  return <FormPrimitive onSubmit={action} {...props} />
}

export { Form, type FormProps }
