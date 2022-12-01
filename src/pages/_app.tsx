import React from 'react'

import type { AppProps } from 'next/app'

import AppContext from '../context'
import GlobalStyle from '../styles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppContext>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppContext>
  )
}

export default App
