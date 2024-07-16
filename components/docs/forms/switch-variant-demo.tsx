'use client'

import React from 'react'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import { Select, Switch } from '@/components/ui'

const items = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
    (item) => ({
        value: item,
        label: item
    })
)
export default function SwitchVariantDemo() {
    const [variant, setVariant] = React.useState('primary')

    return (
        <>
            <OptionPreview>
                <Select
                    aria-labelledby='Variant'
                    items={items}
                    selectedKey={variant}
                    onSelectionChange={(v) => setVariant(v as any)}
                >
                    {(item) => (
                        <Select.Item id={item.value} textValue={item.value}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
            </OptionPreview>
            <Switch defaultSelected variant={variant as any}>
                Label
            </Switch>
        </>
    )
}
