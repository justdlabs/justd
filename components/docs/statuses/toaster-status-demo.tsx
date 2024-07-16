import { Button } from '@/components/ui'
import { toast } from 'sonner'

export default function ToasterStatusDemo() {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <Button
                variant='danger'
                size='sm'
                onPress={() => toast.error('The registration failed')}
            >
                Error
            </Button>
            <Button
                variant='success'
                size='sm'
                onPress={() => toast.success('The registration was successful.')}
            >
                Success
            </Button>
            <Button
                variant='warning'
                size='sm'
                onPress={() => toast.warning('There was an issue during registration')}
            >
                Warning
            </Button>
            <Button
                variant='info'
                size='sm'
                onPress={() =>
                    toast.info('Here is some information about your registration.')
                }
            >
                Info
            </Button>
        </div>
    )
}
