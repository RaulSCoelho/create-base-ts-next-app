import React from 'react'

import SettingsProvider from './SettingsContext'
import ThemesProvider from './ThemeContext'
import { UserProvider } from './UserContext'

const AppContext = ({ children, cookies }) => {
  return (
    <SettingsProvider cookies={cookies}>
      <ThemesProvider>
        <UserProvider>{children}</UserProvider>
      </ThemesProvider>
    </SettingsProvider>
  )
}

export default AppContext
