'use client'

import { Button } from '@/components/ui'

export default function ButtonShapeDemo() {
    return (
        <div className='flex gap-2'>
            <Button shape='square'>Square</Button>
            <Button shape='circle'>Circle</Button>
        </div>
    )
}
