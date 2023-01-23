import React from 'react'
import { MdDelete } from 'react-icons/md'

import { ReactIconsProps, ReactIconsStyle } from '.'

interface Props extends ReactIconsProps {
  className?: string
  onClick?: (props: any) => void
}

const DeleteIcon: React.FC<Props> = ({ size, color, colorful, className, onClick }) => {
  return (
    <ReactIconsStyle size={size} color={color} colorful={colorful}>
      <MdDelete className={className ? `icon delete-icon ${className}` : 'icon delete-icon'} onClick={onClick} />
    </ReactIconsStyle>
  )
}

export default DeleteIcon
