import React from 'react'
import { MdAddBox } from 'react-icons/md'

import { ReactIconsProps, ReactIconsStyle } from '.'

interface Props extends ReactIconsProps {
  className?: string
  onClick?: (props: any) => void
}

const AddIcon: React.FC<Props> = ({ size, color, colorful, className, onClick }) => {
  return (
    <ReactIconsStyle size={size} color={color} colorful={colorful}>
      <MdAddBox className={className ? `icon add-icon ${className}` : 'icon add-icon'} onClick={onClick} />
    </ReactIconsStyle>
  )
}

export default AddIcon
