'use client'

import React from 'react'

import { Avatar } from 'ui'

export default function AvatarStatusDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center gap-2">
        <Avatar status="online" initials="IR" src="https://i.pravatar.cc/150?img=58" />
        <Avatar
          shape="square"
          status="online"
          initials="IR"
          src="https://i.pravatar.cc/150?img=57"
        />
      </div>
      <div className="flex justify-center gap-2">
        <Avatar status="online" initials="IR" src="https://i.pravatar.cc/150?img=59" />
        <Avatar status="offline" initials="IR" src="https://i.pravatar.cc/150?img=62" />
        <Avatar status="away" initials="IR" src="https://i.pravatar.cc/150?img=63" />
        <Avatar status="dnd" initials="IR" src="https://i.pravatar.cc/150?img=64" />
        <Avatar status="idle" initials="IR" src="https://i.pravatar.cc/150?img=60" />
      </div>
    </div>
  )
}
