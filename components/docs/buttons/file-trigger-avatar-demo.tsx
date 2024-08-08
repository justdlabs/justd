'use client'

import React from 'react'

import type { DropEvent } from '@react-types/shared'
import { isFileDropItem } from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { Avatar, DropZone, FileTrigger } from 'ui'

export default function FileTriggerAvatarDemo() {
  const [droppedImage, setDroppedImage] = React.useState<string | undefined>(undefined)

  const onDropHandler = async (e: DropEvent) => {
    const item = e.items
      .filter(isFileDropItem)
      .find((item) => item.type === 'image/jpeg' || item.type === 'image/png')
    if (item) {
      const file = await item.getFile()
      setDroppedImage(URL.createObjectURL(file))
    }
  }

  async function onSelectHandler(e: any) {
    if (e) {
      const files = Array.from([...e])
      const item = files[0]

      if (item) {
        setDroppedImage(URL.createObjectURL(item))
      }
    }
  }

  return (
    <div className="flex items-center gap-2">
      <DropZone
        getDropOperation={() => 'copy'}
        onDrop={onDropHandler}
        className={twJoin(
          '[&_[data-slot=avatar]]:bg-transparent [&_[data-slot=avatar]]:outline-none rounded-full p-0 overflow-hidden size-10'
        )}
      >
        {droppedImage ? (
          <Avatar src={droppedImage} size="large" />
        ) : (
          <Avatar initials="IA" size="large" />
        )}
        <input type="hidden" name="image" value={droppedImage} />
      </DropZone>
      <FileTrigger
        size="small"
        withIcon={false}
        acceptedFileTypes={['image/png', 'image/jpeg']}
        onSelect={onSelectHandler}
      >
        Upload avatar
      </FileTrigger>
    </div>
  )
}
