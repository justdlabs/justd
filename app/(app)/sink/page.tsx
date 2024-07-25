'use client'

import React from 'react'

import PaginationDemo from '@/components/docs/navigation/pagination-demo'
import PaginationDynamicDemo from '@/components/docs/navigation/pagination-dynamic-demo'
import SimplePaginationDemo from '@/components/docs/navigation/simple-pagination-demo'

export default function Page() {
  return (
    <div className="p-16 space-y-10">
      <PaginationDemo />
      <SimplePaginationDemo />
      <PaginationDynamicDemo />
    </div>
  )
}
