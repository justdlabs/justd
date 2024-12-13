"use client"

import { useState } from "react"

import type { DropEvent } from "@react-types/shared"
import { IconGallery } from "justd-icons"
import { isFileDropItem } from "react-aria-components"
import { Description, DropZone, FileTrigger } from "ui"

export default function DropZoneAndFileTriggerDemo() {
  const [droppedImage, setDroppedImage] = useState<string | undefined>(undefined)

  const onDropHandler = async (e: DropEvent) => {
    const item = e.items.filter(isFileDropItem).find((item) => item.type === "image/jpeg" || item.type === "image/png")
    if (item) {
      const file = await item.getFile()
      setDroppedImage(URL.createObjectURL(file))
    }
  }

  const onSelectHandler = async (e: any) => {
    if (e) {
      const files = Array.from([...e])
      const item = files[0]

      if (item) {
        setDroppedImage(URL.createObjectURL(item))
      }
    }
  }
  return (
    <DropZone
      getDropOperation={(types) => (types.has("image/jpeg") || types.has("image/png") ? "copy" : "cancel")}
      onDrop={onDropHandler}
    >
      {droppedImage ? (
        <img alt="" src={droppedImage} className="object-contain aspect-square size-full" />
      ) : (
        <div className="grid space-y-3">
          <div className="grid place-content-center mx-auto rounded-full border size-12 bg-secondary/70 group-data-[drop-target]:border-primary/70 group-data-[drop-target]:bg-primary/20">
            <IconGallery className="size-5" />
          </div>
          <div className="flex justify-center">
            <FileTrigger
              acceptedFileTypes={["image/png", "image/jpeg"]}
              allowsMultiple={false}
              onSelect={onSelectHandler}
            >
              Upload a file
            </FileTrigger>
          </div>
          <Description>Or drag and drop PNG, JPG, GIF up to 10MB</Description>
        </div>
      )}
      <input type="hidden" name="image" value={droppedImage} />
    </DropZone>
  )
}
