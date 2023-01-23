import { shade } from 'polished'
import styled from 'styled-components'
import { pallete } from 'styles/pallete'

export const ToastStyles = styled.div`
  position: absolute;
  bottom: 5px;
  left: -320px;
  z-index: 2;
  opacity: 0;
  width: auto;
  height: auto;
  max-width: 300px;
  min-height: 50px;
  color: ${props => props.theme.colors.text};
  background-color: ${pallete.pastel.red};
  border-radius: 10px;
  overflow: hidden;
  transition: opacity 0.5s, left 0.5s;

  p {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px 0 0;
  }

  .toast-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 5px;
  }

  .toast-timing {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6px;
    background-color: ${shade(0.3, pallete.pastel.red)};
    animation-name: none;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @keyframes timing {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`
