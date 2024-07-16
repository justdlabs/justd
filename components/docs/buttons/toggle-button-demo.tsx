'use client'

import { ToggleButton } from '@/components/ui'

export default function ToggleButtonDemo() {
    return (
        <ToggleButton>
            {({ isSelected }) => <>{isSelected ? "I'm On" : "I'm Off"}</>}
        </ToggleButton>
    )
}
