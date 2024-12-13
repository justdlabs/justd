import { Avatar } from "ui"

export default function AvatarGroupDemo() {
  return (
    <div className="flex justify-center items-center -space-x-2">
      {users.map((user) => (
        <Avatar key={user.id} src={user.image_url} className="ring-2 ring-white size-8 dark:ring-zinc-900" />
      ))}
    </div>
  )
}

export const users = [
  { id: 1, name: "Robert Plant", image_url: "/images/avatar/robert.jpg" },
  { id: 2, name: "Jimmy Page", image_url: "/images/avatar/page.jpg" },
  { id: 5, name: "Irsyad", image_url: "/images/avatar/irsyad.jpg" },
  { id: 3, name: "Slash", image_url: "/images/avatar/slash.jpg" },
  { id: 4, name: "Kurt Cobain", image_url: "/images/avatar/cobain.jpg" },
]
