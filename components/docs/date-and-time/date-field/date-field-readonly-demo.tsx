"use client"

import React from "react"

import { getLocalTimeZone, parseDate, today } from "@internationalized/date"
import { DateField } from "ui"

export default function DateFieldReadonlyDemo() {
  const now = today(getLocalTimeZone())
  return <DateField isReadOnly defaultValue={parseDate(now.toString())} label="Event date" />
}
