import React from 'react'

import { parseCookies } from 'nookies'

import AppContext from '../context'
import GlobalStyle from '../styles'

export default function App({ Component, pageProps, cookies }) {
  return (
    <AppContext cookies={cookies}>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppContext>
  )
}

App.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx)

  return { cookies }
}
