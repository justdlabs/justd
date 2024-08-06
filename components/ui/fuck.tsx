import React from 'react'

import { useButton, useMenuTrigger } from 'react-aria'
import { useMenuTriggerState } from 'react-stately'

export function MenuButton(props: any) {
  const state = useMenuTriggerState(props)
  const ref = React.useRef()
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref as any)
  const { buttonProps } = useButton(menuTriggerProps, ref as any)

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button {...buttonProps} ref={ref as any} style={{ height: 30, fontSize: 14 }}>
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </button>
    </div>
  )
}
