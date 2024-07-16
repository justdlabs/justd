import { Avatar, AvatarGroup } from '@/components/ui'

export default function AvatarGroupDemo() {
    return (
        <AvatarGroup>
            <Avatar initials='AA' src='https://i.pravatar.cc/150?img=61' />
            <Avatar initials='BB' src='https://i.pravatar.cc/150?img=62' />
            <Avatar initials='CC' src='https://i.pravatar.cc/150?img=63' />
            <Avatar initials='DD' src='https://i.pravatar.cc/150?img=64' />
            <Avatar initials='EE' src='https://i.pravatar.cc/150?img=65' />
        </AvatarGroup>
    )
}
