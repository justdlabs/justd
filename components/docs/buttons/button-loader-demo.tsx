'use client'

import { useState } from 'react'

import { IconCircleCheckFill, IconKey } from '@irsyadadl/paranoid'
import { Button, Loader } from 'ui'

export default function ButtonLoaderDemo() {
  const [loading, setLoading] = useState<'idle' | 'loading' | 'success'>('idle')

  const pressHandler = () => {
    setLoading('loading')

    setTimeout(() => setLoading('success'), 3000)

    setTimeout(() => setLoading('idle'), 6000)
  }

  return (
    <Button
      isDisabled={loading === 'loading'}
      className="w-52 justify-between"
      onPress={pressHandler}
      intent="primary"
    >
      {loading === 'success' ? (
        <IconCircleCheckFill />
      ) : loading === 'loading' ? (
        <Loader />
      ) : (
        <IconKey />
      )}
      {loading === 'loading'
        ? 'Generating Key...'
        : loading === 'success'
          ? 'Key Generated!'
          : 'Generate API Key'}
    </Button>
  )
}
