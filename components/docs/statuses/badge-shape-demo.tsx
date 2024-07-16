'use client'

import { Badge } from '@/components/ui'

export default function BadgeShapeDemo() {
    return (
        <div className='flex gap-2'>
            <Badge shape='square'>Square</Badge>
            <Badge shape='circle'>Circle</Badge>
        </div>
    )
}
