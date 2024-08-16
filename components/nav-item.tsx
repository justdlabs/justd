"use client"

import React from "react"

import { motion } from "framer-motion"
import { Link as NextLink } from "next-view-transitions"
import { tv } from "tailwind-variants"
import { LinkPrimitive } from "ui"

const navLinkStyles = tv({
  base: "relative flex focus-visible:text-fg items-center gap-x-3 tracking-tight py-2 text-sm text-muted-fg transition-colors focus:outline-none sm:py-3",
  variants: {
    isActive: {
      true: "text-fg",
      false: "text-muted-fg hover:text-fg"
    }
  }
})

interface NavLinkProps {
  href: string
  isActive?: boolean
  isNextLink?: boolean
  children?: React.ReactNode
  target?: string
}

const NavLink = ({ href, isActive, isNextLink, ...props }: NavLinkProps) => {
  const El = isNextLink ? NextLink : LinkPrimitive
  return (
    <El href={href} className={navLinkStyles({ isActive })} {...props}>
      <>
        {props.children}
        {isActive && (
          <motion.span
            layoutId="current-indicator-navlink"
            className="absolute inset-x-0 bottom-[-0.550rem] h-0.5 w-full rounded bg-fg"
          />
        )}
      </>
    </El>
  )
}

export { NavLink }
