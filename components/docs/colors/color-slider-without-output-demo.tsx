import { ColorSlider } from '@/components/ui'

export default function ColorSliderWithoutOutputDemo() {
    return (
        <ColorSlider channel='hue' showOutput={false} defaultValue='hsl(0, 100%, 50%)' />
    )
}
