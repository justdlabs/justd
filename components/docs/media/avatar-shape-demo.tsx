import { Avatar } from '@/components/ui'

export default function AvatarShapeDemo() {
    return (
        <div className='flex gap-2'>
            <Avatar
                shape='square'
                initials='DQ'
                alt='dqnahdliyan'
                src='https://github.com/dqnahdliyan.png'
            />
            <Avatar
                shape='circle'
                initials='DQ'
                alt='dqnahdliyan'
                src='https://github.com/dqnahdliyan.png'
            />
        </div>
    )
}
