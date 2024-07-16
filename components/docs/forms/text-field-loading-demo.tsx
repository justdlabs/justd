'use client'

import { TextField } from '@/components/ui'

export default function TextFieldLoadingDemo() {
    return <TextField isLoading indicatorPlace='suffix' label='Checking your name' />
}
