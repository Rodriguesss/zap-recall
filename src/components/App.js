import { useState } from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import CardScreen from './CardScreen/CardScreen'
import FinishedGameScreen from './FinishedGameScreen/FinishedGameScreen'
import { data, finishedData } from './Data/Data'

export default function App() {
  const [indice, setIndice] = useState(0)

  function handleManagePages(currentPage) {
    setScreen(currentPage)
  }

  const componentPage =
  {
    homeScreen: <HomeScreen setPage={handleManagePages} />,
    cardScreen: <CardScreen data={data} setPage={handleManagePages} setIndice={setIndice} />,
    finishedGameScreen: <FinishedGameScreen data={finishedData[indice]} />,
  }

  const [screen, setScreen] = useState('homeScreen')

  return (
    <>
      {componentPage[screen]}
    </>
  )
}

