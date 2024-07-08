'use client'

import type { FormProps as FormPrimitiveProps } from 'react-aria-components'
import { Form as FormPrimitive } from 'react-aria-components'

interface FormProps extends FormPrimitiveProps {}

function Form(props: FormProps) {
  return <FormPrimitive {...props} />
}

export { Form, type FormProps }
