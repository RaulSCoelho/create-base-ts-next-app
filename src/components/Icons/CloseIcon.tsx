import React from 'react'
import { IoClose } from 'react-icons/io5'

import { ReactIconsProps, ReactIconsStyle } from '.'

interface Props extends ReactIconsProps {
  className?: string
  onClick?: (props: any) => void
}

const CloseIcon: React.FC<Props> = ({ size, color, colorful, className, onClick }) => {
  return (
    <ReactIconsStyle size={size} color={color} colorful={colorful}>
      <IoClose className={className ? `icon close-icon ${className}` : 'icon close-icon'} onClick={onClick} />
    </ReactIconsStyle>
  )
}

export default CloseIcon
