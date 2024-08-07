'use client'

import React from 'react'

import {
  IconAlignmentCenter,
  IconAlignmentCenterFill,
  IconAlignmentJustify,
  IconAlignmentJustifyFill,
  IconAlignmentLeft,
  IconAlignmentLeftFill,
  IconCamera,
  IconCameraFill,
  IconCursor,
  IconCursorFill,
  IconDotsVertical,
  IconGallery,
  IconGalleryFill,
  IconGrid4,
  IconLink,
  IconPencilBox,
  IconPencilBoxFill,
  IconRedo,
  IconToolbox,
  IconToolboxFill,
  IconUndo
} from 'justd-icons'
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  Toggle,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarSeparator
} from 'ui'

export default function ToolbarOrientationDemo() {
  return (
    <Toolbar aria-label="Toolbox" orientation="vertical">
      <ToolbarGroup aria-label="Toolbox">
        <ToolbarItem aria-label="Cursor" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconCursorFill /> : <IconCursor />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Pencil Box" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconPencilBoxFill /> : <IconPencilBox />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Pencil Box" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconToolboxFill /> : <IconToolbox />}</>}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Gallery">
        <ToolbarItem aria-label="Camera" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Gallery" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Alignment">
        <Toggle aria-label="Align Left" size="square-petite" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentLeftFill /> : <IconAlignmentLeft />}</>
          )}
        </Toggle>
        <ToolbarItem aria-label="Align Center" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentCenterFill /> : <IconAlignmentCenter />}</>
          )}
        </ToolbarItem>
        <ToolbarItem aria-label="Align Justify" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <Menu>
          <Button aria-label="Other options" appearance="outline" size="square-petite">
            <IconDotsVertical />
          </Button>
          <MenuContent showArrow placement="right">
            <MenuItem>
              <IconUndo />
              Undo
            </MenuItem>
            <MenuItem>
              <IconRedo />
              Redo
            </MenuItem>
            <MenuItem>
              <IconLink />
              Insert Link
            </MenuItem>
            <MenuItem>
              <IconGallery />
              Insert Image
            </MenuItem>
            <MenuItem>
              <IconGrid4 />
              Insert Grid
            </MenuItem>
          </MenuContent>
        </Menu>
      </ToolbarGroup>
    </Toolbar>
  )
}
