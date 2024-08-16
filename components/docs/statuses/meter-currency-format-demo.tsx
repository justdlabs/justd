"use client"

import React from "react"

import { Meter } from "ui"

export default function MeterCurrencyFormatDemo() {
  return <Meter label="Revenue" formatOptions={{ style: "currency", currency: "USD" }} value={15} />
}
