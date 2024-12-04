import { Avatar } from "ui"

export default function AvatarGroupDemo() {
  return (
    <div className="flex items-center justify-center -space-x-2">
      {users.map((user) => (
        <Avatar key={user.id} src={user.image_url} className="size-8 ring-2 ring-white dark:ring-zinc-900" />
      ))}
    </div>
  )
}

export const users = [
  { id: 1, name: "Barbara Kirlin Sr.", image_url: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Rosemarie Koch", image_url: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Mrs. Reva Heaney Jr.", image_url: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ms. Ettie Abshire DVM", image_url: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Bria Ziemann", image_url: "https://i.pravatar.cc/150?img=5" }
]
