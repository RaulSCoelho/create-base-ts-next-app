import React from 'react'

import { ThemesProvider } from './ThemeContext'
import { UserProvider } from './UserContext'

const AppContext = ({ children }) => {
  return (
    <ThemesProvider>
      <UserProvider>{children}</UserProvider>
    </ThemesProvider>
  )
}

export default AppContext
