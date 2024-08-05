'use client'

import React from 'react'

import {
  IconAlignmentCenter,
  IconAlignmentCenterFill,
  IconAlignmentJustify,
  IconAlignmentJustifyFill,
  IconAlignmentLeft,
  IconAlignmentLeftFill,
  IconAlignmentRight,
  IconAlignmentRightFill,
  IconBold,
  IconBoldFill,
  IconChevronDown,
  IconGallery,
  IconGrid4,
  IconItalic,
  IconItalicFill,
  IconLink,
  IconRedo,
  IconStrikeThrough,
  IconStrikeThroughFill,
  IconUnderline,
  IconUnderlineFill,
  IconUndo
} from '@irsyadadl/paranoid'
import {
  Button,
  Checkbox,
  Menu,
  MenuContent,
  MenuItem,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarSeparator
} from 'ui'

export default function ToolbarDemo() {
  return (
    <Toolbar aria-label="Toolbars">
      <ToolbarGroup aria-label="Text Formatting Options">
        <ToolbarItem defaultSelected aria-label="Bold" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconBoldFill /> : <IconBold />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Italic" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconItalicFill /> : <IconItalic />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Underline" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconUnderlineFill /> : <IconUnderline />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Strikethrough" size="square-petite" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconStrikeThroughFill /> : <IconStrikeThrough />}</>
          )}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Alignment">
        <ToolbarItem aria-label="Align Left" size="square-petite" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentLeftFill /> : <IconAlignmentLeft />}</>
          )}
        </ToolbarItem>
        <ToolbarItem aria-label="Align Center" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentCenterFill /> : <IconAlignmentCenter />}</>
          )}
        </ToolbarItem>
        <ToolbarItem aria-label="Align Right" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentRightFill /> : <IconAlignmentRight />}</>
          )}
        </ToolbarItem>
        <ToolbarItem aria-label="Align Justify" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <Checkbox>Spell Check</Checkbox>
      <ToolbarGroup className="ml-auto">
        <Menu>
          <Button aria-label="Other options" appearance="outline" size="small">
            Options...
            <IconChevronDown />
          </Button>
          <MenuContent showArrow placement="bottom right">
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
