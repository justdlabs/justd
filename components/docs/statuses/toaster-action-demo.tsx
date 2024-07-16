import { Button } from '@/components/ui'
import { toast } from 'sonner'

export default function ToasterActionDemo() {
    return (
        <div className='flex gap-3'>
            <Button
                variant='outline'
                size='sm'
                onPress={() =>
                    toast('New comment on your post!', {
                        action: {
                            label: 'View',
                            onClick: () => alert('Viewed')
                        }
                    })
                }
            >
                Action
            </Button>
            <Button
                variant='outline'
                size='sm'
                onPress={() =>
                    toast('New comment on your post!', {
                        cancel: {
                            label: 'Cancel',
                            onClick: () => alert('Cancelled')
                        }
                    })
                }
            >
                Cancel
            </Button>
        </div>
    )
}
