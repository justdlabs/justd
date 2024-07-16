import { Button } from '@/components/ui'
import { toast } from 'sonner'

export default function ToasterDemo() {
    return <Button onPress={() => toast('You have been toasted')}>Toast</Button>
}
