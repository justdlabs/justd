"use client"

import React from "react"

import ButtonIntentDemo from "@/components/docs/buttons/button-intent-demo"
import TagGroupIntentDemo from "@/components/docs/collections/tag-group-shape-demo"
import BadgeIntentDemo from "@/components/docs/statuses/badge-intent-demo"

export default function Page() {
  return (
    <div className="space-y-6">
      <ButtonIntentDemo />
      <BadgeIntentDemo />
      <TagGroupIntentDemo />
    </div>
  )
}
