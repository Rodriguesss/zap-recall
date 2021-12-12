import { useState } from 'react'

import Home from './Screen/Home/Index'
import Card from './Screen/Card/Index'
import FinishedGame from './Screen/FinishedGame/Index'

import { data, finishedData } from '../database/seed'

export default function App() {
  const [indice, setIndice] = useState(0)

  function handleManagePages(currentPage) {
    setScreen(currentPage)
  }

  const componentPage =
  {
    home: <Home setPage={handleManagePages} />,
    card: <Card data={data} setPage={handleManagePages} setIndice={setIndice} />,
    finishedGame: <FinishedGame data={finishedData[indice]} />,
  }

  const [screen, setScreen] = useState('home')

  return (
    <>
      {componentPage[screen]}
    </>
  )
}
