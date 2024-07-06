'use client'

import { Form as FormPrimitive, FormProps as FormPrimitiveProps } from 'react-aria-components'

interface FormProps extends FormPrimitiveProps {
  onSubmit(): void
}

function Form({ onSubmit, ...props }: FormProps) {
  return <FormPrimitive {...props} />
}

export { Form, type FormProps }
