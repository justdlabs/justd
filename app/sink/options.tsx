'use client'

import InputOtpControlledDemo from '@/components/docs/forms/input-otp-controlled-demo'
import SearchFieldDemo from '@/components/docs/forms/search-field-demo'
import PaginationDemo from '@/components/docs/navigation/pagination-demo'
import ModalTriggeredByMenuDemo from '@/components/docs/overlays/modal-triggered-by-menu-demo'
import PopoverDemo from '@/components/docs/overlays/popover-demo'
import TooltipDemo from '@/components/docs/overlays/tooltip-demo'
import ComboBoxDemo from '@/components/docs/pickers/combo-box-demo'
import MeterDemo from '@/components/docs/statuses/meter-demo'
import ProgressDemo from '@/components/docs/statuses/progress-bar-demo'
import { Breadcrumb, Breadcrumbs, Card, Select } from '@/components/ui'

export default function OptionsSink() {
    return (
        <Card className='p-4'>
            <Breadcrumbs>
                <Breadcrumb href='/'>Home</Breadcrumb>
                <Breadcrumb href='/docs'>Docs</Breadcrumb>
                <Breadcrumb>Components</Breadcrumb>
            </Breadcrumbs>
            <div className='flex gap-1 items-center mt-6'>
                <Select
                    aria-labelledby='per-page'
                    id='per-page'
                    placeholder='10'
                    className='w-20'
                    defaultSelectedKey={'10'}
                >
                    <Select.Item id='10'>10</Select.Item>
                    <Select.Item id='20'>20</Select.Item>
                    <Select.Item id='30'>30</Select.Item>
                </Select>
                <div className='ml-auto w-32'>
                    <SearchFieldDemo />
                </div>
            </div>
            <div className='flex gap-1 items-end mt-4'>
                <ComboBoxDemo />
                <ModalTriggeredByMenuDemo />
            </div>
            <div className='mt-4 grid gap-2'>
                <ProgressDemo />
                <MeterDemo />
            </div>
            <div className='flex justify-center gap-5 mt-4'>
                <TooltipDemo />
                <PopoverDemo />
            </div>
            <div className='mt-4 flex justify-center'>
                <InputOtpControlledDemo />
            </div>
            <div className='mt-[13px]'>
                <PaginationDemo />
            </div>
        </Card>
    )
}
