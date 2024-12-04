"use client"

import React from "react"

import { useTheme } from "@/components/theme-provider"
import { cn } from "@/utils/classes"
import { IconCheck, IconCircleInfo, IconTriangleInfo } from "justd-icons"
import { Toaster as ToasterPrimitive, type ToasterProps } from "sonner"

import { buttonStyles } from "./button"
import { Loader } from "./loader"

const Toast = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  return (
    <ToasterPrimitive
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        info: <IconCircleInfo className="text-warning-fg" />,
        error: <IconTriangleInfo />,
        warning: <IconTriangleInfo />,
        success: <IconCheck />,
        loading: <Loader variant="spin" />
      }}
      toastOptions={{
        unstyled: true,
        duration: Infinity,
        closeButton: true,
        classNames: {
          toast: cn(
            "text-[0.925rem] not-has-data-description:**:data-title:font-normal!",
            "has-data-description:**:data-title:font-medium [&:has([data-description])_[data-title]]:text-base!",
            "has-data-[slot=icon]:**:data-content:pl-0",
            "has-data-button:*:data-content:mb-10",
            "has-data-button:**:data-close-button:hidden!",
            "w-full",
            "flex bg-bg text-fg inset-ring-1 inset-ring-fg/10 p-4 rounded-xl"
          ),
          icon: "absolute top-[0.2rem] [--toast-icon-margin-end:7px] *:data-[slot=icon]:text-fg *:data-[slot=icon]:size-4.5 *:data-[slot=icon]:text-white",
          title: "",
          description: "",
          content: "pr-4 *:data-description:text-current/65! *:data-description:text-sm!",
          error: " bg-danger text-white",
          info: "bg-sky-600 text-white",
          warning: "bg-warning text-warning-fg ring-warning-fg/10 **:data-[slot=icon]:text-warning-fg",
          success: "rounded-md bg-primary ring-primary/50 text-primary-fg",
          cancelButton: buttonStyles({
            className: "self-start absolute bottom-4 left-4 justify-self-start",
            size: "extra-small",
            appearance: "outline"
          }),
          actionButton: buttonStyles({
            className: "absolute bottom-4 right-4 self-end justify-self-end",
            size: "extra-small"
          }),
          closeButton:
            "*:[svg]:size-12 size-6! [--gray2:theme(--color-white/30%)] rounded-md! [--gray1:transparent] [--gray4:transparent] [--gray5:transparent] [--gray12:current] [--toast-close-button-start:full] [--toast-close-button-end:-6px] [--toast-close-button-transform:translate(-75%,60%)] absolute"
        }
      }}
      {...props}
    />
  )
}

export { Toast }
