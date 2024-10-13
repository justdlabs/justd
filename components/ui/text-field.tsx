"use client"

import * as React from "react"

import type { TextInputDOMProps } from "@react-types/shared"
import { IconEye, IconEyeClosed, IconLoader } from "justd-icons"
import {
  Button as ButtonPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps
} from "react-aria-components"

import type { FieldProps } from "./field"
import { Description, FieldError, FieldGroup, fieldGroupPrefixStyles, Input, Label } from "./field"
import { ctr } from "./primitive"

type InputType = Exclude<TextInputDOMProps["type"], "password">

interface BaseTextFieldProps extends TextFieldPrimitiveProps, FieldProps {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  isLoading?: boolean
  indicatorPlace?: "prefix" | "suffix"
  className?: string
}

interface RevealableTextFieldProps extends BaseTextFieldProps {
  isRevealable: true
  type: "password"
}

interface NonRevealableTextFieldProps extends BaseTextFieldProps {
  isRevealable?: never
  type?: InputType
}

type TextFieldProps = RevealableTextFieldProps | NonRevealableTextFieldProps

const TextField = ({
  placeholder,
  label,
  description,
  errorMessage,
  prefix,
  suffix,
  isLoading,
  indicatorPlace,
  className,
  isRevealable,
  type,
  ...props
}: TextFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)
  const inputType = isRevealable ? (isPasswordVisible ? "text" : "password") : type

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }
  return (
    <TextFieldPrimitive
      type={inputType}
      {...props}
      className={ctr(className, "group flex flex-col gap-1")}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup
        data-loading={isLoading ? "true" : undefined}
        className={fieldGroupPrefixStyles({ className })}
      >
        {isLoading && indicatorPlace === "prefix" ? (
          <IconLoader className="animate-spin isPfx" />
        ) : prefix ? (
          <span className="atrs isPfx x2e2">{prefix}</span>
        ) : null}
        <Input className="px-2.5" placeholder={placeholder} />
        {isRevealable ? (
          <ButtonPrimitive
            type="button"
            onPress={handleTogglePasswordVisibility}
            className="atrs relative isSfx x2e2 [&_[data-slot=icon]]:text-muted-fg focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          >
            <>
              {isPasswordVisible ? (
                <IconEyeClosed className="transition animate-in" />
              ) : (
                <IconEye className="transition animate-in" />
              )}
            </>
          </ButtonPrimitive>
        ) : isLoading && indicatorPlace === "suffix" ? (
          <IconLoader className="animate-spin isSfx" />
        ) : suffix ? (
          <span className="atrs isSfx x2e2">{suffix}</span>
        ) : null}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}

export { TextField, TextFieldPrimitive, type TextFieldProps }
