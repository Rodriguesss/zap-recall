import Header from '../CardScreen/Header'
import Card from '../CardScreen/Card'
import { useState } from 'react'

export default function CardScreen() {
  const [data, setData] = useState([
    {
      question: 'O que é JSX?',
      answer: `Uma extensão de linguagem do JavaScriptsdkfslçdfsl
      ssssssssssssssssssssssssssssssssssssssssssssssssssss d`
    },
    {
      question: 'O React é __',
      answer: `uma biblioteca JavaScript para construção de interfaces`
    }
  ])

  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  function changeFlag() {
    setFlag(!flag)
  }

  function handleTriggerChange(trigger) {
    trigger === 'flag' && changeFlag()
    trigger === 'count' && changeCount()
  }

  function changeCount() {
    changeFlag()
    setCount(count + 1)
  }

  return (
    <div className="game">
      <Header pathImage="./assets/img/logo-mini.png" />
      <Card
        flag={flag}
        setTrigger={handleTriggerChange}
        question={data[count].question}
        answer={data[count].answer}
        current={count + 1}
        total={data.length} />
    </div>
  )
}