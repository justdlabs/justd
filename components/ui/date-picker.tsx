'use client'

import { Popover } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import * as Primitive from 'react-aria-components'

import { Button } from './button'
import { Calendar } from './calendar'
import { DateInput } from './date-field'
import { Dialog } from './dialog'
import { Description, FieldError, FieldGroup, Label } from './field'

interface DatePickerProps<T extends Primitive.DateValue>
    extends Primitive.DatePickerProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

function DatePicker<T extends Primitive.DateValue>({
    label,
    description,
    errorMessage,
    ...props
}: DatePickerProps<T>) {
    return (
        <Primitive.DatePicker
            {...props}
            className={cn('group flex flex-col gap-1', props.className)}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup className='min-w-40'>
                <DateInput className='w-full min-w-[inherit] px-2 font-mono uppercase lg:text-sm' />
                <Button
                    size='icon'
                    variant='ghost'
                    className='group mr-1 h-7 w-8 rounded outline-offset-0 hover:bg-transparent pressed:bg-transparent'
                >
                    <CalendarIcon
                        aria-hidden
                        className='size-4 text-muted-foreground group-open:text-foreground'
                    />
                </Button>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover.Content className='rounded-xl border bg-background p-0'>
                <Dialog>
                    <Calendar />
                </Dialog>
            </Popover.Content>
        </Primitive.DatePicker>
    )
}

interface DateRangePickerProps<T extends Primitive.DateValue>
    extends Primitive.DateRangePickerProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Primitive.ValidationResult) => string)
}

function DateRangePicker<T extends Primitive.DateValue>({
    label,
    description,
    errorMessage,
    ...props
}: DateRangePickerProps<T>) {
    return (
        <Primitive.DateRangePicker
            {...props}
            className={cn('group flex flex-col gap-1', props.className)}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup className='w-auto min-w-[208px]'>
                <DateInput
                    slot='start'
                    className='min-w-[ineherit] px-2 font-mono uppercase lg:text-sm'
                />
                <span
                    aria-hidden='true'
                    className='text-foreground group-disabled:text-muted-foreground'
                >
                    –
                </span>
                <DateInput
                    slot='end'
                    className='flex-1 px-2 py-1.5 font-mono uppercase lg:text-sm'
                />
                <Button
                    size='icon'
                    variant='ghost'
                    className='group mr-1 h-7 w-8 rounded outline-offset-0 hover:bg-transparent pressed:bg-transparent'
                >
                    <CalendarIcon
                        aria-hidden
                        className='size-4 text-muted-foreground group-open:text-foreground'
                    />
                </Button>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover.Content className='rounded-xl border bg-background p-0'>
                <Dialog>
                    <Calendar.RangeCalendar />
                </Dialog>
            </Popover.Content>
        </Primitive.DateRangePicker>
    )
}

export { DatePicker, DateRangePicker }
