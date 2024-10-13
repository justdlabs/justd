'use client'

import TableDemo from '@/components/docs/collections/table/table-demo'
import TableResizeDemo from '@/components/docs/collections/table/table-resize-demo'

export default function Page() {
  return (
    <div className="p-32 grid gap-10">
      <TableResizeDemo />
      <TableDemo />
    </div>
  )
}
