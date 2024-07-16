import { Grid } from '@/components/ui'

export default function GridDebugDemo() {
    return (
        <Grid debug columns={3} gap={4}>
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
            <Grid.Item className='w-full h-24' />
        </Grid>
    )
}
