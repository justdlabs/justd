"use client"

import { androidBrands } from "@/components/docs/collections/tag-group-demo"
import { Tag } from "ui"

export default function TagGroupDisabledDemo() {
  return (
    <div className="space-y-6">
      <Tag.Group
        disabledKeys={androidBrands.filter((brand) => !brand.available).map((brand) => brand.id)}
        label="Disabled Key"
        selectionMode="multiple"
      >
        <Tag.List items={androidBrands}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
      </Tag.Group>

      <Tag.Group label="Disabled by Tag" selectionMode="multiple">
        <Tag.List items={androidBrands}>
          {(item) => <Tag.Item isDisabled={item.available}>{item.name}</Tag.Item>}
        </Tag.List>
      </Tag.Group>
    </div>
  )
}
