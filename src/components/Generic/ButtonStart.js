import { useState } from 'react'
import next from '../../assets/img/next.png'

export default function ButtonStart({ text, setPage, value, reset,
  setDataIndex, setCount }) {

  const [showError, setShowError] = useState(false)
  let error

  function checkInputValue() {
    error = (value < 2)
    error ? setShowError(error) : setPage('card')
  }

  function restart() {
    error = false
    setDataIndex(0)
    setCount(0)
    setPage('home')
  }

  return (
    <>
      {showError && <p className="msgError">Deve ter no minímo 2 zaps</p>}
      <button className="buttonStart" onClick={reset ? restart : checkInputValue}
        data-identifier="start-zap-recall">
        {text}
        <img src={next} alt="Next" height="20" />
      </button>
    </>
  )
}