import { createContext, useCallback } from 'react'

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
  randomUser: User
}

export const UserContext = createContext({} as UserContextType)

export const UserProvider = ({ children }) => {
  const getFakeUser = useCallback((): User => {
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
  }, [])

  const getRandomFakeUser = useCallback((): User => {
    faker.seed(Math.random() * 10000)
    const user: User = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      birthday: faker.date.birthdate(),
      avatar_url: faker.image.avatar()
    }

    return user
  }, [])

  const user = getFakeUser()
  const randomUser = getRandomFakeUser()
  const isAuthenticated = !!user

  return (
    <UserContext.Provider value={{ isAuthenticated, user, randomUser }}>
      {children}
    </UserContext.Provider>
  )
}
