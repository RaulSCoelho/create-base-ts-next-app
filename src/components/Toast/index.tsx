import React from 'react'

import CloseIcon from 'components/Icons/CloseIcon'
import { pallete } from 'styles/pallete'

import { ToastStyles } from './styles'

export function closeToast() {
  const toast = document.getElementById('toast')
  const toastMessage = toast.getElementsByClassName('toast-message')[0] as HTMLElement
  const toastAnimation = toast.getElementsByClassName('toast-timing')[0] as HTMLElement

  toast.style.opacity = '0'
  toast.style.left = '-320px'
  toastMessage.innerHTML = ''
  toastAnimation.style.animationName = 'none'
}

const Toast: React.FC = () => {
  return (
    <ToastStyles id="toast">
      <div className="toast-content">
        <p className="toast-message"></p>
        <CloseIcon className="toast-close" onClick={closeToast} color={pallete.pastel.black} colorful />
        <div className="toast-timing"></div>
      </div>
    </ToastStyles>
  )
}

export default Toast
