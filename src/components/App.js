import { useState } from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import CardScreen from './CardScreen/CardScreen'

export default function App() {
  const [componentPage, setComponentPage] = useState(
    {
      homeScreen: <HomeScreen setPage={handleManagePages} />,
      cardScreen: <CardScreen />
    },
  )

  const [screen, setScreen] = useState('homeScreen')

  function handleManagePages(currentPage) {
    setScreen(currentPage)
  }

  return (
    <>
      {componentPage[screen]}
    </>
  )
}

