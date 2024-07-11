import { IconColors } from '@irsyadadl/paranoid'
import { ColorField } from 'ui'

export default function ColorFieldWithSuffixDemo() {
  return <ColorField label="Color" suffix={<IconColors />} placeholder="#FAFAFA" />
}
