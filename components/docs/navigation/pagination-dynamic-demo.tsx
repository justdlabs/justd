'use client'

import { Pagination } from '@/components/ui'
import { Collection } from 'react-aria-components'

const pages = Array.from({ length: 6 }, (_, i) => ({ value: i + 1 }))
export default function PaginationDynamicDemo() {
    return (
        <Pagination>
            <Pagination.Content>
                <Pagination.Item>
                    <Pagination.First href='#' />
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.Previous href='#' />
                </Pagination.Item>
                <Pagination.Item className='lg:hidden'>
                    <Pagination.Content className='rounded-lg border'>
                        <Pagination.Label className='font-semibold'>1</Pagination.Label>
                        <Pagination.Separator />
                        <Pagination.Label className='text-muted-foreground'>
                            6
                        </Pagination.Label>
                    </Pagination.Content>
                </Pagination.Item>
                <Pagination.Item className='hidden lg:inline'>
                    <Pagination.Content>
                        <Collection items={pages}>
                            {(item) => (
                                <Pagination.Item id={item.value.toString()}>
                                    <Pagination.Link isActive={item.value === 4} href='#'>
                                        {item.value}
                                    </Pagination.Link>
                                </Pagination.Item>
                            )}
                        </Collection>
                    </Pagination.Content>
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.Next href='#' />
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.Last href='#' />
                </Pagination.Item>
            </Pagination.Content>
        </Pagination>
    )
}
