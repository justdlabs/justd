'use client'

import * as React from 'react'

import * as Primitive from 'react-aria-components'
import tailwindColors from 'tailwindcss/colors'

import { Button } from './button'
import {
    ColorArea,
    ColorField,
    ColorSlider,
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
    ColorThumb,
    defaultColor,
    isBrightColor
} from './color'
import { Dialog } from './dialog'
import { DynamicOverlay } from './dynamic-overlay'
import { Description, Label } from './field'
import { Select } from './select'

interface ColorPickerProps extends Primitive.ColorPickerProps {
    space?: Primitive.ColorSpace
    enableColorSwatch?: boolean
    enableColorFormatSelection?: boolean
    isHex?: boolean
    label?: string
    description?: string
    errorMessage?: string
    placeholder?: string
    colors?: string[]
    isDisabled?: boolean
}

const ColorPicker = ({
    enableColorSwatch = false,
    enableColorFormatSelection = false,
    label,
    description,
    colors = [...Object.values(tailwindColors.zinc)],
    placeholder = 'Fill Color',
    isHex = true,
    isDisabled = false,
    ...props
}: ColorPickerProps) => {
    const [space, setSpace] = React.useState<Primitive.ColorSpace>('rgb')
    const [isHexFormat, setIsHexFormat] = React.useState(false)
    return (
        <Primitive.Group
            aria-labelledby='color-swatch'
            className='flex w-full flex-col gap-1'
        >
            {label && <Label>{label}</Label>}
            <Primitive.ColorPicker defaultValue={defaultColor} {...props}>
                <Primitive.DialogTrigger>
                    <Button
                        aria-labelledby='color-swatch'
                        isDisabled={isDisabled}
                        variant='outline'
                        className='w-full max-w-sm justify-start'
                    >
                        <ColorSwatch
                            aria-labelledby='color-swatch'
                            isBright={props.value ? isBrightColor(props.value) : false}
                            className='-ml-1.5 size-6'
                        />
                        <span>{placeholder}</span>
                    </Button>
                    <DynamicOverlay
                        aria-labelledby='color-swatch'
                        placement='bottom start'
                        className='w-full p-0 overflow-hidden min-w-full sm:w-fit sm:min-w-fit'
                    >
                        <Dialog
                            aria-labelledby='color-swatch'
                            className='[[data-placement]>&]:p-[0.70rem] lg:w-[18rem] lg:p-0'
                        >
                            <div className='space-y-2'>
                                <div>
                                    <ColorArea
                                        aria-labelledby='color-swatch'
                                        className='w-full sm:w-[calc(18rem-1.30rem)]'
                                        colorSpace='hsb'
                                        xChannel='saturation'
                                        yChannel='brightness'
                                    >
                                        <ColorThumb className='z-50' />
                                    </ColorArea>
                                    <ColorSlider
                                        aria-labelledby='color-swatch'
                                        showOutput={false}
                                        className='mt-2 [&_.cstrk]:orientation-horizontal:h-3'
                                        colorSpace='hsb'
                                        channel='hue'
                                    />
                                </div>

                                <div className='grid gap-2'>
                                    {enableColorFormatSelection && (
                                        <Select
                                            selectedKey={space}
                                            onSelectionChange={(s) => {
                                                setSpace(s as Primitive.ColorSpace)
                                                setIsHexFormat(s === 'hex')
                                            }}
                                            aria-label='Type of Color'
                                        >
                                            {['rgb', 'hsl', 'hsb', 'hex'].map((s) => (
                                                <Select.Item key={s} id={s} textValue={s}>
                                                    {s}
                                                </Select.Item>
                                            ))}
                                        </Select>
                                    )}

                                    {enableColorFormatSelection ? (
                                        <div className='flex gap-1 w-[inherit]'>
                                            {isHexFormat ? (
                                                <ColorField
                                                    aria-labelledby='color-swatch'
                                                    colorSpace={space}
                                                />
                                            ) : (
                                                Primitive.getColorChannels(space).map(
                                                    (channel) => (
                                                        <ColorField
                                                            aria-label={channel.toString()}
                                                            colorSpace={space}
                                                            channel={channel}
                                                            key={channel}
                                                        />
                                                    )
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <ColorField
                                            aria-labelledby='color-swatch'
                                            colorSpace={space}
                                        />
                                    )}
                                </div>

                                {enableColorSwatch && colors && colors.length > 0 && (
                                    <ColorSwatchPicker
                                        aria-labelledby='color-swatch'
                                        className='flex flex-wrap gap-x-2 gap-y-2.5'
                                    >
                                        {colors.map((color) => (
                                            <ColorSwatchPickerItem
                                                key={color}
                                                color={color}
                                            />
                                        ))}
                                    </ColorSwatchPicker>
                                )}
                            </div>
                        </Dialog>
                    </DynamicOverlay>
                </Primitive.DialogTrigger>
            </Primitive.ColorPicker>
            {description && <Description>{description}</Description>}
        </Primitive.Group>
    )
}

export { ColorPicker, type ColorPickerProps }
