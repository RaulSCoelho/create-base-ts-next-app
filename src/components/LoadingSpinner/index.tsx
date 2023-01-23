import React from 'react'

import { LoadingStyles } from './styles'

const LoadingSpinner: React.FC = () => {
  return (
    <LoadingStyles className="loading-spinner">
      <div className="spinner"></div>
    </LoadingStyles>
  )
}

export default LoadingSpinner
