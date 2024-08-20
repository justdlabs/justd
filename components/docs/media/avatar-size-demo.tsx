"use client"

import { Avatar } from "ui"

export default function AvatarSizeDemo() {
  return (
    <div className="flex gap-4">
      <Avatar alt="irsyadadl small" size="small" src="https://github.com/irsyadadl.png" />
      <Avatar alt="irsyadadl medium" size="medium" src="https://github.com/irsyadadl.png" />
      <Avatar alt="irsyadadl large" size="large" src="https://github.com/irsyadadl.png" />
    </div>
  )
}
