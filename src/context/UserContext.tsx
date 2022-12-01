import { createContext, useEffect, useState } from 'react'

import { faker } from '@faker-js/faker'

type User = {
  id: string
  name: string
  username: string
  email: string
  birthday: Date
  avatar_url: string
}

type UserContextType = {
  isAuthenticated: boolean
  user: User
}

export const UserContext = createContext({} as UserContextType)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    setUser(getFakeUser())
  }, [])

  function getFakeUser(): User {
    faker.seed(12895671)
    const user: User = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      birthday: faker.date.birthdate(),
      avatar_url: faker.image.avatar()
    }

    return user
  }

  return (
    <UserContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </UserContext.Provider>
  )
}
