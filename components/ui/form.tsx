"use client"

import type { FormProps } from "react-aria-components"
import { Form as FormPrimitive } from "react-aria-components"

const Form = (props: FormProps) => {
  return <FormPrimitive {...props} />
}

export { Form }
