import { Avatar } from "ui"

export default function AvatarShapeDemo() {
  return (
    <div className="gap-4 flex items-end">
      <Avatar src="/images/avatar/slash.jpg" shape="circle" />
      <Avatar src="/images/avatar/cobain.jpg" shape="square" />
    </div>
  )
}
