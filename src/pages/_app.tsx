import React from 'react'

import { SettingsProvider, ThemesProvider, UserProvider } from 'context'
import { parseCookies } from 'nookies'
import GlobalStyle from 'styles'

export default function App({ Component, pageProps, cookies }) {
  return (
    <SettingsProvider cookies={cookies}>
      <ThemesProvider>
        <UserProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </UserProvider>
      </ThemesProvider>
    </SettingsProvider>
  )
}

App.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx)

  return { cookies }
}
