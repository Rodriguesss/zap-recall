import Header from '../CardScreen/Header'
import Card from '../CardScreen/Card'
import { useState } from 'react'

export default function CardScreen({ data, setPage, setIndice }) {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)
  const [turnFlag, setTurnFlag] = useState(false)
  const [css, setCss] = useState(false)

  function handleTriggerChange(trigger, color) {
    setCss(false)
    trigger === 'flag' && changeFlag()
    trigger === 'count' && changeCount()
    trigger === 'zap' && changeColorCard(color)
  }

  function checkDataLength() {
    (count + 1) === data.length ? setPage('finishedGameScreen') : setCount(count + 1)
  }

  function changeCount() {
    setFlag(false)
    setTurnFlag(false)
    checkDataLength()
  }

  function changeColorCard(color) {
    changeTurnFlag()
    setCss(color)
  }

  function changeFlag() {
    setFlag(!flag)
    changeTurnFlag()
  }

  function changeTurnFlag() {
    setTurnFlag(!turnFlag)
  }

  return (
    <div className="game">
      <Header />
      <Card
        flag={flag}
        turnFlag={turnFlag}
        setTrigger={handleTriggerChange}
        question={data[count].question}
        answer={data[count].answer}
        current={count + 1}
        total={data.length}
        css={css}
        setIndice={setIndice} />
    </div>
  )
}