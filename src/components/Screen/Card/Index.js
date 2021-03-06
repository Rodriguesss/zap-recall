import Header from '../../Generic/Header'
import Card from './Card'
import { useState } from 'react'
import Container from '../../Generic/Container'

export default function Index({ deck, setPage, setFinishedDataIndex, value,
  c, setC }) {

  const { data, name } = deck
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
    (count + 1) === data.length ? setPage('finishedGame') : setCount(count + 1)
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
      <Container>
        <p class="title">{name}</p>
        <Card
          flag={flag}
          turnFlag={turnFlag}
          setTrigger={handleTriggerChange}
          question={data[count].question}
          answer={data[count].answer}
          current={count + 1}
          total={data.length}
          css={css}
          setFinishedDataIndex={setFinishedDataIndex}
          value={value}
          count={c}
          setCount={setC} />
      </Container>
    </div>
  )
}