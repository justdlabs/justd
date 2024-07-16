import { ColorArea, ColorThumb } from '@/components/ui'

export default function ColorAreaChannelDemo() {
    return (
        <ColorArea xChannel='alpha' yChannel='blue'>
            <ColorThumb />
        </ColorArea>
    )
}
