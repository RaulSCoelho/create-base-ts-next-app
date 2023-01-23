import { Property } from 'csstype'
import { shade } from 'polished'
import styled from 'styled-components'

export interface StyleProps {
  width?: Property.Width
  height?: Property.Height
  border?: Property.Border
  borderRadius?: Property.BorderRadius
  bold?: boolean
}

const Button = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  width: ${props => props.width || '50%'};
  height: ${props => props.height || '32px'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '20px'};
  font-size: 16px;
  font-family: Roboto;
  font-weight: ${props => props.bold && 'bold'};

  &:hover {
    background-color: ${props => shade(0.2, props.theme.colors.primary)};
  }
  &:active {
    background-color: ${props => shade(0.3, props.theme.colors.primary)};
  }
`

export default Button
