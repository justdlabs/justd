'use client'

import { Avatar, AvatarGroup } from 'ui'

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup aria-label="avatar-group">
      <Avatar role="avatar-1 " alt="image 1" initials="IR" src="https://i.pravatar.cc/150?img=61" />
      <Avatar role="avatar-2 " alt="image 2" initials="IR" src="https://i.pravatar.cc/150?img=62" />
      <Avatar role="avatar-3 " alt="image 3" initials="IR" src="https://i.pravatar.cc/150?img=63" />
      <Avatar role="avatar-4 " alt="image 4" initials="IR" src="https://i.pravatar.cc/150?img=64" />
      <Avatar role="avatar-5 " alt="image 5" initials="IR" src="https://i.pravatar.cc/150?img=65" />
    </AvatarGroup>
  )
}
