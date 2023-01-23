import { shade } from 'polished'
import styled from 'styled-components'
import { pallete } from 'styles/pallete'

export interface ReactIconsProps {
  size?: string
  color?: string
  colorful?: boolean
}

export const ReactIconsStyle = styled.div<ReactIconsProps>`
  display: flex;

  .icon {
    color: ${props => props.colorful && props.color};
    font-size: ${props => props.size || '25px'};
    cursor: pointer;
  }

  .delete-icon {
    &:hover {
      color: ${props => shade(0.2, props.color || pallete.red)};
    }
    &:active {
      color: ${props => shade(0.3, props.color || pallete.red)};
    }
  }

  .add-icon {
    &:hover {
      color: ${props => shade(0.2, props.color || pallete.green)};
    }
    &:active {
      color: ${props => shade(0.3, props.color || pallete.green)};
    }
  }

  .close-icon {
    &:hover {
      color: ${props => shade(0.2, props.color || pallete.pastel.black)};
    }
  }
`
