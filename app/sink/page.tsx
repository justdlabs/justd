"use client"

import { Select } from "ui"

export default function Page() {
  return (
    <div className="p-32">
      <div className="flex items-center max-w-2xl mx-auto gap-6">
        <Select label="Primary">
          <Select.Trigger />
          <Select.List>
            <Select.Option>Orange</Select.Option>
            <Select.Option>Blue</Select.Option>
            <Select.Option>Sky</Select.Option>
            <Select.Option>Zinc</Select.Option>
            <Select.Option>Gray</Select.Option>
          </Select.List>
        </Select>
        <Select label="Gray">
          <Select.Trigger />
          <Select.List>
            <Select.Option>Zinc</Select.Option>
            <Select.Option>Neutral</Select.Option>
            <Select.Option>Gray</Select.Option>
            <Select.Option>Slate</Select.Option>
          </Select.List>
        </Select>
        <Select label="Accent">
          <Select.Trigger />
          <Select.List>
            <Select.Option>Gray</Select.Option>
            <Select.Option>Same with Primary</Select.Option>
          </Select.List>
        </Select>
      </div>
    </div>
  )
}
