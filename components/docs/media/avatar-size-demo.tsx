import { Avatar } from '@/components/ui'

export default function AvatarSizeDemo() {
    return (
        <div className='flex gap-4'>
            <Avatar size='sm' src='https://github.com/dqnahdliyan.png' />
            <Avatar size='md' src='https://github.com/dqnahdliyan.png' />
            <Avatar size='lg' src='https://github.com/dqnahdliyan.png' />
        </div>
    )
}
