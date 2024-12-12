"use client"

import { use } from "react"

import { OTPInput, OTPInputContext } from "input-otp"
import { IconBulletFill } from "justd-icons"

import { cn } from "./primitive"

const InputOTP = ({ className, containerClassName, ref, ...props }: React.ComponentProps<typeof OTPInput>) => (
  <OTPInput
    data-1p-ignore
    ref={ref}
    containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
)

const InputOTPGroup = ({ className, ref, ...props }: React.ComponentProps<"div">) => (
  <div ref={ref} className={cn("flex items-center gap-x-1.5", className)} {...props} />
)

interface InputOTPSlotProps extends React.ComponentProps<"div"> {
  index: number
}

const InputOTPSlot = ({ index, className, ref, ...props }: InputOTPSlotProps) => {
  const inputOTPContext = use(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex tabular-nums size-10 items-center justify-center rounded-md border border-input text-sm transition-all",
        isActive && "z-10 border-ring/70 ring-4 ring-ring/20",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-fg duration-1000" />
        </div>
      )}
    </div>
  )
}

const InputOTPSeparator = ({ ref, ...props }: React.ComponentProps<"div">) => (
  <div ref={ref} role="separator" {...props}>
    <IconBulletFill className="size-2" />
  </div>
)

InputOTP.Group = InputOTPGroup
InputOTP.Slot = InputOTPSlot
InputOTP.Separator = InputOTPSeparator

export { InputOTP }
