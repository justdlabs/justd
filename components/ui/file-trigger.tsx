'use client'

import React from 'react'

import { Camera, Folder, Paperclip } from 'lucide-react'
import * as Primitive from 'react-aria-components'
import { type VariantProps } from 'tailwind-variants'

import { Button, type buttonVariants } from './button'

interface FileTriggerProps
    extends Primitive.FileTriggerProps,
        VariantProps<typeof buttonVariants> {
    withIcon?: boolean
    isDisabled?: boolean
}

const FileTrigger: React.FC<FileTriggerProps> = ({
    variant = 'primary',
    withIcon = true,
    ...props
}) => {
    return (
        <>
            <Primitive.FileTrigger {...props}>
                <Button isDisabled={props.isDisabled} variant={variant}>
                    {withIcon && (
                        <>
                            {props.defaultCamera ? (
                                <Camera />
                            ) : props.acceptDirectory ? (
                                <Folder />
                            ) : (
                                <Paperclip className='rotate-45' />
                            )}
                        </>
                    )}
                    {props.children ? (
                        props.children
                    ) : (
                        <>
                            {props.allowsMultiple
                                ? 'Browse a files'
                                : props.acceptDirectory
                                  ? 'Browse'
                                  : 'Browse a file'}
                            ...
                        </>
                    )}
                </Button>
            </Primitive.FileTrigger>
        </>
    )
}

export { FileTrigger }
