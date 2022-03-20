import * as React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import { Divider } from '@chakra-ui/react'
import Main from './components/Main'

// 1. import `ChakraProvider` component

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <>
      <NavBar />
      <Hero />
      <Divider />
      <Main />
    </>
  )
}
