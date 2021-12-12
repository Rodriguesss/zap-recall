import { useState } from 'react'

import Home from './Screen/Home/Index'
import Card from './Screen/Card/Index'
import FinishedGame from './Screen/FinishedGame/Index'

import { data, finishedData } from '../database/seed'

export default function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  const [dataIndex, setDataIndex] = useState(0)

  function handleManagePages(currentPage) {
    setScreen(currentPage)
  }

  const componentPage =
  {
    home: <Home setPage={handleManagePages} value={value} setValue={setValue} />,
    card: <Card data={data} setPage={handleManagePages}
      setDataIndex={setDataIndex} value={value} c={count} setC={setCount} />,
    finishedGame: <FinishedGame data={finishedData[dataIndex]}
      setPage={handleManagePages} setDataIndex={setDataIndex}
      setCount={setCount} />,
  }

  const [screen, setScreen] = useState('home')

  return (
    <>
      {componentPage[screen]}
    </>
  )
}
