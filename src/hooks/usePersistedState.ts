import { useEffect, useState, Dispatch, SetStateAction } from 'react'

import { parseCookies, setCookie } from 'nookies'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const { key: storageValue } = parseCookies()

    if (storageValue) {
      if (typeof initialState === 'string') {
        return storageValue
      } else {
        return JSON.parse(storageValue)
      }
    } else {
      return initialState
    }
  })

  useEffect(() => {
    setCookie(undefined, key, JSON.stringify(state), {
      maxAge: 2147483647
    })
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
