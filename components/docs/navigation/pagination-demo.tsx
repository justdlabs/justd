'use client'

import { Pagination } from '@/components/ui'

export default function PaginationDemo() {
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
                    <Pagination.Link href='#'>1</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.Link href='#' isActive>
                        2
                    </Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.Ellipsis />
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
