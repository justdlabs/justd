'use client'

import React from 'react'

import { Buttons } from '@/components/blocks/buttons'
import { CheckRadioBlock } from '@/components/blocks/check-radio-block'
import { GridListDragBlock } from '@/components/blocks/grid-list-drag-block'
import { LoginForm } from '@/components/blocks/login-form'
import { Menus } from '@/components/blocks/menus'
import { ModalOverlays, PopoverOverlays } from '@/components/blocks/overlays'
import { TableDemo } from '@/components/blocks/table-demo'
import { ToolbarBlock } from '@/components/blocks/toolbar-block'
import FileTriggerAvatarDemo from '@/components/docs/buttons/file-trigger-avatar-demo'
import TagGroupDemo from '@/components/docs/collections/tag-group-demo'
import ColorPickerCombinationDemo from '@/components/docs/colors/color-picker-combination-demo'
import SwitchDemo from '@/components/docs/controls/switch-demo'
import CalendarDemo from '@/components/docs/date-and-time/calendar-demo'
import TagFieldDemo from '@/components/docs/forms/tag-field-demo'
import AvatarDemo from '@/components/docs/media/avatar-demo'
import TooltipDelayDemo from '@/components/docs/overlays/tooltip-delay-demo'
import ComboBoxAvatarDemo from '@/components/docs/pickers/combo-box-avatar-demo'
import MultipleSelectDemo from '@/components/docs/pickers/multiple-select-demo'
import { IconCubeFill } from 'justd-icons'
import { buttonStyles, cn, DatePicker, DateRangePicker, Grid, Heading, Link, Note } from 'ui'

export function Blocks() {
  return (
    <section id="blocks" className="mb-12">
      <Heading level={2} className="mb-6">
        Blocks
      </Heading>
      <div className="space-y-2">
        <Grid columns={{ initial: 1, sm: 2, lg: 3 }} gap={2}>
          <Grid.Item>
            <CardBlock>
              <TagFieldDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item>
            <CardBlock>
              <ComboBoxAvatarDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item>
            <CardBlock>
              <MultipleSelectDemo />
            </CardBlock>
          </Grid.Item>
        </Grid>
        <Grid columns={{ initial: 1, sm: 2, lg: 5 }} gap={2}>
          <Grid.Item colSpan={{ initial: 1, lg: 3 }}>
            <CardBlock>
              <TableDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item colSpan={{ initial: 1, lg: 2 }}>
            <CardBlock>
              <LoginForm />
            </CardBlock>
          </Grid.Item>
        </Grid>
        <Grid columns={{ initial: 1, sm: 2, lg: 3 }} gap={2}>
          <Grid.Item className="flex flex-col gap-y-4 lg:gap-y-2">
            <ToolbarBlock />
            <CardBlock>
              <CalendarDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item>
            <div className="grid gap-2">
              <CardBlock className="grid gap-6">
                <DatePicker className="w-full" label="Event date" />
                <DateRangePicker className="w-full" label="Event date" />
              </CardBlock>
              <CardBlock className="p-4 py-2 sm:p-4 lg:px-5 lg:py-0">
                <div>
                  <Note>Check out the latest updates on our dashboard!</Note>
                  <Note intent="danger">
                    Complete your profile to get personalized recommendations.
                  </Note>
                  <Note intent="warning">
                    Heads up! We'll be doing system maintenance this Sunday at 2 AM.
                  </Note>
                </div>
              </CardBlock>
            </div>
          </Grid.Item>
          <Grid.Item>
            <CheckRadioBlock />
          </Grid.Item>

          <Grid.Item>
            <CardBlock>
              <ColorPickerCombinationDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item>
            <ModalOverlays />
          </Grid.Item>
          <Grid.Item>
            <PopoverOverlays />
          </Grid.Item>
          <Grid.Item>
            <CardBlock>
              <TooltipDelayDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item>
            <Buttons />
          </Grid.Item>
          <Grid.Item>
            <CardBlock>
              <AvatarDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item>
            <CardBlock>
              <SwitchDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item colSpan={{ initial: 1, lg: 2 }}>
            <GridListDragBlock />
          </Grid.Item>
          <Grid.Item>
            <Menus />
          </Grid.Item>
          <Grid.Item>
            <CardBlock>
              <TagGroupDemo />
            </CardBlock>
          </Grid.Item>
          <Grid.Item>
            <CardBlock>
              <FileTriggerAvatarDemo />
            </CardBlock>
          </Grid.Item>
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

export function CardBlock({
  className,
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
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
