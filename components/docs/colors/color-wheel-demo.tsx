import { ColorThumb, ColorWheel, ColorWheelTrack } from '@/components/ui'

export default function ColorWheelDemo() {
    return (
        <ColorWheel outerRadius={105} innerRadius={78}>
            <ColorWheelTrack />
            <ColorThumb />
        </ColorWheel>
    )
}
