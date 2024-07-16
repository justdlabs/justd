import { androidBrands } from '@/components/docs/collections/tag-group-demo'
import { Tag, TagGroup } from '@/components/ui'

export default function TagGroupDisabledDemo() {
    return (
        <div className='space-y-6'>
            <TagGroup
                disabledKeys={androidBrands
                    .filter((brand) => !brand.available)
                    .map((brand) => brand.id)}
                label='Disabled Key'
                selectionMode='multiple'
                items={androidBrands}
            >
                {(item) => <Tag>{item.name}</Tag>}
            </TagGroup>

            <TagGroup
                label='Disabled by Tag'
                selectionMode='multiple'
                items={androidBrands}
            >
                {(item) => <Tag isDisabled={!item.available}>{item.name}</Tag>}
            </TagGroup>
        </div>
    )
}
