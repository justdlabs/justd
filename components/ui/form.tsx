'use client'

import * as Primitive from 'react-aria-components'

interface FormProps extends Primitive.FormProps {}

function Form(props: FormProps) {
    return <Primitive.Form {...props} />
}

export { Form, type FormProps }
