'use client'

import { IconCamera, IconFolder, IconPaperclip } from '@irsyadadl/paranoid'
import React from 'react'
import {
  FileTrigger as FileTriggerPrimitive,
  type FileTriggerProps as FileTriggerPrimitiveProps
} from 'react-aria-components'
import { type VariantProps } from 'tailwind-variants'
import { Button, type buttonStyles } from './button'

interface FileTriggerProps extends FileTriggerPrimitiveProps, VariantProps<typeof buttonStyles> {
  withIcon?: boolean
  isDisabled?: boolean
}

const FileTrigger: React.FC<FileTriggerProps> = ({
  intent = 'primary',
  appearance = 'outline',
  withIcon = true,
  ...props
}) => {
  return (
    <>
      <FileTriggerPrimitive {...props}>
        <Button isDisabled={props.isDisabled} intent={intent} appearance={appearance}>
          {withIcon && (
            <>
              {props.defaultCamera ? (
                <IconCamera />
              ) : props.acceptDirectory ? (
                <IconFolder />
              ) : (
                <IconPaperclip className="rotate-45" />
              )}
            </>
          )}
          {props.children ? (
            props.children
          ) : (
            <>
              {props.allowsMultiple ? 'Browse a files' : props.acceptDirectory ? 'Browse' : 'Browse a file'}
              ...
            </>
          )}
        </Button>
      </FileTriggerPrimitive>
    </>
  )
}

export { FileTrigger }
