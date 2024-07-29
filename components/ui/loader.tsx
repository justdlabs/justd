import type { SVGProps } from 'react'
import React from 'react'

import { IconLoader, IconLoader2 } from '@irsyadadl/paranoid'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const loaderStyles = tv({
  base: 'relative',
  variants: {
    intent: {
      current: 'text-current',
      primary: 'text-primary',
      secondary: 'text-muted-fg',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger'
    },
    size: {
      small: 'size-4',
      medium: 'size-6',
      large: 'size-8',
      'extra-large': 'size-10'
    }
  },
  defaultVariants: {
    intent: 'current',
    size: 'small'
  }
})

type LoaderVariantProps = VariantProps<typeof loaderStyles>

const Bars = (props: SVGProps<SVGSVGElement>) => (
  <svg data-slot="icon" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <rect y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.5s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="30" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.25s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="60" width="15" height="140" rx="6">
      <animate
        attributeName="height"
        begin="0s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="90" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.25s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="120" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin="0.5s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
)
const Dots = (props: SVGProps<SVGSVGElement>) => (
  <svg data-slot="icon" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <circle cx="15" cy="15" r="15">
      <animate
        attributeName="r"
        from="15"
        to="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
      <animate
        attributeName="r"
        from="9"
        to="9"
        begin="0s"
        dur="0.8s"
        values="9;15;9"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="0.5"
        to="0.5"
        begin="0s"
        dur="0.8s"
        values=".5;1;.5"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="105" cy="15" r="15">
      <animate
        attributeName="r"
        from="15"
        to="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
)
const Ring = (props: SVGProps<SVGSVGElement>) => <IconLoader {...props} />
const Spin = (props: SVGProps<SVGSVGElement>) => <IconLoader2 {...props} />

const LOADERS = {
  bars: Bars,
  dots: Dots,
  ring: Ring,
  spin: Spin
}
const DEFAULT_SPINNER = 'ring'

export interface LoaderProps
  extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'display' | 'opacity' | 'intent'>,
    LoaderVariantProps {
  variant?: keyof typeof LOADERS
}

const Loader = (props: LoaderProps, ref: React.ForwardedRef<SVGSVGElement>) => {
  const { className, variant = DEFAULT_SPINNER, intent, size, ...spinnerProps } = props
  const LoaderPrimitive = LOADERS[variant in LOADERS ? variant : DEFAULT_SPINNER]

  return (
    <LoaderPrimitive
      role="presentation"
      className={loaderStyles({
        intent,
        size,
        className: ['spin', 'ring'].includes(variant) ? 'animate-spin' : className
      })}
      ref={ref}
      {...spinnerProps}
    />
  )
}

export { Loader }
