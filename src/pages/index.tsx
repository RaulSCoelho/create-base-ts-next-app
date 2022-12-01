import React, { useContext } from 'react'

import Head from 'next/head'

import { Flex } from '../components/Flex'
import { UserContext } from '../context/UserContext'

const Home: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Flex>
        <h1>{`Hello, ${user?.name}!`}</h1>
        <img src={user?.avatar_url} alt="" />
      </Flex>
    </div>
  )
}

export default Home
