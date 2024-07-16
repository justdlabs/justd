import { ColorField } from '@/components/ui'
import { IconColors } from '@irsyadadl/paranoid'

export default function ColorFieldWithSuffixDemo() {
    return <ColorField label='Color' suffix={<IconColors />} placeholder='#FAFAFA' />
}
