import { Grid } from '@/components/ui'

export default function GridBasicDemo() {
    return (
        <div>
            <Grid columns={6}>
                <Grid.Item>
                    <div className='p-4 border-l border-y h-32' />
                </Grid.Item>
                <Grid.Item>
                    <div className='p-4 border-l border-y h-32' />
                </Grid.Item>
                <Grid.Item>
                    <div className='p-4 border-l border-y h-32' />
                </Grid.Item>
                <Grid.Item>
                    <div className='p-4 border-l border-y h-32' />
                </Grid.Item>
                <Grid.Item>
                    <div className='p-4 border-l border-y h-32' />
                </Grid.Item>
                <Grid.Item>
                    <div className='p-4 border-l border-y h-32 border-r' />
                </Grid.Item>
            </Grid>
        </div>
    )
}
