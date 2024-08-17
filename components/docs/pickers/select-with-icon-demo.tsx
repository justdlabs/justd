"use client"

import { Select } from "ui"
import {
  IconAlignmentJustify,
  IconAlignmentLeft,
  IconClock,
  IconDeviceDesktop,
  IconDevicePhone,
  IconMacbook
} from 'justd-icons'

export default function SelectDemo() {
  return (
    <Select aria-label='Devices' defaultSelectedKey='desktop' placeholder="Select a device">
      <Select.Trigger />
      <Select.List>
        <Select.Option id='desktop' textValue='Desktop'>
          <IconDeviceDesktop/>
          Desktop
        </Select.Option>
        <Select.Option id='laptop' textValue='Laptop'>
          <IconMacbook/>
          Laptop
        </Select.Option>
        <Select.Option id='smartphone' textValue='Smartphone'>
          <IconDevicePhone />
          Smartphone
        </Select.Option>
      </Select.List>

    </Select>
  )
}
