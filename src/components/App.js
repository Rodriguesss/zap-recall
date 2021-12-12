import { useState } from 'react'

import Home from './Screen/Home/Index'
import Card from './Screen/Card/Index'
import FinishedGame from './Screen/FinishedGame/Index'

import { decks, finishedData } from '../database/seed'

export default function App() {
  const [deck, setDeck] = useState(0)
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  const [finishedDataIndex, setFinishedDataIndex] = useState(0)

  function handleManagePages(currentPage) {
    setScreen(currentPage)
  }

  let home = <Home setPage={handleManagePages} value={value} setValue={setValue}
    setDeck={setDeck} />

  let card = <Card deck={decks[deck]} setPage={handleManagePages}
    setFinishedDataIndex={setFinishedDataIndex} value={value} c={count}
    setC={setCount} />

  let finishedGame = <FinishedGame data={finishedData[finishedDataIndex]}
    setPage={handleManagePages} setFinishedDataIndex={setFinishedDataIndex}
    setCount={setCount} setValue={setValue} />

  const componentPage = { home, card, finishedGame }
  const [screen, setScreen] = useState('home')

  return (
    <>
      {componentPage[screen]}
    </>
  )
}
