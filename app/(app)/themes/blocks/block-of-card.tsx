"use client"

import React from "react"

import { Description } from "ui"

export function BlockOfCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-secondary p-4 rounded-xl border">
        <h3 className="text-fg text-lg font-semibold">Top Music Festivals</h3>
        <Description>
          Discover the best music festivals worldwide, bringing together iconic bands and emerging artists.
        </Description>
      </div>

      <div className="bg-secondary p-4 rounded-xl border">
        <h3 className="text-fg text-lg font-semibold">Best Indie Bands</h3>
        <Description>
          Explore the rising stars of indie music and their fresh sound in today’s dynamic music scene.
        </Description>
      </div>

      <div className="bg-overlay p-4 rounded-xl border">
        <h3 className="text-fg text-lg font-semibold">Band Tour Highlights</h3>
        <Description>Get a glimpse into the most memorable moments from top band tours around the globe.</Description>
      </div>

      <div className="bg-muted p-4 rounded-xl border">
        <h3 className="text-fg text-lg font-semibold">Iconic Band Albums</h3>
        <Description>A look at the most legendary albums from bands that have shaped music history.</Description>
      </div>

      <div className="bg-accent-subtle p-4 rounded-xl border border-accent-subtle-fg/20">
        <h3 className="text-accent-subtle-fg text-lg font-semibold">Music Gear Essentials</h3>
        <Description className="text-accent-subtle-fg">
          Discover must-have gear for musicians, from instruments to audio equipment for any performance.
        </Description>
      </div>
    </div>
  )
}
