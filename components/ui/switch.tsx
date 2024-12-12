"use client"

import { Switch as SwitchPrimitive, type SwitchProps } from "react-aria-components"

import { composeTailwindRenderProps } from "./primitive"

const Switch = ({ children, className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "group inline-flex touch-none sm:text-sm items-center")}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {(values) => (
        <>
          <span className="mr-2 h-5 w-8 [--switch:color-mix(in_oklab,var(--color-muted)_90%,black_10%)] dark:[--switch:color-mix(in_oklab,var(--color-muted)_85%,white_15%)] bg-(--switch) cursor-pointer rounded-full border-2 border-transparent transition duration-200 group-data-focused:ring-4 group-data-selected:bg-primary group-data-focused:ring-primary/20 group-data-focused:ring-4 group-data-invalid:ring-danger/20 group-data-disabled:cursor-default group-data-disabled:opacity-50">
            <span className="forced-colors:data-disabled:outline-[GrayText] group-data-selected:ml-3 group-data-selected:group-data-[pressed]:ml-2 group-data-pressed:w-5 block size-4 origin-right rounded-full bg-primary-fg shadow-sm transition-all duration-200" />
          </span>
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </SwitchPrimitive>
  )
}

export { Switch }
