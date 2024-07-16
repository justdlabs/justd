'use client'

import React from 'react'

import {
    Button,
    Card,
    Checkbox,
    CheckboxGroup,
    Form,
    MultiSelect,
    Radio,
    RadioGroup,
    Select,
    Switch
} from '@/components/ui'
import { toast } from 'sonner'

const items = [
    { value: '1', label: 'Buttons' },
    { value: '2', label: 'Collections' },
    { value: '3', label: 'Colors' },
    { value: '4', label: 'Date' },
    { value: '5', label: 'Dropzone' },
    { value: '6', label: 'Forms' },
    { value: '7', label: 'Media' },
    { value: '8', label: 'Navigation' },
    { value: '9', label: 'Overlays' },
    { value: '10', label: 'Pickers' },
    { value: '11', label: 'Statuses' }
]

export default function DataFormSink() {
    const [selectedItems, setSelectedItems] = React.useState<
        { value: string; label: string }[]
    >([])
    return (
        <Card>
            <Card.Header>
                <Card.Title>Complete Your Data</Card.Title>
                <Card.Description>
                    Fill out the form to complete your data
                </Card.Description>
            </Card.Header>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    toast.success('Dummy Login Successfully')
                }}
            >
                <Card.Content className='grid gap-4'>
                    <RadioGroup label='Package Manager' orientation='horizontal'>
                        <Radio value='bun'>BUN</Radio>
                        <Radio value='yarn'>YARN</Radio>
                        <Radio value='pnpm'>PNPM</Radio>
                        <Radio value='npm'>NPM</Radio>
                    </RadioGroup>
                    <Select label='Framework' placeholder='Select an option'>
                        <Select.Item id='1'>Next Js</Select.Item>
                        <Select.Item id='2'>React Js</Select.Item>
                        <Select.Item id='3'>Svelte</Select.Item>
                        <Select.Item id='4'>Vue</Select.Item>
                        <Select.Item id='5'>Angular</Select.Item>
                        <Select.Item id='6'>Nuxt</Select.Item>
                        <Select.Item id='7'>Laravel</Select.Item>
                        <Select.Item id='8'>Django</Select.Item>
                    </Select>
                    <CheckboxGroup label='Settings'>
                        <Checkbox value='notifications'>
                            Enable React Server Component
                        </Checkbox>
                        <Checkbox value='dark_mode'>Enable Dark Mode</Checkbox>
                    </CheckboxGroup>
                    <MultiSelect
                        max={10}
                        label='Components'
                        placeholder='Select Components'
                        items={items}
                        selected={selectedItems}
                        setSelected={setSelectedItems}
                    />
                    <Switch>Notifications</Switch>
                </Card.Content>
                <Card.Footer className='justify-end'>
                    <Button type='submit'>Save</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
