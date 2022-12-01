import React, { memo } from 'react'

import { SwitchStyle } from './styles'

interface Props {
  width: number
  height: number
  handleDiameter: number
  onColor?: string
  offColor?: string
  switchWhen: boolean
  onClick: () => void
}

export const Switch: React.FC<Props> = memo(props => {
  let backgroundColor = null
  if (props.onColor || props.offColor)
    backgroundColor = props.switchWhen ? props.onColor : props.offColor

  function activate() {
    const switchCircle = document.getElementById('switchCircle')
    if (props.switchWhen) switchCircle.className = ''
    else switchCircle.className = 'active'
    props.onClick()
  }

  return (
    <SwitchStyle
      width={props.width}
      height={props.height}
      handleDiameter={props.handleDiameter}
      backgroundColor={backgroundColor}
    >
      <div id="switch" onClick={activate}>
        <div
          id="switchCircle"
          className={props.switchWhen ? 'active' : ''}
        ></div>
      </div>
    </SwitchStyle>
  )
})
