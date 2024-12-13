import { Avatar } from "ui"

export default function AvatarShapeDemo() {
  return (
    <div className="flex gap-4 items-end">
      <Avatar src="/images/avatar/slash.jpg" shape="circle" />
      <Avatar src="/images/avatar/cobain.jpg" shape="square" />
    </div>
  )
}
