import ButtonBasicDemo from '@/components/docs/buttons/button-basic-demo'
import FileTriggerDemo from '@/components/docs/buttons/file-trigger-demo'
import ToggleButtonDemo from '@/components/docs/buttons/toggle-button-demo'
import GridListDemo from '@/components/docs/collections/grid-list-demo'
import ListBoxDemo from '@/components/docs/collections/list-box-demo'
import MenuBasicDemo from '@/components/docs/collections/menu-basic-demo'
import TableDemo from '@/components/docs/collections/table-demo'
import TagGroupDemo from '@/components/docs/collections/tag-group-demo'
import CalendarDemo from '@/components/docs/date-and-time/calendar-demo'
import DateFieldDemo from '@/components/docs/date-and-time/date-field-demo'
import DatePickerDemo from '@/components/docs/date-and-time/date-picker-demo'
import DateRangePickerDemo from '@/components/docs/date-and-time/date-range-picker-demo'
import TimeFieldDemo from '@/components/docs/date-and-time/time-field-demo'
import DropZoneDemo from '@/components/docs/drag-and-drop/drop-zone-demo'
import CheckboxDemo from '@/components/docs/forms/checkbox-demo'
import NumberFieldDemo from '@/components/docs/forms/number-field-demo'
import RadioGroupDemo from '@/components/docs/forms/radio-group-demo'
import SearchFieldDemo from '@/components/docs/forms/search-field-demo'
import SliderDemo from '@/components/docs/forms/slider-demo'
import SwitchDemo from '@/components/docs/forms/switch-demo'
import TextFieldDemo from '@/components/docs/forms/text-field-demo'
import BreadcrumbsDemo from '@/components/docs/navigation/breadcrumbs-demo'
import LinkDemo from '@/components/docs/navigation/link-demo'
import PaginationDemo from '@/components/docs/navigation/pagination-demo'
import ModalDemo from '@/components/docs/overlays/modal-demo'
import PopoverDemo from '@/components/docs/overlays/popover-demo'
import TooltipDemo from '@/components/docs/overlays/tooltip-demo'
import ComboBoxAvatarDemo from '@/components/docs/pickers/combo-box-avatar-demo'
import SelectDemo from '@/components/docs/pickers/select-demo'
import BadgeDemo from '@/components/docs/statuses/badge-demo'
import MeterDemo from '@/components/docs/statuses/meter-demo'
import NoteDemo from '@/components/docs/statuses/note-demo'
import ProgressBarDemo from '@/components/docs/statuses/progress-bar-demo'
import { Hero } from '@/components/hero'
import { SinkCard } from '@/components/sink-card'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import { Container, Heading } from 'ui'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
}

export default function Page() {
  return (
    <>
      <Hero />
      <Container>
        <div className="py-16 space-y-16">
          <div>
            <Heading className="border-b pb-2.5">Buttons</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
              <SinkCard isCentered title="Button">
                <ButtonBasicDemo />
              </SinkCard>
              <SinkCard isCentered title="File Trigger">
                <FileTriggerDemo />
              </SinkCard>
              <SinkCard isCentered title="Toggle Button">
                <ToggleButtonDemo />
              </SinkCard>
            </div>
          </div>
          <div>
            <Heading className="border-b pb-2.5">Pickers</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
              <SinkCard title="Select">
                <SelectDemo />
              </SinkCard>
              <SinkCard title="Combo Box">
                <ComboBoxAvatarDemo />
              </SinkCard>
            </div>
          </div>
          <div>
            <Heading className="border-b pb-3 mb-6">Collections</Heading>
            <div className="gap-8 lg:columns-3 [&_.sk]:mb-8">
              <SinkCard isCentered title="Menu">
                <MenuBasicDemo />
              </SinkCard>
              <SinkCard title="List Box">
                <ListBoxDemo />
              </SinkCard>
              <SinkCard title="Grid List">
                <GridListDemo />
              </SinkCard>
            </div>
            <div className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
              <div className="lg:col-span-2">
                <SinkCard title="Table">
                  <TableDemo />
                </SinkCard>
              </div>
              <SinkCard title="Tag Group">
                <TagGroupDemo />
              </SinkCard>
            </div>
          </div>
          <div>
            <Heading className="border-b pb-2.5">Navigation</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
              <SinkCard isCentered title="Link">
                <LinkDemo />
              </SinkCard>
              <SinkCard isCentered title="Pagination">
                <PaginationDemo />
              </SinkCard>
              <SinkCard title="Breadcrumbs">
                <BreadcrumbsDemo />
              </SinkCard>
            </div>
          </div>
          <div>
            <Heading className="border-b pb-3 mb-6">Date and time</Heading>
            <div className="gap-8 lg:columns-3 [&_.sk]:mb-8">
              <SinkCard title="Date Picker">
                <DatePickerDemo />
              </SinkCard>
              <SinkCard title="Date Range Picker">
                <DateRangePickerDemo />
              </SinkCard>
              <SinkCard title="Date Field">
                <DateFieldDemo />
              </SinkCard>
              <SinkCard title="Time Field">
                <TimeFieldDemo />
              </SinkCard>
              <SinkCard isCentered title="Calendar">
                <CalendarDemo />
              </SinkCard>
            </div>
          </div>
          <div>
            <Heading className="border-b pb-2.5">Overlays</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
              <SinkCard isCentered title="Modal">
                <ModalDemo />
              </SinkCard>
              <SinkCard isCentered title="Popover">
                <PopoverDemo />
              </SinkCard>
              <SinkCard isCentered title="Tooltip">
                <TooltipDemo />
              </SinkCard>
            </div>
          </div>

          <div>
            <Heading className="border-b pb-3 mb-6">Forms</Heading>
            <div className="gap-8 lg:columns-3 [&_.sk]:mb-8">
              <SinkCard title="Checkbox">
                <CheckboxDemo />
              </SinkCard>
              <SinkCard title="Radio Group">
                <RadioGroupDemo />
              </SinkCard>
              <SinkCard title="Text Field">
                <TextFieldDemo />
              </SinkCard>
              <SinkCard title="Number Field">
                <NumberFieldDemo />
              </SinkCard>
              <SinkCard title="Search Field">
                <SearchFieldDemo />
              </SinkCard>
              <SinkCard title="Switch">
                <SwitchDemo />
              </SinkCard>
              <SinkCard title="Slider">
                <SliderDemo />
              </SinkCard>
            </div>
          </div>

          <div>
            <Heading className="border-b pb-3 mb-6">Statuses</Heading>
            <div className="gap-8 lg:columns-3 [&_.sk]:mb-8">
              <SinkCard title="Meter">
                <MeterDemo />
              </SinkCard>
              <SinkCard title="Progress Bar">
                <ProgressBarDemo />
              </SinkCard>
              <SinkCard title="Badge">
                <BadgeDemo />
              </SinkCard>
              <SinkCard title="Note">
                <NoteDemo />
              </SinkCard>
            </div>
          </div>
          <div>
            <Heading className="border-b pb-3 mb-6">Drag</Heading>
            <div className="gap-8 lg:columns-3 [&_.sk]:mb-8">
              <SinkCard isCentered title="Meter">
                <DropZoneDemo />
              </SinkCard>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
