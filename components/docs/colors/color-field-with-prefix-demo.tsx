import { ColorField } from '@/components/ui'
import { IconColors } from '@irsyadadl/paranoid'

export default function ColorFieldWithPrefixDemo() {
    return <ColorField label='Color' prefix={<IconColors />} placeholder='#FAFAFA' />
}
