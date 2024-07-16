'use client'

import { Button, Sheet } from '@/components/ui'

export default function SheetBasicDemo() {
    return (
        <Sheet>
            <Button variant='outline'>Open sheet</Button>
            <Sheet.Overlay>
                <Sheet.Content>
                    <Sheet.Header>
                        <Sheet.Title>Sheet. Title</Sheet.Title>
                        <Sheet.Description>Sheet. Description</Sheet.Description>
                    </Sheet.Header>
                    Sheet. Body
                    <Sheet.Footer>Sheet. Footer</Sheet.Footer>
                </Sheet.Content>
            </Sheet.Overlay>
        </Sheet>
    )
}
