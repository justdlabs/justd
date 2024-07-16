import { Button } from '@/components/ui'
import { toast, type ToastT } from 'sonner'

const positions: ToastT['position'][] = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right'
]

export default function ToasterPositionsDemo() {
    return (
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
            {positions.map((position) => (
                <Button
                    variant='outline'
                    size='sm'
                    key={position}
                    onPress={() =>
                        toast('The registration is successful, click here to continue.', {
                            position
                        })
                    }
                >
                    {position}
                </Button>
            ))}
        </div>
    )
}
