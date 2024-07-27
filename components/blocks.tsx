'use client'

import React from 'react'

import { Buttons } from '@/components/blocks/buttons'
import { CheckRadioBlock } from '@/components/blocks/check-radio-block'
import { GridListDragBlock } from '@/components/blocks/grid-list-drag-block'
import { LoginForm } from '@/components/blocks/login-form'
import { Menus } from '@/components/blocks/menus'
import { ModalOverlays, PopoverOverlays } from '@/components/blocks/overlays'
import { SliderOnPopoverBlock } from '@/components/blocks/slider-on-popover-block'
import { TableDemo } from '@/components/blocks/table-demo'
import ColorPickerCombinationDemo from '@/components/docs/colors/color-picker-combination-demo'
import SliderControlledDemo from '@/components/docs/controls/slider-controlled-demo'
import SwitchDemo from '@/components/docs/controls/switch-demo'
import AvatarDemo from '@/components/docs/media/avatar-demo'
import TooltipDelayDemo from '@/components/docs/overlays/tooltip-delay-demo'
import ComboBoxAvatarDemo from '@/components/docs/pickers/combo-box-avatar-demo'
import SelectDemo from '@/components/docs/pickers/select-demo'
import {
  IconAdjustment,
  IconCamera,
  IconCameraFill,
  IconCubeFill,
  IconDuplicate,
  IconDuplicateFill,
  IconGallery,
  IconGalleryFill,
  IconHeart,
  IconHeartFill,
  IconMagic,
  IconMagicFill,
  IconVideoPlaylist,
  IconVideoPlaylistFill
} from '@irsyadadl/paranoid'
import {
  Button,
  buttonStyles,
  Card,
  cn,
  Grid,
  GridItem,
  GridList,
  GridListItem,
  Link,
  Note,
  Popover,
  PopoverContent,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarSeparator
} from 'ui'

export function Blocks() {
  return (
    <section id="blocks" className="mb-12">
      <h2 className="text-2xl mb-6 font-bold">Blocks</h2>
      <div className="space-y-2">
        <Grid columns={{ initial: 1, sm: 2, lg: 5 }} gap={2}>
          <GridItem colSpan={{ initial: 1, lg: 3 }}>
            <CardBlock>
              <TableDemo />
            </CardBlock>
          </GridItem>
          <GridItem colSpan={{ initial: 1, lg: 2 }}>
            <CardBlock>
              <LoginForm />
            </CardBlock>
          </GridItem>
        </Grid>
        <Grid columns={{ initial: 1, sm: 2, lg: 3 }} gap={2}>
          <GridItem className="flex flex-col gap-y-4 lg:gap-y-8">
            <Card className="p-6">
              <div className="flex justify-center gap-2">
                <Toolbar aria-label="Toolbars" className="flex justify-between">
                  <ToolbarGroup aria-label="Actions">
                    <ToolbarItem aria-label="Support" appearance="outline">
                      {({ isSelected }) => <>{isSelected ? <IconHeartFill /> : <IconHeart />}</>}
                    </ToolbarItem>
                    <ToolbarItem aria-label="Duplicate" appearance="outline">
                      {({ isSelected }) => <>{isSelected ? <IconDuplicateFill /> : <IconDuplicate />}</>}
                    </ToolbarItem>
                    <ToolbarItem aria-label="Resolve with AI" appearance="outline">
                      {({ isSelected }) => <>{isSelected ? <IconMagicFill /> : <IconMagic />}</>}
                    </ToolbarItem>
                    <SliderOnPopoverBlock />
                  </ToolbarGroup>
                  <ToolbarSeparator />
                  <ToolbarGroup aria-label="Gallery">
                    <ToolbarItem aria-label="Camera" size="square-petite" appearance="outline">
                      {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
                    </ToolbarItem>
                    <ToolbarItem aria-label="Gallery" size="square-petite" appearance="outline">
                      {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
                    </ToolbarItem>
                    <ToolbarItem aria-label="Playlist" size="square-petite" appearance="outline">
                      {({ isSelected }) => <>{isSelected ? <IconVideoPlaylistFill /> : <IconVideoPlaylist />}</>}
                    </ToolbarItem>
                  </ToolbarGroup>
                </Toolbar>
              </div>
            </Card>
            <GridList items={items} aria-label="Select items" selectionMode="multiple" className="min-w-64">
              {(item) => <GridListItem>{item.name}</GridListItem>}
            </GridList>
          </GridItem>
          <GridItem>
            <CheckRadioBlock />
          </GridItem>
          <GridItem>
            <CardBlock className="p-4 py-2 sm:p-4 lg:px-5 lg:py-0">
              <div>
                <Note>Check out the latest updates on our dashboard!</Note>
                <Note intent="primary">Reminder: Complete your profile to get personalized recommendations.</Note>
                <Note intent="warning">Heads up! We'll be doing system maintenance this Sunday at 2 AM.</Note>
                <Note intent="danger">
                  Alert: Your subscription expires in 3 days. Renew now to avoid interruption.
                </Note>
                <Note intent="info">Did you know? You can now export your reports in Excel format.</Note>
              </div>
            </CardBlock>
          </GridItem>
          <GridItem>
            <CardBlock>
              <SelectDemo />
            </CardBlock>
          </GridItem>
          <GridItem>
            <CardBlock>
              <ComboBoxAvatarDemo />
            </CardBlock>
          </GridItem>
          <GridItem>
            <CardBlock>
              <ColorPickerCombinationDemo />
            </CardBlock>
          </GridItem>
          <GridItem>
            <ModalOverlays />
          </GridItem>
          <GridItem>
            <PopoverOverlays />
          </GridItem>
          <GridItem>
            <CardBlock>
              <TooltipDelayDemo />
            </CardBlock>
          </GridItem>
          <GridItem>
            <Buttons />
          </GridItem>
          <GridItem>
            <AvatarDemo />
          </GridItem>
          <GridItem>
            <CardBlock>
              <SwitchDemo />
            </CardBlock>
          </GridItem>
          <GridItem colSpan={{ initial: 1, lg: 2 }}>
            <GridListDragBlock />
          </GridItem>
          <GridItem>
            <Menus />
          </GridItem>
        </Grid>
      </div>

      <div className="flex items-center mt-8 justify-center lg:justify-end">
        <Link className={buttonStyles()} href="/docs/getting-started/installation">
          <IconCubeFill /> Show More
        </Link>
      </div>
    </section>
  )
}

export function CardBlock({ className, children, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="relative h-full w-full rounded-xl shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] bg-tertiary dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
    >
      <div
        className={cn(
          'grid h-full w-full justify-items-center overflow-hidden place-items-center p-6 py-8 sm:p-8 lg:p-12',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

const items = [
  { id: '1', name: 'The Beatles' },
  { id: '2', name: 'Led Zeppelin' },
  { id: '3', name: 'Pink Floyd' },
  { id: '4', name: 'Queen' },
  { id: '5', name: 'The Rolling Stones' },
  { id: '6', name: 'The Who' },
  { id: '7', name: 'Nirvana' },
  { id: '8', name: 'The Doors' },
  { id: '9', name: 'Radiohead' },
  { id: '10', name: 'AC/DC' }
]
