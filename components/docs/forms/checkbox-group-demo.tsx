'use client'

import React from 'react'

import { Checkbox, CheckboxGroup } from '@/components/ui'

export default function CheckboxGroupDemo() {
    return (
        <CheckboxGroup label='Settings'>
            <React.Fragment key='.0'>
                <Checkbox value='notifications'>Enable notifications</Checkbox>
                <Checkbox value='auto_update'>Auto-update applications</Checkbox>
                <Checkbox value='dark_mode'>Enable dark mode</Checkbox>
                <Checkbox value='location_access'>Allow location access</Checkbox>
                <Checkbox value='two_factor_auth'>
                    Enable two-factor authentication
                </Checkbox>
            </React.Fragment>
        </CheckboxGroup>
    )
}
