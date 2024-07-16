import { Grid } from '@/components/ui'

export default function GridGapDemo() {
    return (
        <Grid
            columns={{
                initial: 4,
                sm: 5,
                md: 6
            }}
            gap={{
                initial: 2,
                sm: 4
            }}
        >
            <Grid.Item>
                <div className='p-4 border h-24' />
            </Grid.Item>
            <Grid.Item>
                <div className='p-4 border h-24' />
            </Grid.Item>
            <Grid.Item>
                <div className='p-4 border h-24' />
            </Grid.Item>
            <Grid.Item>
                <div className='p-4 border h-24' />
            </Grid.Item>
            <Grid.Item>
                <div className='p-4 border h-24' />
            </Grid.Item>
            <Grid.Item>
                <div className='p-4 border h-24' />
            </Grid.Item>
        </Grid>
    )
}
