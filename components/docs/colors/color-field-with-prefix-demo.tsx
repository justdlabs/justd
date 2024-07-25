'use client'

import { IconColors } from '@irsyadadl/paranoid'
import { ColorField } from 'ui'

export default function ColorFieldWithPrefixDemo() {
  return <ColorField label="Color" prefix={<IconColors />} placeholder="#FAFAFA" />
}
