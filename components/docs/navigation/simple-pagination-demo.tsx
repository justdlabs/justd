'use client'

import { Pagination } from '@/components/ui'

export default function SimplePaginationDemo() {
    return (
        <Pagination>
            <Pagination.Content>
                <Pagination.Item>
                    <Pagination.First href='#' />
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.Previous href='#' />
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.Content>
                        <Pagination.Item>
                            <Pagination.Label className='font-semibold'>
                                1
                            </Pagination.Label>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Separator />
                        </Pagination.Item>
                        <Pagination.Item>
                            <Pagination.Label className='text-muted-foreground'>
                                10
                            </Pagination.Label>
                        </Pagination.Item>
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
