import { useState } from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import CardScreen from './CardScreen/CardScreen'

export default function App() {
  const [page, setPage] = useState(
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
      {page[screen]}
    </>
  )
}

