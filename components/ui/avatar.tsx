"use client"

import React from "react"

import { tv, type VariantProps } from "tailwind-variants"

import { VisuallyHidden } from "./visually-hidden"

const avatarGroupStyles = tv({
  base: "flex items-center justify-center -space-x-2 [&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-bg"
})

interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupStyles> {
  children: React.ReactNode
}

const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => {
  return <div className={avatarGroupStyles({ className })} {...props} />
}

const avatarStyles = tv({
  base: [
    "grid relative place-content-center shrink-0 bg-secondary align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1",
    "loo2ppvkxrcah38e outline outline-1 -outline-offset-1 outline-fg/[--ring-opacity]"
  ],
  variants: {
    size: {
      "extra-small": "size-5",
      small: "size-6",
      medium: "size-8",
      large: "size-10"
    },
    shape: {
      square:
        "rounded-[--avatar-radius] *:rounded-[--avatar-radius] [&_[data-slot=badge]]:rounded-full",
      circle: "rounded-full *:rounded-full"
    }
  },

  defaultVariants: {
    shape: "circle",
    size: "medium"
  }
})

type Status = "away" | "online" | "offline" | "dnd" | "idle"

interface AvatarProps
  extends React.ComponentPropsWithoutRef<"span">,
    VariantProps<typeof avatarStyles> {
  src?: string | null
  initials?: string
  alt?: string
  status?: Status
  className?: string
}

const Avatar = ({
  status,
  src = null,
  initials,
  alt = "",
  children,
  className,
  shape,
  size,
  ...props
}: AvatarProps) => {
  const badgeId = React.useId()
  const ariaLabelledby = [badgeId, children ? badgeId : ""].join(" ")
  return (
    <span
      aria-labelledby={ariaLabelledby}
      data-slot="avatar"
      {...props}
      className={avatarStyles({ shape, size, className })}
    >
      {initials && (
        <svg
          className="select-none fill-current text-[48px] font-medium uppercase"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : "true"}
        >
          {alt && <title>{alt}</title>}
          <text
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            dy=".125em"
          >
            {initials}
          </text>
        </svg>
      )}
      {src && <img src={src} alt={alt} />}
      {status && <AvatarBadge size={size} status={status} aria-label={status} />}
    </span>
  )
}

type AvatarBadgeProps = {
  className?: string
  status?: Status
  fillBackground?: boolean
  "aria-label": string
  size?: AvatarProps["size"]
}

const avatarBadgeStyles = tv({
  base: ["size-3 z-10 absolute bottom-0 right-0 rounded-full ring-[1.5px] ring-bg bg-bg"],
  variants: {
    size: {
      "extra-small": "size-[0.360rem] translate-x-[0%] translate-y-[0%]",
      small: "size-1.5 translate-x-[0%] translate-y-[0%]",
      medium: "size-2 translate-x-[5%] translate-y-[5%]",
      large: "size-2.5 translate-x-[5%] translate-y-[5%]"
    },
    status: {
      away: "bg-danger",
      online: "bg-success",
      offline: "bg-muted-fg",
      dnd: "bg-warning",
      idle: "bg-muted-fg"
    }
  },
  defaultVariants: {
    size: "medium",
    status: "idle"
  }
})

const AvatarBadge = ({ size, className, status, ...props }: AvatarBadgeProps) => {
  return (
    <span
      data-slot="badge"
      {...props}
      aria-hidden
      className={avatarBadgeStyles({ size, status, className })}
    >
      <VisuallyHidden>{status}</VisuallyHidden>
    </span>
  )
}

export { Avatar, AvatarGroup }
