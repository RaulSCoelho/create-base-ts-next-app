import React, { useContext } from 'react'

import { Flex, Switch } from 'components'
import { UserContext } from 'context'
import { useSettings } from 'hooks'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'styled-components'

const Home: NextPage = () => {
  const { title } = useTheme()
  const { onToggleTheme } = useSettings()
  const { user } = useContext(UserContext)

  return (
    <Flex>
      <Head>
        <title>Homepage</title>
      </Head>

      <Switch
        switchWhen={title !== 'Light Mode'}
        onClick={onToggleTheme}
        width={40}
        height={20}
        handleDiameter={16}
        offColor="#4566"
      />
      <h1>{`Hello, ${user?.name}!`}</h1>
      <img src={user?.avatar_url} alt="" />
    </Flex>
  )
}

export default Home
