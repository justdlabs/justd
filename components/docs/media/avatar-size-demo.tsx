'use client'

import { Avatar } from 'ui'

export default function AvatarSizeDemo() {
  return (
    <div className="flex gap-4">
      <Avatar size="small" src="https://github.com/irsyadadl.png" />
      <Avatar size="medium" src="https://github.com/irsyadadl.png" />
      <Avatar size="large" src="https://github.com/irsyadadl.png" />
    </div>
  )
}
