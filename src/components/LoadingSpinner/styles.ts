import { transparentize } from 'polished'
import styled from 'styled-components'

export const LoadingStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${props => transparentize(0.5, props.theme.colors.background)};

  .spinner {
    animation: 1s linear infinite spinner;
    width: 100px;
    height: 100px;
    border: 10px dotted ${props => transparentize(0.5, props.theme.colors.text)};
    border-bottom-color: transparent;
    border-radius: 50%;

    @keyframes spinner {
      0% {
        transform: translate3d(0, -50%, 0) rotate(0deg);
      }
      100% {
        transform: translate3d(0, -50%, 0) rotate(360deg);
      }
    }
  }
`
