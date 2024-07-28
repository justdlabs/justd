'use client'

import GridListDragDemo from '@/components/docs/collections/grid-list-drag-demo'
import TableBulkDemo from '@/components/docs/collections/table-bulk-demo'
import TableDemo from '@/components/docs/collections/table-demo'
import TableDragDemo from '@/components/docs/collections/table-drag-demo'
import TableSortingDemo from '@/components/docs/collections/table-sorting-demo'
import { Container, Grid } from 'ui'

export default function Page() {
  return (
    <Container className="py-24 mx-auto">
      <Grid columns={1} gap={10}>
        <TableSortingDemo />
      </Grid>
    </Container>
  )
}
