"use client"

import React from "react"

import sidebar from "@/resources/lib/sidebar.json"
import { usePathname } from "next/navigation"
import type { LinkProps } from "react-aria-components"
import { Link } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { Heading } from "ui"

interface SidebarItem {
  title: string
  slug?: string
  children?: SidebarItem[]
}

export function Aside() {
  return (
    <div className="flex flex-col gap-y-6 px-4">
      {sidebar.map((item: SidebarItem) => (
        <div key={item.slug || item.title}>
          {item.children && item.children.length > 0 && item.title !== "Components" && (
            <Heading className="text-base mb-2 font-medium lg:text-sm flex items-center gap-x-2" level={3}>
              {item.title}
            </Heading>
          )}

          {item.children && item.children.length > 0 && (
            <div>
              {item.children.map((child: SidebarItem) => (
                <div key={child.slug || child.title}>
                  {child.children && child.children.length > 0 ? (
                    <Heading className="text-base mb-2 font-medium lg:text-sm" level={4}>
                      {child.title}
                    </Heading>
                  ) : (
                    <AsideLink href={`/${child.slug}` || "#"}>{child.title}</AsideLink>
                  )}

                  {child.children && child.children.length > 0 && (
                    <div className="mb-6 space-y-2">
                      {child.children.map((subChild: SidebarItem) => (
                        <AsideLink key={subChild.slug || subChild.title} href={`/${subChild.slug}` || "#"}>
                          {subChild.title}
                        </AsideLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

interface AsideLinkProps extends LinkProps {
  isActive?: boolean
}

function AsideLink({ href, ...props }: AsideLinkProps) {
  const path = usePathname()
  const isActive = path === href
  return (
    <Link
      {...props}
      href={href}
      className={twMerge(
        "text-muted-fg py-1.5 px-3 mb-0.5 -ml-3 rounded-lg text-base lg:text-sm block",
        "data-focused:outline-hidden",
        "data-hovered:bg-muted data-hovered:text-secondary-fg",
        isActive && [
          "font-medium",
          "bg-blue-100 data-hovered:bg-blue-100 data-hovered:text-blue-600 text-blue-600",
          "dark:bg-blue-400/10 dark:data-hovered:bg-blue-400/10 dark:data-hovered:text-blue-400 dark:text-blue-400"
        ]
      )}
    />
  )
}
